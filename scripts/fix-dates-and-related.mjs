/**
 * Two content-graph fixes.
 *
 * 1. One post has no publishedAt at all, so datePublished is absent from its
 *    Article markup. Freshness is a citation signal for AI engines and a
 *    dateless page is harder to weigh, so it gets its _createdAt.
 *
 * 2. relatedPosts is empty on every post, so that section never renders and
 *    the internal link graph is thinner than it looks. Populated with the
 *    three most topically-similar posts, scored by shared categories first
 *    then shared tags, falling back to recency.
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

/* ---- 1. missing publishedAt ---- */
const dateless = await client.fetch(
  '*[_type=="post" && !defined(publishedAt)]{_id,title,_createdAt}'
);
for (const p of dateless) {
  await client.patch(p._id).set({ publishedAt: p._createdAt }).commit();
  console.log(`  dated  ${p._createdAt.slice(0, 10)}  ${p.title.slice(0, 46)}`);
}
if (!dateless.length) console.log('  every post already has publishedAt');

/* ---- 2. relatedPosts ---- */
const posts = await client.fetch(`*[_type=="post" && status=="published"]{
  _id, title, tags,
  "cats": categories[]._ref,
  "date": coalesce(publishedAt, _createdAt)
}`);

// Default params only cover undefined; GROQ returns null for absent arrays.
const overlap = (a, b) => (a || []).filter((x) => (b || []).includes(x)).length;

console.log('');
let linked = 0;
for (const post of posts) {
  const scored = posts
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
    relatedPosts: scored.map((s, i) => ({
      _type: 'reference',
      _ref: s.id,
      _key: `rel${i}`,
    })),
  }).commit();

  linked++;
  console.log(`  ${post.title.slice(0, 34).padEnd(36)} -> ${scored.map((s) => s.title.slice(0, 22)).join(' | ')}`);
}

console.log(`\n${linked} posts linked, ${linked * 3} new internal references.`);
