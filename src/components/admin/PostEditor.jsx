'use client';

import { useMemo, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowDown, ArrowUp, Loader2, Plus, Trash2, Type, ImagePlus, Info,
  BarChart3, Table2, FileQuestion, Quote, Columns2, Video, Megaphone, Minus,
} from 'lucide-react';
import ImageUpload from './ImageUpload';
import RichTextField from './RichTextField';
import BlockShell from './BlockShell';
import { BLOCK_LABELS, newBlock, editorBlocksToBody, bodyToEditorBlocks, editorKey } from './editorBlocks';
import { savePost } from '../../../app/admin/insights/actions';

const BLOCK_ICONS = {
  richText: Type, image: ImagePlus, callout: Info, stats: BarChart3, table: Table2,
  faq: FileQuestion, testimonial: Quote, prosAndCons: Columns2, video: Video,
  cta: Megaphone, divider: Minus,
};

/**
 * Blocks grouped by intent. Eleven buttons in one row is a scanning problem;
 * three labelled groups of three or four is not.
 */
const BLOCK_GROUPS = [
  { title: 'Text', kinds: ['richText', 'callout', 'table', 'divider'] },
  { title: 'Media', kinds: ['image', 'video'] },
  { title: 'SEO', kinds: ['faq', 'stats', 'prosAndCons', 'testimonial', 'cta'] },
];

/** One-line gist of a block, shown when it is collapsed. */
function blockSummary(block) {
  const clip = (t, n = 60) => {
    const s = String(t || '').replace(/\s+/g, ' ').trim();
    return s.length > n ? `${s.slice(0, n)}…` : s;
  };
  switch (block.kind) {
    case 'richText': return clip(block.markdown.replace(/[#*>\-]/g, ''));
    case 'image': return block.image?.alt ? clip(block.image.alt) : 'No image yet';
    case 'callout': return clip(block.title || block.content);
    case 'stats': return `${block.stats?.filter((s) => s.value).length || 0} stat(s)`;
    case 'table': return `${block.rows?.length || 0} row(s)`;
    case 'faq': return `${block.items?.filter((i) => i.question).length || 0} question(s)`;
    case 'testimonial': return clip(block.quote);
    case 'prosAndCons': return 'Pros and cons';
    case 'video': return clip(block.title || block.url);
    case 'cta': return clip(block.label);
    case 'divider': return '';
    case 'unknown': return block.raw?._type || '';
    default: return '';
  }
}

const TABS = [
  { id: 'write', label: 'Write' },
  { id: 'aiseo', label: 'AI SEO' },
  { id: 'seo', label: 'SEO' },
  { id: 'details', label: 'Details' },
];

/* ---------------- small shared inputs ---------------- */

const Field = ({ label, hint, children }) => (
  <div className="space-y-1.5">
    {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
    {children}
    {hint && <p className="text-xs text-gray-500">{hint}</p>}
  </div>
);

const input =
  'w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primaryBlue focus:outline-none focus:ring-1 focus:ring-primaryBlue';

const Text = (props) => <input type="text" {...props} className={input} />;
const Area = ({ rows = 3, ...props }) => <textarea rows={rows} {...props} className={input} />;

const Card = ({ title, description, children }) => (
  <section className="rounded-xl border border-gray-200 bg-white p-5 space-y-4">
    {title && (
      <div>
        <h3 className="font-semibold text-primaryBlue">{title}</h3>
        {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
      </div>
    )}
    {children}
  </section>
);

/** Counts words so the direct answer can be kept in the citable 40-60 range. */
const wordCount = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length;

/* ---------------- per-block editors ---------------- */

function BlockBody({ block, set }) {
  switch (block.kind) {
    case 'richText':
      return (
        <RichTextField
          value={block.markdown}
          onChange={(markdown) => set({ ...block, markdown })}
          placeholder="Write here. Use the toolbar above, or type markdown directly."
        />
      );

    case 'image':
      return (
        <div className="space-y-3">
          <ImageUpload value={block.image} onChange={(image) => set({ ...block, image })} />
          <Text
            value={block.caption}
            onChange={(e) => set({ ...block, caption: e.target.value })}
            placeholder="Caption (optional)"
          />
        </div>
      );

    case 'callout':
      return (
        <div className="space-y-3">
          <div className="flex gap-2">
            {['info', 'warning', 'success', 'neutral'].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => set({ ...block, variant: v })}
                className={`rounded-md px-3 py-1 text-xs font-medium capitalize ${
                  block.variant === v ? 'bg-primaryBlue text-white' : 'bg-gray-100 text-gray-600'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
          <Text value={block.title} onChange={(e) => set({ ...block, title: e.target.value })} placeholder="Title (optional)" />
          <RichTextField
            rows={4}
            value={block.content}
            onChange={(content) => set({ ...block, content })}
            placeholder="Callout text"
          />
        </div>
      );

    case 'stats':
      return (
        <div className="space-y-3">
          {block.stats.map((s, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <Text
                value={s.value}
                onChange={(e) => {
                  const stats = [...block.stats];
                  stats[i] = { ...s, value: e.target.value };
                  set({ ...block, stats });
                }}
                placeholder="53%"
              />
              <Text
                value={s.label}
                onChange={(e) => {
                  const stats = [...block.stats];
                  stats[i] = { ...s, label: e.target.value };
                  set({ ...block, stats });
                }}
                placeholder="abandon slow pages"
              />
              <div className="flex gap-2">
                <Text
                  value={s.source}
                  onChange={(e) => {
                    const stats = [...block.stats];
                    stats[i] = { ...s, source: e.target.value };
                    set({ ...block, stats });
                  }}
                  placeholder="Source"
                />
                <button
                  type="button"
                  onClick={() => set({ ...block, stats: block.stats.filter((_, j) => j !== i) })}
                  className="shrink-0 rounded-md px-2 text-red-500 hover:bg-red-50"
                  aria-label="Remove stat"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => set({ ...block, stats: [...block.stats, { value: '', label: '', source: '' }] })}
            className="text-xs text-primaryBlue hover:underline"
          >
            + Add stat
          </button>
          <p className="text-xs text-gray-500">
            Statistics with a named source measurably raise the odds an AI engine cites the page.
          </p>
        </div>
      );

    case 'table':
      return (
        <div className="space-y-3">
          <Text value={block.caption} onChange={(e) => set({ ...block, caption: e.target.value })} placeholder="Caption (optional)" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {block.rows.map((row, r) => (
                  <tr key={r}>
                    {row.map((cell, c) => (
                      <td key={c} className="p-1">
                        <input
                          type="text"
                          value={cell}
                          onChange={(e) => {
                            const rows = block.rows.map((x) => [...x]);
                            rows[r][c] = e.target.value;
                            set({ ...block, rows });
                          }}
                          placeholder={r === 0 && block.hasHeaderRow ? 'Header' : ''}
                          className={`w-full rounded border border-gray-300 px-2 py-1 text-sm ${
                            r === 0 && block.hasHeaderRow ? 'font-semibold bg-gray-50' : ''
                          }`}
                        />
                      </td>
                    ))}
                    <td className="p-1">
                      <button
                        type="button"
                        onClick={() => set({ ...block, rows: block.rows.filter((_, j) => j !== r) })}
                        className="rounded px-2 text-red-500 hover:bg-red-50"
                        aria-label="Remove row"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex gap-3 text-xs">
            <button
              type="button"
              onClick={() => set({ ...block, rows: [...block.rows, block.rows[0].map(() => '')] })}
              className="text-primaryBlue hover:underline"
            >
              + Row
            </button>
            <button
              type="button"
              onClick={() => set({ ...block, rows: block.rows.map((r) => [...r, '']) })}
              className="text-primaryBlue hover:underline"
            >
              + Column
            </button>
          </div>
        </div>
      );

    case 'faq':
      return (
        <div className="space-y-3">
          {block.items.map((it, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-3 space-y-2">
              <div className="flex gap-2">
                <Text
                  value={it.question}
                  onChange={(e) => {
                    const items = [...block.items];
                    items[i] = { ...it, question: e.target.value };
                    set({ ...block, items });
                  }}
                  placeholder="Question"
                />
                <button
                  type="button"
                  onClick={() => set({ ...block, items: block.items.filter((_, j) => j !== i) })}
                  className="shrink-0 rounded-md px-2 text-red-500 hover:bg-red-50"
                  aria-label="Remove question"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
              <Area
                rows={2}
                value={it.answer}
                onChange={(e) => {
                  const items = [...block.items];
                  items[i] = { ...it, answer: e.target.value };
                  set({ ...block, items });
                }}
                placeholder="Answer"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => set({ ...block, items: [...block.items, { question: '', answer: '' }] })}
            className="text-xs text-primaryBlue hover:underline"
          >
            + Add question
          </button>
        </div>
      );

    case 'testimonial':
      return (
        <div className="space-y-3">
          <Area value={block.quote} onChange={(e) => set({ ...block, quote: e.target.value })} placeholder="Quote" />
          <div className="grid grid-cols-2 gap-2">
            <Text value={block.name} onChange={(e) => set({ ...block, name: e.target.value })} placeholder="Name" />
            <Text value={block.role} onChange={(e) => set({ ...block, role: e.target.value })} placeholder="Role" />
          </div>
        </div>
      );

    case 'prosAndCons':
      return (
        <div className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <Area value={block.pros} onChange={(e) => set({ ...block, pros: e.target.value })} placeholder="Pros, one per line" />
            <Area value={block.cons} onChange={(e) => set({ ...block, cons: e.target.value })} placeholder="Cons, one per line" />
          </div>
          <Text value={block.verdict} onChange={(e) => set({ ...block, verdict: e.target.value })} placeholder="Verdict (optional)" />
        </div>
      );

    case 'video':
      return (
        <div className="space-y-3">
          <Text value={block.url} onChange={(e) => set({ ...block, url: e.target.value })} placeholder="YouTube or Vimeo URL" />
          <Text value={block.title} onChange={(e) => set({ ...block, title: e.target.value })} placeholder="Video title" />
          <Area
            value={block.transcript}
            onChange={(e) => set({ ...block, transcript: e.target.value })}
            placeholder="Transcript - AI engines cannot watch video, so this is how the content becomes readable"
          />
        </div>
      );

    case 'cta':
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <Text value={block.label} onChange={(e) => set({ ...block, label: e.target.value })} placeholder="Button label" />
            <Text value={block.url} onChange={(e) => set({ ...block, url: e.target.value })} placeholder="/ContactUs" />
          </div>
          <Text value={block.description} onChange={(e) => set({ ...block, description: e.target.value })} placeholder="Description (optional)" />
        </div>
      );

    case 'divider':
      return <p className="text-xs text-gray-400">A horizontal rule.</p>;

    case 'unknown':
      return (
        <p className="text-xs text-gray-500">
          A <code className="font-mono">{block.raw?._type}</code> block created elsewhere. It has no
          editor here, but it is preserved exactly as-is when you save.
        </p>
      );

    default:
      return null;
  }
}

/* ---------------- main editor ---------------- */

export default function PostEditor({ post, authors, categories }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [tab, setTab] = useState('write');
  const [feedback, setFeedback] = useState(null);

  const [title, setTitle] = useState(post?.title ?? '');
  const [slug, setSlug] = useState(post?.slug ?? '');
  const [slugTouched, setSlugTouched] = useState(Boolean(post));
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '');
  const [mainImage, setMainImage] = useState(
    post?.mainImage?.asset?._ref
      ? { assetRef: post.mainImage.asset._ref, url: post.mainImageUrl, alt: post.mainImage.alt ?? '' }
      : null
  );
  const [blocks, setBlocks] = useState(() =>
    post?.body?.length ? bodyToEditorBlocks(post.body) : [newBlock('richText')]
  );

  // AI SEO
  const [da, setDa] = useState(post?.directAnswer ?? { question: '', answer: '', supportingStat: '', statSource: '', statSourceUrl: '' });
  const [takeaways, setTakeaways] = useState((post?.keyTakeaways?.points ?? []).join('\n'));
  const [faq, setFaq] = useState(post?.faqSection?.items?.map((i) => ({ question: i.question, answer: i.answer })) ?? []);
  const [howTo, setHowTo] = useState(post?.howTo ?? { title: '', description: '', totalTime: '', steps: [] });
  const [citations, setCitations] = useState(post?.citations ?? []);
  const [entities, setEntities] = useState(post?.entities ?? []);

  // SEO
  const [seo, setSeo] = useState({
    seoTitle: post?.seo?.seoTitle ?? post?.seoTitle ?? '',
    seoDescription: post?.seo?.seoDescription ?? post?.seoDescription ?? '',
    focusKeyword: post?.seo?.focusKeyword ?? post?.focusKeyword ?? '',
    secondaryKeywords: (post?.seo?.secondaryKeywords ?? post?.secondaryKeywords ?? []).join(', '),
    semanticKeywords: (post?.seo?.semanticKeywords ?? []).join(', '),
    canonicalUrl: post?.seo?.canonicalUrl ?? post?.canonicalUrl ?? '',
    noIndex: post?.seo?.noIndex ?? post?.noIndex ?? false,
    searchIntent: post?.seo?.searchIntent ?? post?.searchIntent ?? '',
    funnelStage: post?.seo?.funnelStage ?? post?.funnelStage ?? '',
    targetAudience: post?.seo?.targetAudience ?? post?.targetAudience ?? '',
  });
  const [schemaType, setSchemaType] = useState(post?.schemaType ?? 'BlogPosting');

  // Details
  const [authorId, setAuthorId] = useState(post?.author?._id ?? '');
  const [categoryIds, setCategoryIds] = useState(post?.categories?.map((c) => c._id) ?? []);
  const [tags, setTags] = useState((post?.tags ?? []).join(', '));
  const [featured, setFeatured] = useState(Boolean(post?.featured));
  const [status, setStatus] = useState(post?.status ?? 'draft');

  const autoSlug = useMemo(
    () =>
      title
        .toLowerCase()
        .replace(/['".,:;!?()]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 96),
    [title]
  );
  const effectiveSlug = slugTouched ? slug : autoSlug;

  const setBlock = (id, next) => setBlocks((bs) => bs.map((b) => (b.id === id ? next : b)));
  const moveBlock = (i, dir) =>
    setBlocks((bs) => {
      const j = i + dir;
      if (j < 0 || j >= bs.length) return bs;
      const copy = [...bs];
      [copy[i], copy[j]] = [copy[j], copy[i]];
      return copy;
    });

  // Drag-to-reorder state, owned here so the indicator can be drawn between
  // blocks rather than inside the one being hovered.
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [overIndex, setOverIndex] = useState(null);

  const dropBlock = (target) => {
    setBlocks((bs) => {
      if (draggingIndex === null || draggingIndex === target) return bs;
      const copy = [...bs];
      const [moved] = copy.splice(draggingIndex, 1);
      copy.splice(target, 0, moved);
      return copy;
    });
    setDraggingIndex(null);
    setOverIndex(null);
  };

  /* Readiness — the same signals the AI-SEO research says matter. */
  const checks = [
    { ok: Boolean(title.trim()), label: 'Title' },
    { ok: Boolean(excerpt.trim()), label: 'Excerpt' },
    { ok: Boolean(mainImage?.alt?.trim()), label: 'Cover image with alt text' },
    { ok: wordCount(da.answer) >= 30, label: 'Direct answer (40-60 words)' },
    { ok: takeaways.split('\n').filter((t) => t.trim()).length >= 3, label: '3+ key takeaways' },
    { ok: faq.filter((f) => f.question && f.answer).length >= 3, label: '3+ FAQ questions' },
    { ok: Boolean(seo.seoDescription.trim()), label: 'Meta description' },
    { ok: Boolean(seo.focusKeyword.trim()), label: 'Focus keyword' },
    { ok: citations.length > 0, label: 'At least one cited source' },
  ];
  const score = Math.round((checks.filter((c) => c.ok).length / checks.length) * 100);

  const submit = (nextStatus) => {
    setFeedback(null);
    const listOf = (s) => s.split(',').map((x) => x.trim()).filter(Boolean);

    startTransition(async () => {
      const res = await savePost({
        id: post?._id,
        title,
        slug: effectiveSlug,
        excerpt,
        status: nextStatus,
        publishedAt: post?.publishedAt,
        featured,
        authorId: authorId || undefined,
        categoryIds,
        tags: listOf(tags),
        mainImage,
        body: editorBlocksToBody(blocks),
        schemaType,
        aiSeo: {
          directAnswer: da.answer?.trim() ? da : undefined,
          keyTakeaways: { points: takeaways.split('\n').map((t) => t.trim()).filter(Boolean) },
          faq: faq.filter((f) => f.question && f.answer),
          howTo: howTo.steps?.length ? howTo : undefined,
          citations: citations.filter((c) => c.title),
          entities: entities.filter((e) => e.name),
        },
        seo: {
          ...seo,
          secondaryKeywords: listOf(seo.secondaryKeywords),
          semanticKeywords: listOf(seo.semanticKeywords),
        },
        social: {},
      });

      if (res.ok) {
        setStatus(nextStatus);
        setFeedback({ ok: true, message: res.message });
        if (!post?._id && res.id) router.replace(`/admin/insights/${res.id}`);
        else router.refresh();
      } else {
        setFeedback({ ok: false, message: res.message });
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* header */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-bold text-primaryBlue truncate">
            {title || 'Untitled post'}
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            /insights/{effectiveSlug || '…'} · <span className="capitalize">{status}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
              score >= 80 ? 'bg-green-100 text-green-700'
                : score >= 50 ? 'bg-amber-100 text-amber-700'
                : 'bg-gray-100 text-gray-600'
            }`}
            title={checks.filter((c) => !c.ok).map((c) => c.label).join(', ') || 'All checks passed'}
          >
            {score}% ready
          </span>
          <button
            type="button"
            onClick={() => submit('draft')}
            disabled={pending}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60"
          >
            Save draft
          </button>
          <button
            type="button"
            onClick={() => submit('published')}
            disabled={pending}
            className="inline-flex items-center gap-2 rounded-lg bg-primaryBlue px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
          >
            {pending && <Loader2 className="size-4 animate-spin" />}
            {status === 'published' ? 'Update' : 'Publish'}
          </button>
        </div>
      </div>

      {feedback && (
        <div
          className={`rounded-lg border px-4 py-2.5 text-sm ${
            feedback.ok
              ? 'border-green-200 bg-green-50 text-green-800'
              : 'border-red-200 bg-red-50 text-red-700'
          }`}
        >
          {feedback.message}
        </div>
      )}

      {/* tabs */}
      <div className="flex gap-1 border-b border-gray-200">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium transition ${
              tab === t.id
                ? 'border-primaryBlue text-primaryBlue'
                : 'border-transparent text-gray-500 hover:text-gray-800'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ---------------- WRITE ---------------- */}
      {tab === 'write' && (
        <div className="space-y-5">
          <Card>
            <Field label="Title">
              <Text value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Front-load the keyword, keep under ~60 characters" />
            </Field>
            <Field label="URL slug" hint={`Published at /insights/${effectiveSlug || '…'}`}>
              <Text
                value={effectiveSlug}
                onChange={(e) => { setSlugTouched(true); setSlug(e.target.value); }}
              />
            </Field>
            <Field label="Excerpt" hint="Shown on the blog index and used as a meta description fallback.">
              <Area value={excerpt} onChange={(e) => setExcerpt(e.target.value)} />
            </Field>
            <Field label="Cover image">
              <ImageUpload value={mainImage} onChange={setMainImage} />
            </Field>
          </Card>

          {/* body blocks */}
          <div
            className="space-y-2"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => { setDraggingIndex(null); setOverIndex(null); }}
          >
            {blocks.map((block, i) => (
              <BlockShell
                key={block.id}
                index={i}
                total={blocks.length}
                icon={BLOCK_ICONS[block.kind] || Type}
                label={BLOCK_LABELS[block.kind] || block.kind}
                summary={blockSummary(block)}
                onMove={moveBlock}
                onDelete={(idx) => setBlocks((bs) => bs.filter((_, j) => j !== idx))}
                onDuplicate={(idx) =>
                  setBlocks((bs) => {
                    const copy = [...bs];
                    copy.splice(idx + 1, 0, { ...bs[idx], id: editorKey() });
                    return copy;
                  })
                }
                dragState={{ draggingIndex, overIndex, setDraggingIndex, setOverIndex, onDrop: dropBlock }}
              >
                <BlockBody block={block} set={(next) => setBlock(block.id, next)} />
              </BlockShell>
            ))}
          </div>

          {/* Add block. Grouped rather than one flat row of eleven buttons:
              scanning three short labelled groups is far less work than
              scanning an undifferentiated line. */}
          <div className="rounded-xl border border-dashed border-gray-300 p-4 space-y-3">
            {BLOCK_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-wrap items-center gap-2">
                <span className="w-16 shrink-0 text-xs font-medium uppercase tracking-wide text-gray-400">
                  {group.title}
                </span>
                {group.kinds.map((kind) => {
                  const Icon = BLOCK_ICONS[kind] || Plus;
                  return (
                    <button
                      key={kind}
                      type="button"
                      onClick={() => setBlocks((bs) => [...bs, newBlock(kind)])}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition hover:border-primaryBlue hover:text-primaryBlue"
                    >
                      <Icon className="size-3.5" /> {BLOCK_LABELS[kind]}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------------- AI SEO ---------------- */}
      {tab === 'aiseo' && (
        <div className="space-y-5">
          <Card
            title="Direct answer"
            description="Write this first. It is the block most likely to be quoted verbatim by ChatGPT, Perplexity and Google AI Overviews."
          >
            <Field label="The question this post answers">
              <Text value={da.question} onChange={(e) => setDa({ ...da, question: e.target.value })}
                placeholder="How fast should a dental booking page load?" />
            </Field>
            <Field
              label="Direct answer"
              hint={`${wordCount(da.answer)} words. Aim for 40-60, and make it make sense quoted on its own.`}
            >
              <Area rows={4} value={da.answer} onChange={(e) => setDa({ ...da, answer: e.target.value })} />
            </Field>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Supporting statistic">
                <Text value={da.supportingStat} onChange={(e) => setDa({ ...da, supportingStat: e.target.value })}
                  placeholder="53% of visitors abandon a page over 3s" />
              </Field>
              <Field label="Statistic source">
                <Text value={da.statSource} onChange={(e) => setDa({ ...da, statSource: e.target.value })}
                  placeholder="Google/SOASTA 2017" />
              </Field>
            </div>
          </Card>

          <Card title="Key takeaways" description="Lists survive AI chunking intact, which is why they get cited.">
            <Field hint="One per line. Each must stand alone with its own subject.">
              <Area rows={5} value={takeaways} onChange={(e) => setTakeaways(e.target.value)}
                placeholder={'Cutting load time under 2s improves booking conversions.\nINP above 200ms silently loses appointments.'} />
            </Field>
          </Card>

          <Card title="FAQ" description="The highest-impact structured data for AI search. Aim for 3-5 real questions.">
            <div className="space-y-3">
              {faq.map((f, i) => (
                <div key={i} className="rounded-lg border border-gray-200 p-3 space-y-2">
                  <div className="flex gap-2">
                    <Text value={f.question}
                      onChange={(e) => { const n = [...faq]; n[i] = { ...f, question: e.target.value }; setFaq(n); }}
                      placeholder="Question, in the words a person would use" />
                    <button type="button" onClick={() => setFaq(faq.filter((_, j) => j !== i))}
                      className="shrink-0 rounded-md px-2 text-red-500 hover:bg-red-50" aria-label="Remove">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <Area rows={2} value={f.answer}
                    onChange={(e) => { const n = [...faq]; n[i] = { ...f, answer: e.target.value }; setFaq(n); }}
                    placeholder="Answer in the first sentence, then elaborate." />
                </div>
              ))}
              <button type="button" onClick={() => setFaq([...faq, { question: '', answer: '' }])}
                className="text-xs text-primaryBlue hover:underline">+ Add question</button>
            </div>
          </Card>

          <Card title="Sources cited" description="Citing primary sources is one of the strongest trust signals available.">
            <div className="space-y-2">
              {citations.map((c, i) => (
                <div key={i} className="flex gap-2">
                  <Text value={c.title}
                    onChange={(e) => { const n = [...citations]; n[i] = { ...c, title: e.target.value }; setCitations(n); }}
                    placeholder="Source title" />
                  <Text value={c.url}
                    onChange={(e) => { const n = [...citations]; n[i] = { ...c, url: e.target.value }; setCitations(n); }}
                    placeholder="https://…" />
                  <button type="button" onClick={() => setCitations(citations.filter((_, j) => j !== i))}
                    className="shrink-0 rounded-md px-2 text-red-500 hover:bg-red-50" aria-label="Remove">
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => setCitations([...citations, { title: '', url: '', publisher: '' }])}
                className="text-xs text-primaryBlue hover:underline">+ Add source</button>
            </div>
          </Card>

          <Card title="Entities" description="Name what the post is about and link each to an authoritative URL. This connects your content to the knowledge graph.">
            <div className="space-y-2">
              {entities.map((en, i) => (
                <div key={i} className="flex gap-2">
                  <Text value={en.name}
                    onChange={(e) => { const n = [...entities]; n[i] = { ...en, name: e.target.value }; setEntities(n); }}
                    placeholder="Core Web Vitals" />
                  <select
                    value={en.type || 'Thing'}
                    onChange={(e) => { const n = [...entities]; n[i] = { ...en, type: e.target.value }; setEntities(n); }}
                    className={input}
                  >
                    {['Thing', 'Organization', 'Person', 'Place', 'Product', 'Service', 'SoftwareApplication'].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <Text value={en.sameAs}
                    onChange={(e) => { const n = [...entities]; n[i] = { ...en, sameAs: e.target.value }; setEntities(n); }}
                    placeholder="Wikipedia / official URL" />
                  <button type="button" onClick={() => setEntities(entities.filter((_, j) => j !== i))}
                    className="shrink-0 rounded-md px-2 text-red-500 hover:bg-red-50" aria-label="Remove">
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
              <button type="button" onClick={() => setEntities([...entities, { name: '', type: 'Thing', sameAs: '' }])}
                className="text-xs text-primaryBlue hover:underline">+ Add entity</button>
            </div>
          </Card>

          <Card title="How-to steps" description="Only for procedural posts. Emits HowTo markup.">
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Title">
                <Text value={howTo.title} onChange={(e) => setHowTo({ ...howTo, title: e.target.value })} />
              </Field>
              <Field label="Total time" hint="ISO 8601, e.g. PT30M">
                <Text value={howTo.totalTime} onChange={(e) => setHowTo({ ...howTo, totalTime: e.target.value })} />
              </Field>
            </div>
            <div className="space-y-2">
              {(howTo.steps || []).map((s, i) => (
                <div key={i} className="flex gap-2">
                  <Text value={s.name}
                    onChange={(e) => { const steps = [...howTo.steps]; steps[i] = { ...s, name: e.target.value }; setHowTo({ ...howTo, steps }); }}
                    placeholder={`Step ${i + 1} name`} />
                  <Text value={s.text}
                    onChange={(e) => { const steps = [...howTo.steps]; steps[i] = { ...s, text: e.target.value }; setHowTo({ ...howTo, steps }); }}
                    placeholder="Instructions" />
                  <button type="button"
                    onClick={() => setHowTo({ ...howTo, steps: howTo.steps.filter((_, j) => j !== i) })}
                    className="shrink-0 rounded-md px-2 text-red-500 hover:bg-red-50" aria-label="Remove">
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
              <button type="button"
                onClick={() => setHowTo({ ...howTo, steps: [...(howTo.steps || []), { name: '', text: '' }] })}
                className="text-xs text-primaryBlue hover:underline">+ Add step</button>
            </div>
          </Card>
        </div>
      )}

      {/* ---------------- SEO ---------------- */}
      {tab === 'seo' && (
        <div className="space-y-5">
          <Card title="Search">
            <Field label="Meta title" hint={`${seo.seoTitle.length}/60 characters. Falls back to the post title.`}>
              <Text value={seo.seoTitle} onChange={(e) => setSeo({ ...seo, seoTitle: e.target.value })} />
            </Field>
            <Field label="Meta description" hint={`${seo.seoDescription.length}/160 characters.`}>
              <Area value={seo.seoDescription} onChange={(e) => setSeo({ ...seo, seoDescription: e.target.value })} />
            </Field>
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Focus keyword" hint="Should appear in the title, first paragraph and an H2.">
                <Text value={seo.focusKeyword} onChange={(e) => setSeo({ ...seo, focusKeyword: e.target.value })} />
              </Field>
              <Field label="Secondary keywords" hint="Comma separated.">
                <Text value={seo.secondaryKeywords} onChange={(e) => setSeo({ ...seo, secondaryKeywords: e.target.value })} />
              </Field>
            </div>
            <Field label="Semantic / related terms" hint="Comma separated. Proves topical depth to both classic and generative engines.">
              <Text value={seo.semanticKeywords} onChange={(e) => setSeo({ ...seo, semanticKeywords: e.target.value })} />
            </Field>
            <div className="grid sm:grid-cols-3 gap-3">
              <Field label="Search intent">
                <select value={seo.searchIntent} onChange={(e) => setSeo({ ...seo, searchIntent: e.target.value })} className={input}>
                  <option value="">—</option>
                  {['informational', 'commercial', 'transactional', 'navigational'].map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </Field>
              <Field label="Funnel stage">
                <select value={seo.funnelStage} onChange={(e) => setSeo({ ...seo, funnelStage: e.target.value })} className={input}>
                  <option value="">—</option>
                  {['awareness', 'consideration', 'decision'].map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </Field>
              <Field label="Schema type">
                <select value={schemaType} onChange={(e) => setSchemaType(e.target.value)} className={input}>
                  {['BlogPosting', 'Article', 'HowTo', 'FAQPage', 'TechArticle', 'Review'].map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Target audience">
              <Area rows={2} value={seo.targetAudience} onChange={(e) => setSeo({ ...seo, targetAudience: e.target.value })} />
            </Field>
            <Field label="Canonical URL" hint="Only if first published elsewhere.">
              <Text value={seo.canonicalUrl} onChange={(e) => setSeo({ ...seo, canonicalUrl: e.target.value })} />
            </Field>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input type="checkbox" checked={seo.noIndex} onChange={(e) => setSeo({ ...seo, noIndex: e.target.checked })} />
              Hide from search engines
            </label>
          </Card>

          <Card title="Publish readiness" description="Not enforced, but each unticked item is a missed ranking or citation signal.">
            <ul className="space-y-1.5 text-sm">
              {checks.map((c) => (
                <li key={c.label} className={`flex items-center gap-2 ${c.ok ? 'text-green-700' : 'text-gray-500'}`}>
                  <span>{c.ok ? '✓' : '○'}</span> {c.label}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      )}

      {/* ---------------- DETAILS ---------------- */}
      {tab === 'details' && (
        <Card>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Author">
              <select value={authorId} onChange={(e) => setAuthorId(e.target.value)} className={input}>
                <option value="">— none —</option>
                {authors.map((a) => (
                  <option key={a._id} value={a._id}>{a.name}</option>
                ))}
              </select>
            </Field>
            <Field label="Tags" hint="Comma separated.">
              <Text value={tags} onChange={(e) => setTags(e.target.value)} />
            </Field>
          </div>

          <Field label="Categories">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const on = categoryIds.includes(c._id);
                return (
                  <button
                    key={c._id}
                    type="button"
                    onClick={() =>
                      setCategoryIds(on ? categoryIds.filter((x) => x !== c._id) : [...categoryIds, c._id])
                    }
                    className={`rounded-full px-3 py-1 text-xs font-medium border ${
                      on
                        ? 'bg-primaryBlue text-white border-primaryBlue'
                        : 'bg-white text-gray-600 border-gray-300 hover:border-primaryBlue'
                    }`}
                  >
                    {c.title}
                  </button>
                );
              })}
              {categories.length === 0 && (
                <p className="text-xs text-gray-500">No categories yet — add one on the Categories page.</p>
              )}
            </div>
          </Field>

          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
            Feature on the blog index
          </label>
        </Card>
      )}
    </div>
  );
}
