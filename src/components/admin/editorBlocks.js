import { markdownToPortableText, portableTextToMarkdown } from '../../lib/sanity/markdown';

/**
 * Tables in the dataset come in two shapes: `rows[].cells[]`, or a `header[]`
 * plus tab-separated `pastedData`. Normalise both to a plain string matrix.
 */
function readTableRows(node) {
  if (Array.isArray(node.rows) && node.rows.length) {
    return node.rows.map((r) => (Array.isArray(r) ? r : r.cells || []).map((c) => String(c ?? '')));
  }
  const rows = [];
  if (Array.isArray(node.header) && node.header.length) rows.push(node.header.map(String));
  if (typeof node.pastedData === 'string' && node.pastedData.trim()) {
    for (const line of node.pastedData.split(/\r?\n/)) {
      if (line.trim()) rows.push(line.split('\t').map((c) => c.trim()));
    }
  }
  return rows;
}

/**
 * Editor-side block model. Rich text is edited as markdown; everything is
 * converted to/from Portable Text when loading and saving so Sanity always
 * stores clean structured content.
 */

let counter = 0;
export function editorKey() {
  counter += 1;
  return `e${Date.now().toString(36)}${counter.toString(36)}${Math.random()
    .toString(36)
    .slice(2, 6)}`;
}

export const BLOCK_LABELS = {
  richText: 'Text',
  image: 'Image',
  callout: 'Callout',
  stats: 'Statistics',
  table: 'Table',
  faq: 'FAQ',
  testimonial: 'Testimonial',
  prosAndCons: 'Pros & Cons',
  video: 'Video',
  cta: 'Call to action',
  divider: 'Divider',
};

export function newBlock(kind) {
  const id = editorKey();
  switch (kind) {
    case 'richText':
      return { kind, id, markdown: '' };
    case 'image':
      return { kind, id, image: null, caption: '', width: 'normal' };
    case 'callout':
      return { kind, id, title: '', content: '', variant: 'info' };
    case 'stats':
      return { kind, id, layout: 'three', stats: [{ value: '', label: '', source: '' }] };
    case 'table':
      return { kind, id, caption: '', hasHeaderRow: true, rows: [['', ''], ['', '']] };
    case 'faq':
      return { kind, id, title: '', items: [{ question: '', answer: '' }] };
    case 'testimonial':
      return { kind, id, quote: '', name: '', role: '', rating: 5 };
    case 'prosAndCons':
      return { kind, id, pros: '', cons: '', verdict: '' };
    case 'video':
      return { kind, id, url: '', title: '', caption: '', transcript: '' };
    case 'cta':
      return { kind, id, label: '', url: '', description: '' };
    case 'divider':
      return { kind, id, style: 'line' };
    default:
      return { kind: 'richText', id, markdown: '' };
  }
}

const toSanityImage = (img) =>
  img?.assetRef
    ? {
        _type: 'image',
        asset: { _type: 'reference', _ref: img.assetRef },
        alt: img.alt || '',
      }
    : undefined;

/** Editor blocks -> Portable Text body stored in Sanity. */
export function editorBlocksToBody(blocks) {
  const out = [];

  for (const block of blocks || []) {
    switch (block.kind) {
      case 'richText':
        out.push(...markdownToPortableText(block.markdown));
        break;

      case 'image': {
        const image = toSanityImage(block.image);
        if (!image) break;
        out.push({
          _type: 'imageBlock',
          _key: block.id,
          image,
          alt: block.image.alt || '',
          caption: block.caption || undefined,
          width: block.width || 'normal',
          alignment: 'center',
          rounded: true,
        });
        break;
      }

      case 'callout':
        if (!block.content) break;
        out.push({
          ...(block.raw || {}),
          _type: 'callout',
          _key: block.id,
          title: block.title || undefined,
          // Keep Portable Text callouts as Portable Text; plain ones stay plain.
          content: block.contentWasPortableText
            ? markdownToPortableText(block.content)
            : block.content,
          variant: block.variant || 'info',
          showIcon: true,
        });
        break;

      case 'stats': {
        const stats = (block.stats || []).filter((s) => s.value && s.label);
        if (!stats.length) break;
        out.push({
          _type: 'stats',
          _key: block.id,
          layout: block.layout || 'three',
          alignment: 'center',
          stats: stats.map((s, i) => ({
            _key: `s${i}`,
            _type: 'statItem',
            value: s.value,
            label: s.label,
            source: s.source || undefined,
            sourceUrl: s.sourceUrl || undefined,
          })),
        });
        break;
      }

      case 'table': {
        const rows = (block.rows || []).filter((r) => r.some((c) => String(c).trim()));
        if (!rows.length) break;
        // Write back in whichever shape this table already used, so an edit
        // never silently converts (and drops) the original representation.
        if (block.raw?.pastedData !== undefined || Array.isArray(block.raw?.header)) {
          const [header, ...body] = rows;
          out.push({
            ...block.raw,
            _type: 'table',
            _key: block.id,
            header,
            pastedData: body.map((r) => r.join('\t')).join('\n'),
            columns: String(header.length),
          });
        } else {
          out.push({
            ...(block.raw || {}),
            _type: 'table',
            _key: block.id,
            caption: block.caption || undefined,
            hasHeaderRow: block.hasHeaderRow !== false,
            rows: rows.map((cells, i) => ({
              _key: `r${i}`,
              _type: 'row',
              cells: cells.map((c) => String(c)),
            })),
          });
        }
        break;
      }

      case 'faq': {
        const items = (block.items || []).filter((i) => i.question && i.answer);
        if (!items.length) break;
        out.push({
          _type: 'faq',
          _key: block.id,
          title: block.title || undefined,
          items: items.map((i, idx) => ({
            _key: `q${idx}`,
            _type: 'faqItem',
            question: i.question,
            answer: i.answer,
          })),
        });
        break;
      }

      case 'testimonial':
        if (!block.quote) break;
        out.push({
          _type: 'testimonial',
          _key: block.id,
          quote: block.quote,
          name: block.name || undefined,
          role: block.role || undefined,
          rating: Number(block.rating) || undefined,
        });
        break;

      case 'prosAndCons': {
        const split = (s) =>
          String(s || '')
            .split('\n')
            .map((l) => l.trim())
            .filter(Boolean);
        const pros = split(block.pros);
        const cons = split(block.cons);
        if (!pros.length && !cons.length) break;
        out.push({
          _type: 'prosAndCons',
          _key: block.id,
          prosLabel: 'Pros',
          consLabel: 'Cons',
          pros,
          cons,
          verdict: block.verdict || undefined,
        });
        break;
      }

      case 'video':
        if (!block.url) break;
        out.push({
          _type: 'video',
          _key: block.id,
          url: block.url,
          title: block.title || undefined,
          caption: block.caption || undefined,
          transcript: block.transcript || undefined,
        });
        break;

      case 'cta': {
        if (!block.label || !block.url) break;
        // Mirror the field names the document already used.
        const legacy = block.raw?.buttonText !== undefined || block.raw?.buttonLink !== undefined;
        out.push({
          ...(block.raw || {}),
          _type: 'cta',
          _key: block.id,
          ...(legacy
            ? { buttonText: block.label, buttonLink: block.url }
            : { label: block.label, url: block.url, placement: 'inline' }),
          description: block.description || undefined,
        });
        break;
      }

      case 'divider':
        out.push({ _type: 'divider', _key: block.id, style: block.style || 'line' });
        break;

      // A block type the editor has no UI for (e.g. a legacy themedSection).
      // Written back exactly as it was read so re-saving never destroys it.
      case 'unknown':
        if (block.raw) out.push(block.raw);
        break;

      default:
        break;
    }
  }

  return out;
}

/** Portable Text body -> editor blocks. Consecutive text blocks merge into one. */
export function bodyToEditorBlocks(body, imageUrlFor) {
  const out = [];
  let textRun = [];

  const flushText = () => {
    if (!textRun.length) return;
    out.push({ kind: 'richText', id: editorKey(), markdown: portableTextToMarkdown(textRun) });
    textRun = [];
  };

  for (const node of body || []) {
    if (node?._type === 'block') {
      textRun.push(node);
      continue;
    }
    flushText();

    const id = node._key || editorKey();
    switch (node._type) {
      case 'imageBlock':
        out.push({
          kind: 'image',
          id,
          image: node.image?.asset?._ref
            ? {
                assetRef: node.image.asset._ref,
                url: imageUrlFor ? imageUrlFor(node.image) : '',
                alt: node.alt || node.image?.alt || '',
              }
            : null,
          caption: node.caption || '',
          width: node.width || 'normal',
        });
        break;

      case 'callout': {
        // content is a plain string in new callouts but Portable Text in the
        // ones already in the dataset. Edit either as markdown.
        const isPT = Array.isArray(node.content);
        out.push({
          kind: 'callout',
          id,
          title: node.title || '',
          content: isPT ? portableTextToMarkdown(node.content) : node.content || '',
          contentWasPortableText: isPT,
          variant: node.variant || 'info',
          raw: node,
        });
        break;
      }

      case 'stats':
        out.push({
          kind: 'stats',
          id,
          layout: node.layout || 'three',
          stats: (node.stats || []).map((s) => ({
            value: s.value || '',
            label: s.label || '',
            source: s.source || '',
            sourceUrl: s.sourceUrl || '',
          })),
        });
        break;

      case 'table':
        out.push({
          kind: 'table',
          id,
          caption: node.caption || '',
          hasHeaderRow: node.hasHeaderRow !== false || Boolean(node.header?.length),
          rows: readTableRows(node),
          // Preserve fields this editor does not expose (columns, style flags)
          // so re-saving an existing table does not strip them.
          raw: node,
        });
        break;

      case 'faq':
        out.push({
          kind: 'faq',
          id,
          title: node.title || '',
          items: (node.items || []).map((i) => ({
            question: i.question || '',
            answer: i.answer || '',
          })),
        });
        break;

      case 'testimonial':
        out.push({
          kind: 'testimonial',
          id,
          quote: node.quote || '',
          name: node.name || '',
          role: node.role || '',
          rating: node.rating ?? 5,
        });
        break;

      case 'prosAndCons':
        out.push({
          kind: 'prosAndCons',
          id,
          pros: (node.pros || []).join('\n'),
          cons: (node.cons || []).join('\n'),
          verdict: node.verdict || '',
        });
        break;

      case 'video':
        out.push({
          kind: 'video',
          id,
          url: node.url || '',
          title: node.title || '',
          caption: node.caption || '',
          transcript: node.transcript || '',
        });
        break;

      case 'cta':
        out.push({
          kind: 'cta',
          id,
          // Existing documents use buttonText/buttonLink; newer ones label/url.
          label: node.label || node.buttonText || '',
          url: node.url || node.buttonLink || '',
          description: node.description || '',
          raw: node,
        });
        break;

      case 'divider':
        out.push({ kind: 'divider', id, style: node.style || 'line' });
        break;

      default:
        // Unknown block type (e.g. a legacy themedSection). Preserving it here
        // would mean rendering an editor for it; dropping it would silently
        // destroy content. Keep it opaque and pass it through untouched.
        out.push({ kind: 'unknown', id, raw: node });
        break;
    }
  }

  flushText();
  return out.length ? out : [newBlock('richText')];
}
