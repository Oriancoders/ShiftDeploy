/**
 * Seeds the eight "Websites and marketing" posts (keywords 89-96 in
 * BLOG-KEYWORDS-2026-09-26.md) into Sanity as DRAFTS.
 *
 * Run:  node scripts/seed-website-marketing-drafts.mjs
 * Re-runnable: fixed _ids, so a second run updates rather than duplicating.
 * It will not overwrite a post that has since been published.
 *
 * Drafts use the custom editor's `status: 'draft'` and no publishedAt, so the
 * publication date becomes the day someone presses Publish in /admin/insights.
 *
 * Facts checked on 2026-09-26:
 * - UK website prices: published 2026 UK price guides (see citations per post).
 * - Botox advertising: ASA/CAP guidance (prescription-only medicine).
 * - Dental advertising: GDC guidance on advertising.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const env = {};
for (const line of fs.readFileSync(path.join(root, '.env.local'), 'utf8').split(/\r?\n/)) {
  const m = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
  if (m) env[m[1]] = m[2];
}
if (!env.SANITY_API_TOKEN) {
  console.error('\nSANITY_API_TOKEN is empty in .env.local.\n');
  process.exit(1);
}

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: env.SANITY_API_TOKEN,
});

let k = 0;
const key = () => `m${(k++).toString(36)}${Math.random().toString(36).slice(2, 6)}`;

/** Minimal markdown -> Portable Text (same rules as scripts/seed-posts.mjs). */
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
      for (const part of seg.text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)) {
        const marks = linkKey ? [linkKey] : [];
        let t = part;
        if (part.startsWith('**') && part.endsWith('**')) { marks.push('strong'); t = part.slice(2, -2); }
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
    if (t) blocks.push({ _type: 'block', _key: key(), style: 'normal', ...inline(t) });
  };
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) { flush(); continue; }
    const h = /^(#{2,4})\s+(.*)$/.exec(line);
    const b = /^[-*]\s+(.*)$/.exec(line);
    const n = /^\d+[.)]\s+(.*)$/.exec(line);
    if (h) { flush(); blocks.push({ _type: 'block', _key: key(), style: `h${h[1].length}`, ...inline(h[2]) }); }
    else if (b) { flush(); blocks.push({ _type: 'block', _key: key(), style: 'normal', listItem: 'bullet', level: 1, ...inline(b[1]) }); }
    else if (n) { flush(); blocks.push({ _type: 'block', _key: key(), style: 'normal', listItem: 'number', level: 1, ...inline(n[1]) }); }
    else para.push(line);
  }
  flush();
  return blocks;
}

const table = (caption, rows) => ({
  _type: 'table',
  _key: key(),
  caption,
  hasHeaderRow: true,
  rows: rows.map((cells) => ({ _key: key(), _type: 'row', cells })),
});
const callout = (variant, title, content) => ({ _type: 'callout', _key: key(), variant, showIcon: true, title, content });
const cta = (description, label = 'Get your free check') => ({
  _type: 'cta', _key: key(), label, url: '/ContactUs', description, placement: 'inline',
});
const faq = (items) => ({
  title: 'Frequently asked questions',
  items: items.map(([question, answer], i) => ({ _key: key(), question, answer, ...(i === 0 ? { isPrimary: true } : {}) })),
});
const img = (ref, alt) => ({ _type: 'image', asset: { _type: 'reference', _ref: ref }, alt });

/* Cover image: a plain, on-brand card with the question the post answers. */
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function coverSvg({ eyebrow, lines, points }) {
  const title = lines.map((l, i) => `<text x="80" y="${250 + i * 78}" font-size="64" font-weight="700" fill="#0B2A4A">${esc(l)}</text>`).join('');
  const chips = points.map((p, i) => `<g transform="translate(${80 + i * 350},520)"><rect width="330" height="70" rx="35" fill="#FFF7ED" stroke="#F97316" stroke-width="2"/><text x="165" y="45" text-anchor="middle" font-size="24" font-weight="600" fill="#C2410C">${esc(p)}</text></g>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675" role="img" aria-label="${esc(lines.join(' '))}">
<rect width="1200" height="675" fill="#ffffff"/><rect width="1200" height="14" fill="#F97316"/>
<g font-family="Segoe UI, system-ui, sans-serif">
<text x="80" y="150" font-size="28" font-weight="700" fill="#C2410C">${esc(eyebrow)}</text>
${title}${chips}
<text x="80" y="640" font-size="22" fill="#6B7280">shiftdeploy.com</text>
</g></svg>`;
}

const AUTHOR_ID = '836dce1e-e110-4072-8f5f-9e6db71c4672';
const CAT_LOCAL = 'category-websites-local-marketing';
const CAT_CONVERSION = 'category-conversion';

const SRC = {
  webCost: { title: 'How Much Does a Website Cost UK 2026? Full Price Guide', publisher: 'ExpertSure', url: 'https://www.expertsure.com/uk/web-design/website-design-costs-guide/' },
  webCost2: { title: 'Website Design Costs UK 2026: What You Should Pay', publisher: 'Whito', url: 'https://whito.co.uk/research/website-design-costs-uk/' },
  gbpSab: { title: 'Manage your service areas for your Business Profile', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/9157481' },
  gbpGuidelines: { title: 'Guidelines for representing your business on Google', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/3038177' },
  asaBotox: { title: 'Botox and non-surgical cosmetic interventions', publisher: 'ASA | CAP', url: 'https://www.asa.org.uk/advice-and-resources/cap-bitesize/rules-for-advertising-botox.html' },
  gdcAds: { title: 'Guidance on advertising', publisher: 'General Dental Council', url: 'https://www.gdc-uk.org/standards-guidance/standards-and-guidance/gdc-guidance-for-dental-professionals/guidance-on-advertising' },
  hcpcTitles: { title: 'Protected titles', publisher: 'Health and Care Professions Council', url: 'https://www.hcpc-uk.org/about-us/who-we-regulate/the-professions/' },
  gasSafe: { title: 'Gas Safe Register', publisher: 'Gas Safe Register', url: 'https://www.gassaferegister.co.uk/' },
  cwv: { title: 'Web Vitals', publisher: 'Google web.dev', url: 'https://web.dev/articles/vitals' },
};
const cite = (...items) => items.map((c) => ({ _key: key(), ...c }));

/* ------------------------------------------------------------------ */
/* The eight posts. `plan` is the recommended publish date (not stored */
/* as publishedAt, so the draft stays unpublished until you publish).  */
/* ------------------------------------------------------------------ */

const POSTS = [
  /* 89 */
  {
    id: 'post-how-much-does-a-website-cost',
    slug: 'how-much-does-a-website-cost',
    plan: '2026-09-29',
    title: 'How Much Does a Website Cost? What You Should Actually Pay in 2026',
    seoTitle: 'How Much Does a Website Cost in the UK? 2026 Prices',
    seoDescription: 'Real 2026 prices for a business website: DIY builders, freelancers and agencies compared, plus the running costs most quotes leave out.',
    focusKeyword: 'how much does a website cost uk',
    secondaryKeywords: ['website cost uk', 'website design cost', 'how much does a website cost to build', 'how much does a website cost per month'],
    funnelStage: 'decision',
    intent: 'commercial',
    excerpt: 'A business website costs anything from £10 a month to £10,000 and more. Here’s what each price gets you, the running costs quotes leave out, and how to tell if a quote is fair.',
    tags: ['Website cost', 'Web design', 'Pricing'],
    cats: [CAT_LOCAL],
    cover: { eyebrow: 'Website prices, 2026', lines: ['How much does a', 'website cost?'], points: ['DIY £9–£29/mo', 'Freelancer £1.5k+', 'Agency £3k+'] },
    coverAlt: 'Website prices in 2026: DIY builders from £9 a month, freelancers from about £1,500 and agencies from about £3,000',
    direct: ['How much does a website cost?', 'A business website typically costs £9 to £29 a month on a DIY builder, £1,500 to £3,000 from a freelancer for a five-page site, or £3,000 to £10,000 from an agency. Online shops cost more, usually from £5,000. Budget another £50 to £300 a month for hosting, security and updates.'],
    takeaways: [
      'DIY builders are cheapest to start but cost you your own time, every week.',
      'A freelancer typically charges £1,500 to £3,000 for a five-page business website.',
      'Agencies usually charge £3,000 to £10,000, more in London or for complex sites.',
      'Running costs of £50 to £300 a month are the part most quotes leave out.',
      'The right question isn’t “how cheap?” but “how many enquiries will it bring in?”',
    ],
    body: () => [
      ...md(`Ask five web designers for a price and you’ll get five very different numbers. That’s not because someone is ripping you off. It’s because “a website” can mean anything from a single page you build yourself on a Sunday to a full booking system.

Here’s what businesses actually pay in 2026, what each price gets you, and how to tell whether a quote is fair.

## Website prices at a glance`),
      table('Typical 2026 prices for a business website', [
        ['Option', 'Typical cost', 'Best for'],
        ['DIY builder (Wix, Squarespace)', '£9–£29 a month', 'Just starting, very tight budget, plenty of spare time'],
        ['Freelancer, 5-page website', '£1,500–£3,000', 'A clear brochure site with a contact form'],
        ['Agency, business website', '£3,000–£10,000', 'Design, copy, SEO and support from one team'],
        ['Online shop', '£5,000–£20,000+', 'Selling products online with payments and stock'],
        ['Ongoing care (hosting, updates, security)', '£50–£300 a month', 'Everyone, whichever option you choose'],
      ]),
      ...md(`These ranges come from published 2026 UK price guides. London agencies often charge more for the same work, and very specialist sites can cost far more.

## What changes the price

- **Number of pages.** Five pages costs less than twenty. Each service you offer often deserves its own page, which is good for Google.
- **Who writes the words.** If you write the text yourself, it’s cheaper. If the designer writes it, expect to pay more, but it usually brings in more enquiries.
- **Bookings and payments.** Online booking, deposits or a shop add cost, because they need testing and looking after.
- **Photos.** Real photos of your work win trust. A photographer is extra, but often worth it.
- **Getting found on Google.** Local SEO set-up (your Google Business Profile, page titles, reviews) is sometimes included and sometimes not. Always ask.

## The costs most quotes leave out

The build price is only the start. Every website needs:

- **A domain name**, usually around £10 to £20 a year
- **Hosting**, from a few pounds to £30 or more a month
- **Security updates and backups**, so it doesn’t get hacked or break
- **Small changes**, like new prices, photos or opening hours

Many businesses pay for a cheap build, then find nobody is looking after it. Two years later it’s slow, out of date and needs rebuilding. That’s why we always show the running cost alongside the build cost.`),
      callout('info', 'Is a cheap website a false economy?', 'Not always. A simple, well-built site that loads fast and makes it easy to call you can outperform an expensive one. What matters is whether it brings in work, not how much it cost.'),
      ...md(`## How to tell if a website quote is fair

A good quote answers these questions in writing:

1. What exactly is included: pages, copywriting, photos, SEO set-up?
2. Who owns the website and the domain once it’s paid for? (It should be you.)
3. What does it cost each month after launch, and what does that cover?
4. How fast will it load on a phone?
5. How will people contact or book with you, and where do those enquiries go?
6. What happens if you want to leave?

If a quote can’t answer those, ask before you sign.

## The better question: what will it bring in?

A website is worth what it earns. If one extra job a week is worth £200 to you, a website that brings in that job pays for itself fast. A “bargain” site that nobody finds, or that’s awkward on a phone, costs you every week.

That’s why we start every project with a free check of your current site and how customers find you. Sometimes the answer is a new website. Often it’s a few fixes to the one you already have.`),
      cta('We’ll look at your current website, how you show up on Google and what a new site would realistically cost, before you commit to anything.'),
      ...md(`Want to know more? See how we help businesses [get found by more customers](/services/shiftbuild), or read why a website might [look fine but still not ring](/services/shiftconvert).`),
    ],
    faqs: [
      ['How much does a business website cost?', 'Most businesses pay between £1,500 and £3,000 for a freelancer-built five-page website, or £3,000 to £10,000 with an agency. DIY builders cost £9 to £29 a month but take your own time.'],
      ['How much does a website cost per month?', 'Expect £50 to £300 a month for hosting, security updates, backups and small changes. DIY builders charge £9 to £29 a month but you do the work yourself.'],
      ['Is it cheaper to build a website myself?', 'Upfront, yes. But it costs your time, and DIY sites are often slower and harder to find on Google. Weigh the hours against what you’d earn doing paid work instead.'],
      ['Why do website quotes vary so much?', 'Quotes include very different things: number of pages, who writes the text, bookings or payments, SEO set-up and ongoing support. Compare what’s included, not just the price.'],
      ['Should I own my website and domain?', 'Yes. Make sure the domain is registered in your name and you can move the website to someone else if you ever need to.'],
    ],
    citations: cite(SRC.webCost, SRC.webCost2),
  },

  /* 93 */
  {
    id: 'post-marketing-for-dental-practice',
    slug: 'marketing-for-dental-practice',
    plan: '2026-10-01',
    title: 'Marketing for Dental Practices: How to Get More Patients Without Wasting Money',
    seoTitle: 'Marketing for Dental Practices: Get More Patients',
    seoDescription: 'What actually brings new patients to a dental practice: Google Maps, reviews, fast booking and every call answered. Plus the GDC advertising rules to follow.',
    focusKeyword: 'marketing for dental practice',
    secondaryKeywords: ['dental marketing', 'how to get more patients dental practice', 'local seo for dentists', 'google reviews for dental clinic'],
    funnelStage: 'consideration',
    intent: 'commercial',
    excerpt: 'Most new patients choose a dentist from Google Maps, reviews and how quickly the practice answers. Here’s where to spend first, and the GDC rules your marketing must follow.',
    tags: ['Dental marketing', 'Local SEO', 'Google reviews', 'AI receptionist'],
    cats: [CAT_LOCAL, CAT_CONVERSION],
    cover: { eyebrow: 'For dental practices', lines: ['Marketing that brings', 'in new patients'], points: ['Google Maps', 'Reviews', 'Every call answered'] },
    coverAlt: 'Marketing for dental practices: Google Maps, reviews and answering every call',
    direct: ['What is the best marketing for a dental practice?', 'For most practices the best return comes from four things: showing up on Google Maps for local searches, having plenty of recent Google reviews, answering every call and message quickly, and making it easy to book online. Paid ads work better once those are in place. All dental marketing must follow GDC advertising guidance.'],
    takeaways: [
      'New patients usually find a dentist on Google Maps, then choose on reviews.',
      'An unanswered call is often a lost patient. Answering every call is marketing too.',
      'Online booking and a fast, clear website turn searches into appointments.',
      'Fix the basics before paying for ads, or the ads fill a leaky bucket.',
      'Follow GDC guidance: show GDC numbers, avoid “specialist” unless on a GDC specialist list, and publish your complaints procedure.',
    ],
    body: () => [
      ...md(`Most dental practices don’t have a marketing problem. They have a leak. Patients search, find the practice, then ring and get voicemail, or can’t see how to book, or pick the practice down the road with more reviews.

Plug the leaks first and your marketing budget goes much further. Here’s where to start.

## 1. Show up on Google Maps

When someone needs a dentist, they search “dentist near me” and look at the map results first. To appear there you need:

- A verified **Google Business Profile** with the right category (Dentist, or Dental clinic)
- Accurate opening hours, including emergency and late appointments
- Real photos of your practice, team and treatment rooms
- Your treatments listed as services, in plain words patients use
- A website that matches the same name, address and phone number

## 2. Get more Google reviews, and reply to them

Patients choose between practices on reviews. A practice with 180 recent reviews beats one with 12 old ones, almost every time.

The trick is to ask every patient at the right moment, straight after a good appointment, and make it take seconds. A QR code at reception works well. Reply to every review, good or bad, politely and without discussing treatment details.`),
      callout('info', 'Ask everyone, not just happy patients', 'Google allows you to ask for reviews, but you should give every patient the same chance. Don’t filter out unhappy patients before they reach Google. Offer everyone a way to leave a review, and a private way to tell you about problems.'),
      ...md(`Our [Review Your Doctor](/review-your-doctor) system was built for exactly this: patients scan a code, rate their visit and leave a Google review in two taps, while problems come to the practice manager privately first.

## 3. Answer every call and message

Reception is busy. Phones ring during appointments, at lunch and after hours. Every unanswered call from a new patient is marketing money wasted, because they’ll simply ring the next practice.

An [AI receptionist](/digital-receptionist) answers calls, website chats and WhatsApp messages 24/7, handles common questions like prices and availability, and books appointments. Your team stays in control of anything clinical.

## 4. Make booking easy

If a patient has to phone during working hours to book a check-up, many won’t. Online booking, clear prices and a website that loads fast on a phone turn more visitors into appointments.

## 5. Then spend on ads

Google Ads and social media can work well for high-value treatments like implants, Invisalign or whitening. But run them after the basics above, or you’ll pay for clicks that go to voicemail.`),
      table('Where to spend first', [
        ['Priority', 'What', 'Why'],
        ['1', 'Google Business Profile', 'Where most new patients find you'],
        ['2', 'Reviews', 'Where they decide between practices'],
        ['3', 'Every call and message answered', 'Stops paid-for patients going elsewhere'],
        ['4', 'Online booking and a fast website', 'Turns interest into appointments'],
        ['5', 'Paid ads', 'Scales what already works'],
      ]),
      ...md(`## The GDC rules your marketing must follow

Dental marketing has extra rules. The General Dental Council’s guidance on advertising says, among other things:

- **Don’t call anyone a “specialist”** unless they’re on one of the GDC’s specialist lists. Phrases like “special interest in” are safer.
- **Show GDC registration numbers** for the dental professionals named in your marketing and on your website.
- **Publish your complaints procedure**, and who patients can contact if they’re not happy with the outcome.
- **Keep it accurate.** Prices, claims and before-and-after photos must not mislead.

Always check the latest [GDC guidance on advertising](${SRC.gdcAds.url}) before running a campaign.`),
      cta('We’ll check how your practice shows up on Google, how calls and enquiries are handled, and where new patients are slipping away.'),
    ],
    faqs: [
      ['How can my dental practice get more new patients?', 'Start with the basics: a complete Google Business Profile, plenty of recent reviews, every call and message answered, and easy online booking. Paid ads work much better once these are in place.'],
      ['Is Google Ads worth it for dentists?', 'It can be, especially for high-value treatments like implants or clear aligners. But fix your Google profile, reviews and call handling first, or you’ll pay for clicks that never become patients.'],
      ['Can dentists ask patients for Google reviews?', 'Yes. Google allows businesses to ask for reviews, as long as every patient gets the same chance. Don’t offer rewards for reviews and don’t discuss treatment when replying.'],
      ['Can a dentist call themselves a specialist?', 'Only if they’re on one of the GDC’s specialist lists. Otherwise use wording like “special interest in” or “experienced in”.'],
      ['What should a dental practice website include?', 'Treatments and prices, a clear way to book, reviews, team profiles with GDC numbers, your complaints procedure and opening hours. It should load fast on a phone.'],
    ],
    citations: cite(SRC.gdcAds, SRC.gbpGuidelines),
  },

  /* 92 */
  {
    id: 'post-website-not-getting-leads',
    slug: 'website-not-getting-leads',
    plan: '2026-10-06',
    title: 'Website Not Getting Leads? 9 Reasons Why, and How to Fix Each One',
    seoTitle: 'Website Not Getting Leads? 9 Reasons and Fixes',
    seoDescription: 'If your website gets visitors but no enquiries, it’s usually one of nine fixable problems. Check each one, from slow loading on phones to enquiries nobody answers.',
    focusKeyword: 'website not getting leads',
    secondaryKeywords: ['website not getting enquiries', 'how to get more enquiries from your website', 'why is my website not getting traffic', 'website not showing up on google'],
    funnelStage: 'consideration',
    intent: 'commercial',
    excerpt: 'Your website looks fine, but the phone isn’t ringing. It’s usually one of nine problems, and most are quick to fix. Here’s how to check each one.',
    tags: ['Website enquiries', 'Conversion', 'Local SEO'],
    cats: [CAT_CONVERSION, CAT_LOCAL],
    cover: { eyebrow: 'Website not working?', lines: ['Why your website', 'isn’t getting leads'], points: ['Not found', 'Too slow', 'No clear next step'] },
    coverAlt: 'Why a website isn’t getting leads: not found on Google, too slow, or no clear next step',
    direct: ['Why is my website not getting leads?', 'A website usually fails to get leads for one of three reasons: people can’t find it on Google, it loads too slowly or works badly on a phone, or visitors can’t see what to do next. Less often, enquiries do arrive but aren’t answered fast enough. Each of these can be checked and fixed.'],
    takeaways: [
      'First check whether people are finding the site at all. No visitors means a Google problem, not a design problem.',
      'Most visitors are on a phone. If the site is slow or fiddly there, they leave.',
      'Every page needs one obvious next step: call, WhatsApp or book.',
      'Short forms get more enquiries than long ones.',
      'An enquiry answered in minutes is far more likely to become a job than one answered tomorrow.',
    ],
    body: () => [
      ...md(`“The website looks great, but nobody gets in touch.” We hear it every week. The good news: it’s almost always one of the nine problems below, and most are quick to fix.

Start at the top. The first question is whether anyone is finding your site at all.

## Problem 1: nobody is finding it

If hardly anyone visits, no design change will help. The fix is getting found: a complete Google Business Profile, pages for each service and area you cover, and page titles that say what you do and where.

**Check:** search for your main service plus your town, on your phone. Are you on the first page or the map?

## Problem 2: it’s slow on a phone

Most local searches happen on a phone, often on mobile data. If your homepage takes more than a few seconds to appear, many people give up before they see anything. Oversized photos are the usual culprit.

**Check:** open your site on your phone using mobile data, not Wi-Fi. Count the seconds.

## Problem 3: it doesn’t say what you do, straight away

Visitors decide in seconds whether they’re in the right place. If the top of your homepage says “Welcome to our website” instead of “Emergency plumber in Leeds, available 24/7”, they leave.

## Problem 4: there’s no obvious next step

Every page needs one clear thing to do: call, WhatsApp, or book. If the phone number is hidden in the footer, you’re losing enquiries.

## Problem 5: the contact form is too long

Each extra box on a form loses people. Ask only for what you need to reply: name, phone or email, and a short message.

## Problem 6: there’s no proof

People want to see that others trusted you. Reviews, photos of real work, accreditations and clear prices all help. A site without them feels risky.

## Problem 7: it’s built for you, not your customers

Technical terms, company history and awards matter less to a visitor than “Can you fix my problem, how much, and when?”. Answer those first.

## Problem 8: enquiries arrive, but replies are slow

Sometimes the website works but nobody replies for hours. By then, the customer has booked someone else. Instant replies and an [AI receptionist](/digital-receptionist) make sure every enquiry gets an answer straight away.

## Problem 9: enquiries go missing

Form emails landing in spam, a WhatsApp nobody checks, a number that goes to an old phone. Test every way people can contact you, today.`),
      table('Quick self-check', [
        ['Question', 'If the answer is no'],
        ['Do you appear on Google for your service and town?', 'Fix your Google profile and service pages'],
        ['Does it load in a few seconds on mobile data?', 'Compress images and speed up the site'],
        ['Is it clear what you do in the first screen?', 'Rewrite the top of the homepage'],
        ['Can people call or book in one tap?', 'Add a clear button on every page'],
        ['Is every enquiry answered within minutes?', 'Set up instant replies'],
      ]),
      cta('Send us your website and we’ll show you which of these nine problems is costing you enquiries, in plain English, within 24 hours.', 'Get your free website check'),
      ...md(`Read more about how we help businesses [win more of the enquiries they already get](/services/shiftconvert).`),
    ],
    faqs: [
      ['Why does my website get visitors but no enquiries?', 'Usually because it’s slow or awkward on a phone, it isn’t clear what you do, or there’s no obvious way to call or book. Check those three first.'],
      ['Why is my website not showing up on Google?', 'It may be new, missing from Google’s index, or not saying clearly what you do and where. A complete Google Business Profile and a page for each service help most.'],
      ['How can I get more enquiries from my website?', 'Put a clear call, WhatsApp or booking button on every page, shorten your forms, show reviews and prices, and reply to every enquiry within minutes.'],
      ['Do I need a new website to get more leads?', 'Often not. Many websites only need to load faster, explain things more clearly and make it easier to get in touch.'],
      ['How fast should I reply to a website enquiry?', 'As fast as possible, ideally within minutes. Customers often contact several businesses and go with whoever replies first.'],
    ],
    citations: cite(SRC.cwv, SRC.gbpGuidelines),
  },

  /* 95 */
  {
    id: 'post-marketing-for-plumbers',
    slug: 'marketing-for-plumbers',
    plan: '2026-10-08',
    title: 'Marketing for Plumbers: How to Get More Jobs Without Paying for Leads',
    seoTitle: 'Marketing for Plumbers: How to Get More Jobs',
    seoDescription: 'How plumbers get more work: Google Maps, reviews, a simple website and answering every call, even on a job. Practical steps, no jargon.',
    focusKeyword: 'marketing for plumbers',
    secondaryKeywords: ['how to get more plumbing customers', 'how to get more leads for my plumbing business', 'local seo for plumbing companies', 'ai receptionist for plumbers'],
    funnelStage: 'consideration',
    intent: 'commercial',
    excerpt: 'Most plumbing work comes from people searching on Google in a hurry. Here’s how to show up first, look trustworthy, and never lose a job because you were under a sink.',
    tags: ['Marketing for plumbers', 'Local SEO', 'Trades', 'AI receptionist'],
    cats: [CAT_LOCAL],
    cover: { eyebrow: 'For plumbers', lines: ['Get more plumbing jobs', 'without buying leads'], points: ['Google Maps', 'Reviews', 'Never miss a call'] },
    coverAlt: 'Marketing for plumbers: Google Maps, reviews and never missing a call',
    direct: ['What is the best marketing for plumbers?', 'For most plumbers, the best marketing is free or cheap: a complete Google Business Profile so you appear on the map, plenty of recent reviews, a simple website with your number on every page, and answering every call, even when you’re on a job. These bring in work you don’t pay per lead for.'],
    takeaways: [
      'Most urgent plumbing jobs come from Google Maps searches like “plumber near me”.',
      'Set up your Google profile as a service-area business so it shows the areas you cover, not your home address.',
      'Reviews that mention the job and area help you rank and win trust.',
      'A missed call is usually a lost job. Callers in a hurry ring the next plumber.',
      'Lead websites cost per lead. Your own profile and website keep working for free.',
    ],
    body: () => [
      ...md(`When someone has a leak, they don’t browse. They search “plumber near me”, look at the map, and ring the first one that looks trustworthy. If that’s not you, or you don’t answer, the job goes elsewhere.

Here’s how to win more of those jobs without paying a lead website for every one.

## 1. Get your Google Business Profile right

This is the most valuable free marketing a plumber has.

- Choose **Plumber** as your main category.
- Set it up as a **service-area business**: list the towns you cover and hide your home address.
- Add every service you do: boiler repairs, leaks, bathroom fitting, blocked drains.
- Post real photos of your work, your van and yourself.
- Keep your hours accurate, and say clearly if you do emergency call-outs.

## 2. Collect reviews after every job

Reviews are what make someone pick you over the plumber above you on the map. Ask at the end of every job, while the customer is pleased, and send a link by text or WhatsApp so it takes seconds.

Reviews that mention the job and area (“fixed our boiler in Headingley the same day”) help most, because they match what people search for. Don’t write them yourself or offer rewards: Google doesn’t allow it.

## 3. Have a simple website that makes people call

You don’t need a big website. You need one that:

- Says what you do and where, in the first line
- Has your phone number and a WhatsApp button on every page
- Shows reviews, photos of your work and any accreditations
- Loads fast on a phone

If you do gas work, show your **Gas Safe** registration. Customers look for it, and it’s a legal requirement for anyone working on gas appliances.

## 4. Never miss a call when you’re on a job

This is where most plumbers lose work. You can’t answer with your hands in a boiler. The caller doesn’t leave a voicemail; they ring the next plumber.

An [AI receptionist](/digital-receptionist) answers every call while you work, takes the details and address, tells the customer when you can come, and texts you straight away. Urgent jobs can be flagged so you can call back first.`),
      callout('info', 'Paying for leads vs owning your leads', 'Lead websites can fill quiet weeks, but you pay for every lead and compete with other plumbers for the same customer. A strong Google profile, reviews and your own website keep bringing in work without a fee per job.'),
      ...md(`## 5. Follow up quotes

For bigger jobs like bathrooms and boiler replacements, customers often get three quotes. A polite follow-up a few days later wins a surprising number of them. It can be sent automatically, so you don’t have to remember.

## Quick checklist`),
      table('Marketing checklist for plumbers', [
        ['Task', 'Done?'],
        ['Google Business Profile verified, category “Plumber”, service areas set', ''],
        ['Every service listed on your profile and website', ''],
        ['New review requested after every job', ''],
        ['Phone and WhatsApp on every page of your website', ''],
        ['Gas Safe number shown (if you do gas work)', ''],
        ['Every call answered, even on a job', ''],
        ['Quotes followed up after a few days', ''],
      ]),
      cta('We’ll check how you show up on Google Maps, how many calls you’re missing, and the quickest ways to win more jobs.'),
      ...md(`See [our work for plumbers](/plumbers) and how we help trades [never miss a call](/services/shiftspeed).`),
    ],
    faqs: [
      ['How do plumbers get more customers?', 'Most work comes from Google Maps searches. A complete Google Business Profile, plenty of reviews, a simple website and answering every call bring in the most jobs for the least money.'],
      ['Is Checkatrade or MyBuilder worth it for plumbers?', 'They can help fill quiet periods, but you pay for leads and compete with others for the same job. Your own Google profile and website bring in work without a fee per lead.'],
      ['How do I get my plumbing business on Google Maps?', 'Create and verify a Google Business Profile, choose Plumber as your category, set your service areas, and add photos, services and opening hours.'],
      ['Should a plumber show their home address on Google?', 'No. Set up your profile as a service-area business, list the areas you cover and hide your address.'],
      ['What if I can’t answer calls while I’m working?', 'Use call answering. An AI receptionist picks up, takes the job details and texts you, so the customer doesn’t ring someone else.'],
    ],
    citations: cite(SRC.gbpSab, SRC.gbpGuidelines, SRC.gasSafe),
  },

  /* 94 */
  {
    id: 'post-marketing-for-aesthetic-clinic',
    slug: 'marketing-for-aesthetic-clinic',
    plan: '2026-10-13',
    title: 'Marketing for Aesthetic Clinics: Get More Clients and Stay Within the Rules',
    seoTitle: 'Marketing for Aesthetic Clinics: More Clients, No Fines',
    seoDescription: 'How aesthetic clinics win more clients: Google Maps, reviews, booking and fast replies. Plus the ASA rule on advertising Botox that catches many clinics out.',
    focusKeyword: 'marketing for aesthetic clinic',
    secondaryKeywords: ['aesthetics marketing', 'how to get more clients in aesthetics', 'ai receptionist for aesthetic clinic', 'best booking system for aesthetics uk'],
    funnelStage: 'consideration',
    intent: 'commercial',
    excerpt: 'Aesthetic clients choose on trust, reviews and how quickly you reply. Here’s how to market your clinic well, and the Botox advertising rule you can’t afford to break.',
    tags: ['Aesthetics marketing', 'Clinic marketing', 'Google reviews', 'Online booking'],
    cats: [CAT_LOCAL, CAT_CONVERSION],
    cover: { eyebrow: 'For aesthetic clinics', lines: ['Marketing that wins', 'clients, within the rules'], points: ['Reviews', 'Fast replies', 'ASA-safe wording'] },
    coverAlt: 'Marketing for aesthetic clinics: reviews, fast replies and advertising that follows ASA rules',
    direct: ['How can an aesthetic clinic get more clients?', 'Aesthetic clients choose on trust, so the best marketing is a strong Google profile, lots of genuine reviews, clear information about practitioners and consultations, easy online booking and fast replies to every message. All of it must follow ASA rules, including never advertising Botox or other prescription-only medicines to the public.'],
    takeaways: [
      'Clients choose aesthetic clinics on trust: reviews, qualifications and a professional consultation.',
      'Many enquiries arrive by Instagram and WhatsApp in the evening. Slow replies lose them.',
      'Botox is a prescription-only medicine. You can’t advertise it to the public, including on your own website and social media.',
      'Talk about consultations and “anti-wrinkle treatments” instead.',
      'Online booking for consultations turns late-night browsing into appointments.',
    ],
    body: () => [
      ...md(`Aesthetic treatments are personal, so clients research carefully. They compare reviews, look at who will treat them, and message two or three clinics before booking a consultation. The clinic that looks most trustworthy, and replies first, usually wins.

Here’s how to be that clinic, without breaking the advertising rules that catch many practitioners out.

## The rule you must know first: don’t advertise Botox

Botulinum toxin (Botox and similar brands) is a **prescription-only medicine**. Under UK advertising rules you can’t promote it to the public. That includes paid ads, and it also includes **your own website and social media posts**, which the ASA treats as advertising.

What you can do:

- Promote a **consultation** for concerns like lines and wrinkles
- Use wording like **“anti-wrinkle treatment”**
- On your website, explain treatment options in the context of a consultation

The ASA actively monitors social media for Botox ads. Check the latest [ASA guidance](${SRC.asaBotox.url}) before posting.`),
      callout('warning', 'Before-and-after photos', 'Before-and-after images must be genuine, unedited and representative of typical results. Filters or retouching can make an ad misleading.'),
      ...md(`## 1. Build trust on Google

Most clients search “aesthetics clinic near me” or a treatment plus your town. A complete Google Business Profile with photos of the clinic, your practitioners and your treatments puts you in front of them.

## 2. Collect reviews after every appointment

Reviews do more selling than any ad. Ask every client after their follow-up, when they’re happiest with the result, and make it take seconds with a QR code or text link. Reply to every review, without discussing treatment details.

## 3. Show who treats clients

Clients want to know the person holding the needle is qualified. Show each practitioner’s name, profession, qualifications and registration where relevant. This matters more in aesthetics than almost any other business.

## 4. Reply fast, especially in the evening

Aesthetic enquiries often come in late at night, by Instagram, WhatsApp or website chat. If you reply the next afternoon, the client has often booked elsewhere.

An [AI receptionist](/digital-receptionist) replies instantly, answers common questions about consultations, prices and availability, and books a consultation into your diary. Anything medical is passed to a practitioner.

## 5. Make booking a consultation easy

Let clients book a consultation online, at any hour, with clear prices and a deposit if you take one. Automatic reminders reduce no-shows, which matter a lot when each slot is valuable.`),
      table('Where aesthetic clinics lose clients', [
        ['Leak', 'Fix'],
        ['Hard to find on Google', 'Complete Google Business Profile and treatment pages'],
        ['Few or old reviews', 'Ask every client after their follow-up'],
        ['Late replies to evening messages', 'Instant replies and booking, 24/7'],
        ['Can’t book without phoning', 'Online consultation booking'],
        ['No-shows', 'Automatic reminders and deposits'],
      ]),
      cta('We’ll check how your clinic shows up on Google, how fast enquiries get a reply, and where clients drop off before booking.'),
    ],
    faqs: [
      ['Can I advertise Botox on Instagram?', 'No. Botox is a prescription-only medicine and can’t be advertised to the public, including on your own social media. Promote a consultation or “anti-wrinkle treatment” instead.'],
      ['How do aesthetic clinics get more clients?', 'Through trust and speed: a strong Google profile, lots of genuine reviews, clear practitioner information, fast replies and easy consultation booking.'],
      ['What’s the best booking system for an aesthetics clinic?', 'One that lets clients book consultations online at any hour, takes deposits, sends automatic reminders and works with the calendar you already use.'],
      ['Can I use before-and-after photos?', 'Yes, if they’re genuine, unedited and typical of the results clients can expect.'],
      ['How can I reduce no-shows at my clinic?', 'Send automatic reminders by text or WhatsApp, make rescheduling easy, and consider a deposit when booking.'],
    ],
    citations: cite(SRC.asaBotox, SRC.gbpGuidelines),
  },

  /* 91 */
  {
    id: 'post-website-design-for-tradesmen',
    slug: 'website-design-for-tradesmen',
    plan: '2026-10-15',
    title: 'Website Design for Tradesmen: What Your Website Needs to Win Jobs',
    seoTitle: 'Website Design for Tradesmen: What Wins Jobs',
    seoDescription: 'What a tradesman’s website needs to bring in work: your number on every page, reviews, photos, service areas and speed on a phone. A simple checklist.',
    focusKeyword: 'website design for tradesmen',
    secondaryKeywords: ['website for tradesmen', 'best website for tradesmen', 'website builder for tradesmen', 'local seo for trades'],
    funnelStage: 'consideration',
    intent: 'commercial',
    excerpt: 'A tradesman’s website has one job: make the phone ring. Here’s exactly what to put on it, what to leave off, and whether to build it yourself.',
    tags: ['Website design', 'Trades', 'Local SEO'],
    cats: [CAT_LOCAL],
    cover: { eyebrow: 'For trades', lines: ['A website that', 'makes the phone ring'], points: ['Number on every page', 'Real photos', 'Fast on a phone'] },
    coverAlt: 'Website design for tradesmen: number on every page, real photos, fast on a phone',
    direct: ['What should a tradesman’s website include?', 'A tradesman’s website should say what you do and where in the first line, show your phone number and a WhatsApp button on every page, list each service and the areas you cover, show reviews and photos of real work, include accreditations, and load quickly on a phone.'],
    takeaways: [
      'Your website’s job is to make the phone ring, not to look fancy.',
      'Put your number and a WhatsApp button on every page.',
      'Give each main service, and each main area, its own page so Google can match you to searches.',
      'Real photos of your work beat stock photos every time.',
      'DIY builders are fine to start, but many trades outgrow them when they want more work from Google.',
    ],
    body: () => [
      ...md(`Your customers aren’t looking for a beautiful website. They’re looking for someone reliable who can come soon. Your website’s only job is to convince them that’s you, then make it easy to ring.

## What to put on your website

**At the top of the homepage:** what you do and where. “Electrician in Bristol, same-week appointments” beats “Welcome to Smith Electrical Services”.

**On every page:**

- Your phone number, as a tap-to-call button on phones
- A WhatsApp button
- A short line of trust: reviews, years trading, accreditations

**Pages that bring in work from Google:**

- One page for each main service (boiler repair, rewires, roofing repairs)
- One page for each main town or area you cover
- An about page with a real photo of you and your team

**Proof:**

- Reviews, ideally pulled from Google
- Photos of real jobs, before and after
- Accreditations and memberships that apply to you, such as Gas Safe, NICEIC or TrustMark

## What to leave off

- Long company history on the homepage
- Stock photos of smiling models in hard hats
- Forms with ten boxes. Name, number and a short message is enough.
- Anything that slows the site down on a phone, like autoplay videos`),
      table('Build it yourself, or get it built?', [
        ['', 'DIY builder', 'Built for you'],
        ['Cost', '£9–£29 a month', 'Typically £1,500+ upfront, plus care'],
        ['Your time', 'Evenings and weekends', 'An hour or two to give us details'],
        ['Found on Google', 'Harder; you set up SEO yourself', 'Service and area pages set up for you'],
        ['Best for', 'Brand-new, very tight budget', 'Trades who want more work from Google'],
      ]),
      ...md(`## Make sure calls get answered

The best website in the world doesn’t help if the calls it brings go to voicemail while you’re on a roof. Pair your website with [call answering](/services/shiftspeed) so every enquiry gets a reply, and you get a text with the details.`),
      cta('We’ll look at your current website, or your plans for one, and show you what would bring in more calls.'),
      ...md(`See [our work for plumbers](/plumbers) and how we help businesses [get found by more customers](/services/shiftbuild).`),
    ],
    faqs: [
      ['Do tradesmen need a website?', 'Most do. Customers who find you on Google or through a recommendation usually check your website before calling. It’s where you show reviews, photos and the areas you cover.'],
      ['What is the best website builder for tradesmen?', 'Wix and Squarespace are popular and easy to start with. They work for a simple site, but you’ll need to set up local SEO and service pages yourself to win work from Google.'],
      ['How much does a website for a tradesman cost?', 'From £9 to £29 a month on a DIY builder, or typically £1,500 upwards for a professionally built site, plus a monthly fee for hosting and care.'],
      ['How many pages should a tradesman’s website have?', 'Enough for a page per main service and per main area you cover, plus home, about and contact. For most trades that’s 6 to 15 pages.'],
      ['Should I put prices on my website?', 'Where you can, yes. Even “from” prices or typical ranges help customers decide and reduce time-wasting calls.'],
    ],
    citations: cite(SRC.gbpSab, SRC.webCost),
  },

  /* 96 */
  {
    id: 'post-marketing-for-physiotherapy-clinic',
    slug: 'marketing-for-physiotherapy-clinic',
    plan: '2026-10-20',
    title: 'Marketing for Physiotherapy Clinics: How to Fill Your Diary',
    seoTitle: 'Marketing for Physiotherapy Clinics: Fill Your Diary',
    seoDescription: 'How physio clinics get more patients: Google Maps, reviews, online booking, fast replies and fewer no-shows. Practical steps for private physiotherapy practices.',
    focusKeyword: 'marketing for physiotherapy clinic',
    secondaryKeywords: ['how to get more physiotherapy clients', 'physio marketing', 'booking system for physio', 'ai receptionist for physiotherapy'],
    funnelStage: 'consideration',
    intent: 'commercial',
    excerpt: 'Most physio patients book when they’re in pain and want an appointment soon. Here’s how to be the clinic they find, trust and book with, and how to keep them coming back.',
    tags: ['Physiotherapy marketing', 'Clinic marketing', 'Online booking', 'No-shows'],
    cats: [CAT_LOCAL, CAT_CONVERSION],
    cover: { eyebrow: 'For physiotherapy clinics', lines: ['Fill your diary', 'with the right patients'], points: ['Found on Google', 'Book online', 'Fewer no-shows'] },
    coverAlt: 'Marketing for physiotherapy clinics: get found on Google, online booking and fewer no-shows',
    direct: ['How can a physiotherapy clinic get more patients?', 'Most physio patients search when they’re in pain and want to be seen soon. The clinics that win show up on Google Maps, have plenty of recent reviews, let patients book online at any hour, reply quickly to calls and messages, and send reminders so patients finish their course of treatment.'],
    takeaways: [
      'Patients in pain book quickly. Showing next available appointments wins bookings.',
      'Pages for the conditions you treat, like back pain or sports injuries, match what patients search.',
      '“Physiotherapist” is a protected title. Make sure everyone using it is HCPC registered.',
      'Online booking captures evening and weekend searches.',
      'Reminders and easy rebooking keep patients coming back to finish treatment.',
    ],
    body: () => [
      ...md(`Someone with a bad back doesn’t shop around for weeks. They search “physio near me”, look at the first few clinics, and book the one that looks good and can see them soonest.

Here’s how to be that clinic.

## 1. Show up when people search

Complete your Google Business Profile with the category Physiotherapist, your opening hours, photos of your treatment rooms and team, and every service you offer. Ask for reviews after treatment, when patients are feeling better.

## 2. Write about the problems patients search for

Patients don’t search for “musculoskeletal assessment”. They search “back pain physio”, “sports injury clinic” or “physio for knee pain”. A short page for each common condition, in plain language, helps Google match you to those searches and reassures the patient you can help.

## 3. Show who will treat them

Show each clinician’s name, photo, experience and registration. “Physiotherapist” is a protected title in the UK, so anyone using it must be registered with the Health and Care Professions Council (HCPC). Patients and insurers look for it.

## 4. Let patients book online, any time

Pain doesn’t keep office hours. Many patients search in the evening, so online booking with live availability turns those searches into appointments. Showing “next available: tomorrow” is a strong reason to book with you.

If patients do call or message out of hours, an [AI receptionist](/digital-receptionist) can answer, explain your services and prices, and book the first appointment.`),
      callout('info', 'Insurance and self-pay', 'Say clearly which insurers you work with and your self-pay prices. It’s one of the most common questions, and answering it on your website saves calls.'),
      ...md(`## 5. Keep patients coming back

A course of physio only works if patients finish it. Automatic reminders before each appointment reduce no-shows, and an easy way to book the next session before they leave keeps the diary full.`),
      table('Physio clinic marketing checklist', [
        ['Task', 'Why it matters'],
        ['Google profile with category, hours, photos and services', 'Where most new patients find you'],
        ['A page for each common condition', 'Matches what patients search for'],
        ['Clinician profiles with HCPC registration', 'Builds trust, and it’s a legal title'],
        ['Online booking with next availability', 'Captures evening and weekend searches'],
        ['Insurers and self-pay prices listed', 'Answers the top question before they call'],
        ['Automatic reminders', 'Fewer no-shows, more completed treatment'],
      ]),
      cta('We’ll check how your clinic shows up on Google, how easy it is to book, and where patients drop off.'),
    ],
    faqs: [
      ['How do physiotherapists get more clients?', 'By showing up on Google Maps, collecting reviews, writing pages for the conditions they treat, offering online booking and replying quickly to every enquiry.'],
      ['What is the best booking system for a physio clinic?', 'One that shows live availability, lets patients book and pay online, sends automatic reminders and handles insurance details.'],
      ['Is “physiotherapist” a protected title?', 'Yes. In the UK, anyone calling themselves a physiotherapist must be registered with the Health and Care Professions Council (HCPC).'],
      ['How can a physio clinic reduce no-shows?', 'Send reminders by text or WhatsApp before each appointment, make rescheduling easy, and consider a cancellation policy.'],
      ['Should physio clinics use Google Ads?', 'They can work for competitive areas, but set up your Google profile, reviews and online booking first so the clicks turn into appointments.'],
    ],
    citations: cite(SRC.hcpcTitles, SRC.gbpGuidelines),
  },

  /* 90 */
  {
    id: 'post-average-cost-of-a-website',
    slug: 'average-cost-of-a-website',
    plan: '2026-10-22',
    title: 'The Average Cost of a Website: What Businesses Really Pay Over 3 Years',
    seoTitle: 'Average Cost of a Website for Small Business (2026)',
    seoDescription: 'The average cost of a business website is more than the build price. See the real three-year cost of DIY, freelancer and agency websites, including running costs.',
    focusKeyword: 'average cost of a website for small business',
    secondaryKeywords: ['average website cost', 'website running costs', 'website maintenance cost', 'how much does a website cost per year'],
    funnelStage: 'decision',
    intent: 'commercial',
    excerpt: 'The build price is only part of what a website costs. Here’s the real three-year cost of each option, including hosting, updates and your own time.',
    tags: ['Website cost', 'Website maintenance', 'Pricing'],
    cats: [CAT_LOCAL],
    cover: { eyebrow: 'The real cost', lines: ['What a website costs', 'over three years'], points: ['Build', 'Running costs', 'Your time'] },
    coverAlt: 'The average cost of a website over three years: build price, running costs and your time',
    direct: ['What is the average cost of a website for a business?', 'Most businesses pay £1,500 to £10,000 to have a website built, depending on who builds it, plus £50 to £300 a month to keep it hosted, secure and up to date. Over three years, running costs can match or exceed the build price, so compare total cost, not just the upfront quote.'],
    takeaways: [
      'Build prices typically range from £1,500 (freelancer) to £10,000 (agency).',
      'Running costs of £50 to £300 a month add £1,800 to £10,800 over three years.',
      'DIY builders look cheapest but cost your time every month.',
      'A website that isn’t looked after usually needs rebuilding sooner.',
      'Judge the cost against the work it brings in, not in isolation.',
    ],
    body: () => [
      ...md(`Most articles about website prices stop at the build cost. But you don’t pay for a website once. You pay to build it, then every month to keep it running. Over three years, that second part can cost as much as the first.

Here’s what a business website really costs over three years, so you can compare options fairly. If you just want build prices, see our guide to [how much a website costs](/insights/how-much-does-a-website-cost).

## The three-year cost of each option`),
      table('Estimated three-year cost (typical ranges)', [
        ['Option', 'Upfront', 'Monthly', 'Three-year total'],
        ['DIY builder', '£0', '£9–£29', '£324–£1,044, plus your time'],
        ['Freelancer', '£1,500–£3,000', '£50–£150', '£3,300–£8,400'],
        ['Agency', '£3,000–£10,000', '£100–£300', '£6,600–£20,800'],
      ]),
      ...md(`These are estimates built from typical 2026 UK prices. Your own quotes may be higher or lower.

## What the monthly cost pays for

- **Hosting**: where your website lives, so it loads quickly and stays online
- **Security updates and backups**: so it doesn’t get hacked or lose content
- **Your domain**: usually £10 to £20 a year
- **Small changes**: prices, photos, opening hours, new services
- **Monitoring**: someone noticing when something breaks, before customers do

## The hidden cost: your time

A DIY website looks cheapest, but count your hours. If you spend three hours a month updating and fixing it, and your time is worth £40 an hour, that’s £120 a month, more than many managed plans.

## The costliest option: a website nobody looks after

Websites that aren’t updated slow down, break on new phones and slip down Google. Most end up rebuilt from scratch after a few years, so you pay the build cost twice.

## How to think about value

The right question isn’t “what’s the cheapest website?” but “what will it bring in?”. If your website brings in two extra jobs a month worth £250 each, that’s £18,000 over three years. Against that, even an agency build pays for itself.`),
      cta('We’ll look at what your current website costs you, what it brings in, and whether it needs fixing or replacing.'),
    ],
    faqs: [
      ['What is the average cost of a business website?', 'Most pay £1,500 to £3,000 with a freelancer or £3,000 to £10,000 with an agency, plus £50 to £300 a month for hosting and care.'],
      ['How much does a website cost per year?', 'Running costs are typically £600 to £3,600 a year for hosting, security, updates and small changes, plus the domain.'],
      ['Is website maintenance worth paying for?', 'Usually, yes. Without it, sites slow down, break and slip down Google, and often need a full rebuild sooner.'],
      ['Are DIY websites really cheaper?', 'In money, yes. Once you count your own time and the work a weaker site may miss, often not.'],
      ['How long should a website last?', 'A well-maintained website can last many years with regular updates. A neglected one often needs replacing within a few.'],
    ],
    citations: cite(SRC.webCost, SRC.webCost2),
  },
];

function toDoc(p, heroRef) {
  return {
    _id: p.id,
    _type: 'post',
    title: p.title,
    slug: { _type: 'slug', current: p.slug },
    status: 'draft',
    updatedAt: new Date().toISOString(),
    featured: false,
    excerpt: p.excerpt,
    mainImage: img(heroRef, p.coverAlt),
    author: { _type: 'reference', _ref: AUTHOR_ID },
    categories: p.cats.map((ref) => ({ _type: 'reference', _ref: ref, _key: key() })),
    tags: p.tags,
    schemaType: 'BlogPosting',
    body: p.body(),
    directAnswer: { question: p.direct[0], answer: p.direct[1] },
    keyTakeaways: { title: 'Key takeaways', points: p.takeaways },
    faqSection: faq(p.faqs),
    citations: p.citations,
    entities: [{ _key: key(), name: 'ShiftDeploy', type: 'Organization', sameAs: 'https://shiftdeploy.com' }],
    speakable: { enabled: true, cssSelectors: ['.direct-answer', '.key-takeaways'] },
    seo: {
      seoTitle: p.seoTitle,
      seoDescription: p.seoDescription,
      focusKeyword: p.focusKeyword,
      secondaryKeywords: p.secondaryKeywords,
      searchIntent: p.intent,
      funnelStage: p.funnelStage,
      targetAudience: 'Owners of clinics, trades and other local service businesses in the UK.',
    },
  };
}

async function main() {
  await client.createOrReplace({
    _id: CAT_LOCAL,
    _type: 'category',
    title: 'Websites & Local Marketing',
    slug: { _type: 'slug', current: 'websites-local-marketing' },
    description: 'Getting found on Google, winning reviews and websites that bring in work.',
    topicCluster: 'Local marketing',
    color: '#1D4ED8',
  });

  for (const p of POSTS) {
    const existing = await client.fetch('*[_id == $id][0]{status, "hero": mainImage.asset._ref}', { id: p.id });
    if (existing?.status === 'published') {
      console.log(`skip (already published): ${p.slug}`);
      continue;
    }
    let heroRef = existing?.hero;
    if (!heroRef) {
      const asset = await client.assets.upload('image', Buffer.from(coverSvg(p.cover)), {
        filename: `${p.slug}.svg`,
        contentType: 'image/svg+xml',
      });
      heroRef = asset._id;
    }
    await client.createOrReplace(toDoc(p, heroRef));
    console.log(`draft saved: ${p.plan}  /insights/${p.slug}`);
  }
}

main().catch((err) => {
  console.error('\nFailed:', err.message);
  process.exit(1);
});
