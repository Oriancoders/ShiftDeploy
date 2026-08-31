/**
 * Re-creates the seeded documents under public IDs.
 *
 * Why this is needed: the seed script used dotted IDs like
 * "post.lcp-booking-pages-revenue". Sanity treats a dot in an _id as a path
 * separator marking the document private, so those documents are readable with
 * a token but invisible to unauthenticated requests - which is exactly what the
 * public website makes. The posts existed and were "published", but the blog
 * could not see them.
 *
 * Fix: copy each to a plain hyphenated ID, repoint references, delete the old.
 *
 *   node scripts/fix-doc-ids.mjs
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
if (!env.SANITY_API_TOKEN) {
  console.error('SANITY_API_TOKEN is empty in .env.local');
  process.exit(1);
}

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: env.SANITY_API_TOKEN,
  perspective: 'raw',
});

/** old dotted id -> new public id */
const RENAMES = {
  'author.shiftdeploy-tech': 'author-shiftdeploy-technical-team',
  'category.web-performance': 'category-web-performance',
  'category.engineering': 'category-engineering',
  'post.lcp-booking-pages-revenue': 'post-booking-page-lcp-revenue',
  'post.image-pipeline-that-removes-decisions': 'post-image-pipeline-decisions',
};

/** Rewrite any _ref pointing at a renamed document. */
function repoint(value) {
  if (Array.isArray(value)) return value.map(repoint);
  if (value && typeof value === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      if (k === '_ref' && typeof v === 'string' && RENAMES[v]) out[k] = RENAMES[v];
      else out[k] = repoint(v);
    }
    return out;
  }
  return value;
}

async function main() {
  // Order matters: create the referenced docs (author, category) before the
  // posts that point at them, or the create fails on a missing reference.
  const order = [
    'author.shiftdeploy-tech',
    'category.web-performance',
    'category.engineering',
    'post.lcp-booking-pages-revenue',
    'post.image-pipeline-that-removes-decisions',
  ];

  const created = [];

  for (const oldId of order) {
    const doc = await client.fetch('*[_id == $id][0]', { id: oldId });
    if (!doc) {
      console.log(`  skip   ${oldId} (not found)`);
      continue;
    }

    const newId = RENAMES[oldId];
    // eslint-disable-next-line no-unused-vars
    const { _id, _rev, _createdAt, _updatedAt, ...rest } = doc;

    await client.createOrReplace({ ...repoint(rest), _id: newId });
    created.push({ oldId, newId, title: doc.title || doc.name });
    console.log(`  copied ${oldId}\n      -> ${newId}`);
  }

  // Delete the old dotted documents only after every copy succeeded, so a
  // failure part-way through never leaves the content unreachable.
  console.log('\nRemoving old dotted documents…');
  for (const { oldId } of [...created].reverse()) {
    await client.delete(oldId);
    console.log(`  deleted ${oldId}`);
  }

  console.log('\nVerifying public visibility…');
  const publicClient = createClient({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
    useCdn: false,
    perspective: 'published',
  });
  const count = await publicClient.fetch('count(*[_type == "post"])');
  console.log(`  posts visible without a token: ${count}`);
}

main().catch((err) => {
  console.error('\nFailed:', err.message);
  process.exit(1);
});
