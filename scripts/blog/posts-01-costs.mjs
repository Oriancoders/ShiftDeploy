import { table, note, cta, cite, SRC, CAT } from './lib.mjs';

const answeringCostSources = [
  { title: 'Telephone answering service costs UK: 2026 guide', publisher: 'Sayora', url: 'https://sayora.ai/guides/telephone-answering-service-cost/' },
  { title: 'Answering Service Pricing UK 2026', publisher: 'Team Connect', url: 'https://team-connect.co.uk/best-answering-service/pricing' },
];

export default [
  /* #1 */
  {
    id: 'post-how-much-does-an-ai-receptionist-cost',
    slug: 'how-much-does-an-ai-receptionist-cost',
    cluster: 'AI receptionist',
    keywords: [1],
    title: 'How Much Does an AI Receptionist Cost? Prices, Hidden Extras and What’s Worth Paying For',
    seoTitle: 'How Much Does an AI Receptionist Cost? 2026 Prices',
    seoDescription: 'What an AI receptionist really costs per month, how pricing works (per minute, per call, flat fee), and how it compares with hiring a receptionist.',
    focusKeyword: 'how much does an AI receptionist cost',
    secondaryKeywords: ['ai receptionist cost', 'ai receptionist cost per month', 'ai receptionist for small business cost', 'what does an ai receptionist cost'],
    stage: 'decision',
    excerpt: 'Off-the-shelf AI receptionists start from about £50 a month. A set-up that books into your diary costs more. Here’s how the pricing works and how to avoid paying for the wrong thing.',
    tags: ['AI receptionist', 'Pricing', 'Call answering'],
    cats: [CAT.automation],
    cover: { eyebrow: 'AI receptionist prices', lines: ['What does an AI', 'receptionist cost?'], points: ['From ~£50/month', 'Per minute or flat', 'vs £2,360 staff'] },
    coverAlt: 'What an AI receptionist costs: from about £50 a month, compared with around £2,360 a month for a full-time receptionist',
    direct: ['How much does an AI receptionist cost?', 'Off-the-shelf AI receptionist apps start from roughly £50 to £100 a month for low call volumes. A set-up that knows your services, books straight into your diary and answers WhatsApp too usually costs more, with a one-off set-up fee. A full-time receptionist on the National Living Wage costs around £2,360 a month once National Insurance and pension are added.'],
    takeaways: [
      'Cheap AI receptionist apps start around £50 to £100 a month, usually with a cap on minutes.',
      'Pricing is per minute, per call or a flat monthly fee. Check what happens when you go over.',
      'The real cost difference is set-up: does it actually book into your diary, or just take a message?',
      'A full-time receptionist on minimum wage costs roughly £2,360 a month in 2026.',
      'The right comparison is cost per booking won, not cost per month.',
    ],
    body: [
      `Most people asking this question have just missed a call they shouldn’t have. Maybe it was a new customer, maybe a big job. And they’re wondering whether a robot on the phone is going to cost £20 or £2,000.

The honest answer: somewhere in between, and the price on the website is rarely the whole story.

## The short version

- Basic AI receptionist apps: from roughly £50 to £100 a month. You set it up yourself. It answers, takes a message and emails you.
- Set up for your business: more, plus a one-off set-up fee. It learns your services and prices, books into your diary, and handles WhatsApp and website chat as well as calls.
- A human receptionist: around £2,360 a month for someone full-time on the National Living Wage, before holidays and sick cover.

## How AI receptionists charge

There are three common models, and each suits a different business.`,
      table('How AI receptionist pricing works', [
        ['Model', 'How it works', 'Good for'],
        ['Per minute', 'You pay for the minutes the AI spends on calls', 'Low or unpredictable call volumes'],
        ['Per call', 'A fixed price for each answered call', 'Short, simple calls'],
        ['Flat monthly fee', 'One price, often with a minutes cap', 'Busy businesses who want a predictable bill'],
      ]),
      `Whichever model you pick, ask one question before signing: **what happens when I go over?** Some plans quietly switch to expensive per-minute rates, others stop answering. A busy Monday shouldn’t double your bill.

## What pushes the price up

**Booking into your diary.** An AI that says “someone will call you back” is cheap. One that checks your real availability and books the slot is worth far more, but it has to be connected to your booking system or calendar.

**More than phone calls.** If customers also message you on WhatsApp or your website, covering all three from one place costs more than phone alone. It’s usually cheaper than three separate tools.

**Your own voice and rules.** Custom greetings, what counts as urgent, when to put a call through to you, how to handle complaints. This is set-up time.

**Call volume.** Obvious, but worth saying. A salon taking 40 calls a day will pay more than a solicitor taking five.

## The comparison that matters

Here’s the maths most people skip. A full-time receptionist on the National Living Wage (£12.71 an hour in 2026), working 37.5 hours a week, costs about £24,800 a year in wages. Add employer National Insurance and pension and it’s around £28,300, or roughly £2,360 a month. And they still go home at 5pm.`,
      table('Rough monthly cost comparison, 2026', [
        ['Option', 'Rough monthly cost', 'Covers evenings and weekends?'],
        ['Basic AI receptionist app', '£50–£100', 'Yes, but usually just takes messages'],
        ['AI receptionist set up for your business', 'More, plus set-up', 'Yes, and books appointments'],
        ['Human answering service', '£200–£700', 'Often extra'],
        ['Full-time receptionist (minimum wage)', 'About £2,360', 'No'],
      ]),
      note('Work out your own number', 'Count the calls you missed last week. Guess how many were new customers. Multiply by your average job or booking value. If that number is bigger than the monthly fee, the question isn’t whether you can afford it.'),
      `## What it should include, whatever you pay

- It tells callers they’re speaking to an assistant, not pretending to be human
- It passes anything urgent or unusual to you straight away
- You get a text or email with every call, so nothing disappears
- You can change prices, hours and answers without ringing support
- Call recordings and personal details are handled in line with UK GDPR
- A monthly rolling contract, or at least a short one

## So, is it worth it?

If you’re missing calls because you’re busy with customers, usually yes. The cheapest option isn’t always the best value, though. An AI that takes messages still leaves you calling people back at 9pm. One that books the appointment gives you your evening back.

We set up the [AI receptionist](/digital-receptionist) for you, connected to the diary you already use, and give you a fixed price before you commit.`,
      cta('Book a free demo. We’ll show you your AI receptionist answering a real booking call, and give you a clear monthly price.', 'Book a free demo'),
    ],
    faqs: [
      ['Is an AI receptionist cheaper than a real receptionist?', 'Much cheaper. A full-time receptionist on the National Living Wage costs around £2,360 a month including National Insurance and pension. Most AI receptionists cost a small fraction of that and work 24/7.'],
      ['Are there AI receptionists with no monthly fee?', 'Some charge purely per minute or per call, so quiet months cost less. Check the per-minute rate carefully, as busy months can add up.'],
      ['Is there a set-up fee?', 'Often, if the AI is being connected to your booking system and trained on your services. Basic apps you set up yourself usually don’t charge one.'],
      ['Can an AI receptionist book appointments?', 'The better ones can, if they’re connected to your calendar or booking system. Cheaper ones only take a message.'],
      ['Will I be tied into a long contract?', 'You shouldn’t be. Look for a monthly rolling contract, or a short minimum term.'],
    ],
    citations: cite(SRC.livingWage, SRC.employerNi, ...answeringCostSources),
  },

  /* #22, #23 */
  {
    id: 'post-virtual-receptionist-cost',
    slug: 'virtual-receptionist-cost',
    cluster: 'AI receptionist',
    keywords: [22, 23],
    title: 'Virtual Receptionist vs AI Receptionist vs Hiring Someone: What Each Really Costs',
    seoTitle: 'How Much Does a Virtual Receptionist Cost? (2026)',
    seoDescription: 'Virtual receptionist, AI receptionist or a member of staff? Real 2026 costs for each, including wages, National Insurance and the calls you still miss.',
    focusKeyword: 'how much does a virtual receptionist cost',
    secondaryKeywords: ['virtual receptionist cost', 'how much does a receptionist cost', 'receptionist cost uk', 'ai receptionist vs virtual receptionist'],
    stage: 'decision',
    excerpt: 'Hiring a receptionist costs around £2,360 a month. A virtual receptionist service is usually £200 to £700. An AI receptionist can be less again. Here’s what you get for each.',
    tags: ['Virtual receptionist', 'AI receptionist', 'Pricing'],
    cats: [CAT.automation],
    cover: { eyebrow: 'Receptionist costs compared', lines: ['Hire, outsource,', 'or use AI?'], points: ['Staff ~£2,360/mo', 'Virtual £200–£700', 'AI from ~£50'] },
    coverAlt: 'Receptionist costs compared: staff around £2,360 a month, virtual receptionist £200 to £700, AI from around £50',
    direct: ['How much does a virtual receptionist cost?', 'A human virtual receptionist service typically costs £200 to £700 a month for a small business, or £0.60 to £2.50 per call. An AI receptionist can cost less and answers 24/7. Hiring a full-time receptionist on the National Living Wage costs around £2,360 a month once employer National Insurance and pension are included.'],
    takeaways: [
      'A full-time receptionist on the National Living Wage costs about £28,300 a year in total.',
      'Human virtual receptionist services usually cost £200 to £700 a month.',
      'Per-call pricing of £0.60 to £2.50 adds up quickly for busy businesses.',
      'AI receptionists answer instantly, 24/7, and can book appointments, not just take messages.',
      'Many businesses mix them: AI for routine calls, a person for the tricky ones.',
    ],
    body: [
      `“Should I just hire someone?” is where most business owners start. Then they work out what it actually costs, and start looking at alternatives.

Here are the three real options, with 2026 numbers.

## Option 1: hire a receptionist

The wage is only part of it. For someone full-time (37.5 hours a week) on the National Living Wage of £12.71 an hour:`,
      table('Cost of a full-time receptionist on minimum wage, 2026', [
        ['Cost', 'Per year'],
        ['Wages (£12.71 × 37.5 hours × 52 weeks)', '£24,784'],
        ['Employer National Insurance (15% above £5,000)', 'About £2,970'],
        ['Workplace pension (3% of qualifying earnings)', 'About £560'],
        ['Total', 'About £28,300, or £2,360 a month'],
      ]),
      `And that’s before recruitment, training, holiday cover, sick days and a desk. Most experienced receptionists earn above minimum wage too.

What you get: a real person who knows your customers, can greet people at the door and handle anything. What you don’t get: cover at lunchtime, after 5pm or at weekends, unless you pay for more hours.

## Option 2: a human virtual receptionist service

A team in a call centre answers in your business name. Typical UK pricing is **£200 to £700 a month** for a small business, often worked out as **£0.60 to £2.50 per call** or a per-minute rate.

Good at: sounding personal, handling the unexpected.
Watch out for: out-of-hours cover costing extra, and messages rather than bookings. You often still ring people back yourself.

## Option 3: an AI receptionist

Software that answers the phone in a natural voice, deals with common questions and books appointments. Basic apps start from roughly £50 to £100 a month. A set-up connected to your booking system costs more.

Good at: answering every call instantly, at any hour, and actually booking the slot.
Watch out for: very unusual calls. A good set-up passes these straight to you.`,
      note('Does a virtual receptionist mean AI?', 'Not always. “Virtual receptionist” usually means a human team answering remotely. “AI receptionist” means software. Ask which one you’re buying, because the price and what happens at 11pm are very different.'),
      `## Which is right for you?

- You need someone at the front desk: hire, and use AI for overflow and after hours.
- You get lots of complex calls: a human service, perhaps with AI for evenings.
- Most calls are bookings and the same ten questions: an AI receptionist will handle the bulk of them for a fraction of the cost.

Plenty of businesses end up mixing the options. The AI answers everything first, books the routine appointments, and passes anything unusual to a person.

If you want to see how that works, our [AI receptionist](/digital-receptionist) answers calls, WhatsApp and website chat, and books straight into your diary.`,
      cta('Tell us how many calls you get and when. We’ll show you which option saves you most, even if it isn’t ours.'),
    ],
    faqs: [
      ['How much does a receptionist cost in the UK?', 'A full-time receptionist on the National Living Wage costs about £28,300 a year in 2026, or around £2,360 a month, once employer National Insurance and pension are included.'],
      ['How much does a virtual receptionist cost per month?', 'Human virtual receptionist services typically cost £200 to £700 a month for a small business, depending on call volume and out-of-hours cover.'],
      ['Is an AI receptionist better than a virtual receptionist?', 'For routine calls and bookings, an AI receptionist is usually faster and cheaper, and it books appointments rather than just taking messages. A human service handles unusual calls better.'],
      ['Can I use both?', 'Yes. Many businesses let AI answer first and pass complex calls to a person or a human service.'],
      ['Do virtual receptionists work evenings and weekends?', 'Some do, often at extra cost. AI receptionists answer 24/7 as standard.'],
    ],
    citations: cite(SRC.livingWage, SRC.employerNi, ...answeringCostSources),
  },

  /* #24, #25, #26 */
  {
    id: 'post-24-hour-answering-service',
    slug: '24-hour-answering-service',
    cluster: 'AI receptionist',
    keywords: [24, 25, 26],
    title: '24-Hour Answering Service: Costs, Options and How Out-of-Hours Call Answering Works',
    seoTitle: '24 Hour Call Answering Service UK: Costs & Options',
    seoDescription: 'What a 24-hour answering service costs, how out-of-hours call answering works, and whether a human team or an AI receptionist suits your business.',
    focusKeyword: '24 hour call answering service uk',
    secondaryKeywords: ['how much does an answering service cost', 'out of hours call answering service', '24/7 answering service cost', 'answering service cost per month'],
    stage: 'decision',
    excerpt: 'Calls don’t stop at 5pm. Here’s what 24-hour and out-of-hours call answering costs, what you get for the money, and how to choose.',
    tags: ['Answering service', 'Out of hours', 'Call answering'],
    cats: [CAT.automation],
    cover: { eyebrow: 'Out-of-hours calls', lines: ['24-hour answering:', 'what it really costs'], points: ['Evenings', 'Weekends', 'Bank holidays'] },
    coverAlt: '24-hour answering service costs for evenings, weekends and bank holidays',
    direct: ['How much does a 24-hour answering service cost?', 'In the UK, human answering services typically cost £200 to £700 a month for a small business, with 24-hour or out-of-hours cover often priced higher. Per-call rates of £0.60 to £2.50 are common. AI receptionists answer 24/7 as standard, often for less, and can book appointments rather than only taking messages.'],
    takeaways: [
      'Human answering services usually charge £200 to £700 a month, with out-of-hours often extra.',
      'Per-call rates of £0.60 to £2.50 are common; check what counts as a “call”.',
      'AI receptionists cover 24/7 as standard and can book appointments.',
      'Decide what should happen with urgent calls at 2am before you choose a service.',
      'Test it yourself: ring your own number at 10pm on a Sunday.',
    ],
    body: [
      `Ring your own business number at 9pm tonight. What happens?

If the answer is voicemail, you’re not alone. Most people don’t leave one. They hang up and ring the next business on Google. For trades with emergency work, clinics with anxious patients and anyone taking bookings, the evening is often when people finally have time to call.

## What an out-of-hours answering service does

When you can’t answer, calls go to someone, or something, that can. At the simplest level they take a message. Better services answer questions, book appointments and put genuine emergencies through to you.

## What it costs`,
      table('Typical UK answering service pricing, 2026', [
        ['Type', 'Typical cost', 'What you get'],
        ['Human service, business hours', '£200–£700 a month', 'Messages taken in your business name'],
        ['Human service, 24/7', 'Higher, often a premium on evenings', 'Round-the-clock cover by a team'],
        ['Per-call plans', '£0.60–£2.50 per call', 'Pay for what you use'],
        ['AI receptionist', 'From about £50–£100 a month for basic apps', '24/7 answering, can book appointments'],
      ]),
      `Look carefully at **what counts as a call**. Some services charge for spam calls, wrong numbers and calls that ring for three seconds. Others round every call up to the next minute.

## Human team or AI?

**A human team** is reassuring for sensitive calls, like distressed patients or complaints. It costs more, and at 3am you’re usually getting a message, not a booking.

**An AI receptionist** answers instantly, never has a queue, and can check your diary and book the slot. It works best when most calls are routine: bookings, prices, opening hours, “can you come out to…”.

Many businesses use AI for everything and have it pass urgent or unusual calls straight to a person.`,
      note('Plan your 2am call now', 'Decide what counts as urgent before you set anything up. A burst pipe or a patient in severe pain might need a call to your mobile. A price question can wait until morning. A good service follows your rules, not its own.', 'warning'),
      `## Questions to ask before you sign

1. What happens when two calls come in at once?
2. How do I get messages, and how quickly?
3. Can it book directly into my diary?
4. What happens with genuine emergencies?
5. Am I charged for spam and wrong numbers?
6. Is there a minimum contract?
7. Where are call recordings stored, and for how long?

## Start with the calls you’re missing

You don’t need 24-hour cover if nobody calls at night. Check your phone log for missed calls by hour. Most businesses find a cluster at lunchtime, late afternoon and early evening. That’s where cover pays for itself first.

We can set up an [AI receptionist](/digital-receptionist) that answers out of hours, books appointments and texts you anything urgent. See how it fits with [never missing a call](/services/shiftspeed).`,
      cta('We’ll look at when your calls come in and which cover would catch the ones you’re missing.'),
    ],
    faqs: [
      ['How much does an answering service cost per month?', 'Human answering services in the UK usually cost £200 to £700 a month for a small business. AI receptionists can cost less and answer 24/7.'],
      ['What is out-of-hours call answering?', 'A service that answers your business calls in the evenings, at weekends and on bank holidays, so customers reach someone instead of voicemail.'],
      ['Can an answering service book appointments?', 'Some can if they have access to your diary. AI receptionists connected to your booking system usually book directly.'],
      ['Will callers know it isn’t me?', 'They should. Good services answer in your business name and say who they are. AI receptionists should say the caller is speaking to an assistant.'],
      ['What happens with emergency calls at night?', 'You set the rules. Urgent calls can be put through to your mobile or flagged by text straight away.'],
    ],
    citations: cite(...answeringCostSources, SRC.ico),
  },

  /* #42 */
  {
    id: 'post-online-booking-system-cost',
    slug: 'how-much-does-an-online-booking-system-cost',
    cluster: 'Online booking',
    keywords: [42],
    title: 'How Much Does an Online Booking System Cost? And Which Fees to Watch For',
    seoTitle: 'How Much Does an Online Booking System Cost?',
    seoDescription: 'Online booking system prices explained: free plans, per-user fees, card fees and add-ons. What you actually pay, and what’s worth paying for.',
    focusKeyword: 'how much does an online booking system cost',
    secondaryKeywords: ['online booking system for small business uk', 'online booking system cost', 'best appointment booking system', 'appointment booking software price'],
    stage: 'decision',
    excerpt: 'Booking systems range from free to well over £100 a month. The headline price is rarely what you pay. Here’s how the pricing works and what to check.',
    tags: ['Online booking', 'Pricing', 'No-shows'],
    cats: [CAT.conversion],
    cover: { eyebrow: 'Booking system prices', lines: ['What an online booking', 'system really costs'], points: ['Per user', 'Card fees', 'Reminders'] },
    coverAlt: 'What an online booking system really costs: per-user fees, card fees and reminder charges',
    direct: ['How much does an online booking system cost?', 'Online booking systems range from free plans with limited features to paid plans that commonly cost from around £20 to £100+ a month, often charged per staff member. On top of that, many charge card processing fees on deposits and payments, and some charge extra for text reminders. Compare the total monthly cost for your team, not the headline price.'],
    takeaways: [
      'Free plans exist but usually limit staff, reminders or branding.',
      'Most paid plans charge per staff member or per location.',
      'Card fees on deposits and payments are often the biggest hidden cost.',
      'Text message reminders are sometimes charged per message.',
      'The best system is the one your customers actually use, on a phone, in under a minute.',
    ],
    body: [
      `If you’re still taking every booking by phone, you’re doing the job of a booking system, for free, in your own time. The question is whether software would do it cheaper.

Usually, yes. But the pricing pages are designed to make that hard to work out.

## How booking systems charge

Almost every system uses some mix of these:`,
      table('Common booking system charges', [
        ['Charge', 'What it means', 'Watch out for'],
        ['Monthly plan', 'The headline price', 'Features locked to higher tiers'],
        ['Per staff member', 'Each person with a diary costs extra', 'Costs rising as you grow'],
        ['Card processing', 'A percentage of each deposit or payment', 'Adds up fast on bigger bookings'],
        ['Text reminders', 'Per message, or a bundle', 'Reminders are what cut no-shows'],
        ['Marketplace commission', 'A cut when new clients find you through the app', 'Paying commission on customers who’d have booked anyway'],
      ]),
      `Paid plans commonly start from around £20 a month and run past £100 for bigger teams. That range is wide because a solo physio and a salon with eight chairs need very different things.

## What you actually need

Before comparing prices, write down what you need. For most service businesses it’s:

- Customers can book on a phone in under a minute
- It shows your real availability, including breaks and travel time
- Automatic confirmations and reminders, by text or WhatsApp
- Deposits for high-value or often-missed appointments
- It works with the calendar you already use
- You can move or cancel bookings easily

Anything beyond that is a nice-to-have. Don’t pay for a marketing suite you’ll never open.`,
      note('Free isn’t always free', 'Some free booking apps list you in a public marketplace and take a commission on new clients found there. That’s fine if they bring you new work. Check you’re not paying commission on your own regulars.'),
      `## A worked example

A salon with three stylists, taking £30 deposits on 200 bookings a month:

- Plan: priced per stylist, so three times the single-user price
- Card fees: a percentage of £6,000 in deposits
- Text reminders: 200 or more messages

The headline might say £25 a month. The real bill can be several times that. That can still be excellent value if it stops even a few no-shows a week.

## Booking systems and missed calls

A booking system only helps people who go looking for it. Plenty of customers still ring or message. If those calls go unanswered, the booking system never gets a chance.

That’s why we connect online booking to an [AI receptionist](/digital-receptionist) and WhatsApp, so every route ends in the same diary. See how we help businesses [win more of the jobs they’re asked for](/services/shiftconvert).`,
      cta('Tell us how you take bookings now. We’ll show you the simplest set-up, and what it would really cost each month.'),
    ],
    faqs: [
      ['Is there a free online booking system?', 'Yes, several offer free plans. They usually limit the number of staff, reminders or features, or take a commission on new clients found through their app.'],
      ['How much does booking software cost per month?', 'Paid plans commonly start around £20 a month and can pass £100 for larger teams, often priced per staff member. Card and text fees come on top.'],
      ['Do booking systems reduce no-shows?', 'Yes, mainly through automatic reminders and deposits. Reminders are one of the most effective ways to cut missed appointments.'],
      ['Can customers book through WhatsApp?', 'They can if WhatsApp is connected to your booking system, for example through an AI receptionist.'],
      ['What’s the best booking system for a small team?', 'The one your customers can use easily on a phone, that shows real availability and sends reminders, at a price that makes sense for your team size.'],
    ],
    citations: cite(SRC.cwv),
  },

  /* #82 */
  {
    id: 'post-local-seo-cost',
    slug: 'local-seo-cost',
    cluster: 'Local SEO',
    keywords: [82],
    title: 'How Much Does Local SEO Cost? What You Should Pay, and What’s a Waste of Money',
    seoTitle: 'Local SEO Cost Per Month UK: What to Pay in 2026',
    seoDescription: 'Local SEO typically costs £300 to £1,500 a month in the UK. What’s included at each price, red flags to avoid, and what you can do yourself for free.',
    focusKeyword: 'local seo cost per month',
    secondaryKeywords: ['local seo cost', 'local seo services cost', 'how much does local seo cost', 'seo cost uk'],
    stage: 'decision',
    excerpt: 'Most single-location businesses pay £500 to £1,000 a month for local SEO. Some pay far too much, some far too little. Here’s how to tell the difference.',
    tags: ['Local SEO', 'Pricing', 'Google Maps'],
    cats: [CAT.local],
    cover: { eyebrow: 'Local SEO prices', lines: ['What local SEO', 'should cost you'], points: ['£300–£600', '£600–£1,200', 'Red flags'] },
    coverAlt: 'What local SEO should cost: from £300 to £1,200 a month for most single-location businesses',
    direct: ['How much does local SEO cost per month?', 'In the UK, local SEO typically costs £300 to £1,500 a month, with most single-location businesses paying £500 to £1,000. Low-competition towns sit at the lower end; competitive cities and multiple locations cost more. Much of the groundwork, like your Google Business Profile and asking for reviews, you can do yourself for free.'],
    takeaways: [
      'Most single-location businesses pay £500 to £1,000 a month for local SEO.',
      'Under about £200 a month usually means automated directory listings, not real work.',
      'Your Google Business Profile and reviews matter most, and cost nothing to improve.',
      'Ask for monthly reporting on calls and enquiries, not just rankings.',
      'Avoid anyone who guarantees the number one spot.',
    ],
    body: [
      `SEO has a bad reputation, and some of it’s earned. Plenty of businesses have paid £400 a month for a year and got a PDF full of graphs and no extra phone calls.

So here’s what local SEO should cost, what you should get for it, and what you can do without paying anyone.

## Typical prices`,
      table('Local SEO pricing in the UK, 2026', [
        ['Situation', 'Typical monthly cost'],
        ['One location, low competition', '£300–£600'],
        ['One location, competitive town or city', '£600–£1,200'],
        ['Several locations', '£1,000–£3,000+'],
        ['Freelancer', '£300–£1,000'],
      ]),
      `These ranges come from 2026 UK pricing guides. A plumber in a small town doesn’t need the same budget as a dental group in Manchester.

## What the money should pay for

- Your Google Business Profile: correct categories, services, photos, posts and answers to questions
- Reviews: a system for asking every customer, and replying to every review
- Your website: a page for each service and area, fast on a phone, clear about what you do
- Local listings: your name, address and number consistent across the web
- Reporting you understand: calls, direction requests and enquiries, not just where you rank

## Red flags

- A guarantee of number one. Nobody controls Google. Anyone promising the top spot is either lying or planning something that could get you penalised.
- Very cheap monthly packages. Below about £200 a month you’re usually paying for automated directory submissions.
- **Long lock-in contracts** before they’ve shown any results.
- Reports that only show rankings. Rankings are a means to an end. Ask how many more calls you got.
- Fake reviews, in any form. Google treats them as fake engagement, and it can cost you your profile.`,
      note('What you can do for free this week', 'Complete every section of your Google Business Profile. Add ten real photos. List every service. Ask your last 20 happy customers for a review using Google’s own review link. Reply to every existing review. That alone moves many businesses up the map.'),
      `## Is it worth paying for?

If you’ve done the free basics and you’re still not showing up, or you simply don’t have the time, yes. One extra job or booking a week usually covers a sensible monthly fee many times over.

Just make sure you’re paying for work that brings in calls. We look at your Google profile, reviews and website together, because they only work as a set. See how we help businesses [get found by more customers](/services/shiftbuild).`,
      cta('We’ll show you how you appear on Google Maps today and what’s holding you back, before you spend a penny.'),
    ],
    faqs: [
      ['How much should a small business pay for local SEO?', 'Most single-location businesses in the UK pay £500 to £1,000 a month. Low-competition towns can be less; competitive cities more.'],
      ['Can I do local SEO myself?', 'Yes, much of it. Completing your Google Business Profile, adding photos and asking for reviews costs nothing and makes a real difference.'],
      ['How long does local SEO take to work?', 'Profile and review improvements can help within weeks. Stronger rankings in competitive areas usually take several months.'],
      ['Is cheap local SEO worth it?', 'Rarely. Very cheap packages usually automate directory listings without improving your profile, reviews or website.'],
      ['Can anyone guarantee first place on Google Maps?', 'No. Be wary of anyone who does.'],
    ],
    citations: cite(
      SRC.gbpGuidelines,
      SRC.gbpReviewTips,
      { title: 'How Much Should You Pay for Local SEO? UK Pricing Guide', publisher: 'Wrise', url: 'https://wrise.co.uk/blog/local-seo-uk-pricing-guide/' },
    ),
  },

  /* #48 */
  {
    id: 'post-whatsapp-business-api-provider',
    slug: 'whatsapp-business-api-provider',
    cluster: 'WhatsApp',
    keywords: [48, 47],
    title: 'How to Choose a WhatsApp Business API Provider (Without Paying for Features You’ll Never Use)',
    seoTitle: 'Choosing a WhatsApp Business API Provider: 8 Checks',
    seoDescription: 'What a WhatsApp Business API provider does, how they charge on top of Meta’s fees, and eight questions to ask before you sign up.',
    focusKeyword: 'whatsapp business api provider',
    secondaryKeywords: ['whatsapp business api pricing', 'whatsapp business solution provider', 'whatsapp api for business'],
    stage: 'decision',
    excerpt: 'You can’t easily use the WhatsApp Business API without a provider or developer. Here’s what they do, how they charge, and the questions that separate good ones from expensive ones.',
    tags: ['WhatsApp Business API', 'WhatsApp automation'],
    cats: [CAT.automation],
    cover: { eyebrow: 'WhatsApp Business API', lines: ['Choosing a WhatsApp', 'API provider'], points: ['Meta fees', 'Provider fees', '8 questions'] },
    coverAlt: 'Choosing a WhatsApp Business API provider: Meta fees, provider fees and eight questions to ask',
    direct: ['What does a WhatsApp Business API provider do?', 'A WhatsApp Business API provider connects your business number to WhatsApp’s platform and gives you the tools to use it: a shared inbox, automated replies, message templates and links to your booking system or CRM. You pay Meta’s per-message fees for messages you start, plus the provider’s own charges.'],
    takeaways: [
      'You pay two bills: Meta’s per-message fees and your provider’s fees.',
      'Replies within 24 hours of a customer’s message are free from Meta.',
      'Check provider markups on messages as well as the monthly fee.',
      'Make sure you can connect your booking system, and that you own your number.',
      'For most service businesses, simple and well-connected beats feature-packed.',
    ],
    body: [
      `If you’ve read our [guide to the WhatsApp Business API](/insights/whatsapp-business-api-guide), you’ll know it’s what lets WhatsApp reply, book and send reminders for you. The next question is who sets it up.

Most businesses go through a provider. Meta calls the official ones Business Solution Providers. There are hundreds, and their pricing pages are not always straightforward.

## What you’re paying for

**Meta’s fees.** Meta charges per message for messages you start, like reminders and offers, and the rate depends on the type of message and the customer’s country. Replies inside the 24-hour customer service window are free. Always check [Meta’s pricing page](${SRC.metaPricing.url}).

**The provider’s fees.** Usually a monthly subscription, sometimes per user, and sometimes a markup on each message on top of Meta’s charge.

## Eight questions to ask any provider`,
      `1. **What do you charge per message, on top of Meta?** Some add nothing; others add a markup on every message.
2. **Is there a set-up fee?** And what does it cover?
3. **Can it connect to my booking system or calendar?** If not, you’ll still be copying bookings by hand.
4. **Can my whole team use one number?** And what does each extra user cost?
5. **Can I keep using the WhatsApp Business app on my phone?** Meta allows this for many numbers, but not every provider supports it.
6. **Who owns my number and message history?** You should be able to leave and take both with you.
7. **How long is the contract?** Monthly rolling is best.
8. **What support do I get?** If WhatsApp stops working on a Saturday, who do you call?`,
      note('Features you probably don’t need', 'Broadcast campaigns to thousands, complex marketing funnels and dozens of integrations sound impressive. Most clinics, salons and trades need instant replies, bookings, reminders and a shared inbox. Pay for those.'),
      `## Provider, developer or done-for-you?

- DIY with a provider’s platform: cheapest, if you have time to set up templates, flows and integrations yourself.
- A developer: flexible, but you’ll need them again for every change.
- Done for you: someone sets up the provider, connects your booking system and writes the replies, then looks after it.

We take the third route. We set up WhatsApp alongside your [AI receptionist](/digital-receptionist), so calls, chats and WhatsApp messages all end up in the same diary.`,
      cta('Tell us how customers message you now. We’ll show you what WhatsApp could handle, and the full monthly cost including Meta’s fees.'),
    ],
    faqs: [
      ['Do I need a provider to use the WhatsApp Business API?', 'In practice, most businesses use a provider or a developer. Meta offers direct access, but you’d need to build the tools yourself.'],
      ['How much do WhatsApp API providers charge?', 'Usually a monthly fee, sometimes per user, and sometimes a markup on each message. Meta’s own per-message fees are charged on top.'],
      ['Can I switch provider later?', 'Usually yes. Check you own your number and can export your message history before signing up.'],
      ['Are replies to customers free?', 'Meta doesn’t charge for replies inside the 24-hour customer service window. Your provider may still charge its own fees.'],
      ['Can I use AI with the WhatsApp API?', 'Yes, for business tasks like customer service and bookings. Meta doesn’t allow general-purpose chatbots like ChatGPT on the platform.'],
    ],
    citations: cite(SRC.metaPricing, { title: 'Onboard WhatsApp Business app users', publisher: 'Meta for Developers', url: 'https://developers.facebook.com/documentation/business-messaging/whatsapp/embedded-signup/onboarding-business-app-users' }),
  },

  /* #49, #50, #51 */
  {
    id: 'post-whatsapp-chatbot-for-business',
    slug: 'whatsapp-chatbot-for-business',
    cluster: 'WhatsApp',
    keywords: [49, 50, 51],
    title: 'WhatsApp Chatbot for Business: Auto Replies That Don’t Annoy Your Customers',
    seoTitle: 'WhatsApp Chatbot for Business: Auto Reply Examples',
    seoDescription: 'How a WhatsApp chatbot works for a local business, with auto reply message examples you can copy, and the mistakes that make customers give up.',
    focusKeyword: 'whatsapp chatbot for business',
    secondaryKeywords: ['whatsapp auto reply message sample for business', 'whatsapp business automated messages', 'whatsapp auto reply for business', 'whatsapp automation'],
    stage: 'consideration',
    excerpt: 'A good WhatsApp chatbot feels like a helpful receptionist. A bad one feels like a phone menu. Here’s how to get it right, with example messages you can use today.',
    tags: ['WhatsApp automation', 'WhatsApp chatbot', 'Auto reply'],
    cats: [CAT.automation],
    cover: { eyebrow: 'WhatsApp for business', lines: ['WhatsApp auto replies', 'customers don’t hate'], points: ['Examples', 'Bookings', 'Hand-over'] },
    coverAlt: 'WhatsApp auto replies customers don’t hate: examples, bookings and handing over to a person',
    direct: ['What is a WhatsApp chatbot for business?', 'A WhatsApp chatbot answers customer messages automatically on your business WhatsApp. For a local business it typically replies instantly, answers common questions like prices and opening hours, takes bookings and sends reminders, and passes anything unusual to a person. Full automation needs the WhatsApp Business API; the free app only offers basic away and greeting messages.'],
    takeaways: [
      'The free WhatsApp Business app only offers simple greeting and away messages.',
      'A proper chatbot needs the WhatsApp Business API connected to your booking system.',
      'Good bots answer in plain language, not numbered menus.',
      'Always offer a way to reach a person.',
      'Keep automated messages short, specific and signed with your business name.',
    ],
    body: [
      `Customers love WhatsApp because it’s quick. So nothing is more annoying than messaging a business and getting a reply that says “Press 1 for bookings”.

Here’s how to set up WhatsApp auto replies that actually help, starting with what you can do today for free.

## Level 1: the free app

The free WhatsApp Business app lets you set a **greeting message** for new customers and an **away message** outside your hours. That’s it. Useful, but it only says “we’ll get back to you”.

Here are two you can copy.

**Greeting message:**
“Hi, thanks for messaging [Business name]. We’ll reply as soon as we can, usually within the hour. If you’d like to book, you can also do it here: [booking link].”

**Away message:**
“Hi, thanks for your message. We’re closed right now and back at 8am tomorrow. If it’s urgent, please call [number]. You can book online any time: [booking link].”

Always include your booking link. Some people will use it rather than wait.

## Level 2: a proper WhatsApp chatbot

With the WhatsApp Business API, your WhatsApp can answer properly: “Yes, we have a slot on Thursday at 2pm. Shall I book it for you?” It reads what the customer wrote, answers from your prices and services, and books into your diary.

## What makes a good one`,
      table('Good vs bad WhatsApp automation', [
        ['Good', 'Bad'],
        ['Understands normal messages', 'Numbered menus and keywords'],
        ['Answers the actual question', 'Sends the same template to everyone'],
        ['Books the appointment', '“Someone will be in touch”'],
        ['Hands over to a person easily', 'Traps the customer in a loop'],
        ['Short, friendly messages', 'Long paragraphs and emojis everywhere'],
      ]),
      `## Messages worth automating

**Booking confirmation:**
“You’re booked in for [service] on [day] at [time] with [name]. Reply here if you need to change it.”

**Reminder the day before:**
“Just a reminder that you’re with us tomorrow at [time]. Reply YES to confirm, or let us know if you need to rearrange.”

**Quote follow-up:**
“Hi [name], just checking you got our quote for [job]. Happy to answer any questions.”

**After the appointment:**
“Thanks for coming in today. If you have a minute, we’d really appreciate a Google review: [link].”`,
      note('Keep a human in the loop', 'Every automated conversation should make it easy to reach a real person. Add “Reply PERSON to speak to the team” or pass the chat over automatically when the bot isn’t sure.'),
      `## Is it allowed to use AI on WhatsApp?

Yes, for business tasks like answering questions and taking bookings. Meta doesn’t allow general-purpose chatbots, like ChatGPT itself, on the WhatsApp Business Platform. An assistant that knows your business is fine.

We set up WhatsApp as part of our [AI receptionist](/digital-receptionist), so it answers the same way as your phone and website chat, and every booking lands in the same diary.`,
      cta('We’ll show you what an automated WhatsApp conversation would look like for your business, using your real services and prices.'),
    ],
    faqs: [
      ['Can I set up automatic replies on WhatsApp Business?', 'Yes. The free app lets you set greeting and away messages. For replies that answer questions and take bookings, you need the WhatsApp Business API.'],
      ['What should a WhatsApp auto reply say?', 'Thank the customer, say when you’ll reply, give your booking link and a number for urgent calls. Keep it short and use your business name.'],
      ['Is a WhatsApp chatbot expensive?', 'Replies to customers within 24 hours are free from Meta. You pay for the software or service that runs the chatbot, and Meta charges for messages you start, like reminders.'],
      ['Will customers know they’re talking to a bot?', 'They should. Be upfront, keep it helpful, and make it easy to reach a person.'],
      ['Can a WhatsApp chatbot take bookings?', 'Yes, if it’s connected to your booking system or calendar.'],
    ],
    citations: cite(SRC.metaPricing, { title: 'WhatsApp changes its terms to bar general-purpose chatbots', publisher: 'TechCrunch', url: 'https://techcrunch.com/2025/10/18/whatssapp-changes-its-terms-to-bar-general-purpose-chatbots-from-its-platform/' }),
  },

  /* #52 */
  {
    id: 'post-whatsapp-for-clinics',
    slug: 'whatsapp-for-clinics',
    cluster: 'WhatsApp',
    keywords: [52],
    title: 'WhatsApp for Clinics: How to Use a Chatbot With Patients Safely',
    seoTitle: 'WhatsApp Chatbot for Healthcare Clinics: A Safe Guide',
    seoDescription: 'How private clinics can use WhatsApp and a chatbot for bookings and reminders, while handling patient data carefully under UK GDPR.',
    focusKeyword: 'whatsapp chatbot for healthcare',
    secondaryKeywords: ['whatsapp for clinics', 'whatsapp for dental practice', 'patient messaging whatsapp', 'whatsapp appointment reminders'],
    stage: 'consideration',
    excerpt: 'Patients would rather message than phone. WhatsApp can handle bookings, reminders and questions for your clinic, as long as you keep clinical conversations out of the bot.',
    tags: ['WhatsApp automation', 'Clinics', 'UK GDPR'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For clinics', lines: ['WhatsApp for patients,', 'done safely'], points: ['Bookings', 'Reminders', 'No clinical advice'] },
    coverAlt: 'WhatsApp for clinics done safely: bookings and reminders, with no clinical advice from the bot',
    direct: ['Can clinics use a WhatsApp chatbot with patients?', 'Yes, for admin tasks like booking appointments, sending reminders and answering questions about prices, parking and opening hours. Clinical questions and symptoms should always go to a qualified person. Health information is special category data under UK GDPR, so collect as little as possible and agree how long it’s kept.'],
    takeaways: [
      'Use WhatsApp automation for admin: bookings, reminders, directions, prices.',
      'Never let a chatbot give clinical advice or assess symptoms.',
      'Health information is special category data under UK GDPR. Collect the minimum.',
      'Tell patients how their messages are handled, and offer another way to contact you.',
      'Reminders by WhatsApp are one of the simplest ways to cut missed appointments.',
    ],
    body: [
      `Ask your patients how they’d rather get in touch, and many will say WhatsApp. They can message at 10pm, they don’t wait on hold, and they have a record of what was said.

For a busy clinic that’s an opportunity, and a responsibility. Here’s where the line sits.

## What a WhatsApp chatbot should do for a clinic

- Book, move and cancel appointments
- Send confirmations and reminders, with directions and parking
- Answer questions about prices, treatments offered, opening hours and insurers
- Collect a callback request when someone needs to speak to the team

## What it should never do

- Give clinical advice or suggest a diagnosis
- Assess symptoms or decide how urgent something is
- Ask for more medical detail than it needs to book the right appointment

If a patient describes something that sounds urgent, the bot’s job is to tell them how to get help straight away, and flag it to your team. Set this up with your clinicians, not just your IT person.`,
      note('Patient data is special category data', 'Under UK GDPR, information about someone’s health is special category data and needs extra care. Collect only what you need to book the appointment, tell patients how messages are stored, agree retention periods, and make sure your provider has proper data protection terms.', 'warning'),
      `## Messages that work well for clinics

**Confirmation:**
“You’re booked for your appointment at [Clinic] on [day] at [time]. Parking is available at the rear. Reply here to change your appointment.”

**Reminder:**
“Reminder: your appointment is tomorrow at [time]. Reply YES to confirm or CHANGE to rearrange.”

**After the visit:**
“Thanks for visiting [Clinic] today. If you have a moment, we’d really appreciate a review: [link].”

Keep reminders free of treatment details. “Your appointment” is enough. Messages can be seen on lock screens.

## Getting started

1. Decide which tasks WhatsApp will handle, and which always go to a person.
2. Write the messages with your team, in plain language.
3. Connect WhatsApp to your booking system so bookings don’t have to be copied.
4. Update your privacy notice to cover WhatsApp.
5. Test it as a patient would, including the “I need to speak to someone” route.

We set up WhatsApp alongside our [AI receptionist](/digital-receptionist) for clinics, and our [Review Your Doctor](/review-your-doctor) system handles the review request after each visit.`,
      cta('We’ll look at how patients contact your clinic now and show you what WhatsApp could take off your reception team.'),
    ],
    faqs: [
      ['Is WhatsApp GDPR compliant for clinics?', 'It can be used in a compliant way for admin tasks if you minimise the data collected, update your privacy notice, agree retention periods and use a provider with proper data protection terms. Get advice for your specific set-up.'],
      ['Can a chatbot give patients medical advice?', 'No. Chatbots should only handle admin like bookings and reminders. Clinical questions should always go to a qualified person.'],
      ['Can patients book appointments by WhatsApp?', 'Yes, if WhatsApp is connected to your booking system through the WhatsApp Business API.'],
      ['Should appointment reminders mention the treatment?', 'Best not. Messages can appear on lock screens, so keep reminders general.'],
      ['Do WhatsApp reminders reduce no-shows?', 'Reminders are one of the most effective ways to reduce missed appointments, and many patients read WhatsApp messages faster than email.'],
    ],
    citations: cite(SRC.ico, SRC.metaPricing),
  },
];
