import { table, note, cta, cite, SRC, CAT } from './lib.mjs';

export default [
  /* #97 */
  {
    id: 'post-crm-for-tradesmen',
    slug: 'crm-for-tradesmen',
    cluster: 'Automation',
    keywords: [97],
    title: 'Do Tradesmen Need a CRM? What It Does, and Simpler Alternatives',
    seoTitle: 'CRM for Tradesmen: Do You Need One?',
    seoDescription: 'What a CRM does for tradespeople: tracking enquiries, quotes, jobs and follow-ups. When it’s worth it, what to look for, and simpler options for sole traders.',
    focusKeyword: 'crm for tradesman',
    secondaryKeywords: ['crm for trades', 'crm for plumbers', 'crm for builders', 'job management software for trades'],
    stage: 'consideration',
    excerpt: 'If quotes live in your head, your texts and the back of an invoice pad, you’re losing work. Here’s what a CRM does for a trade business, and whether you actually need one.',
    tags: ['CRM', 'Trades', 'Automation'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For trades', lines: ['Do tradesmen need', 'a CRM?'], points: ['Enquiries', 'Quotes', 'Follow-ups'] },
    coverAlt: 'Do tradesmen need a CRM? Tracking enquiries, quotes and follow-ups',
    direct: ['Do tradesmen need a CRM?', 'A CRM helps tradespeople keep every enquiry, quote, job and customer in one place, and reminds you to follow up quotes and book repeat work. Busy trades and teams usually benefit. Sole traders with few jobs can often manage with a simpler set-up, as long as every enquiry is captured and every quote is followed up.'],
    takeaways: [
      'A CRM is a list of every enquiry, quote and customer, with reminders.',
      'The biggest win is following up quotes you’d otherwise forget.',
      'Repeat work, like annual services, is easy to remind customers about.',
      'Sole traders may not need a full CRM, but they do need a system.',
      'Choose something you’ll actually use on your phone.',
    ],
    body: [
      `“CRM” sounds like something for sales teams in offices. For a trade business it’s much simpler: somewhere to keep every enquiry, every quote and every customer, so nothing slips.

## Signs you need one

- You’ve lost track of a quote and the customer went elsewhere
- You can’t remember who you promised to call back
- Customers ask “did you get my message?”
- You never remind past customers about annual services
- More than one person handles enquiries

## What a CRM does for trades`,
      table('What a trade CRM or job system handles', [
        ['Feature', 'Why it matters'],
        ['Every enquiry in one list', 'Nothing lost in texts or voicemail'],
        ['Quotes with status', 'See which are waiting, won or lost'],
        ['Follow-up reminders', 'Win more quotes'],
        ['Job scheduling', 'Plan your week and travel'],
        ['Customer history', 'Know what you did last time'],
        ['Service reminders', 'Repeat work every year'],
      ]),
      `## For sole traders: a lighter option

If you do a handful of jobs a week, a full system might be overkill. What you do need:

1. Every enquiry written down in one place, even a simple spreadsheet or app
2. A reminder to follow up every quote after a few days
3. A reminder for annual services

## The part a CRM can’t do

A CRM only helps with enquiries you actually capture. Missed calls never make it in. That’s why we pair it with an [AI receptionist for tradesmen](/insights/ai-receptionist-for-tradesmen) that answers every call and logs the details.`,
      note('Keep it simple', 'The best system is the one you’ll use from your van at 6pm. Try any tool on your phone before paying for a year.'),
      cta('We’ll look at how enquiries and quotes flow through your business now, and where jobs are being lost.'),
    ],
    faqs: [
      ['What is a CRM for tradesmen?', 'A system to keep every enquiry, quote, job and customer in one place, with reminders to follow up.'],
      ['Do sole traders need a CRM?', 'Not always. But you need some system to capture every enquiry and follow up every quote.'],
      ['What’s the difference between a CRM and job management software?', 'CRMs focus on enquiries and customers; job management software adds scheduling, invoicing and job sheets. Many trade tools do both.'],
      ['Can a CRM follow up quotes automatically?', 'Many can send automatic follow-ups or remind you to.'],
      ['Will it help with repeat work?', 'Yes. Service reminders are one of the easiest ways to get repeat jobs.'],
    ],
    citations: cite(SRC.ico),
  },

  /* #98, #100 */
  {
    id: 'post-ai-automation-for-dental-practices',
    slug: 'ai-automation-for-dental-practices',
    cluster: 'Automation',
    keywords: [98, 100],
    title: 'AI and Automation for Dental Practices: What’s Worth Automating (and What Isn’t)',
    seoTitle: 'AI Automation for Dental Practices: What to Automate',
    seoDescription: 'Which dental practice tasks are worth automating with AI: calls, recalls, reminders, reviews and patient messages. Plus when a dental CRM helps.',
    focusKeyword: 'ai automation for dental clinics',
    secondaryKeywords: ['crm for dental practice', 'ai automation for dentists', 'dental practice automation', 'dental recall automation'],
    stage: 'consideration',
    excerpt: 'Dental teams spend hours on calls, recalls and reminders. Some of that is perfect for automation; some should never leave human hands. Here’s where the line is.',
    tags: ['AI automation', 'Dental practices', 'CRM'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For dental practices', lines: ['What to automate', 'in a dental practice'], points: ['Calls', 'Recalls', 'Reviews'] },
    coverAlt: 'What dental practices can automate: calls, recalls and review requests',
    direct: ['What can a dental practice automate with AI?', 'Dental practices can automate answering routine calls and messages, booking check-ups and hygiene visits, recall and appointment reminders, new patient forms, review requests and follow-ups for treatment plans that weren’t booked. Clinical decisions, emergencies and complaints should stay with the team.'],
    takeaways: [
      'Routine calls, reminders and recalls are ideal for automation.',
      'Recalls that go out on time fill the diary months ahead.',
      'Following up unbooked treatment plans recovers real revenue.',
      'A dental CRM helps if you track enquiries and treatment plans outside your practice software.',
      'Keep clinical questions, emergencies and complaints human.',
    ],
    body: [
      `Ask a practice manager where the team’s time goes and you’ll hear the same list: phones, recalls, reminders, chasing forms, chasing payments. Most of it is repetitive, and a lot of it can run on its own.

## Worth automating`,
      table('Dental tasks and automation', [
        ['Task', 'Automate?', 'How'],
        ['Routine booking calls', 'Yes', 'AI receptionist books check-ups and hygiene'],
        ['Appointment reminders', 'Yes', 'Text or WhatsApp, with confirm and rebook'],
        ['Recalls', 'Yes', 'Automatic reminders when patients are due'],
        ['New patient forms', 'Yes', 'Sent and completed online before the visit'],
        ['Review requests', 'Yes', 'After each appointment'],
        ['Unbooked treatment plans', 'Yes, gently', 'A follow-up after a few days'],
        ['Emergencies and pain', 'No', 'Straight to the team'],
        ['Clinical questions', 'No', 'Clinician'],
        ['Complaints', 'No', 'Practice manager'],
      ]),
      `## Do you need a dental CRM?

Your practice management software already holds patient records and appointments. A separate CRM helps when you want to track things that software handles less well, like private treatment enquiries (implants, aligners, whitening) that haven’t become patients yet, and follow-ups on treatment plans. If your software already does this, you may not need another tool.

## Where AI fits

An AI receptionist answers calls, WhatsApp and website chat, books routine appointments and sends reminders. It frees the front desk for the patients in front of them. Read more about an [AI receptionist for dental practices](/insights/ai-receptionist-for-dentists).`,
      note('Data protection', 'Anything touching patient information needs proper data protection terms and minimal data collection. Check where each tool stores data and who can access it.', 'warning'),
      cta('We’ll look at where your team’s time goes and which parts could run on their own.'),
    ],
    faqs: [
      ['What can dental practices automate?', 'Routine calls and bookings, reminders, recalls, new patient forms, review requests and treatment plan follow-ups.'],
      ['Should AI handle dental emergencies?', 'No. Emergencies and pain calls should go straight to the team or the right urgent care route.'],
      ['Do dental practices need a CRM?', 'Only if your practice software doesn’t already track private enquiries and treatment plan follow-ups well.'],
      ['Can recalls be automated?', 'Yes. Automatic recall reminders help fill the diary ahead of time.'],
      ['Is automation GDPR compliant?', 'It can be, with minimal data collection, clear privacy notices and suitable data processing terms.'],
    ],
    citations: cite(SRC.ico, SRC.gdcAds),
  },

  /* #99 */
  {
    id: 'post-crm-for-beauty-salon',
    slug: 'crm-for-beauty-salon',
    cluster: 'Automation',
    keywords: [99],
    title: 'CRM for Beauty Salons: Keep Clients Coming Back Without Chasing Them',
    seoTitle: 'Best CRM for Beauty Salons: What to Look For',
    seoDescription: 'What a salon CRM does: client history, rebooking reminders and lapsed clients. How to choose one, and whether your booking system already does it.',
    focusKeyword: 'best crm for beauty salon',
    secondaryKeywords: ['crm for beauty salon', 'crm for salon', 'salon client management', 'crm for hair salon'],
    stage: 'consideration',
    excerpt: 'Your best marketing is the clients you already have. A salon CRM remembers them for you: what they had, when they’re due, and who hasn’t been back.',
    tags: ['CRM', 'Salons', 'Client retention'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For salons', lines: ['A CRM that keeps', 'clients coming back'], points: ['Client history', 'Rebooking', 'Lapsed clients'] },
    coverAlt: 'A salon CRM that tracks client history, rebooking and lapsed clients',
    direct: ['What should a beauty salon CRM do?', 'A salon CRM should keep each client’s history, preferences and patch test records, remind clients when they’re due to rebook, spot clients who haven’t been back in a while, and send birthday or seasonal messages with consent. Many salon booking systems already include these features, so check before buying a separate CRM.'],
    takeaways: [
      'A CRM remembers every client’s history, preferences and patch tests.',
      'Rebooking reminders keep the diary full.',
      'Win-back messages bring lapsed clients back.',
      'Many salon booking systems already include CRM features.',
      'Marketing messages need clients’ consent.',
    ],
    body: [
      `The clients most likely to book with you next month are the ones who booked with you last month. A CRM is simply a way of not forgetting them.

## What a salon CRM does

- Keeps client history: services, colour formulas, products bought, preferences
- Stores patch test records
- Reminds clients when they’re due, say six weeks after a cut
- Flags clients who haven’t been back in three months
- Sends birthday or seasonal messages, if they’ve agreed to marketing

## Check your booking system first

Many salon booking systems include client records, reminders and marketing. Before paying for a separate CRM, check whether yours already does what you need.`,
      table('Separate CRM or booking system features?', [
        ['You need', 'Usually in booking system?'],
        ['Client history and notes', 'Yes'],
        ['Appointment reminders', 'Yes'],
        ['Rebooking reminders', 'Often'],
        ['Lapsed client win-backs', 'Sometimes'],
        ['WhatsApp conversations in one place', 'Rarely'],
      ]),
      note('Consent', 'Appointment reminders are service messages. Birthday offers and promotions are marketing, which needs the client’s consent. Keep a record of who has agreed.', 'warning'),
      `## Messages and calls

A CRM only knows about clients who booked. Enquiries that come in by phone or WhatsApp while you’re working need catching too. Our [AI receptionist for salons](/insights/ai-receptionist-for-salons) answers them and books into your diary, and read [choosing a salon booking system](/insights/booking-system-for-salons) before you buy anything.`,
      cta('We’ll look at how clients book and rebook with your salon, and where they drift away.'),
    ],
    faqs: [
      ['Do beauty salons need a CRM?', 'Most benefit from CRM features, but many salon booking systems already include them.'],
      ['What’s the best CRM for a beauty salon?', 'One that stores client history and patch tests, sends rebooking reminders and fits your booking system and budget.'],
      ['Can a CRM bring back lapsed clients?', 'Yes. Automatic messages to clients who haven’t visited in a while bring many back.'],
      ['Do I need consent to send clients offers?', 'Yes. Promotional messages need consent. Appointment reminders are service messages.'],
      ['Can a CRM manage WhatsApp messages?', 'Some can. Otherwise a WhatsApp set-up connected to your booking system handles it.'],
    ],
    citations: cite(SRC.ico, { title: 'Guide to Privacy and Electronic Communications Regulations (PECR)', publisher: 'Information Commissioner’s Office', url: 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/' }),
  },
];
