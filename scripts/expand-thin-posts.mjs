/**
 * Expands the two seeded posts from ~350 words to match the 1,400-2,200 word
 * baseline of the rest of the blog.
 *
 * They already carry the full AI-SEO layer, which on 350 words of body is the
 * exact "schema as costume" pattern that gets discounted. The structure was
 * fine - headings, table, stats, callout, CTA all in sensible places - so this
 * inserts substance into the existing sections rather than rebuilding them.
 *
 * Non-text blocks (image, stats, table, callout, prosAndCons, faq, cta) are
 * preserved in place by _key, so nothing already verified gets disturbed.
 *
 *   node scripts/expand-thin-posts.mjs
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
const key = () => `x${(n++).toString(36)}${Math.random().toString(36).slice(2, 6)}`;

/** Markdown -> Portable Text. Mirrors src/lib/sanity/markdown.js. */
function md(text) {
  const blocks = [];
  let para = [];

  const inline = (s) => {
    const children = [];
    const markDefs = [];
    const linkRe = /\[([^\]]+)\]\(([^)\s]+)\)/g;
    let last = 0;
    const segs = [];
    let m;
    while ((m = linkRe.exec(s)) !== null) {
      if (m.index > last) segs.push({ text: s.slice(last, m.index) });
      segs.push({ text: m[1], href: m[2] });
      last = m.index + m[0].length;
    }
    if (last < s.length) segs.push({ text: s.slice(last) });

    for (const seg of segs) {
      let linkKey;
      if (seg.href) {
        linkKey = key();
        markDefs.push({ _type: 'link', _key: linkKey, href: seg.href });
      }
      for (const part of seg.text.split(/(\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean)) {
        const marks = linkKey ? [linkKey] : [];
        let t = part;
        if (part.startsWith('***') && part.endsWith('***')) { marks.push('strong', 'em'); t = part.slice(3, -3); }
        else if (part.startsWith('**') && part.endsWith('**')) { marks.push('strong'); t = part.slice(2, -2); }
        else if (part.startsWith('*') && part.endsWith('*')) { marks.push('em'); t = part.slice(1, -1); }
        children.push({ _type: 'span', _key: key(), text: t, marks });
      }
    }
    if (!children.length) children.push({ _type: 'span', _key: key(), text: '', marks: [] });
    return { children, markDefs };
  };

  const flush = () => {
    if (!para.length) return;
    const t = para.join(' ').trim();
    para = [];
    if (!t) return;
    blocks.push({ _type: 'block', _key: key(), style: 'normal', ...inline(t) });
  };

  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    const h = /^(#{2,4})\s+(.*)$/.exec(line);
    const b = /^[-*]\s+(.*)$/.exec(line);
    const nm = /^\d+[.)]\s+(.*)$/.exec(line);
    const q = /^>\s?(.*)$/.exec(line);
    if (h) { flush(); blocks.push({ _type: 'block', _key: key(), style: `h${h[1].length}`, ...inline(h[2]) }); }
    else if (b) { flush(); blocks.push({ _type: 'block', _key: key(), style: 'normal', listItem: 'bullet', level: 1, ...inline(b[1]) }); }
    else if (nm) { flush(); blocks.push({ _type: 'block', _key: key(), style: 'normal', listItem: 'number', level: 1, ...inline(nm[1]) }); }
    else if (q) { flush(); blocks.push({ _type: 'block', _key: key(), style: 'blockquote', ...inline(q[1]) }); }
    else para.push(line);
  }
  flush();
  return blocks;
}

/** Pull the existing non-text blocks out by _type so we can slot them back in. */
function pick(body, type, nth = 0) {
  return body.filter((b) => b._type === type)[nth];
}

/* ------------------------------------------------------------------ */
/* POST 1 - booking page LCP                                            */
/* ------------------------------------------------------------------ */

function buildPost1(old) {
  const image = pick(old, 'imageBlock');
  const stats = pick(old, 'stats');
  const table = pick(old, 'table');
  const callout = pick(old, 'callout');
  const cta = pick(old, 'cta');

  return [
    ...md(`Most practice owners are told their website is "slow" and handed a
list of technical fixes. That framing loses money, because it treats a booking
page like a performance problem when it is a revenue problem with a
performance cause.

The distinction matters because it changes who owns the decision. A
performance problem gets queued behind other development work. A revenue
problem gets scheduled.`),

    ...md(`Here is what the number actually means. Largest Contentful Paint is
the moment the biggest thing on screen finishes rendering. On a booking page
that is almost always the hero image or the first form field. Until it paints,
the patient is looking at a blank rectangle and deciding whether you are worth
the wait.

That patient is not browsing. They found you, read enough to be interested,
and clicked the one button that leads to a booking. Whatever they experience
next is applied to the highest-intent traffic your site receives.`),

    image,

    ...md(`## Why the hero image is almost always the culprit

In the audits we run, the single largest contributor to a failing LCP is not
the server and it is not the framework. It is one oversized image, uploaded at
whatever resolution the camera produced, served at that size to every device.

A 6 MB photo does not become a 6 MB problem on desktop broadband. It becomes a
6 MB problem on a phone on 4G in a car park, which is exactly where someone
books a dental appointment.

The reason it survives review is that nobody sees it. The practice owner opens
the site on an office laptop over fast wifi with the image already cached. The
designer checks it on a retina display. The one context nobody tests is a
mid-range Android on mobile data with an empty cache, which is the context most
bookings actually happen in.

There is a second-order effect worth knowing. A large hero does not only delay
itself. It competes for bandwidth with the CSS and fonts the page needs before
it can render anything at all, so an oversized image pushes back the paint time
of text that had nothing to do with it.`),

    stats,

    ...md(`## The four fixes, in the order worth doing them

Ordering matters here. Teams routinely start with the hardest change and never
reach the one that would have fixed it. We have watched practices commission a
full redesign, keep the same hosting and the same images, and report no change
in bookings, because neither of the two things actually causing the delay was
touched.`),

    table,

    ...md(`Read that table as a sequence rather than a menu. The first two rows
are usually a single afternoon of work and typically recover more than the
bottom two combined. Hosting is last not because it never matters, but because
it is the most expensive change and rarely the binding constraint.

There is one honest exception. If your Time to First Byte is above 800ms on
mobile, the server is genuinely the floor and no amount of image work will get
you under 2.5 seconds. Measure TTFB first; it tells you whether the rest of the
list is worth starting.`),

    callout,

    ...md(`## How to measure it properly

Three mistakes make most self-audits useless.

**Testing the homepage.** The homepage is optimised first, cached hardest, and
carries none of the booking widget's payload. It tells you almost nothing about
the page where the money is. Test the booking URL specifically.

**Reading the desktop tab.** PageSpeed Insights opens on mobile by default now,
but the desktop number is the one people quote because it is kinder. If your
mobile and desktop LCP differ by more than two seconds, you have a
mobile-specific rendering problem and the desktop score is actively misleading.

**Trusting the lab score.** The score at the top of PageSpeed Insights is a
simulation. The Core Web Vitals panel below it, when present, is field data
from real Chrome users on your site. When the two disagree, the field data is
what Google uses.`),

    ...md(`## What this is worth

A booking page is the last step before revenue. Every 100ms of delay on it is
applied to the visitors closest to converting, which is why the arithmetic is
worse than a general "site speed" number suggests.

Take a practice getting 400 booking-page visits a month, converting at 8%, with
an average first-appointment value of GBP 120. That is GBP 3,840 a month. The
research consensus puts conversion loss in the region of a few percent per
additional second of load. On a page that is 1.6 seconds over the threshold,
recovering even half of that is the difference between a page that pays for
itself and one that does not.

We are deliberately not quoting a single headline percentage here, because the
figure varies enormously by sector and the widely-shared ones are older than
they look. Measure your own page, then measure it again after the hero fix.

The number that should worry you is not in your analytics at all. A session
that ends before the booking interface renders looks identical to a visitor who
changed their mind. It is recorded as a bounce, attributed to nothing, and
disappears into an average.`),

    ...md(`## What good looks like

- Largest Contentful Paint under 2.5 seconds on mobile, closer to 2 on the
  booking page specifically
- Time to First Byte under 600ms, so the rest of the budget is spendable
- The hero image served in AVIF or WebP at the size it actually renders
- No lazy-loading attribute anywhere near the largest above-the-fold element
- A booking widget that is not waiting on chat, reviews and analytics to
  finish first

None of this is visible to a patient as a metric. It is visible as the page
appearing when they expected it to.`),

    cta,
  ].filter(Boolean);
}

/* ------------------------------------------------------------------ */
/* POST 2 - image pipeline                                              */
/* ------------------------------------------------------------------ */

function buildPost2(old) {
  const image = pick(old, 'imageBlock');
  const callout = pick(old, 'callout');
  const pros = pick(old, 'prosAndCons');
  const faq = pick(old, 'faq');
  const cta = pick(old, 'cta');

  return [
    ...md(`Every image problem on a content site comes from the same place: the
person uploading is asked to make decisions they have no way to make well. What
format? What dimensions? What quality? Compress it first, or upload the
original?

The fix is not to train the editor. It is to remove the decision.

This is a description of the pipeline behind this blog, including the parts
that were wrong the first time.`),

    image,

    ...md(`## Three stages, none of them the editor's problem

**In the browser, before upload.** A 6 MB phone photo is drawn to a canvas,
capped at 2400px on its longest edge, and re-encoded to WebP at quality 0.82.
This happens client-side, so the oversized original never crosses the network.
If the result comes out larger than the input, which happens with
already-optimised files, we keep the original. SVG and GIF are passed through
untouched, because canvas re-encoding would rasterise a vector and flatten an
animation.

**On the CDN, at rest.** One asset is stored. Sanity records its intrinsic
width and height in the asset ID itself, which matters more than it sounds:
those dimensions are what let us set width and height on every img tag without
an extra request, and that is what prevents layout shift.

**At request time.** Sanity's auto=format inspects the browser's Accept header
and returns AVIF where supported, WebP otherwise, falling back to the original.
The srcset we emit offers eight widths from 320 to 1920, and the browser picks
using the sizes hint.`),

    callout,

    ...md(`## What actually moves the number

Four things, and they compound rather than substitute for each other.`),

    pros,

    ...md(`## The mistake we made, and what it cost

Our first version applied auto=format everywhere, including social share
images. That looked correct and was not.

Several of our cover images are SVG diagrams. auto=format leaves SVG as SVG,
because for a browser that is the right answer. No major social platform
renders SVG - Facebook, X, LinkedIn, Slack and WhatsApp all skip the preview
entirely - so every share of those posts appeared with no image at all. Google
Images does not index SVG either.

The failure was silent. Nothing errored, the pages scored well, and the only
symptom was a share card that looked like a bare link.

Two things came out of that. Social and schema images now force PNG rather than
negotiating, because a share card should not depend on a crawler's Accept
header. And format negotiation is right for the reading experience and wrong
for anything a third party consumes.`),

    ...md(`## Alt text, since it comes up every time

Alt text is not a keyword slot. It is what a screen reader announces and what
Google Images uses to understand the picture. "Mobile booking page with the
hero image still loading" is useful to both. "dental website speed dentist
booking fast" is useful to neither, and reads as spam.

Our editor treats a missing alt as a warning inline and blocks publishing a
post whose cover image has none. That is deliberate: an optional field with no
feedback is a field that stays empty.

The one case where empty alt is correct is a decorative image - an author
avatar sitting next to the author's name in text, for instance. Describing it
makes a screen reader announce the same information twice. Empty alt on
decoration is a decision; missing alt on content is an oversight.`),

    ...md(`## How to audit your own delivery

Fifteen minutes, no tooling beyond the browser.

1. Open DevTools, Network tab, filter to Img, throttle to Fast 4G, hard reload.
2. Sort by transfer size. Anything over 200 KB on a mobile viewport is a
   candidate.
3. Hover each image in the Elements panel. If the intrinsic size is more than
   twice the rendered size, you are shipping wasted pixels.
4. Check the Content-Type header. If it says image/jpeg on a Chrome request,
   no format negotiation is happening.
5. Find the largest above-the-fold image and confirm it has no loading="lazy".

The last one is the highest-value check on the list. Lazy-loading is applied
site-wide by most themes and plugins, and on the LCP element it delays the
exact paint that LCP measures.`),

    faq,
    cta,
  ].filter(Boolean);
}

/* ------------------------------------------------------------------ */

const TARGETS = [
  { id: 'post-booking-page-lcp-revenue', build: buildPost1 },
  { id: 'post-image-pipeline-decisions', build: buildPost2 },
];

for (const { id, build } of TARGETS) {
  const doc = await client.fetch('*[_id == $id][0]{_id,title,body}', { id });
  if (!doc) { console.log(`  skip  ${id} (not found)`); continue; }

  const before = doc.body.filter((b) => b._type === 'block')
    .map((b) => (b.children || []).map((c) => c.text).join('')).join(' ')
    .trim().split(/\s+/).length;

  const body = build(doc.body);
  await client.patch(id).set({ body, updatedAt: new Date().toISOString() }).commit();

  const after = body.filter((b) => b._type === 'block')
    .map((b) => (b.children || []).map((c) => c.text).join('')).join(' ')
    .trim().split(/\s+/).length;

  const kept = body.filter((b) => b._type !== 'block').length;
  console.log(`  ${before}w -> ${after}w  (${kept} rich blocks preserved)  ${doc.title.slice(0, 40)}`);
}

console.log('\nDone.');
