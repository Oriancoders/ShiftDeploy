/**
 * Schedules the blog programme: four posts a week, on random days, at a random
 * time between 07:30 and 11:30 UK time. The random choices are seeded, so
 * re-running the script gives the same dates.
 *
 *   node scripts/blog/schedule.mjs            dry run: checks everything, writes nothing
 *   node scripts/blog/schedule.mjs --apply    writes posts and the calendar to Sanity
 *
 * How auto-publishing works: a post is saved with status "published" and a
 * future publishedAt. The public site only shows posts whose publishedAt has
 * passed (PUBLIC_POST_FILTER in src/lib/sanity/publicContent.js), and the blog
 * pages revalidate every 30-60 minutes, so each post appears on its own day
 * without anyone pressing a button. /admin/insights shows these as "scheduled".
 *
 * Tracking: every post gets a `contentPlan` object (order, date, keyword numbers
 * from BLOG-KEYWORDS-2026-09-26.md, cluster), and one `contentCalendar` document
 * (_id content-calendar-2026) lists the whole programme.
 * `node scripts/blog/status.mjs` prints what is live and what is still queued.
 */
import { sanity, key, expandBody, coverSvg, AUTHORS, authorFor } from './lib.mjs';
import p1 from './posts-01-costs.mjs';
import p2 from './posts-02-receptionist-health.mjs';
import p3 from './posts-03-receptionist-trades.mjs';
import p4 from './posts-04-booking.mjs';
import p5 from './posts-05-more-customers.mjs';
import p6 from './posts-06-google.mjs';
import p7 from './posts-07-crm.mjs';
import { withExtras } from './extras.mjs';

const APPLY = process.argv.includes('--apply');
const START = '2026-09-28';
const CALENDAR_ID = 'content-calendar-2026';

/* Already in Sanity: the WhatsApp guide (live) and the eight section F drafts. */
const LIVE = { 'post-whatsapp-business-api-guide': { slug: 'whatsapp-business-api-guide', keywords: [], cluster: 'WhatsApp', focusKeyword: 'WhatsApp Business API', date: '2026-09-26' } };
const DRAFTS = {
  'post-how-much-does-a-website-cost': { keywords: [89], cluster: 'Websites' },
  'post-marketing-for-dental-practice': { keywords: [93, 53], cluster: 'Marketing' },
  'post-website-not-getting-leads': { keywords: [92, 68], cluster: 'Websites' },
  'post-marketing-for-plumbers': { keywords: [95, 59, 60], cluster: 'Marketing' },
  'post-marketing-for-aesthetic-clinic': { keywords: [94, 56], cluster: 'Marketing' },
  'post-website-design-for-tradesmen': { keywords: [91], cluster: 'Websites' },
  'post-marketing-for-physiotherapy-clinic': { keywords: [96, 55], cluster: 'Marketing' },
  'post-average-cost-of-a-website': { keywords: [90], cluster: 'Websites' },
};

/* Publishing order. Every post links only to posts earlier in this list (checked below). */
const ORDER = [
  'post-how-much-does-an-ai-receptionist-cost',
  'post-how-much-does-a-website-cost',
  'post-ai-receptionist-for-dentists',
  'post-how-to-rank-higher-on-google-maps',
  'post-how-to-reduce-no-shows',
  'post-virtual-receptionist-cost',
  'post-marketing-for-dental-practice',
  'post-why-is-my-business-not-showing-on-google-maps',
  'post-website-design-for-tradesmen',
  'post-ai-receptionist-for-tradesmen',
  'post-marketing-for-plumbers',
  'post-ai-receptionist-for-plumbers',
  'post-marketing-for-aesthetic-clinic',
  'post-ai-receptionist-for-aesthetic-clinics',
  'post-how-to-get-more-google-reviews',
  'post-24-hour-answering-service',
  'post-website-not-getting-leads',
  'post-ai-receptionist-for-clinics',
  'post-booking-system-for-dental-practice',
  'post-local-seo-cost',
  'post-marketing-for-physiotherapy-clinic',
  'post-ai-receptionist-for-physiotherapy',
  'post-whatsapp-business-api-provider',
  'post-ai-receptionist-for-salons',
  'post-qr-code-for-google-reviews',
  'post-how-to-get-more-customers-for-my-business',
  'post-ai-receptionist-for-electricians',
  'post-booking-system-for-physio',
  'post-how-to-get-my-business-on-google-maps',
  'post-online-booking-system-cost',
  'post-google-reviews-for-dental-practices',
  'post-whatsapp-chatbot-for-business',
  'post-how-to-get-more-work-as-an-electrician',
  'post-booking-system-for-salons',
  'post-how-to-reduce-patient-no-shows',
  'post-local-seo-for-trades',
  'post-ai-receptionist-for-cleaning-business',
  'post-how-to-get-more-cleaning-customers',
  'post-average-cost-of-a-website',
  'post-how-to-get-more-work-builders-roofers',
  'post-whatsapp-for-clinics',
  'post-appointment-reminder-text-examples',
  'post-ai-receptionist-for-vets',
  'post-how-to-get-more-patients-in-your-clinic',
  'post-ai-receptionist-for-gyms',
  'post-how-to-get-more-gym-members',
  'post-ai-receptionist-for-restaurants',
  'post-how-to-get-more-customers-for-my-restaurant',
  'post-ai-receptionist-for-accountants',
  'post-how-to-get-more-accounting-clients',
  'post-how-to-get-more-clients-for-beauty-salon',
  'post-ai-receptionist-for-garages',
  'post-ai-receptionist-for-estate-agents',
  'post-booking-system-for-tradespeople',
  'post-how-to-get-chatgpt-to-recommend-my-business',
  'post-crm-for-tradesmen',
  'post-ai-automation-for-dental-practices',
  'post-crm-for-beauty-salon',
  'post-booking-system-for-aesthetics',
];

/* Seeded random numbers, so the schedule is stable between runs. */
function rng(seed) {
  let s = seed >>> 0;
  return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 2 ** 32);
}
const POSTS_PER_WEEK = 4;

/* Four random days in each Monday-to-Sunday week, starting with START's week. */
function scheduleSlots(count) {
  const rand = rng(20260928);
  const slots = [];
  for (let week = 0; slots.length < count; week++) {
    const days = [0, 1, 2, 3, 4, 5, 6];
    for (let i = days.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [days[i], days[j]] = [days[j], days[i]];
    }
    for (const d of days.slice(0, POSTS_PER_WEEK).sort((a, b) => a - b)) {
      if (slots.length < count) slots.push({ day: addDays(START, week * 7 + d), minutes: 450 + Math.floor(rand() * 240) });
    }
  }
  return slots;
}

/* Local UK time to UTC: BST (UTC+1) until 25 October 2026, then GMT until 28 March 2027. */
function publishAt({ day, minutes }) {
  const bst = day < '2026-10-25' || day >= '2027-03-28';
  const total = minutes - (bst ? 60 : 0);
  const hh = String(Math.floor(total / 60)).padStart(2, '0');
  const mm = String(total % 60).padStart(2, '0');
  return `${day}T${hh}:${mm}:00.000Z`;
}
function addDays(iso, n) {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

function toDoc(p, heroRef, when, plan) {
  return {
    _id: p.id,
    _type: 'post',
    title: p.title,
    slug: { _type: 'slug', current: p.slug },
    status: 'published',
    publishedAt: when,
    updatedAt: when,
    featured: false,
    excerpt: p.excerpt,
    mainImage: { _type: 'image', asset: { _type: 'reference', _ref: heroRef }, alt: p.coverAlt },
    author: { _type: 'reference', _ref: authorFor(plan.cluster) },
    categories: p.cats.map((ref) => ({ _type: 'reference', _ref: ref, _key: key() })),
    tags: p.tags,
    schemaType: 'BlogPosting',
    body: expandBody(withExtras(p.slug, p.body)),
    directAnswer: { question: p.direct[0], answer: p.direct[1] },
    keyTakeaways: { title: 'Key takeaways', points: p.takeaways },
    faqSection: {
      title: 'Frequently asked questions',
      items: p.faqs.map(([question, answer], i) => ({ _key: key(), question, answer, ...(i === 0 ? { isPrimary: true } : {}) })),
    },
    citations: p.citations,
    entities: [{ _key: key(), name: 'ShiftDeploy', type: 'Organization', sameAs: 'https://shiftdeploy.com' }],
    speakable: { enabled: true, cssSelectors: ['.direct-answer', '.key-takeaways'] },
    seo: {
      seoTitle: p.seoTitle,
      seoDescription: p.seoDescription,
      focusKeyword: p.focusKeyword,
      secondaryKeywords: p.secondaryKeywords,
      searchIntent: 'commercial',
      funnelStage: p.stage,
      targetAudience: 'Owners of clinics, trades and other local service businesses in the UK.',
    },
    contentPlan: plan,
  };
}

const internalLinks = (blocks) =>
  blocks.flatMap((b) => (b.markDefs || []).map((m) => m.href)).filter((h) => h?.startsWith('/insights/')).map((h) => h.slice('/insights/'.length));

async function main() {
  const client = sanity();
  const specs = new Map([...p1, ...p2, ...p3, ...p4, ...p5, ...p6, ...p7].map((p) => [p.id, p]));

  /* ---- checks ---- */
  const problems = [];
  const all = new Set([...specs.keys(), ...Object.keys(DRAFTS)]);
  for (const id of all) if (!ORDER.includes(id)) problems.push(`not scheduled: ${id}`);
  for (const id of ORDER) if (!all.has(id)) problems.push(`unknown id in ORDER: ${id}`);
  if (new Set(ORDER).size !== ORDER.length) problems.push('duplicate id in ORDER');

  const slugs = new Set();
  for (const p of specs.values()) {
    if (slugs.has(p.slug)) problems.push(`duplicate slug: ${p.slug}`);
    slugs.add(p.slug);
    if (p.seoTitle.length > 60) problems.push(`SEO title over 60 chars (${p.seoTitle.length}): ${p.slug}`);
    if (p.seoDescription.length > 160) problems.push(`SEO description over 160 chars (${p.seoDescription.length}): ${p.slug}`);
  }

  const drafts = await client.fetch('*[_id in $ids]{_id, status, "slug": slug.current, body, "focusKeyword": seo.focusKeyword}', { ids: Object.keys(DRAFTS) });
  const draftById = new Map(drafts.map((d) => [d._id, d]));
  for (const id of Object.keys(DRAFTS)) if (!draftById.has(id)) problems.push(`draft missing in Sanity: ${id}`);

  const slugOf = (id) => specs.get(id)?.slug || draftById.get(id)?.slug;
  const position = new Map(ORDER.map((id, i) => [slugOf(id), i]));
  const liveSlugs = new Set(Object.values(LIVE).map((l) => l.slug));
  ORDER.forEach((id, i) => {
    const blocks = specs.has(id) ? expandBody(withExtras(specs.get(id).slug, specs.get(id).body)) : draftById.get(id)?.body || [];
    for (const target of internalLinks(blocks)) {
      if (liveSlugs.has(target)) continue;
      if (!position.has(target)) problems.push(`${slugOf(id)} links to unknown post: ${target}`);
      else if (position.get(target) >= i) problems.push(`${slugOf(id)} (day ${i + 1}) links to ${target} (day ${position.get(target) + 1}), which isn't live yet`);
    }
  });

  const covered = new Set([...specs.values()].flatMap((p) => p.keywords).concat(Object.values(DRAFTS).flatMap((d) => d.keywords)));
  const missing = Array.from({ length: 100 }, (_, i) => i + 1).filter((n) => !covered.has(n));
  if (missing.length) problems.push(`keywords not covered: ${missing.join(', ')}`);

  if (problems.length) {
    console.error('Problems found, nothing written:\n  ' + problems.join('\n  '));
    process.exit(1);
  }

  /* ---- plan ---- */
  const slots = scheduleSlots(ORDER.length);
  const entries = ORDER.map((id, i) => {
    const slot = slots[i];
    const day = slot.day;
    const spec = specs.get(id);
    const meta = spec || DRAFTS[id];
    return {
      _key: key(),
      order: i + 1,
      date: day,
      publishAt: publishAt(slot),
      postId: id,
      slug: slugOf(id),
      title: spec?.title,
      focusKeyword: spec?.focusKeyword || draftById.get(id)?.focusKeyword,
      keywordNumbers: meta.keywords,
      cluster: meta.cluster,
      author: authorFor(meta.cluster),
      source: spec ? 'new' : 'draft',
    };
  });

  console.log(`${entries.length} posts, ${entries[0].date} to ${entries.at(-1).date}, four a week on random days, 07:30-11:30 UK time. All 100 keywords covered.`);
  for (const e of entries) console.log(`${String(e.order).padStart(2)}  ${e.date}  ${e.publishAt.slice(11, 16)}Z  ${e.slug}`);

  if (!APPLY) {
    console.log('\nDry run. Re-run with --apply to write to Sanity.');
    return;
  }

  /* ---- write ---- */
  for (const a of Object.values(AUTHORS)) await client.createOrReplace(a);
  for (const e of entries) {
    const plan = { order: e.order, scheduledFor: e.publishAt, keywordNumbers: e.keywordNumbers, cluster: e.cluster, calendar: CALENDAR_ID };
    if (e.source === 'draft') {
      await client.patch(e.postId).set({ status: 'published', publishedAt: e.publishAt, updatedAt: e.publishAt, contentPlan: plan, author: { _type: 'reference', _ref: authorFor(plan.cluster) } }).commit();
    } else {
      const p = specs.get(e.postId);
      const existing = await client.fetch('*[_id == $id][0]{"hero": mainImage.asset._ref}', { id: p.id });
      let heroRef = existing?.hero;
      if (!heroRef) {
        const asset = await client.assets.upload('image', Buffer.from(coverSvg(p.cover)), { filename: `${p.slug}.svg`, contentType: 'image/svg+xml' });
        heroRef = asset._id;
      }
      await client.createOrReplace(toDoc(p, heroRef, e.publishAt, plan));
    }
    console.log(`scheduled ${e.date}  ${e.slug}`);
  }

  await client.createOrReplace({
    _id: CALENDAR_ID,
    _type: 'contentCalendar',
    title: 'Blog programme, Sept 2026 to Jan 2027',
    keywordPlan: 'BLOG-KEYWORDS-2026-09-26.md',
    cadence: 'Four posts a week on random days, between 07:30 and 11:30 UK time',
    createdAt: new Date().toISOString(),
    alreadyLive: Object.entries(LIVE).map(([postId, l]) => ({ _key: key(), postId, slug: l.slug, date: l.date, focusKeyword: l.focusKeyword, cluster: l.cluster })),
    entries: entries.map((e) => ({ ...e, post: { _type: 'reference', _ref: e.postId, _weak: true } })),
  });
  console.log(`\nCalendar saved to Sanity as ${CALENDAR_ID}.`);
}

main().catch((err) => {
  console.error('\nFailed:', err.message);
  process.exit(1);
});
