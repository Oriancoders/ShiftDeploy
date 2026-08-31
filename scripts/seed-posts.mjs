/**
 * Seeds two fully-formed posts, with their diagrams, into Sanity.
 *
 * Run once:  node scripts/seed-posts.mjs
 * Re-runnable: documents use fixed _ids, so a second run updates rather than
 * duplicating. Images are only uploaded if the post does not already have one.
 *
 * Needs SANITY_API_TOKEN (Editor role) in .env.local.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

/* ---- env ---- */
const env = {};
for (const line of fs.readFileSync(path.join(root, '.env.local'), 'utf8').split(/\r?\n/)) {
  const m = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
  if (m) env[m[1]] = m[2];
}

const token = env.SANITY_API_TOKEN;
if (!token) {
  console.error('\nSANITY_API_TOKEN is empty in .env.local.');
  console.error('Create one at manage.sanity.io -> insights -> API -> Tokens (Editor role).\n');
  process.exit(1);
}

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token,
});

/* ---- helpers ---- */
let k = 0;
const key = () => `s${(k++).toString(36)}${Math.random().toString(36).slice(2, 6)}`;

/** Minimal markdown -> Portable Text. Mirrors src/lib/sanity/markdown.js. */
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
    const n = /^\d+[.)]\s+(.*)$/.exec(line);
    const q = /^>\s?(.*)$/.exec(line);
    if (h) { flush(); blocks.push({ _type: 'block', _key: key(), style: `h${h[1].length}`, ...inline(h[2]) }); }
    else if (b) { flush(); blocks.push({ _type: 'block', _key: key(), style: 'normal', listItem: 'bullet', level: 1, ...inline(b[1]) }); }
    else if (n) { flush(); blocks.push({ _type: 'block', _key: key(), style: 'normal', listItem: 'number', level: 1, ...inline(n[1]) }); }
    else if (q) { flush(); blocks.push({ _type: 'block', _key: key(), style: 'blockquote', ...inline(q[1]) }); }
    else para.push(line);
  }
  flush();
  return blocks;
}

async function uploadAsset(file, filename) {
  const buf = fs.readFileSync(file);
  const asset = await client.assets.upload('image', buf, {
    filename,
    contentType: filename.endsWith('.svg') ? 'image/svg+xml' : 'image/png',
  });
  return asset._id;
}

const img = (ref, alt) => ({
  _type: 'image',
  asset: { _type: 'reference', _ref: ref },
  alt,
});

/* ---- shared refs ---- */
// IMPORTANT: no dots in these IDs. Sanity treats a dot in an _id as a path
// separator marking the document private, so a dotted document is readable
// with a token but invisible to the unauthenticated public site.
const AUTHOR_ID = 'author-shiftdeploy-technical-team';
const CAT_PERF = 'category-web-performance';
const CAT_ENG = 'category-engineering';

async function ensureSupporting() {
  await client.createOrReplace({
    _id: AUTHOR_ID,
    _type: 'author',
    name: 'ShiftDeploy Technical Team',
    slug: { _type: 'slug', current: 'shiftdeploy-technical-team' },
    jobTitle: 'Web Performance Engineers',
    bio:
      'The ShiftDeploy engineering team audits and rebuilds booking and enquiry ' +
      'flows for UK dental practices, clinics and service businesses. Every ' +
      'figure we publish comes from field data on sites we have measured.',
    expertise: [
      'Core Web Vitals',
      'Largest Contentful Paint',
      'Interaction to Next Paint',
      'Conversion rate optimisation',
      'Image delivery',
    ],
    credentials: [
      'Audited 100+ UK practice websites',
      'Specialists in mobile booking flow performance',
    ],
    sameAs: ['https://shiftdeploy.com', 'https://x.com/shiftdeploy'],
  });

  await client.createOrReplace({
    _id: CAT_PERF,
    _type: 'category',
    title: 'Web Performance',
    slug: { _type: 'slug', current: 'web-performance' },
    description: 'Core Web Vitals, load time, and what they cost in lost enquiries.',
    topicCluster: 'Performance',
    color: '#1D4ED8',
  });

  await client.createOrReplace({
    _id: CAT_ENG,
    _type: 'category',
    title: 'Engineering',
    slug: { _type: 'slug', current: 'engineering' },
    description: 'How we build the things we ship.',
    topicCluster: 'Engineering',
    color: '#0F766E',
  });
}

/* ================= POST 1 ================= */

const POST_1_BODY = (heroRef) => [
  ...md(`Most practice owners are told their website is "slow" and handed a
list of technical fixes. That framing loses money, because it treats a
booking page like a performance problem when it is a revenue problem with a
performance cause.`),

  ...md(`Here is what the number actually means. Largest Contentful Paint is
the moment the biggest thing on screen finishes rendering. On a booking page
that is almost always the hero image or the first form field. Until it paints,
the patient is looking at a blank rectangle and deciding whether you are worth
the wait.`),

  {
    _type: 'imageBlock',
    _key: key(),
    image: img(heroRef, 'Waterfall chart breaking a 4.1 second booking page load into server response, render-blocking CSS, hero image download, and decode time'),
    alt: 'Waterfall chart breaking a 4.1 second booking page load into server response, render-blocking CSS, hero image download, and decode time',
    caption: 'A real 4.1s booking page. The hero image alone is 1.6s of it.',
    width: 'wide',
    alignment: 'center',
    rounded: true,
  },

  ...md(`## Why the hero image is almost always the culprit

In the audits we run, the single largest contributor to a failing LCP is not
the server and it is not the framework. It is one oversized image, uploaded at
whatever resolution the camera produced, served at that size to every device.

A 6 MB photo does not become a 6 MB problem on desktop broadband. It becomes a
6 MB problem on a phone on 4G in a car park, which is exactly where someone
books a dental appointment.`),

  {
    _type: 'stats',
    _key: key(),
    layout: 'three',
    alignment: 'center',
    stats: [
      { _key: key(), _type: 'statItem', value: '2.5s', label: 'LCP threshold for "Good"', source: 'Google web.dev', sourceUrl: 'https://web.dev/articles/lcp' },
      { _key: key(), _type: 'statItem', value: '~38%', label: 'of pages where an image is the LCP element', source: 'HTTP Archive' },
      { _key: key(), _type: 'statItem', value: '4.1s', label: 'median LCP across the practice sites we audited', source: 'ShiftDeploy audits' },
    ],
  },

  ...md(`## The four fixes, in the order worth doing them

Ordering matters here. Teams routinely start with the hardest change and never
reach the one that would have fixed it.`),

  {
    _type: 'table',
    _key: key(),
    caption: 'Effort against impact, from the audits we have run',
    hasHeaderRow: true,
    rows: [
      { _key: key(), _type: 'row', cells: ['Fix', 'Typical LCP saved', 'Effort'] },
      { _key: key(), _type: 'row', cells: ['Resize and re-encode the hero to AVIF/WebP', '1.2-1.8s', 'Low'] },
      { _key: key(), _type: 'row', cells: ['Add srcset so phones get phone-sized files', '0.4-0.9s', 'Low'] },
      { _key: key(), _type: 'row', cells: ['Preload the hero, remove lazy-loading from it', '0.3-0.6s', 'Low'] },
      { _key: key(), _type: 'row', cells: ['Inline critical CSS, defer the rest', '0.4-1.1s', 'Medium'] },
      { _key: key(), _type: 'row', cells: ['Move to a faster host or edge cache', '0.2-0.7s', 'High'] },
    ],
  },

  {
    _type: 'callout',
    _key: key(),
    variant: 'warning',
    showIcon: true,
    title: 'The one that quietly undoes the rest',
    content:
      'Lazy-loading the hero image. It is applied site-wide by most plugins and themes, ' +
      'and on the LCP element it directly delays the paint it was meant to speed up. ' +
      'Lazy-load everything below the fold; never the hero.',
  },

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
they look. Measure your own page, then measure it again after the hero fix.`),

  {
    _type: 'cta',
    _key: key(),
    label: 'Get a free booking page audit',
    url: '/ContactUs',
    description: 'We will measure your LCP on real mobile hardware and tell you which of the four fixes applies.',
    placement: 'inline',
  },
];

const POST_1 = (heroRef) => ({
  _id: 'post-booking-page-lcp-revenue',
  _type: 'post',
  title: 'Your Booking Page LCP Is a Revenue Number, Not a Technical One',
  slug: { _type: 'slug', current: 'booking-page-lcp-is-a-revenue-number' },
  status: 'published',
  publishedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  featured: true,
  excerpt:
    'Largest Contentful Paint on a booking page is the moment a patient decides whether to wait. Here is where the seconds actually go, and the four fixes in the order worth doing them.',
  mainImage: img(heroRef, 'Waterfall chart breaking down a 4.1 second booking page load'),
  author: { _type: 'reference', _ref: AUTHOR_ID },
  categories: [{ _type: 'reference', _ref: CAT_PERF, _key: key() }],
  tags: ['Core Web Vitals', 'LCP', 'Booking pages', 'Dental marketing'],
  schemaType: 'BlogPosting',
  body: POST_1_BODY(heroRef),

  directAnswer: {
    question: 'What is a good LCP for a booking page?',
    answer:
      'A booking page should reach Largest Contentful Paint in under 2.5 seconds on a mobile connection. Above that, Google classes the page as needing improvement, and the visitor is staring at a blank area at the exact moment they were ready to book. Most failing pages are held up by one oversized hero image.',
    supportingStat: 'An image is the LCP element on roughly 38% of pages.',
    statSource: 'HTTP Archive Web Almanac',
    statSourceUrl: 'https://almanac.httparchive.org/',
  },

  keyTakeaways: {
    title: 'Key takeaways',
    points: [
      'LCP under 2.5 seconds on mobile is the threshold Google treats as Good.',
      'One oversized hero image is the most common single cause of a failing booking page LCP.',
      'Resizing and re-encoding the hero to AVIF or WebP typically recovers 1.2 to 1.8 seconds for very little work.',
      'Lazy-loading the hero image makes LCP worse, even though it is applied by default in most themes.',
      'Measure the booking page specifically, not the homepage, because that is where the revenue decision happens.',
    ],
  },

  faqSection: {
    title: 'Frequently asked questions',
    items: [
      {
        _key: key(),
        isPrimary: true,
        question: 'What is a good LCP score for a dental booking page?',
        answer:
          'Under 2.5 seconds on a mobile connection. Between 2.5 and 4 seconds Google classes the page as needing improvement, and above 4 seconds as poor. Booking pages deserve a stricter target than the rest of the site because the visitor is already at the point of converting.',
      },
      {
        _key: key(),
        question: 'Why is my homepage fast but my booking page slow?',
        answer:
          'Homepages are usually optimised first and often cached aggressively. Booking pages tend to carry a form widget, a calendar embed, or a third-party scheduler, each pulling its own scripts and fonts. They are also tested less often, so regressions go unnoticed.',
      },
      {
        _key: key(),
        question: 'Does lazy loading images improve LCP?',
        answer:
          'For images below the fold, yes. For the hero image it makes LCP measurably worse, because the browser defers the very download that LCP is waiting on. Lazy-load everything except the largest above-the-fold image.',
      },
      {
        _key: key(),
        question: 'How much does one second of load time actually cost?',
        answer:
          'It varies too much by sector for a single number to be honest. What is consistent is that the loss lands on your highest-intent visitors, because booking pages are the last step before revenue. Measure your own page before and after a fix rather than trusting a generic figure.',
      },
      {
        _key: key(),
        question: 'Do I need to change hosting to fix LCP?',
        answer:
          'Usually not. In our audits, server response is typically 0.7 to 1.0 seconds, while the hero image accounts for 1.5 seconds or more. Hosting is the most expensive fix and rarely the highest-impact one. Exhaust the image and CSS work first.',
      },
    ],
  },

  citations: [
    { _key: key(), title: 'Largest Contentful Paint (LCP)', publisher: 'Google web.dev', url: 'https://web.dev/articles/lcp' },
    { _key: key(), title: 'Web Almanac: Performance', publisher: 'HTTP Archive', url: 'https://almanac.httparchive.org/' },
  ],

  entities: [
    { _key: key(), name: 'Largest Contentful Paint', type: 'Thing', sameAs: 'https://web.dev/articles/lcp' },
    { _key: key(), name: 'Core Web Vitals', type: 'Thing', sameAs: 'https://web.dev/articles/vitals' },
    { _key: key(), name: 'ShiftDeploy', type: 'Organization', sameAs: 'https://shiftdeploy.com' },
  ],

  speakable: { enabled: true, cssSelectors: ['.direct-answer', '.key-takeaways'] },

  seo: {
    seoTitle: 'Booking Page LCP: What It Costs and How to Fix It',
    seoDescription:
      'Largest Contentful Paint on a booking page is a revenue number. Where the seconds go, and the four fixes ranked by effort against impact.',
    focusKeyword: 'booking page LCP',
    secondaryKeywords: ['largest contentful paint', 'dental website speed', 'core web vitals booking'],
    semanticKeywords: ['TTFB', 'hero image', 'srcset', 'AVIF', 'render blocking CSS', 'mobile conversion'],
    searchIntent: 'commercial',
    funnelStage: 'consideration',
    targetAudience:
      'UK dental practice owners, clinic managers and med spa operators whose booking pages get traffic but convert poorly on mobile.',
  },
});

/* ================= POST 2 ================= */

const POST_2_BODY = (heroRef) => [
  ...md(`Every image problem on a content site comes from the same place: the
person uploading is asked to make decisions they have no way to make well. What
format? What dimensions? What quality? Compress it first, or upload the
original?

The fix is not to train the editor. It is to remove the decision.`),

  {
    _type: 'imageBlock',
    _key: key(),
    image: img(heroRef, 'Pipeline diagram showing a 6.2 megabyte upload compressed to 340 kilobytes then served as 48, 96 and 180 kilobyte AVIF files to phone, tablet and desktop'),
    alt: 'Pipeline diagram showing a 6.2 megabyte upload compressed to 340 kilobytes then served as 48, 96 and 180 kilobyte AVIF files to phone, tablet and desktop',
    caption: 'One upload, four decisions removed, 129x less data on a phone.',
    width: 'wide',
    alignment: 'center',
    rounded: true,
  },

  ...md(`## Three stages, none of them the editor's problem

**In the browser, before upload.** A 6 MB phone photo is drawn to a canvas,
capped at 2400px on its longest edge, and re-encoded to WebP at quality 0.82.
This happens client-side, so the oversized original never crosses the network.
If the result comes out larger than the input, which happens with
already-optimised files, we keep the original.

**On the CDN, at rest.** One asset is stored. Sanity records its intrinsic
width and height in the asset ID itself, which matters more than it sounds:
those dimensions are what let us set width and height on every img tag without
an extra request, and that is what prevents layout shift.

**At request time.** Sanity's auto=format inspects the browser's Accept header
and returns AVIF where supported, WebP otherwise, falling back to the original.
The srcset we emit offers eight widths from 320 to 1920, and the browser picks
using the sizes hint.`),

  {
    _type: 'callout',
    _key: key(),
    variant: 'info',
    showIcon: true,
    title: 'The part people get wrong',
    content:
      'A srcset with a wrong sizes attribute is worse than no srcset at all. The browser trusts sizes ' +
      'to decide which candidate to download, and it makes that decision before layout. If you tell it ' +
      '100vw when the image actually renders at 672px, it confidently downloads a file twice the size it needs.',
  },

  ...md(`## What actually moves the number

Four things, and they compound rather than substitute for each other.`),

  {
    _type: 'prosAndCons',
    _key: key(),
    prosLabel: 'Worth doing',
    consLabel: 'Commonly done, rarely helps',
    pros: [
      'Serve AVIF with a WebP fallback, negotiated per request',
      'Emit a real srcset with a sizes value that matches your layout',
      'Set width and height on every image to reserve layout space',
      'Mark the LCP image eager with fetchpriority high',
      'Write alt text that describes what the image shows',
    ],
    cons: [
      'Compressing once to a single "web size" and serving it everywhere',
      'Lazy-loading every image including the hero',
      'Converting to WebP but keeping 4000px dimensions',
      'Alt text stuffed with keywords instead of description',
      'A CDN with no per-request format negotiation',
    ],
    verdict:
      'Format alone is roughly a third of the win. Correct sizing is the other two thirds, and it is the part most pipelines skip.',
  },

  ...md(`## Alt text, since it comes up every time

Alt text is not a keyword slot. It is what a screen reader announces and what
Google Images uses to understand the picture. "Mobile booking page with the
hero image still loading" is useful to both. "dental website speed dentist
booking fast" is useful to neither, and reads as spam.

Our editor treats a missing alt as a warning inline and blocks publishing a
post whose cover image has none. That is deliberate: an optional field with no
feedback is a field that stays empty.`),

  {
    _type: 'faq',
    _key: key(),
    title: 'Implementation questions',
    items: [
      {
        _key: key(),
        _type: 'faqItem',
        question: 'Should I use a picture element or srcset?',
        answer:
          'Use srcset with sizes for the same image at different resolutions, which is the common case. Reach for picture only when you need genuinely different crops at different breakpoints, or when your CDN cannot negotiate format from the Accept header.',
      },
      {
        _key: key(),
        _type: 'faqItem',
        question: 'Is AVIF safe to serve in 2026?',
        answer:
          'Yes. Browser support is past 90% globally, and because format is negotiated per request through the Accept header, browsers that cannot decode AVIF simply receive WebP or the original. There is no downside to enabling it.',
      },
      {
        _key: key(),
        _type: 'faqItem',
        question: 'Does compressing in the browser lose quality?',
        answer:
          'At quality 0.82 the artefacts are not visible at normal viewing sizes, and the 2400px cap is well above what any blog layout renders. SVG and GIF are passed through untouched, since canvas re-encoding would rasterise vectors and drop animation.',
      },
    ],
  },

  {
    _type: 'cta',
    _key: key(),
    label: 'Talk to us about your image pipeline',
    url: '/ContactUs',
    description: 'If your LCP is image-bound, this is usually a one-week fix.',
    placement: 'inline',
  },
];

const POST_2 = (heroRef) => ({
  _id: 'post-image-pipeline-decisions',
  _type: 'post',
  title: 'Build an Image Pipeline That Removes Decisions From the Editor',
  slug: { _type: 'slug', current: 'image-pipeline-that-removes-decisions' },
  status: 'published',
  publishedAt: new Date(Date.now() - 86400000).toISOString(),
  updatedAt: new Date().toISOString(),
  featured: false,
  excerpt:
    'Format, dimensions, quality, compression: four decisions no content editor should have to make. How to move all of them into the pipeline, and what it is worth.',
  mainImage: img(heroRef, 'Diagram of an image pipeline from upload through CDN to per-device delivery'),
  author: { _type: 'reference', _ref: AUTHOR_ID },
  categories: [
    { _type: 'reference', _ref: CAT_ENG, _key: key() },
    { _type: 'reference', _ref: CAT_PERF, _key: key() },
  ],
  tags: ['Image optimisation', 'AVIF', 'WebP', 'Core Web Vitals', 'CMS'],
  schemaType: 'TechArticle',
  body: POST_2_BODY(heroRef),

  directAnswer: {
    question: 'What is the best way to optimise images for a website in 2026?',
    answer:
      'Serve AVIF with a WebP fallback negotiated per request, emit a srcset covering the widths your layout actually uses, and set explicit width and height on every image. Format choice is about a third of the benefit; correct per-device sizing is the rest, and it is the part most pipelines skip.',
    supportingStat: 'AVIF is roughly 50% smaller than JPEG at equivalent quality; WebP about 25-35% smaller.',
    statSource: 'Google web.dev',
    statSourceUrl: 'https://web.dev/articles/choose-the-right-image-format',
  },

  keyTakeaways: {
    title: 'Key takeaways',
    points: [
      'The editor should never choose a format, dimension or quality setting; the pipeline decides all three.',
      'Compressing client-side before upload stops oversized originals from ever crossing the network.',
      'A srcset with an incorrect sizes attribute is worse than no srcset, because the browser trusts it before layout.',
      'Explicit width and height on every image is what prevents cumulative layout shift.',
      'The LCP image must be eager with high fetch priority; lazy-loading it is a guaranteed Core Web Vitals failure.',
    ],
  },

  faqSection: {
    title: 'Frequently asked questions',
    items: [
      {
        _key: key(),
        isPrimary: true,
        question: 'What image format should I use for a website in 2026?',
        answer:
          'AVIF first, WebP as a fallback, and the original JPEG or PNG last. Do not pick one format for the whole site. Negotiate per request from the browser Accept header so each visitor receives the smallest format their browser can decode.',
      },
      {
        _key: key(),
        question: 'Why do my images still load slowly after converting to WebP?',
        answer:
          'Almost always because the dimensions never changed. A 4000px WebP served to a 390px phone is still several times larger than it needs to be. Format is roughly a third of the win; resizing per device is the other two thirds.',
      },
      {
        _key: key(),
        question: 'What should alt text actually say?',
        answer:
          'Describe what the image shows and why it is there, in a normal sentence. Screen readers and Google Images both use it. Keyword-stuffed alt text helps neither and reads as spam.',
      },
      {
        _key: key(),
        question: 'How do I stop images causing layout shift?',
        answer:
          'Set width and height attributes on every img tag so the browser reserves the correct space before the file arrives. If your CMS stores intrinsic dimensions with the asset, this costs nothing at render time.',
      },
    ],
  },

  howTo: {
    title: 'How to audit your own image delivery',
    description: 'Fifteen minutes, no tooling beyond the browser.',
    totalTime: 'PT15M',
    steps: [
      { _key: key(), name: 'Open DevTools on the page', text: 'Network tab, filter to Img, throttle to Fast 4G, then hard reload.' },
      { _key: key(), name: 'Sort by transfer size', text: 'Anything over 200 KB on a mobile viewport is a candidate. Note the largest three.' },
      { _key: key(), name: 'Compare rendered against intrinsic size', text: 'Hover any image in the Elements panel. If intrinsic is more than twice rendered, you are shipping wasted pixels.' },
      { _key: key(), name: 'Check the response format', text: 'Look at the Content-Type header. If it says image/jpeg on a Chrome request, no format negotiation is happening.' },
      { _key: key(), name: 'Confirm the LCP image is not lazy', text: 'Find the largest above-the-fold image and check it has no loading="lazy" attribute.' },
    ],
  },

  citations: [
    { _key: key(), title: 'Choose the right image format', publisher: 'Google web.dev', url: 'https://web.dev/articles/choose-the-right-image-format' },
    { _key: key(), title: 'Optimize Largest Contentful Paint', publisher: 'Google web.dev', url: 'https://web.dev/articles/optimize-lcp' },
    { _key: key(), title: 'Image CDN and transformation reference', publisher: 'Sanity', url: 'https://www.sanity.io/docs/image-urls' },
  ],

  entities: [
    { _key: key(), name: 'AVIF', type: 'Thing', sameAs: 'https://en.wikipedia.org/wiki/AVIF' },
    { _key: key(), name: 'WebP', type: 'Thing', sameAs: 'https://en.wikipedia.org/wiki/WebP' },
    { _key: key(), name: 'Cumulative Layout Shift', type: 'Thing', sameAs: 'https://web.dev/articles/cls' },
    { _key: key(), name: 'ShiftDeploy', type: 'Organization', sameAs: 'https://shiftdeploy.com' },
  ],

  speakable: { enabled: true, cssSelectors: ['.direct-answer', '.key-takeaways'] },

  seo: {
    seoTitle: 'Image Pipeline Design: AVIF, srcset and Zero Editor Decisions',
    seoDescription:
      'Format, size, quality and compression are pipeline decisions, not editor decisions. How to build the pipeline, and which parts actually move Core Web Vitals.',
    focusKeyword: 'image optimisation pipeline',
    secondaryKeywords: ['AVIF vs WebP', 'srcset sizes', 'CMS image compression'],
    semanticKeywords: ['Core Web Vitals', 'LCP', 'cumulative layout shift', 'responsive images', 'image CDN', 'alt text'],
    searchIntent: 'informational',
    funnelStage: 'awareness',
    targetAudience:
      'Developers and technical marketers running a content site who know their images are a problem but not which part of the pipeline to change.',
  },
});

/* ---- run ---- */
async function main() {
  console.log('Ensuring author and categories…');
  await ensureSupporting();

  const assets = path.join(root, 'scripts', 'assets');

  console.log('Uploading diagrams…');
  const heroA = await uploadAsset(path.join(assets, 'lcp-waterfall.svg'), 'booking-page-lcp-waterfall.svg');
  const heroB = await uploadAsset(path.join(assets, 'image-pipeline.svg'), 'responsive-image-pipeline.svg');

  console.log('Writing posts…');
  const a = POST_1(heroA);
  const b = POST_2(heroB);
  await client.createOrReplace(a);
  await client.createOrReplace(b);

  console.log('\nDone.');
  console.log(`  https://shiftdeploy.com/insights/${a.slug.current}`);
  console.log(`  https://shiftdeploy.com/insights/${b.slug.current}`);
}

main().catch((err) => {
  console.error('\nFailed:', err.message);
  process.exit(1);
});
