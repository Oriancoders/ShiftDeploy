/**
 * Merges the duplicate "ShiftDeploy Technical Team" author documents.
 *
 * Two exist: the original (has the photo, referenced by 5 posts, but no
 * jobTitle/bio/expertise/credentials/sameAs) and the one my seed script
 * created (all the E-E-A-T fields, referenced by 2 posts, no photo).
 *
 * Because the posts split across both, half the blog rendered a Person node
 * with no credentials and no sameAs - the signals were in the dataset but on
 * the wrong document.
 *
 * Keeps the original ID (more references, and it owns the image), copies the
 * rich fields onto it, repoints the 2 stragglers, deletes the duplicate.
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

const KEEP = '836dce1e-e110-4072-8f5f-9e6db71c4672';
const DROP = 'author-shiftdeploy-technical-team';

const rich = await client.fetch('*[_id == $id][0]', { id: DROP });
if (!rich) {
  console.log('Duplicate already removed, nothing to do.');
  process.exit(0);
}

await client.patch(KEEP).set({
  jobTitle: rich.jobTitle,
  bio: rich.bio,
  expertise: rich.expertise,
  credentials: rich.credentials,
  sameAs: rich.sameAs,
  slug: rich.slug,
}).commit();
console.log('Copied E-E-A-T fields onto the author with the photo.');

const strays = await client.fetch(
  '*[_type == "post" && author._ref == $id]{_id, title}', { id: DROP }
);
for (const p of strays) {
  await client.patch(p._id).set({ author: { _type: 'reference', _ref: KEEP } }).commit();
  console.log(`  repointed  ${p.title.slice(0, 50)}`);
}

await client.delete(DROP);
console.log('Deleted the duplicate.\n');

const check = await client.fetch(
  '*[_type=="author"]{_id,name,"posts":count(*[_type=="post" && references(^._id)]),"hasSameAs":defined(sameAs),"hasImg":defined(image)}'
);
for (const a of check) {
  console.log(`  ${a._id} | posts=${a.posts} | sameAs=${a.hasSameAs} | image=${a.hasImg}`);
}
