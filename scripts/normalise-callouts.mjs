/**
 * Converts string-valued callout content to Portable Text.
 *
 * The renderers now tolerate both shapes, but the six original posts store
 * callout content as Portable Text and only the two seeded ones use a plain
 * string. One shape across the dataset is worth having: it keeps future
 * renderers honest and means the editor round-trip has one less special case.
 *
 *   node scripts/normalise-callouts.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const env = {};
for (const line of fs.readFileSync(path.join(root, '.env.local'), 'utf8').split(/\r?\n/)) {
  const m = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
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

let n = 0;
const key = () => `c${(n++).toString(36)}${Math.random().toString(36).slice(2, 6)}`;

const toPortableText = (text) =>
  String(text)
    .split(/\n{2,}/)
    .map((para) => para.trim())
    .filter(Boolean)
    .map((para) => ({
      _type: 'block',
      _key: key(),
      style: 'normal',
      markDefs: [],
      children: [{ _type: 'span', _key: key(), text: para, marks: [] }],
    }));

const posts = await client.fetch('*[_type=="post" && count(body[_type=="callout"]) > 0]{_id,title,body}');
let touched = 0;

for (const post of posts) {
  let changed = false;
  const body = post.body.map((b) => {
    if (b._type !== 'callout' || typeof b.content !== 'string') return b;
    changed = true;
    return { ...b, content: toPortableText(b.content) };
  });

  if (!changed) continue;
  await client.patch(post._id).set({ body }).commit();
  touched++;
  console.log(`  converted  ${post.title.slice(0, 55)}`);
}

console.log(`\n${touched} post(s) updated.`);

const left = await client.fetch(
  'count(*[_type=="post"].body[_type=="callout" && !defined(content[0]._type)])'
);
console.log(`String-valued callouts remaining: ${left ?? 0}`);
