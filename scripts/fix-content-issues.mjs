/**
 * Two editorial fixes found while reading the legacy posts.
 *
 * 1. "Why your dental website is losing patients" contains three paragraphs
 *    beginning "Image placeholder:" - notes to a designer that were never
 *    replaced, and which currently render to readers as body copy. Each is
 *    swapped for a real diagram matching the description it carried.
 *
 * 2. The INP post's focusKeyword holds ~30 comma-less phrases. That field is
 *    meant for one target phrase; a dump of thirty is keyword stuffing and
 *    dilutes rather than helps. Split into one focus keyword plus secondary
 *    and semantic lists.
 *
 *   node scripts/fix-content-issues.mjs
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
});

const DENTAL_POST = '1df07e7c-a2f8-4db6-99be-00fce6c0978b';
const INP_POST = 'c57f6847-213a-47df-b544-cf6752119b63';

/* Each placeholder _key, and the diagram that replaces it. */
const REPLACEMENTS = [
  {
    key: '3ec8abeb71a9',
    file: 'desktop-vs-mobile.svg',
    filename: 'dental-website-desktop-vs-mobile-load.svg',
    alt: 'Side by side comparison of a dental website fully rendered on a desktop and the same site on a mobile phone at 2.8 seconds with the hero image still blank and the booking button unpainted',
    caption: 'The same site, the same moment. What the owner signs off is not what the patient gets.',
  },
  {
    key: '4f2a7dbc838f',
    file: 'cwv-metrics.svg',
    filename: 'dental-website-core-web-vitals-mobile.svg',
    alt: 'Core Web Vitals for a typical dental website on mobile: LCP 4.2 seconds, INP 340 milliseconds and CLS 0.24, all rated poor, each with a note on what the patient experiences',
    caption: 'A typical practice site on mobile. Each metric, and what it feels like to the patient.',
  },
  {
    key: 'c97daefab4ee',
    file: 'patient-journey-dropoff.svg',
    filename: 'patient-journey-dropoff-paid-traffic.svg',
    alt: 'Funnel from 1000 paid ad clicks down to 240 confirmed bookings, with the largest single loss of 470 visitors occurring before the landing page renders',
    caption: 'The first drop-off is larger than the other three combined.',
  },
];

async function uploadSvg(file, filename) {
  const buf = fs.readFileSync(path.join(root, 'scripts', 'assets', file));
  const asset = await client.assets.upload('image', buf, {
    filename,
    contentType: 'image/svg+xml',
  });
  return asset._id;
}

async function fixPlaceholders() {
  const doc = await client.fetch('*[_id == $id][0]{_id, body}', { id: DENTAL_POST });
  if (!doc) {
    console.log('  dental post not found, skipping');
    return;
  }

  const body = [...doc.body];
  let changed = 0;

  for (const r of REPLACEMENTS) {
    const idx = body.findIndex((b) => b._key === r.key);
    if (idx === -1) {
      console.log(`  skip   ${r.key} (already replaced)`);
      continue;
    }

    const assetRef = await uploadSvg(r.file, r.filename);

    body[idx] = {
      _type: 'imageBlock',
      _key: r.key,
      image: { _type: 'image', asset: { _type: 'reference', _ref: assetRef }, alt: r.alt },
      alt: r.alt,
      caption: r.caption,
      width: 'wide',
      alignment: 'center',
      rounded: true,
    };
    changed++;
    console.log(`  image  ${r.filename}`);
  }

  if (changed) {
    await client.patch(DENTAL_POST).set({ body, updatedAt: new Date().toISOString() }).commit();
    console.log(`  patched ${changed} placeholder(s) into real diagrams`);
  }
}

async function fixKeywords() {
  const doc = await client.fetch('*[_id == $id][0]{_id, focusKeyword, seo}', { id: INP_POST });
  if (!doc) {
    console.log('  INP post not found, skipping');
    return;
  }

  await client
    .patch(INP_POST)
    .set({
      // One target phrase, as the field intends.
      focusKeyword: 'INP booking flow',
      'seo.focusKeyword': 'INP booking flow',
      'seo.secondaryKeywords': [
        'high INP booking page',
        'slow booking flow',
        'booking page not converting',
        'booking form friction',
      ],
      'seo.semanticKeywords': [
        'Interaction to Next Paint',
        'Core Web Vitals',
        'main thread blocking',
        'date picker abandonment',
        'mobile booking experience',
        'JavaScript long tasks',
      ],
      updatedAt: new Date().toISOString(),
    })
    .commit();

  const before = String(doc.focusKeyword || '').trim().split(/\s+/).length;
  console.log(`  focusKeyword: ${before} words -> "INP booking flow"`);
  console.log('  overflow split into secondary and semantic keyword lists');
}

async function main() {
  console.log('Replacing image placeholders…');
  await fixPlaceholders();

  console.log('\nFixing keyword stuffing…');
  await fixKeywords();

  console.log('\nVerifying…');
  const left = await client.fetch(
    `count(*[_type=="post"][].body[_type=="block"][string::startsWith(
      array::join(children[].text, ""), "Image placeholder")])`
  );
  console.log(`  remaining "Image placeholder" blocks: ${left ?? 0}`);
}

main().catch((err) => {
  console.error('\nFailed:', err.message);
  process.exit(1);
});
