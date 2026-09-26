/**
 * Seeds the WhatsApp Business API guide into Sanity.
 *
 * Run:  node scripts/seed-whatsapp-api-post.mjs
 * Re-runnable: fixed _ids, so a second run updates rather than duplicating.
 *
 * Pricing facts checked against Meta's pricing page on 2026-09-26:
 * https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing
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
const key = () => `w${(k++).toString(36)}${Math.random().toString(36).slice(2, 6)}`;

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

const img = (ref, alt) => ({ _type: 'image', asset: { _type: 'reference', _ref: ref }, alt });

const AUTHOR_ID = '836dce1e-e110-4072-8f5f-9e6db71c4672';
const CAT_AUTOMATION = 'category-automation';
const CAT_CONVERSION = 'category-conversion';
const PRICING_URL = 'https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing';
const HERO_ALT = 'Comparison of the free WhatsApp Business app and the WhatsApp Business API for handling customer messages';

const body = (heroRef) => [
  ...md(`A customer messages you on WhatsApp at 8pm asking if you have a slot on Thursday. You see it at 7am. By then they've booked with someone who replied.

That's the problem the **WhatsApp Business API** solves. It sounds technical, but the idea is simple: it lets WhatsApp reply, book and remind customers for you, instead of you doing it by hand on your phone.

This guide explains what it is, how it's different from the free WhatsApp Business app, what it really costs, and whether your business needs it yet.`),

  {
    _type: 'imageBlock',
    _key: key(),
    image: img(heroRef, HERO_ALT),
    alt: HERO_ALT,
    caption: 'Your customers see the same WhatsApp. The difference is how much of the work you do by hand.',
    width: 'wide',
    alignment: 'center',
    rounded: true,
  },

  ...md(`## What is the WhatsApp Business API?

The WhatsApp Business API (Meta now calls it the WhatsApp Business Platform) is the version of WhatsApp built for businesses that get a lot of messages. Instead of living on one phone, your WhatsApp number connects to other tools, like your booking system, your diary or an AI receptionist.

Once it's connected, WhatsApp can:

- Reply to customers instantly, at any hour
- Answer common questions about prices, opening hours and availability
- Take a booking and put it straight into your diary
- Send appointment reminders and confirmations automatically
- Follow up quotes and enquiries that went quiet
- Let several people in your team answer from the same number

There's no separate app to download. You don't need to know what "API" means either: it just means "a way for WhatsApp to talk to your other systems".

## WhatsApp Business app vs WhatsApp Business API

Most businesses start with the free **WhatsApp Business app**. It's great to begin with: you get a business profile, a catalogue and simple away messages. The trouble starts when WhatsApp becomes a real source of work.`),

  {
    _type: 'table',
    _key: key(),
    caption: 'The free app compared with the Business API',
    hasHeaderRow: true,
    rows: [
      { _key: key(), _type: 'row', cells: ['', 'WhatsApp Business app', 'WhatsApp Business API'] },
      { _key: key(), _type: 'row', cells: ['Who replies', 'You, by hand', 'Automatic replies, plus your team'] },
      { _key: key(), _type: 'row', cells: ['Replies at night and weekends', 'Only a basic away message', 'Full answers and bookings, 24/7'] },
      { _key: key(), _type: 'row', cells: ['Bookings', 'You type them into your diary', 'Go straight into your diary'] },
      { _key: key(), _type: 'row', cells: ['Reminders and follow-ups', 'Sent by hand, if you remember', 'Sent automatically'] },
      { _key: key(), _type: 'row', cells: ['Team access', 'One phone and a few linked devices', 'Your whole team on one number'] },
      { _key: key(), _type: 'row', cells: ['Cost', 'Free', 'Pay per message you send (see below)'] },
    ],
  },

  ...md(`A simple way to decide: if you're replying to a handful of messages a day and never miss one, the free app is fine. If messages are waiting hours for a reply, or you're copying bookings from WhatsApp into your diary, you've outgrown it.

## How much does the WhatsApp Business API cost?

Meta charges per message, and the rules are kinder than most people expect:

- **Replying to a customer is free.** When a customer messages you, a 24-hour customer service window opens. Your replies inside that window don't cost anything.
- **Messages you start are charged.** If you message a customer first, for example an appointment reminder the next week, you use an approved message template, and Meta charges for each one delivered.
- **The price depends on the type of message.** Marketing messages (offers, promotions) cost the most. Utility messages (reminders, confirmations, updates) cost much less, and they're free when sent inside an open customer service window.
- **The price depends on the customer's country.** Rates are set by the country code of the customer's phone number.

Meta updates its prices from time to time, so always check [Meta's official pricing page](${PRICING_URL}) for today's rates. On top of Meta's charges, you'll pay for whatever runs your automation: a software platform, or a company like ours that sets it up and looks after it.

For most service businesses the numbers are small, because most conversations start with the customer, and those replies are free. What you save is time, and the jobs you no longer lose to slow replies.`),

  {
    _type: 'callout',
    _key: key(),
    variant: 'info',
    showIcon: true,
    title: 'Can I keep my WhatsApp number?',
    content:
      'Usually, yes. Meta lets many businesses connect their existing WhatsApp Business app number to the API and keep using the app on their phone at the same time, with chat history kept in sync. Meta calls this coexistence. We check whether your number qualifies before anything changes.',
  },

  ...md(`## What can you actually automate?

Here's what WhatsApp automation looks like in a normal week for a clinic, salon or trades business:

- **Instant first reply.** Every new message gets an answer in seconds, not hours, even when you're with a customer.
- **Questions answered.** Prices, opening hours, parking, what to bring: answered the way you would, every time.
- **Bookings taken.** The customer picks a free slot and it lands in your diary. You get a notification.
- **Reminders sent.** A reminder the day before cuts no-shows, and the customer can reply to rebook.
- **Quotes followed up.** A friendly nudge a few days after a quote, so fewer go quiet.
- **Hand over to a person.** Anything unusual comes straight to you with the full conversation.

## Is AI allowed on WhatsApp?

Yes, for your business. In 2026 Meta stopped general-purpose AI chatbots (tools like ChatGPT) from running on the WhatsApp Business Platform. AI assistants that do business tasks, like answering customer questions, taking bookings and giving order updates, are still allowed.

In other words, an AI receptionist that knows your services, prices and diary is exactly the kind of use Meta supports. Just make sure whoever sets it up keeps it focused on your business.

## How to get started with the WhatsApp Business API

You apply through Meta, either directly or through a partner that sets it up for you. The main steps are below. If you'd rather not deal with any of it, we handle the whole thing.`),

  {
    _type: 'cta',
    _key: key(),
    label: 'Get your free check',
    url: '/ContactUs',
    description: 'Tell us how customers contact you now. We’ll show you what WhatsApp could handle for you, and what it would cost, before you commit to anything.',
    placement: 'inline',
  },

  ...md(`## Do you need it yet?

You probably do if any of these sound familiar:

- WhatsApp messages sit for hours because you're busy with customers
- You get messages in the evening and reply the next morning
- You copy bookings from WhatsApp into your diary by hand
- Customers forget appointments and you don't have time to remind them
- More than one person needs to answer the business WhatsApp

If none of them apply, stay on the free app for now. When WhatsApp starts costing you work, that's the time to switch.

Want to see it working first? Our [AI receptionist](/digital-receptionist) answers phone calls, website chats and WhatsApp messages from the same place. Or read how we help businesses [never miss a call or enquiry](/services/shiftspeed).`),
];

const post = (heroRef) => ({
  _id: 'post-whatsapp-business-api-guide',
  _type: 'post',
  title: 'WhatsApp Business API: What It Is, What It Costs and Whether You Need It',
  slug: { _type: 'slug', current: 'whatsapp-business-api-guide' },
  status: 'published',
  publishedAt: '2026-09-26T09:00:00.000Z',
  updatedAt: '2026-09-26T09:00:00.000Z',
  featured: true,
  excerpt:
    'The WhatsApp Business API lets WhatsApp reply, book and remind customers for you. How it differs from the free app, what it really costs, and when it’s worth switching.',
  mainImage: img(heroRef, HERO_ALT),
  author: { _type: 'reference', _ref: AUTHOR_ID },
  categories: [
    { _type: 'reference', _ref: CAT_AUTOMATION, _key: key() },
    { _type: 'reference', _ref: CAT_CONVERSION, _key: key() },
  ],
  tags: ['WhatsApp Business API', 'WhatsApp automation', 'AI receptionist', 'Online booking'],
  schemaType: 'BlogPosting',
  body: body(heroRef),

  directAnswer: {
    question: 'What is the WhatsApp Business API?',
    answer:
      'The WhatsApp Business API, now called the WhatsApp Business Platform, is the version of WhatsApp for businesses that get lots of messages. It connects your WhatsApp number to tools like your booking system or an AI receptionist, so customers get instant replies, bookings and reminders automatically. Replies to customers within 24 hours are free; messages you start are charged per message.',
    supportingStat: 'Replies sent inside the 24-hour customer service window are free.',
    statSource: 'Meta for Developers',
    statSourceUrl: PRICING_URL,
  },

  keyTakeaways: {
    title: 'Key takeaways',
    points: [
      'The WhatsApp Business API lets WhatsApp reply, book and send reminders for you, instead of you doing it by hand.',
      'The free WhatsApp Business app is fine until messages start waiting hours for a reply.',
      'Replying to a customer within 24 hours of their message is free. Messages you start, like reminders and offers, are charged per message.',
      'Prices depend on the type of message and the customer’s country. Always check Meta’s official pricing page.',
      'Business AI assistants, like an AI receptionist, are allowed on WhatsApp. General-purpose chatbots like ChatGPT are not.',
    ],
  },

  faqSection: {
    title: 'Frequently asked questions',
    items: [
      {
        _key: key(),
        isPrimary: true,
        question: 'Is the WhatsApp Business API free?',
        answer:
          'Not completely. Setting up access through Meta has no fee, and replies to customers inside the 24-hour customer service window are free. Messages your business starts, such as reminders or offers, are charged per message by Meta. You also pay for the software or partner that runs your automation.',
      },
      {
        _key: key(),
        question: 'What is the difference between WhatsApp Business and the WhatsApp Business API?',
        answer:
          'The WhatsApp Business app is a free app you use by hand on your phone. The WhatsApp Business API connects your number to other systems, so messages can be answered automatically, bookings go into your diary and your whole team can reply from one number.',
      },
      {
        _key: key(),
        question: 'Can I use my existing WhatsApp number with the API?',
        answer:
          'Usually, yes. Meta lets many businesses connect their existing WhatsApp Business app number to the API and keep using the app at the same time, with chat history in sync. This is called coexistence. It’s worth checking your number qualifies before you start.',
      },
      {
        _key: key(),
        question: 'Can I send automatic replies on WhatsApp Business?',
        answer:
          'The free app only offers basic away and greeting messages. For full automatic replies that answer questions and take bookings, you need the WhatsApp Business API connected to an automation or AI receptionist.',
      },
      {
        _key: key(),
        question: 'Can I use AI on WhatsApp for my business?',
        answer:
          'Yes. Meta allows AI assistants that handle business tasks such as customer service, bookings and order updates. Since January 2026, general-purpose AI chatbots like ChatGPT are not allowed on the WhatsApp Business Platform.',
      },
      {
        _key: key(),
        question: 'How long does it take to set up?',
        answer:
          'Often a few days, depending on how quickly Meta verifies your business and approves your display name and message templates. A partner can handle the whole process for you.',
      },
    ],
  },

  howTo: {
    title: 'How to set up the WhatsApp Business API',
    description: 'The main steps, whether you do it yourself or through a partner.',
    totalTime: 'P5D',
    steps: [
      { _key: key(), name: 'Create a Meta Business account', text: 'Set up a Meta Business account (Business Manager) in your business name, if you don’t already have one.' },
      { _key: key(), name: 'Verify your business', text: 'Complete Meta business verification with your business details, so your account can message customers at scale.' },
      { _key: key(), name: 'Connect your phone number', text: 'Add the number customers already use, or a new one. Many existing WhatsApp Business app numbers can be connected without losing the app.' },
      { _key: key(), name: 'Get your display name approved', text: 'Meta checks that the name customers will see matches your business.' },
      { _key: key(), name: 'Create message templates', text: 'Write the reminders and confirmations you’ll send first, and submit them to Meta for approval.' },
      { _key: key(), name: 'Connect your booking system and automation', text: 'Link WhatsApp to your diary, CRM or AI receptionist so replies, bookings and reminders run on their own.' },
    ],
  },

  citations: [
    { _key: key(), title: 'Pricing on the WhatsApp Business Platform', publisher: 'Meta for Developers', url: PRICING_URL },
    { _key: key(), title: 'Onboard WhatsApp Business app users (coexistence)', publisher: 'Meta for Developers', url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users' },
    { _key: key(), title: 'WhatsApp changes its terms to bar general-purpose chatbots', publisher: 'TechCrunch', url: 'https://techcrunch.com/2025/10/18/whatssapp-changes-its-terms-to-bar-general-purpose-chatbots-from-its-platform/' },
  ],

  entities: [
    { _key: key(), name: 'WhatsApp', type: 'Organization', sameAs: 'https://en.wikipedia.org/wiki/WhatsApp' },
    { _key: key(), name: 'Meta Platforms', type: 'Organization', sameAs: 'https://en.wikipedia.org/wiki/Meta_Platforms' },
    { _key: key(), name: 'ShiftDeploy', type: 'Organization', sameAs: 'https://shiftdeploy.com' },
  ],

  speakable: { enabled: true, cssSelectors: ['.direct-answer', '.key-takeaways'] },

  seo: {
    seoTitle: 'WhatsApp Business API: What It Is, Costs & Setup',
    seoDescription:
      'What the WhatsApp Business API is, how it differs from the free app, what it really costs per message, and when it’s worth switching. Plain English.',
    focusKeyword: 'WhatsApp Business API',
    secondaryKeywords: ['WhatsApp Business API pricing', 'WhatsApp Business API vs app', 'WhatsApp automation for business', 'WhatsApp auto reply'],
    semanticKeywords: ['WhatsApp Business Platform', 'Meta', 'customer service window', 'message templates', 'coexistence', 'AI receptionist', 'appointment reminders'],
    searchIntent: 'commercial',
    funnelStage: 'consideration',
    targetAudience:
      'Owners of clinics, salons, trades and other service businesses whose customers message them on WhatsApp and who are losing bookings to slow replies.',
  },
});

async function main() {
  await client.createOrReplace({
    _id: CAT_AUTOMATION,
    _type: 'category',
    title: 'Automation & AI',
    slug: { _type: 'slug', current: 'automation-ai' },
    description: 'WhatsApp, AI receptionists and automation that answer, book and follow up for you.',
    topicCluster: 'Automation',
    color: '#C2410C',
  });

  const existing = await client.fetch('*[_id == "post-whatsapp-business-api-guide"][0].mainImage.asset._ref');
  let heroRef = existing;
  if (!heroRef) {
    const asset = await client.assets.upload('image', fs.readFileSync(path.join(root, 'scripts', 'assets', 'whatsapp-app-vs-api.svg')), {
      filename: 'whatsapp-business-app-vs-api.svg',
      contentType: 'image/svg+xml',
    });
    heroRef = asset._id;
  }

  const doc = post(heroRef);
  await client.createOrReplace(doc);
  console.log(`Done: https://shiftdeploy.com/insights/${doc.slug.current}`);
}

main().catch((err) => {
  console.error('\nFailed:', err.message);
  process.exit(1);
});
