'use client';

import { useRef, useState, useCallback } from 'react';
import {
  Bold, Italic, Heading2, Heading3, List, ListOrdered, Quote, Link2, Eye, Pencil,
} from 'lucide-react';

/**
 * Markdown text field with a formatting toolbar and a live preview.
 *
 * Why markdown rather than a WYSIWYG surface: the content is stored as Portable
 * Text, and a contenteditable WYSIWYG that round-trips to Portable Text without
 * corrupting it is a genuinely large piece of work. Markdown with a toolbar and
 * a preview gets the same "I can see what I am doing" affordance for a fraction
 * of the risk, and the toolbar means you never have to remember the syntax.
 */

const PREVIEW_STYLES = {
  h2: 'text-xl font-bold text-primaryBlue mt-4 mb-2',
  h3: 'text-lg font-semibold text-primaryBlue mt-3 mb-1.5',
  h4: 'text-base font-semibold text-gray-800 mt-2 mb-1',
};

/** Inline markdown -> HTML, for the preview pane only. */
function inlineToHtml(text) {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped
    .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(
      /\[([^\]]+)\]\(([^)\s]+)\)/g,
      '<a href="$2" class="text-primaryBlue underline">$1</a>'
    );
}

function MarkdownPreview({ value }) {
  const lines = String(value || '').split('\n');
  const out = [];
  let list = null;

  const flushList = () => {
    if (!list) return;
    const Tag = list.type === 'number' ? 'ol' : 'ul';
    out.push(
      <Tag
        key={`l${out.length}`}
        className={`my-2 space-y-1 pl-5 ${list.type === 'number' ? 'list-decimal' : 'list-disc'}`}
      >
        {list.items.map((it, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: inlineToHtml(it) }} />
        ))}
      </Tag>
    );
    list = null;
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) { flushList(); continue; }

    const heading = /^(#{2,4})\s+(.*)$/.exec(line);
    const bullet = /^[-*]\s+(.*)$/.exec(line);
    const numbered = /^\d+[.)]\s+(.*)$/.exec(line);
    const quote = /^>\s?(.*)$/.exec(line);

    if (heading) {
      flushList();
      const tag = `h${heading[1].length}`;
      out.push(
        <p key={out.length} className={PREVIEW_STYLES[tag]}
           dangerouslySetInnerHTML={{ __html: inlineToHtml(heading[2]) }} />
      );
    } else if (bullet) {
      if (list?.type !== 'bullet') { flushList(); list = { type: 'bullet', items: [] }; }
      list.items.push(bullet[1]);
    } else if (numbered) {
      if (list?.type !== 'number') { flushList(); list = { type: 'number', items: [] }; }
      list.items.push(numbered[1]);
    } else if (quote) {
      flushList();
      out.push(
        <blockquote key={out.length}
          className="my-2 border-l-4 border-gray-300 pl-3 italic text-gray-600"
          dangerouslySetInnerHTML={{ __html: inlineToHtml(quote[1]) }} />
      );
    } else {
      flushList();
      out.push(
        <p key={out.length} className="my-2 leading-relaxed text-gray-700"
           dangerouslySetInnerHTML={{ __html: inlineToHtml(line) }} />
      );
    }
  }
  flushList();

  return out.length ? (
    <div className="text-sm">{out}</div>
  ) : (
    <p className="text-sm text-gray-400">Nothing to preview yet.</p>
  );
}

export default function RichTextField({ value, onChange, placeholder, rows = 12 }) {
  const ref = useRef(null);
  const [preview, setPreview] = useState(false);

  /** Wrap the selection, or insert a prefix at the start of the line. */
  const apply = useCallback(
    (kind) => {
      const ta = ref.current;
      if (!ta) return;

      const text = value || '';
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const selected = text.slice(start, end);

      let next;
      let caret;

      if (kind === 'bold' || kind === 'italic' || kind === 'link') {
        const marks = { bold: '**', italic: '*' };
        if (kind === 'link') {
          const label = selected || 'link text';
          next = `${text.slice(0, start)}[${label}](https://)${text.slice(end)}`;
          caret = start + label.length + 3;
        } else {
          const m = marks[kind];
          const body = selected || (kind === 'bold' ? 'bold text' : 'italic text');
          next = `${text.slice(0, start)}${m}${body}${m}${text.slice(end)}`;
          caret = start + m.length + body.length + m.length;
        }
      } else {
        // Line-prefix marks: find the start of the current line.
        const lineStart = text.lastIndexOf('\n', start - 1) + 1;
        const prefixes = {
          h2: '## ', h3: '### ', bullet: '- ', numbered: '1. ', quote: '> ',
        };
        const prefix = prefixes[kind];
        const rest = text.slice(lineStart);
        // Toggle off if the prefix is already there.
        const existing = /^(#{2,4}\s|[-*]\s|\d+[.)]\s|>\s?)/.exec(rest);
        if (existing && rest.startsWith(prefix)) {
          next = text.slice(0, lineStart) + rest.slice(prefix.length);
          caret = Math.max(lineStart, start - prefix.length);
        } else {
          const stripped = existing ? rest.slice(existing[0].length) : rest;
          next = text.slice(0, lineStart) + prefix + stripped;
          caret = start + prefix.length - (existing ? existing[0].length : 0);
        }
      }

      onChange(next);
      requestAnimationFrame(() => {
        ta.focus();
        ta.setSelectionRange(caret, caret);
      });
    },
    [value, onChange]
  );

  const onKeyDown = (e) => {
    const mod = e.metaKey || e.ctrlKey;
    if (!mod) return;
    const map = { b: 'bold', i: 'italic', k: 'link' };
    const action = map[e.key.toLowerCase()];
    if (action) {
      e.preventDefault();
      apply(action);
    }
  };

  const TOOLS = [
    { id: 'bold', icon: Bold, title: 'Bold (Ctrl+B)' },
    { id: 'italic', icon: Italic, title: 'Italic (Ctrl+I)' },
    { id: 'link', icon: Link2, title: 'Link (Ctrl+K)' },
    null,
    { id: 'h2', icon: Heading2, title: 'Section heading' },
    { id: 'h3', icon: Heading3, title: 'Sub-heading' },
    null,
    { id: 'bullet', icon: List, title: 'Bullet list' },
    { id: 'numbered', icon: ListOrdered, title: 'Numbered list' },
    { id: 'quote', icon: Quote, title: 'Quote' },
  ];

  return (
    <div className="overflow-hidden rounded-lg border border-gray-300 focus-within:border-primaryBlue focus-within:ring-1 focus-within:ring-primaryBlue">
      <div className="flex items-center gap-0.5 border-b border-gray-200 bg-gray-50 px-1.5 py-1">
        {TOOLS.map((t, i) =>
          t === null ? (
            <span key={`sep${i}`} className="mx-1 h-4 w-px bg-gray-300" />
          ) : (
            <button
              key={t.id}
              type="button"
              title={t.title}
              aria-label={t.title}
              disabled={preview}
              onClick={() => apply(t.id)}
              className="rounded p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-900 disabled:opacity-40"
            >
              <t.icon className="size-4" />
            </button>
          )
        )}

        <button
          type="button"
          onClick={() => setPreview((p) => !p)}
          className="ml-auto inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-900"
        >
          {preview ? <><Pencil className="size-3.5" /> Edit</> : <><Eye className="size-3.5" /> Preview</>}
        </button>
      </div>

      {preview ? (
        <div className="min-h-[8rem] bg-white px-3 py-2">
          <MarkdownPreview value={value} />
        </div>
      ) : (
        <textarea
          ref={ref}
          rows={rows}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className="w-full resize-y border-0 px-3 py-2 font-mono text-sm leading-relaxed focus:outline-none focus:ring-0"
        />
      )}
    </div>
  );
}
