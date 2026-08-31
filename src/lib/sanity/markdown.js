/**
 * Minimal markdown <-> Portable Text round-trip used by the admin editor's
 * rich-text blocks. Supported: ## h2, ### h3, #### h4, > quote, - bullets,
 * 1. numbered lists, **bold**, *italic*, [text](url), blank-line paragraphs.
 *
 * Content is STORED as Portable Text in Sanity (semantic HTML on render, which
 * is what search and AI engines parse); markdown is only the editing surface.
 * This keeps the editor simple without giving up structured content.
 */

let keyCounter = 0;
function newKey() {
  keyCounter += 1;
  return `k${Date.now().toString(36)}${keyCounter.toString(36)}${Math.random()
    .toString(36)
    .slice(2, 6)}`;
}

/** Parse inline markdown (**bold**, *italic*, [text](url)) into PT spans. */
function parseInline(text) {
  const children = [];
  const markDefs = [];

  // Tokenize links first, then bold/italic inside each fragment.
  const linkRe = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  const segments = [];
  let m;
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > last) segments.push({ text: text.slice(last, m.index) });
    segments.push({ text: m[1], linkHref: m[2] });
    last = m.index + m[0].length;
  }
  if (last < text.length) segments.push({ text: text.slice(last) });

  for (const seg of segments) {
    let linkKey;
    if (seg.linkHref) {
      linkKey = newKey();
      markDefs.push({ _type: 'link', _key: linkKey, href: seg.linkHref });
    }
    // Order matters: *** must be matched before ** and *.
    const parts = seg.text
      .split(/(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g)
      .filter(Boolean);
    for (const part of parts) {
      const marks = linkKey ? [linkKey] : [];
      let content = part;
      if (part.startsWith('***') && part.endsWith('***') && part.length > 6) {
        marks.push('strong', 'em');
        content = part.slice(3, -3);
      } else if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
        marks.push('strong');
        content = part.slice(2, -2);
      } else if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
        marks.push('em');
        content = part.slice(1, -1);
      }
      children.push({ _type: 'span', _key: newKey(), text: content, marks });
    }
  }

  if (children.length === 0) {
    children.push({ _type: 'span', _key: newKey(), text: '', marks: [] });
  }
  return { children, markDefs };
}

/** Convert an admin markdown string into an array of Portable Text blocks. */
export function markdownToPortableText(md) {
  const blocks = [];
  const lines = String(md || '').replace(/\r\n/g, '\n').split('\n');
  let paragraph = [];

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    const text = paragraph.join(' ').trim();
    paragraph = [];
    if (!text) return;
    const { children, markDefs } = parseInline(text);
    blocks.push({ _type: 'block', _key: newKey(), style: 'normal', children, markDefs });
  };

  for (const raw of lines) {
    const trimmed = raw.trimEnd().trim();

    if (!trimmed) {
      flushParagraph();
      continue;
    }

    const heading = /^(#{2,4})\s+(.*)$/.exec(trimmed);
    const bullet = /^[-*]\s+(.*)$/.exec(trimmed);
    const numbered = /^\d+[.)]\s+(.*)$/.exec(trimmed);
    const quote = /^>\s?(.*)$/.exec(trimmed);

    if (heading) {
      flushParagraph();
      const { children, markDefs } = parseInline(heading[2]);
      blocks.push({
        _type: 'block',
        _key: newKey(),
        style: `h${heading[1].length}`,
        children,
        markDefs,
      });
    } else if (bullet) {
      flushParagraph();
      const { children, markDefs } = parseInline(bullet[1]);
      blocks.push({
        _type: 'block',
        _key: newKey(),
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        children,
        markDefs,
      });
    } else if (numbered) {
      flushParagraph();
      const { children, markDefs } = parseInline(numbered[1]);
      blocks.push({
        _type: 'block',
        _key: newKey(),
        style: 'normal',
        listItem: 'number',
        level: 1,
        children,
        markDefs,
      });
    } else if (quote) {
      flushParagraph();
      const { children, markDefs } = parseInline(quote[1]);
      blocks.push({ _type: 'block', _key: newKey(), style: 'blockquote', children, markDefs });
    } else {
      paragraph.push(trimmed);
    }
  }

  flushParagraph();
  return blocks;
}

/** Reverse: Portable Text blocks back to the markdown editing surface. */
export function portableTextToMarkdown(blocks) {
  const out = [];
  let prevWasList = false;

  for (const block of blocks || []) {
    if (block?._type !== 'block') continue;

    const text = (block.children ?? [])
      // An empty span still carrying a strong/em mark is a Studio artifact; it
      // would serialise to a bare ** or * and reappear as literal text.
      .filter((span) => String(span.text ?? '') !== '')
      .map((span) => {
        let t = span.text ?? '';
        const linkDef = (block.markDefs ?? []).find((d) => span.marks?.includes(d._key));

        // Emphasis delimiters must hug the text: "*foo *" is not valid markdown
        // and would round-trip back as literal asterisks. Push any leading or
        // trailing whitespace outside the markers.
        const [, lead, core, trail] = /^(\s*)([\s\S]*?)(\s*)$/.exec(t);
        if (core) {
          const strong = span.marks?.includes('strong');
          const em = span.marks?.includes('em');
          let wrapped = core;
          // Combined emphasis is *** in markdown; nesting ** inside * does not
          // re-parse and would leak literal asterisks.
          if (strong && em) wrapped = `***${wrapped}***`;
          else if (strong) wrapped = `**${wrapped}**`;
          else if (em) wrapped = `*${wrapped}*`;
          if (linkDef) wrapped = `[${wrapped}](${linkDef.href})`;
          t = `${lead}${wrapped}${trail}`;
        }
        return t;
      })
      .join('');

    // An empty heading or quote block serialises to a bare "## " that
    // re-parses as literal text. Empty paragraphs are just blank lines, which
    // the blank-line handling already covers, so skip all of them.
    if (!text.trim()) continue;

    // Keep a run of same-type list items tight, but separate a bullet run from
    // an adjacent numbered run - otherwise re-parsing merges them into one list.
    const isList = Boolean(block.listItem);
    const sameListRun = isList && prevWasList === block.listItem;
    if (out.length > 0 && !sameListRun) out.push('');
    prevWasList = isList ? block.listItem : false;

    if (block.listItem === 'bullet') out.push(`- ${text}`);
    else if (block.listItem === 'number') out.push(`1. ${text}`);
    else if (block.style === 'h2') out.push(`## ${text}`);
    else if (block.style === 'h3') out.push(`### ${text}`);
    else if (block.style === 'h4') out.push(`#### ${text}`);
    else if (block.style === 'blockquote') out.push(`> ${text}`);
    else out.push(text);
  }

  return out.join('\n');
}

/** Plain text of PT blocks (for reading time + meta description fallbacks). */
export function portableTextToPlain(blocks) {
  return (blocks || [])
    .filter((b) => b?._type === 'block')
    .map((b) => (b.children ?? []).map((s) => s.text ?? '').join(''))
    .join(' ');
}
