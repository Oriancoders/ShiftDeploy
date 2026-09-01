/**
 * Gives every post real categories and tags, then rebuilds relatedPosts.
 *
 * Six of the eight posts had no categories and no tags at all, which meant the
 * "related posts" scoring had nothing to score on and silently fell back to
 * recency - so the two newest posts appeared in almost every related list
 * regardless of subject. The tag filter on /insights was equally thin.
 *
 * Also splits "Web Performance, CRO Engineering" into two categories. A label
 * containing a comma is two topics wearing one coat: it cannot be filtered on
 * usefully and it emits a nonsense articleSection in the schema.
 *
 * Assignments below are from reading each post, not keyword matching.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const env = {};
for (const l of fs.readFileSync(path.join(root, '.env.local'), 'utf8').split(/\r?\n/)) {
  const m = /^([A-Z0-9_]+)=(.*)$/.exec(l.trim());
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}
if (!env.SANITY_API_TOKEN) { console.error('SANITY_API_TOKEN empty'); process.exit(1); }

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: env.SANITY_API_TOKEN,
});

/* ---------------- categories ---------------- */

const CATEGORIES = [
  {
    _id: 'category-web-performance',
    title: 'Web Performance',
    slug: 'web-performance',
    description: 'Core Web Vitals, load time, and what they cost in lost enquiries.',
    topicCluster: 'Performance',
    color: '#1D4ED8',
  },
  {
    _id: 'category-conversion',
    title: 'Conversion',
    slug: 'conversion',
    description: 'Turning existing traffic into booked appointments and enquiries.',
    topicCluster: 'Growth',
    color: '#C2410C',
  },
  {
    _id: 'category-engineering',
    title: 'Engineering',
    slug: 'engineering',
    description: 'How we build the things we ship.',
    topicCluster: 'Engineering',
    color: '#0F766E',
  },
  {
    _id: 'category-case-studies',
    title: 'Case Studies',
    slug: 'case-studies',
    description: 'Real audits and engagements, with the numbers we measured.',
    topicCluster: 'Evidence',
    color: '#6D28D9',
  },
];

/* ---------------- per-post assignments ---------------- */

const ASSIGN = {
  'Your Booking Page LCP Is a Revenue Number': {
    cats: ['category-web-performance', 'category-conversion'],
    tags: ['Core Web Vitals', 'LCP', 'Booking pages', 'Dental', 'Mobile'],
  },
  'Build an Image Pipeline That Removes Decisions': {
    cats: ['category-engineering', 'category-web-performance'],
    tags: ['Images', 'AVIF', 'WebP', 'Core Web Vitals', 'CMS'],
  },
  'LCP Above 3.5 Seconds on Booking Pages': {
    cats: ['category-web-performance', 'category-conversion'],
    tags: ['Core Web Vitals', 'LCP', 'TTFB', 'Booking pages', 'Dental', 'Hosting'],
  },
  'Why your dental website is losing patients': {
    cats: ['category-web-performance', 'category-conversion'],
    tags: ['Core Web Vitals', 'Mobile', 'Dental', 'Ad spend', 'CLS'],
  },
  'Google Ads Before Website Audit': {
    cats: ['category-case-studies', 'category-conversion'],
    tags: ['Google Ads', 'Landing pages', 'Dental', 'Audit'],
  },
  'How Slow Contact Form Submission Speed': {
    cats: ['category-conversion', 'category-web-performance'],
    tags: ['Forms', 'INP', 'Lead capture', 'Mobile', 'Conversion rate'],
  },
  'INP Above 200ms on Booking Flows': {
    cats: ['category-web-performance', 'category-conversion'],
    tags: ['INP', 'Core Web Vitals', 'Booking pages', 'JavaScript', 'Mobile'],
  },
  'Why Static Contact Forms Cannot Capture': {
    cats: ['category-conversion'],
    tags: ['Forms', 'Booking', 'Lead response', 'Scheduling', 'Med spa'],
  },
};

const matchFor = (title) =>
  Object.entries(ASSIGN).find(([k]) => title.includes(k))?.[1];

/* ---------------- run ---------------- */

console.log('Categories…');
for (const c of CATEGORIES) {
  await client.createOrReplace({
    _id: c._id,
    _type: 'category',
    title: c.title,
    slug: { _type: 'slug', current: c.slug },
    description: c.description,
    topicCluster: c.topicCluster,
    color: c.color,
  });
  console.log(`  ${c.title}`);
}

console.log('\nPosts…');
const posts = await client.fetch('*[_type=="post"]{_id,title}');
for (const p of posts) {
  const a = matchFor(p.title);
  if (!a) { console.log(`  SKIP (no rule)  ${p.title.slice(0, 46)}`); continue; }
  await client.patch(p._id).set({
    categories: a.cats.map((id, i) => ({ _type: 'reference', _ref: id, _key: `cat${i}` })),
    tags: a.tags,
  }).commit();
  console.log(`  ${a.cats.length} cats, ${a.tags.length} tags  ${p.title.slice(0, 44)}`);
}

/* ---------------- rebuild relatedPosts on real signal ---------------- */

console.log('\nRelated posts…');
const scored = await client.fetch(`*[_type=="post" && status=="published"]{
  _id, title, tags, "cats": categories[]._ref, "date": coalesce(publishedAt,_createdAt)
}`);
const overlap = (a, b) => (a || []).filter((x) => (b || []).includes(x)).length;

for (const post of scored) {
  const ranked = scored
    .filter((o) => o._id !== post._id)
    .map((o) => ({
      id: o._id,
      title: o.title,
      score: overlap(post.cats, o.cats) * 3 + overlap(post.tags, o.tags),
      date: o.date,
    }))
    .sort((a, b) => b.score - a.score || new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  await client.patch(post._id).set({
    relatedPosts: ranked.map((r, i) => ({ _type: 'reference', _ref: r.id, _key: `rel${i}` })),
  }).commit();

  console.log(`  ${post.title.slice(0, 32).padEnd(34)} -> ${ranked.map((r) => `${r.title.slice(0, 20)}(${r.score})`).join(' ')}`);
}

/* ---------------- retire the comma category ---------------- */

const legacy = '22b112b5-c2a0-4649-a5cd-e7b6b0d0d9cf';
const stillUsed = await client.fetch('count(*[_type=="post" && references($id)])', { id: legacy });
if (stillUsed === 0) {
  await client.delete(legacy);
  console.log('\nRemoved "Web Performance, CRO Engineering" (two topics in one label).');
} else {
  console.log(`\nLegacy category still referenced by ${stillUsed} post(s), left in place.`);
}

const memo = '8a6ab519-6101-4554-9b64-d1342149c7d6';
const memoUsed = await client.fetch('count(*[_type=="post" && references($id)])', { id: memo });
if (memoUsed === 0) {
  await client.delete(memo);
  console.log('Removed unused "Diagnostic Memo".');
}
