import { table, note, cta, cite, SRC, CAT } from './lib.mjs';

const GBP_RANKING = { title: 'Tips to improve your local ranking on Google', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/7091' };
const GBP_VERIFY = { title: 'Verify your business on Google', publisher: 'Google Business Profile Help', url: 'https://support.google.com/business/answer/7107242' };
const GOOGLE_AI = { title: 'AI features and your website', publisher: 'Google Search Central', url: 'https://developers.google.com/search/docs/appearance/ai-features' };
const REVIEW_POLICY = { title: 'Maps user contributed content policy: fake engagement', publisher: 'Google', url: 'https://support.google.com/contributionpolicy/answer/7400114' };

export default [
  /* #71, #72 */
  {
    id: 'post-how-to-rank-higher-on-google-maps',
    slug: 'how-to-rank-higher-on-google-maps',
    cluster: 'Google Maps',
    keywords: [71, 72],
    title: 'How to Rank Higher on Google Maps: What Google Actually Looks At',
    seoTitle: 'How to Rank Higher on Google Maps: 9 Fixes',
    seoDescription: 'Google ranks local results on relevance, distance and prominence. Nine practical fixes to move your business up the map, from categories to reviews.',
    focusKeyword: 'how to rank higher on google maps',
    secondaryKeywords: ['how to rank top 3 on google maps', 'how to rank on google maps', 'google map pack ranking', 'how to rank higher in local google search'],
    stage: 'consideration',
    excerpt: 'Google says local rankings come down to relevance, distance and prominence. You can’t change distance. Here’s what you can do about the other two.',
    tags: ['Google Maps', 'Local SEO', 'Google Business Profile'],
    cats: [CAT.local],
    cover: { eyebrow: 'Google Maps', lines: ['Rank higher on', 'Google Maps'], points: ['Relevance', 'Distance', 'Prominence'] },
    coverAlt: 'How to rank higher on Google Maps: relevance, distance and prominence',
    direct: ['How do I rank higher on Google Maps?', 'Google ranks local results on relevance, distance and prominence. To rank higher, choose the most accurate primary category, complete every part of your Google Business Profile, list all your services, add real photos, collect a steady flow of reviews and reply to them, and make sure your website clearly matches your profile’s name, address, phone number and services.'],
    takeaways: [
      'Google uses three factors: relevance, distance and prominence.',
      'Your primary category is the single most important setting.',
      'A complete profile with services and photos helps relevance.',
      'Reviews, and replies to them, build prominence.',
      'Your website should back up everything your profile says.',
    ],
    body: [
      `Google is unusually open about how local rankings work. Its own help page says results are based on three things: **relevance** (how well you match the search), **distance** (how far you are from the searcher) and **prominence** (how well known you are).

You can’t move your premises. So everything below is about relevance and prominence.

## 1. Get your primary category exactly right

If you’re a plumber, “Plumber”. If you’re a dental practice, “Dentist”. Pick the most specific category that describes your main business. Add secondary categories only if they’re genuinely what you do.

## 2. Fill in everything

Hours, holiday hours, phone, website, services, service areas, attributes, description. Empty fields are missed chances to match a search.

## 3. List every service

“Boiler repair”, “boiler installation”, “bathroom fitting” as separate services, in customers’ words.

## 4. Add real photos, regularly

Your premises, your team, your work. Real photos help people choose you, and an active profile looks like a real, open business.

## 5. Get reviews steadily

A few every week beats fifty in one month and none after. Ask every customer, using Google’s own review link.

## 6. Reply to every review

Thank happy customers. Reply calmly and helpfully to unhappy ones. It shows you care, and future customers read your replies.

## 7. Make your website match

Same business name, address and phone number as your profile. A page for each main service and area. Your town and services mentioned naturally.

## 8. Be consistent everywhere

Directories, social profiles and listings should all show the same name, address and number.

## 9. Keep it current

Post updates, add new photos, update holiday hours. A neglected profile slowly slips.`,
      note('What not to do', 'Don’t stuff keywords into your business name, don’t use a fake address, and never buy reviews or offer incentives for them. Google can suspend profiles for all three.', 'warning'),
      table('Can you get into the top 3?', [
        ['Factor', 'Can you change it?'],
        ['Distance from the searcher', 'No'],
        ['Relevance: category, services, website', 'Yes'],
        ['Prominence: reviews, links, mentions', 'Yes, over time'],
      ]),
      `Ranking in the top three for every search isn’t realistic, because distance changes with every searcher. Ranking well in your core area for your main services is. See how we help businesses [get found on Google Maps](/services/shiftbuild).`,
      cta('We’ll check your Google Business Profile and show you exactly what’s holding you back on the map.'),
    ],
    faqs: [
      ['How does Google decide local rankings?', 'Google says local results are based on relevance, distance and prominence.'],
      ['How do I get in the top 3 on Google Maps?', 'Choose the right category, complete your profile, list services, add photos, collect reviews steadily and make sure your website matches. Distance also plays a part, so rankings vary by searcher.'],
      ['Do reviews help Google Maps ranking?', 'Yes. Google says review count and score factor into local ranking.'],
      ['Should I put keywords in my business name?', 'No. Use your real business name. Keyword stuffing can get your profile suspended.'],
      ['How long does it take to rank higher on Google Maps?', 'Profile improvements can help within weeks. Building reviews and prominence takes longer.'],
    ],
    citations: cite(GBP_RANKING, SRC.gbpGuidelines, REVIEW_POLICY),
  },

  /* #73 */
  {
    id: 'post-why-is-my-business-not-showing-on-google-maps',
    slug: 'why-is-my-business-not-showing-on-google-maps',
    cluster: 'Google Maps',
    keywords: [73],
    title: 'Why Isn’t My Business Showing on Google Maps? 8 Reasons and How to Fix Them',
    seoTitle: 'Why Is My Business Not Showing on Google Maps? 8 Fixes',
    seoDescription: 'Business not showing on Google Maps? Eight common reasons, from verification to suspensions and categories, and how to fix each one.',
    focusKeyword: 'why is my business not showing on google maps',
    secondaryKeywords: ['why is my business not showing on google', 'business not showing up on google maps after verification', 'google business profile not showing'],
    stage: 'consideration',
    excerpt: 'You set up your profile and searched for yourself. Nothing. Here are the eight usual reasons, in the order worth checking them.',
    tags: ['Google Maps', 'Google Business Profile', 'Local SEO'],
    cats: [CAT.local],
    cover: { eyebrow: 'Google Maps', lines: ['Why isn’t my business', 'on Google Maps?'], points: ['Verification', 'Suspension', 'Categories'] },
    coverAlt: 'Why a business isn’t showing on Google Maps: verification, suspension or categories',
    direct: ['Why is my business not showing on Google Maps?', 'The most common reasons are that the profile isn’t verified yet, it’s been suspended or is under review, it’s a new profile Google hasn’t shown widely, the category doesn’t match what people search, you’re searching from too far away, or there’s a duplicate listing. Check verification and profile status in your Google Business Profile first.'],
    takeaways: [
      'Check verification and profile status first. Most problems start there.',
      'New profiles can take time to appear for competitive searches.',
      'Searching your own name is different from searching your service.',
      'Suspensions usually follow a guideline issue, such as a keyword-stuffed name.',
      'Duplicate listings split your reviews and confuse Google.',
    ],
    body: [
      `It’s a horrible feeling. You’ve set up your Google Business Profile, you search for your business, and it’s not there. Or it shows for your name but never when someone searches for what you do.

Work through these in order.

## 1. Not verified yet

Unverified profiles don’t show properly. Log in to Google Business Profile and check. If verification is pending, complete whatever Google has asked for.

## 2. Suspended or under review

A warning in your dashboard means Google has found a problem. Common causes: keywords added to the business name, a virtual office address, or big edits made all at once. Fix the issue, then request reinstatement.

## 3. It’s new

New profiles often show for the business name before they rank for services. That’s normal. Keep building reviews and filling in the profile.

## 4. You’re searching the wrong way

Searching your business name is not the same as a customer searching “electrician near me”. And results depend on where the searcher is. Try searching from a customer’s area.

## 5. Wrong category

If your primary category doesn’t match what customers search, you won’t appear for those searches. Pick the most accurate one.

## 6. Service area set up wrongly

If you visit customers, set up as a service-area business and list the areas you cover. A hidden address with no service areas limits where you show.

## 7. Duplicate listings

Two listings for the same business split reviews and confuse Google. Remove or merge duplicates.

## 8. Your competitors are simply stronger

More reviews, better photos, more complete profiles. The fix is time and consistency, not tricks.`,
      table('Quick diagnosis', [
        ['Symptom', 'Likely cause'],
        ['Doesn’t show for your name', 'Not verified, suspended or very new'],
        ['Shows for name, not for services', 'Category, services or competition'],
        ['Shows nearby, not further away', 'Distance or service area settings'],
        ['Disappeared suddenly', 'Suspension or edits under review'],
      ]),
      `Once you’re showing, read [how to rank higher on Google Maps](/insights/how-to-rank-higher-on-google-maps).`,
      cta('We’ll check your profile and tell you exactly why you’re not showing, and how to fix it.'),
    ],
    faqs: [
      ['Why is my business not showing on Google after verification?', 'New profiles often need time to rank for service searches. Also check your category, service areas and that no warnings show in your dashboard.'],
      ['Why did my business disappear from Google Maps?', 'Often a suspension or recent edits under review. Check your Business Profile dashboard for notices.'],
      ['How long does it take to show on Google Maps?', 'A verified profile usually shows for its name fairly quickly. Ranking for service searches takes longer.'],
      ['Can I have a Google Business Profile without an address?', 'Yes. Service-area businesses can hide their address and list the areas they serve.'],
      ['What causes a Google Business Profile suspension?', 'Guideline breaches such as keyword-stuffed names, ineligible addresses or misleading information.'],
    ],
    citations: cite(SRC.gbpGuidelines, GBP_VERIFY, SRC.gbpServiceArea),
  },

  /* #74 */
  {
    id: 'post-how-to-get-my-business-on-google-maps',
    slug: 'how-to-get-my-business-on-google-maps',
    cluster: 'Google Maps',
    keywords: [74],
    title: 'How to Get Your Business on Google Maps: A Step-by-Step Set-Up',
    seoTitle: 'How to Get My Business on Google Maps: Step by Step',
    seoDescription: 'Step-by-step guide to adding your business to Google Maps: creating a Business Profile, choosing categories, verification and the details that matter.',
    focusKeyword: 'how to get my business on google maps',
    secondaryKeywords: ['how to get my business on google', 'add business to google maps', 'create google business profile', 'how to get found on google'],
    stage: 'awareness',
    excerpt: 'Getting on Google Maps is free and takes about 20 minutes, plus verification. Here’s how to do it properly the first time.',
    tags: ['Google Maps', 'Google Business Profile'],
    cats: [CAT.local],
    cover: { eyebrow: 'Step by step', lines: ['Get your business', 'on Google Maps'], points: ['Create', 'Verify', 'Complete'] },
    coverAlt: 'Step by step: create, verify and complete your Google Business Profile to appear on Google Maps',
    direct: ['How do I get my business on Google Maps?', 'Create a free Google Business Profile at google.com/business, enter your business name, choose your primary category, add your address or service areas, phone number and website, then verify the business using the method Google offers. Once verified, complete your hours, services, photos and description.'],
    takeaways: [
      'A Google Business Profile is free.',
      'Use your real business name, with no added keywords.',
      'Service businesses that visit customers can hide their address.',
      'Verification is required before you show properly.',
      'Complete every section after verifying.',
    ],
    body: [
      `If you’re not on Google Maps, you’re missing the first place most people look for a local business. The good news: it’s free.

## Before you start

Have these ready: your exact business name, phone number, website, opening hours, a list of services and some real photos.

## The steps`,
      `1. Go to google.com/business and sign in with a Google account you’ll keep (ideally a business one, not a personal Gmail you might lose).
2. Enter your business name exactly as customers know it.
3. Choose your primary category: the most specific one that describes your main business.
4. Add your address if customers visit you. If you visit them, choose to hide your address and add the areas you serve.
5. Add your phone number and website.
6. Verify. Google will offer a method, such as a video, phone or post. Follow its instructions.
7. Once verified, add hours, services, a description, photos and attributes.`,
      note('Common mistakes', 'Adding keywords to your name (“Smith Plumbing Leeds Emergency Plumber”), using a virtual office address, and creating a second profile when you can’t access the first. All three cause problems later.', 'warning'),
      table('After verification: finish these', [
        ['Section', 'Tip'],
        ['Services', 'List each one separately, in customers’ words'],
        ['Photos', 'Premises, team and real work'],
        ['Hours', 'Include holiday hours'],
        ['Description', 'What you do, where, and for whom'],
        ['Reviews', 'Start asking customers straight away'],
      ]),
      `If it doesn’t show after all that, read [why your business might not be showing on Google Maps](/insights/why-is-my-business-not-showing-on-google-maps).`,
      cta('We’ll set up or fix your Google Business Profile properly, so you’re found by nearby customers.'),
    ],
    faqs: [
      ['Is it free to be on Google Maps?', 'Yes. A Google Business Profile is free.'],
      ['How long does verification take?', 'It depends on the method Google offers. Some are instant; others take several days.'],
      ['Can I list my business without an address?', 'Yes, if you serve customers at their location. Hide your address and add service areas.'],
      ['Can I have more than one category?', 'Yes. Choose one primary category and add secondary ones only if they genuinely apply.'],
      ['What if someone already created a profile for my business?', 'You can request ownership through Google rather than creating a duplicate.'],
    ],
    citations: cite(GBP_VERIFY, SRC.gbpGuidelines, SRC.gbpServiceArea),
  },

  /* #81, #76 */
  {
    id: 'post-local-seo-for-trades',
    slug: 'local-seo-for-trades',
    cluster: 'Local SEO',
    keywords: [81, 76],
    title: 'Local SEO for Trades: A Plain-English Guide for Plumbers, Electricians and Builders',
    seoTitle: 'Local SEO for Trades: A Plain-English Guide',
    seoDescription: 'Local SEO for tradespeople explained simply: Google Business Profile, service and area pages, reviews and citations. What to do and what to skip.',
    focusKeyword: 'local seo for trades',
    secondaryKeywords: ['local seo for plumbing companies', 'local seo for tradesmen', 'seo for tradesmen', 'local seo company for plumbers'],
    stage: 'consideration',
    excerpt: 'Local SEO sounds technical. For a tradesperson, it comes down to five jobs you can understand in ten minutes. Here they are.',
    tags: ['Local SEO', 'Trades', 'Google Maps'],
    cats: [CAT.local],
    cover: { eyebrow: 'For trades', lines: ['Local SEO,', 'in plain English'], points: ['Profile', 'Pages', 'Reviews'] },
    coverAlt: 'Local SEO for trades in plain English: Google profile, website pages and reviews',
    direct: ['What is local SEO for trades?', 'Local SEO for trades means helping your business appear when people nearby search for your services, like “plumber near me” or “rewire cost Leeds”. It involves a complete Google Business Profile, website pages for each service and area you cover, a steady flow of reviews, and consistent business details across the web.'],
    takeaways: [
      'Local SEO is about showing up for nearby searches for your services.',
      'Your Google Business Profile is the biggest single factor you control.',
      'One website page per service, and per main area, helps you match searches.',
      'Reviews help rankings and help customers choose you.',
      'Keep your name, address and phone number consistent everywhere.',
    ],
    body: [
      `Forget the jargon. For a tradesperson, local SEO means one thing: when someone near you searches for what you do, you show up, and they choose you.

That comes down to five jobs.

## 1. Your Google Business Profile

This is where most trade jobs start. Correct category, service areas, every service listed, real photos, accurate hours. Read [how to rank higher on Google Maps](/insights/how-to-rank-higher-on-google-maps) for the details.

## 2. A page for each service

“Boiler repair”, “bathroom installation”, “EICR”, “flat roof repair”. Each deserves its own page with what you do, typical prices, photos and reviews. That’s how you show up for specific searches, not just “plumber”.

## 3. Pages for your main areas

If you cover several towns, a page for each main one, with genuine local detail: jobs you’ve done there, areas you cover, how quickly you can get there. Don’t copy the same page and swap the town name. Google spots it.

## 4. Reviews, every job

Ask every customer. Reviews that mention the job and the town are gold.

## 5. Consistent details

Your business name, address and phone number should be the same on your website, Google, Facebook, trade directories and anywhere else you’re listed.`,
      table('What to skip', [
        ['Skip this', 'Why'],
        ['Buying links or reviews', 'Risks penalties and suspension'],
        ['Hundreds of thin town pages', 'Low value; can harm the whole site'],
        ['Keyword-stuffed business names', 'Can get your profile suspended'],
        ['Anyone guaranteeing number one', 'Nobody can'],
      ]),
      `Read our guides to [marketing for plumbers](/insights/marketing-for-plumbers) and [what local SEO should cost](/insights/local-seo-cost).`,
      cta('We’ll show you where you appear on Google today for your main services and areas.'),
    ],
    faqs: [
      ['Is local SEO worth it for tradesmen?', 'Yes. Most domestic trade work starts with a local Google search.'],
      ['Can I do local SEO myself?', 'Much of it. Your Google profile, reviews and service pages are things you can improve yourself.'],
      ['Should I make a page for every town?', 'Only for main areas, and only with genuinely useful local content. Copy-paste town pages can do more harm than good.'],
      ['How long does local SEO take for trades?', 'Profile and review improvements can help within weeks; stronger rankings usually take months.'],
      ['Do I need a website if I have a Google profile?', 'It helps a lot. Your website supports your profile and lets you rank for specific services.'],
    ],
    citations: cite(GBP_RANKING, SRC.gbpServiceArea),
  },

  /* #83, #84 */
  {
    id: 'post-how-to-get-more-google-reviews',
    slug: 'how-to-get-more-google-reviews',
    cluster: 'Reviews',
    keywords: [83, 84],
    title: 'How to Get More Google Reviews for Your Business (the Right Way)',
    seoTitle: 'How to Get More Google Reviews for My Business',
    seoDescription: 'Practical, rule-following ways to get more Google reviews: when to ask, what to say, review links and QR codes, and what Google doesn’t allow.',
    focusKeyword: 'how to get more google reviews for my business',
    secondaryKeywords: ['how to get more google reviews fast', 'how to get more google reviews', 'how to get more reviews on google maps'],
    stage: 'consideration',
    excerpt: 'Happy customers rarely leave reviews unless you ask. Here’s when to ask, exactly what to say, and the shortcuts that can get your profile in trouble.',
    tags: ['Google reviews', 'Local SEO'],
    cats: [CAT.local],
    cover: { eyebrow: 'Google reviews', lines: ['Get more Google', 'reviews, the right way'], points: ['When to ask', 'What to say', 'What’s banned'] },
    coverAlt: 'How to get more Google reviews the right way: when to ask, what to say and what’s not allowed',
    direct: ['How can I get more Google reviews?', 'Ask every customer, at the moment they’re happiest, and make it take seconds. Use Google’s own review link or QR code, send it by text or WhatsApp, and follow up once if needed. Reply to every review. Don’t offer incentives, and don’t filter out unhappy customers; Google treats both as fake engagement.'],
    takeaways: [
      'Most happy customers will leave a review if you ask at the right moment.',
      'Use Google’s own review link or QR code so it takes seconds.',
      'Ask everyone, not just the customers you think are happy.',
      'Never offer discounts or gifts for reviews.',
      'Reply to every review, good and bad.',
    ],
    body: [
      `Unhappy customers leave reviews without being asked. Happy ones usually don’t. That’s why so many good businesses have fewer reviews than they deserve.

The fix is simple: ask, every time, in a way that takes seconds.

## When to ask

At the moment the customer is happiest:

- A salon client looking in the mirror
- A patient leaving after a good appointment
- A homeowner when the job’s finished and tidied up
- A diner paying the bill after a good meal

## How to ask

Get your review link or QR code from your Google Business Profile (look for “Ask for reviews” or “Get more reviews”). Then:

- Text or WhatsApp the link as you leave
- Put the QR code at the till, reception or on your invoice
- Add it to your follow-up email

## What to say

“Thanks so much, [name]. If you’ve got a minute, a Google review really helps a small business like ours: [link]”

Short, personal, no pressure.`,
      note('What Google doesn’t allow', 'Offering discounts, gifts or entries into prize draws in exchange for reviews. Writing reviews yourself or asking staff to. Only sending the link to customers you think will be positive. Google treats these as fake engagement and can remove reviews or restrict your profile.', 'warning'),
      table('Fast, allowed ways to get more reviews', [
        ['Method', 'Effort'],
        ['Text the review link after every job', 'Low'],
        ['QR code at reception or on invoices', 'Low'],
        ['Ask past happy customers from the last few months', 'Medium'],
        ['Automate a review request after each appointment', 'Set up once'],
      ]),
      `## Reply to every review

Thank people by name for good reviews. For bad ones, reply calmly, apologise where it’s fair and offer to put it right offline. Future customers judge you on the reply.

For clinics, [Review Your Doctor](/review-your-doctor) sends every patient a quick rating request and review link automatically.`,
      cta('We’ll set up a simple review system that asks every customer at the right moment.'),
    ],
    faqs: [
      ['How do I get more Google reviews quickly?', 'Send your review link to recent happy customers today, and start asking every customer from now on.'],
      ['Can I offer a discount for a Google review?', 'No. Google treats incentives for reviews as fake engagement.'],
      ['Where do I find my Google review link?', 'In your Google Business Profile, under the option to ask for or get more reviews. You can also create a QR code there on a computer.'],
      ['Should I reply to bad reviews?', 'Yes, calmly and helpfully. Offer to resolve it offline.'],
      ['Can I ask only happy customers for reviews?', 'Google doesn’t allow selectively soliciting positive reviews. Ask everyone.'],
    ],
    citations: cite(SRC.gbpReviewLink, SRC.gbpReviewTips, REVIEW_POLICY),
  },

  /* #85 */
  {
    id: 'post-qr-code-for-google-reviews',
    slug: 'qr-code-for-google-reviews',
    cluster: 'Reviews',
    keywords: [85],
    title: 'How to Make a QR Code for Google Reviews (and Where to Put It)',
    seoTitle: 'QR Code for Google Reviews: How to Make One (Free)',
    seoDescription: 'How to create a free QR code for Google reviews from your Business Profile, where to display it, and wording that gets customers to scan it.',
    focusKeyword: 'qr code for google reviews',
    secondaryKeywords: ['qr code for google reviews free', 'google review qr code', 'qr code for google reviews for my business'],
    stage: 'decision',
    excerpt: 'Google lets you create a review QR code for free. Here’s how to get it, where to put it so people actually scan it, and what to write next to it.',
    tags: ['Google reviews', 'QR code'],
    cats: [CAT.local],
    cover: { eyebrow: 'Google reviews', lines: ['A QR code for', 'Google reviews'], points: ['Free', 'Where to put it', 'What to say'] },
    coverAlt: 'How to make a free QR code for Google reviews, where to put it and what to say',
    direct: ['How do I make a QR code for Google reviews?', 'Open your Google Business Profile on a computer, choose the option to ask for or get more reviews, and download the QR code Google provides. It links straight to your review form. Print it at reception, on the till, on invoices or on a card you hand to customers.'],
    takeaways: [
      'Google provides a free review QR code in your Business Profile.',
      'You need a computer browser to download it.',
      'Put it where customers pause: reception, till, table, invoice.',
      'A short line of text next to it makes people more likely to scan.',
      'Ask in person too. The code works best with a nudge.',
    ],
    body: [
      `There’s no need to pay for a QR code generator. Google gives you one.

## Getting your code

1. Open your Google Business Profile on a computer (the QR code download isn’t available on mobile).
2. Choose the option to ask for reviews or get more reviews.
3. Copy the review link, or download the QR code image.

That code opens your review form directly. No searching, no extra taps.

## Where to put it

Where customers pause and have a moment:

- Reception desk or till
- Restaurant tables or the bill folder
- The back of appointment cards
- Invoices and receipts
- A small card left after a job in someone’s home

## What to write next to it

A QR code on its own gets ignored. Add a short line:

“Happy with your visit? Scan to leave us a Google review. It really helps.”

## Say it out loud too

The code works best with a nudge: “If you’ve got a second, there’s a code there for a Google review. It really helps us.”`,
      note('Keep it fair', 'Show the code to everyone, not just customers you think are happy, and never offer anything in return for a review.', 'warning'),
      table('QR code placement ideas', [
        ['Business', 'Best spot'],
        ['Clinic or dental practice', 'Reception desk'],
        ['Salon', 'Next to the till mirror'],
        ['Restaurant', 'On the bill or table card'],
        ['Trades', 'Card left with the invoice'],
      ]),
      `For clinics, [Review Your Doctor](/review-your-doctor) gives you a branded QR poster that also lets unhappy patients tell you privately. Read more on [getting more Google reviews](/insights/how-to-get-more-google-reviews).`,
      cta('We’ll set up your review QR code and a simple routine for asking every customer.'),
    ],
    faqs: [
      ['Is a Google review QR code free?', 'Yes. Google provides it in your Business Profile.'],
      ['Why can’t I find the QR code on my phone?', 'Google’s review QR code can only be downloaded from a computer browser.'],
      ['Where should I put my review QR code?', 'Where customers pause: reception, the till, tables, invoices or appointment cards.'],
      ['Do QR codes really get more reviews?', 'They make leaving a review quicker, and they work best when you also ask in person.'],
      ['Can I print the QR code on business cards?', 'Yes. Any printed material customers keep works.'],
    ],
    citations: cite(SRC.gbpReviewLink, REVIEW_POLICY),
  },

  /* #86 */
  {
    id: 'post-google-reviews-for-dental-practices',
    slug: 'google-reviews-for-dental-practices',
    cluster: 'Reviews',
    keywords: [86, 75],
    title: 'Google Reviews for Dental Practices: How to Get More and Reply Without Breaching Confidentiality',
    seoTitle: 'Google Reviews for Dental Practices: Get More, Safely',
    seoDescription: 'How dental practices get more Google reviews, reply to them without breaching patient confidentiality, and use reviews to improve local SEO.',
    focusKeyword: 'google reviews for dental clinic',
    secondaryKeywords: ['google reviews for dentist', 'dental practice reviews', 'local seo for dentists', 'how to reply to dental reviews'],
    stage: 'consideration',
    excerpt: 'Patients choose dentists on reviews. Here’s how to get more of them, and how to reply, especially to negative ones, without saying anything you shouldn’t.',
    tags: ['Google reviews', 'Dental practices', 'Local SEO'],
    cats: [CAT.local],
    cover: { eyebrow: 'For dental practices', lines: ['More Google reviews', 'for your practice'], points: ['Ask everyone', 'Reply safely', 'Rank higher'] },
    coverAlt: 'Google reviews for dental practices: ask every patient, reply safely and rank higher',
    direct: ['How can a dental practice get more Google reviews?', 'Ask every patient after their appointment and make it take seconds, using Google’s review link or a QR code at reception. Reply to every review, but never confirm someone is a patient or discuss treatment in a reply. Offer to discuss concerns privately instead.'],
    takeaways: [
      'Patients compare practices on reviews before booking.',
      'Ask every patient, straight after a good appointment.',
      'Never confirm someone is a patient or mention treatment in a reply.',
      'Move complaints offline and follow your complaints procedure.',
      'More recent reviews help you rank higher on Google Maps.',
    ],
    body: [
      `For most people choosing a new dentist, reviews are the deciding factor. A nervous patient reading “they were so gentle, I didn’t feel a thing” is halfway to booking.

## Getting more reviews

- Ask at the end of the appointment, when the patient is relieved and happy
- Use a QR code at reception, and text the review link afterwards
- Ask every patient, not just the ones you expect to be positive
- Automate the request, so it happens even on busy days

## Replying safely

This is where dental practices need to be careful. A reply that confirms someone is a patient, or mentions their treatment, can breach confidentiality, even if they mentioned it first.`,
      table('Replying to reviews', [
        ['Don’t write', 'Write instead'],
        ['“Sorry your crown fitting was uncomfortable, Mrs Jones”', '“Thank you for your feedback. We’d like to hear more. Please contact our practice manager on [number].”'],
        ['“We checked your records and…”', '“We take all feedback seriously and would welcome the chance to talk.”'],
        ['Arguing about what happened', 'A calm invitation to discuss privately'],
      ]),
      note('Complaints procedure', 'Your website should already explain your complaints procedure. Point unhappy reviewers towards it privately. Don’t resolve a complaint in public.', 'warning'),
      `## Reviews and local SEO

Google says review count and score contribute to local ranking. For practices, recent reviews that mention treatments naturally (“great hygienist appointment”) also help you match searches. You can’t ask patients what to write, but you can ask everyone, consistently.

[Review Your Doctor](/review-your-doctor) was built for exactly this: patients scan a code, rate their visit, and leave a Google review in two taps, while concerns come to the practice privately first. Read more about [marketing a dental practice](/insights/marketing-for-dental-practice).`,
      cta('We’ll show you how your practice compares on reviews with others nearby, and how to close the gap.'),
    ],
    faqs: [
      ['How do dentists get more Google reviews?', 'By asking every patient after their appointment, using a QR code or review link that makes it quick.'],
      ['Can a dentist reply to a Google review?', 'Yes, but never confirm someone is a patient or mention their treatment. Invite them to contact the practice privately.'],
      ['Can a dental practice offer incentives for reviews?', 'No. Google doesn’t allow incentives for reviews.'],
      ['Do reviews help dental local SEO?', 'Yes. Review count and score are part of how Google ranks local results.'],
      ['What should we do about a negative review?', 'Reply calmly without clinical details, invite them to contact you, and follow your complaints procedure.'],
    ],
    citations: cite(SRC.gbpReviewTips, SRC.gdcAds, REVIEW_POLICY),
  },

  /* #87, #88 */
  {
    id: 'post-how-to-get-chatgpt-to-recommend-my-business',
    slug: 'how-to-get-chatgpt-to-recommend-my-business',
    cluster: 'AI search',
    keywords: [87, 88],
    title: 'How to Get ChatGPT and Google’s AI Overviews to Recommend Your Business',
    seoTitle: 'How to Get ChatGPT to Recommend My Business',
    seoDescription: 'How local businesses show up in AI answers from ChatGPT, Google AI Overviews and others: clear answers on your website, consistent details and genuine reviews.',
    focusKeyword: 'how to get chatgpt to recommend my business',
    secondaryKeywords: ['how to appear in google ai overview', 'how to appear in ai search', 'chatgpt recommend my business', 'ai seo for local business'],
    stage: 'awareness',
    excerpt: 'More people are asking AI tools for recommendations. There’s no trick to getting mentioned, but there is a pattern. Here’s what these tools seem to reward.',
    tags: ['AI search', 'Local SEO', 'ChatGPT'],
    cats: [CAT.local],
    cover: { eyebrow: 'AI search', lines: ['Get recommended by', 'ChatGPT and Google AI'], points: ['Clear answers', 'Consistent details', 'Reviews'] },
    coverAlt: 'How to get recommended by ChatGPT and Google AI Overviews: clear answers, consistent details and reviews',
    direct: ['How do I get ChatGPT to recommend my business?', 'No one can guarantee an AI recommendation, but AI tools tend to recommend businesses they can clearly understand and trust. Publish plain answers to customers’ questions on your website, keep your name, address, services and prices consistent everywhere, earn genuine reviews, and make sure search engines can crawl your site. Google says there’s no special markup needed for AI Overviews beyond normal SEO best practice.'],
    takeaways: [
      'Nobody can guarantee a mention in ChatGPT or AI Overviews.',
      'AI tools draw on websites, reviews and listings. Make yours clear and consistent.',
      'Answer real customer questions in plain language on your website.',
      'Reviews and mentions on other trusted sites build credibility.',
      'Google says AI features use the same foundations as normal search.',
    ],
    body: [
      `“ChatGPT, who’s a good emergency plumber in Bristol?” More people are asking questions like that. The businesses that get mentioned aren’t using secret tricks. They’re usually the ones that are easiest for an AI to understand and trust.

## What AI tools seem to draw on

- Your website: what you do, where, prices, and answers to common questions
- Your Google Business Profile and other listings
- Reviews on Google and elsewhere
- Mentions on other sites: local news, directories, associations

## What you can do

**Answer questions plainly on your website.** “How much does a boiler service cost?”, “Do you cover Clifton?”, “Can you come out today?” A page or FAQ that answers these in a sentence or two is exactly what AI answers are built from.

**Be consistent everywhere.** Same name, address, phone number, services and opening hours on your website, Google profile and directories. Conflicting details make you harder to trust.

**Earn genuine reviews.** Lots of recent, specific reviews help both Google and AI tools judge that you’re real and good.

**Make sure you can be crawled.** If your website blocks search engines, or hides key information in images, AI tools can’t read it.

**Be mentioned elsewhere.** Trade associations, local business groups, suppliers and local news all help.`,
      note('Google’s own guidance', 'Google says there are no extra requirements to appear in AI Overviews, and that the same SEO best practices apply: helpful content, crawlable pages and a good page experience.'),
      table('Quick checklist', [
        ['Check', 'Done?'],
        ['Website answers your top 10 customer questions', ''],
        ['Name, address and phone identical everywhere', ''],
        ['Prices or price ranges published', ''],
        ['Recent Google reviews coming in weekly', ''],
        ['Site crawlable, key text not hidden in images', ''],
      ]),
      `This is a big part of how we build websites: [getting found by more customers](/services/shiftbuild), whether they search on Google or ask an AI.`,
      cta('We’ll check how your business shows up in Google and AI answers, and what’s missing.'),
    ],
    faqs: [
      ['Can I pay to be recommended by ChatGPT?', 'Not in normal answers. Focus on clear information, consistent details and genuine reviews.'],
      ['How do I appear in Google AI Overviews?', 'Google says the same SEO best practices apply: helpful content, crawlable pages and a good page experience. There’s no special markup required.'],
      ['Do reviews help with AI recommendations?', 'Reviews are one signal AI tools can use to judge trust and quality.'],
      ['Is AI SEO different from normal SEO?', 'Mostly it’s the same foundations, with extra emphasis on clear, direct answers to questions.'],
      ['How do I know if AI tools mention my business?', 'Ask them the questions your customers would ask, from your area, and see what comes back.'],
    ],
    citations: cite(GOOGLE_AI, SRC.gbpGuidelines),
  },
];
