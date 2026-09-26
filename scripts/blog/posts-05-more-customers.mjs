import { table, note, cta, cite, SRC, CAT } from './lib.mjs';

const TRUSTMARK = { title: 'TrustMark: government endorsed quality scheme', publisher: 'TrustMark', url: 'https://www.trustmark.org.uk/' };
const FHRS = { title: 'Food hygiene ratings', publisher: 'Food Standards Agency', url: 'https://ratings.food.gov.uk/' };

export default [
  /* #61 */
  {
    id: 'post-how-to-get-more-work-as-an-electrician',
    slug: 'how-to-get-more-work-as-an-electrician',
    cluster: 'More customers',
    keywords: [61, 77],
    title: 'How to Get More Work as an Electrician (Without Relying on Lead Sites)',
    seoTitle: 'How to Get More Work as an Electrician: 7 Ways',
    seoDescription: 'Seven practical ways electricians get more work: Google Maps, reviews, landlord and EV charger work, local SEO and never missing a call.',
    focusKeyword: 'how to get more work as an electrician',
    secondaryKeywords: ['how to get more clients as an electrician', 'how to get more electrical leads', 'local seo for electricians', 'marketing for electricians'],
    stage: 'consideration',
    excerpt: 'The electricians with full diaries usually aren’t the cheapest. They’re the easiest to find, the quickest to answer and the ones with the most reviews. Here’s how to be one of them.',
    tags: ['Electricians', 'Local SEO', 'Trades'],
    cats: [CAT.local],
    cover: { eyebrow: 'For electricians', lines: ['Get more work as', 'an electrician'], points: ['Google Maps', 'Landlords', 'EV chargers'] },
    coverAlt: 'How electricians get more work: Google Maps, landlord certificates and EV charger installs',
    direct: ['How can an electrician get more work?', 'Electricians get more work by showing up on Google Maps with a complete Business Profile, collecting reviews after every job, having a page on their website for each service such as rewires, EICRs and EV chargers, building relationships with landlords and letting agents, and answering every call quickly, even while on a job.'],
    takeaways: [
      'Most local electrical work starts with a Google search.',
      'A page for each service helps you show up for specific searches like EV charger installs.',
      'Landlords need EICRs regularly. Letting agents are a steady source of work.',
      'Reviews that mention the job and area help most.',
      'Missed calls are lost jobs. Answer every one.',
    ],
    body: [
      `Ask an electrician with a six-week waiting list how they get work and you’ll rarely hear “ads”. You’ll hear “Google, reviews and word of mouth”. The good news is that the first two can be built on purpose.

## 1. Own your Google Business Profile

Choose Electrician as your main category, set your service areas, add every service you do, and post real photos of your work: consumer units, lighting, EV chargers. Keep your hours accurate.

## 2. A page for every service

People don’t search “electrician” as often as you’d think. They search “EV charger installer near me”, “EICR for landlords” or “house rewire cost”. A short page for each, with prices or typical ranges, lets Google match you to those searches.

## 3. Ask for a review after every job

Send your Google review link by text as you leave. Reviews that mention the job (“new consumer unit fitted, really tidy”) and the town are the most useful.

## 4. Work with landlords and letting agents

Rental properties need an EICR at least every five years in England, plus repairs between tenants. A few good letting agent relationships give you steady, repeat work.

## 5. Show your registration

Customers look for competent person scheme membership. Show it on your website, van and quotes.

## 6. Answer every call

A missed call from someone wanting a rewire quote is often a lost job. If you can’t answer on site, an [AI receptionist for electricians](/insights/ai-receptionist-for-electricians) can take the details and book the survey.

## 7. Follow up quotes

Big jobs get several quotes. A polite follow-up a few days later wins more of them.`,
      table('Where electrical work comes from', [
        ['Source', 'What to do'],
        ['Google Maps', 'Complete profile, photos, reviews'],
        ['Specific searches', 'A page per service'],
        ['Landlords and agents', 'EICRs and repairs, reliable turnaround'],
        ['Past customers', 'Follow-ups and reminders'],
      ]),
      cta('We’ll check how you show up on Google and how many calls you’re missing.'),
    ],
    faqs: [
      ['How do electricians get more customers?', 'Mostly through Google Maps, reviews, a website with a page per service, letting agents and answering every call.'],
      ['Is local SEO worth it for electricians?', 'Yes. Most domestic electrical work starts with a local Google search.'],
      ['How often do rental properties need an EICR?', 'In England, private rented properties need an electrical safety inspection at least every five years.'],
      ['Should electricians use lead websites?', 'They can fill gaps, but you pay per lead. Your own profile and reviews bring work without a fee per job.'],
      ['What should an electrician’s website include?', 'Services and prices, areas covered, reviews, photos of real work, registration details and a clear phone number.'],
    ],
    citations: cite(SRC.gbpServiceArea, SRC.gbpReviewLink, { title: 'Electrical safety standards in the private rented sector', publisher: 'GOV.UK', url: 'https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-rented-sector-guidance-for-landlords-tenants-and-local-authorities' }),
  },

  /* #62, #63 */
  {
    id: 'post-how-to-get-more-work-builders-roofers',
    slug: 'how-to-get-more-work-builders-roofers',
    cluster: 'More customers',
    keywords: [62, 63, 80],
    title: 'How Builders and Roofers Get More Work: What Actually Brings in Enquiries',
    seoTitle: 'How to Get More Work as a Builder or Roofer',
    seoDescription: 'How builders and roofers get more enquiries: project photos, reviews, Google Maps, local SEO, quick replies and following up every quote.',
    focusKeyword: 'how to get more work as a builder',
    secondaryKeywords: ['how to get more leads for my roofing business', 'how to get more leads as a builder', 'local seo for roofers', 'marketing for roofers'],
    stage: 'consideration',
    excerpt: 'Big jobs come from trust. Photos of your work, reviews from real customers, and being quick to reply. Here’s how builders and roofers turn that into a steady pipeline.',
    tags: ['Builders', 'Roofers', 'Local SEO', 'Trades'],
    cats: [CAT.local],
    cover: { eyebrow: 'For builders and roofers', lines: ['More enquiries for', 'builders and roofers'], points: ['Project photos', 'Reviews', 'Fast quotes'] },
    coverAlt: 'How builders and roofers get more enquiries: project photos, reviews and fast quotes',
    direct: ['How can a builder or roofer get more work?', 'Builders and roofers get more work by showing finished projects with real photos, collecting reviews from every customer, keeping a complete Google Business Profile with service areas, having website pages for each service and area, replying to enquiries quickly and following up every quote.'],
    takeaways: [
      'Photos of finished work sell big jobs better than anything you can write.',
      'Customers planning extensions or new roofs get several quotes. Speed and follow-up win.',
      'A page per service and area helps with local searches.',
      'Reviews that mention the project type build trust.',
      'Storm damage brings bursts of roofing enquiries. Be ready to answer them.',
    ],
    body: [
      `Nobody hires a builder for a £40,000 extension because of a clever advert. They hire the one whose past work looks good, whose customers say nice things, and who replied properly when they got in touch.

## Show your work

Take photos on every job: before, during and after. A project page with a short story (“Victorian terrace, rear extension, 12 weeks”) and a handful of photos does more than any sales pitch.

## Collect reviews while the customer is happy

At handover, when the customer is showing the kitchen off to their neighbours, ask. Send your Google review link by text. Mentions of the project type and area help most.

## Be findable

- A complete Google Business Profile, set up as a service-area business
- Website pages for each service: extensions, lofts, roofing repairs, flat roofs
- Pages for the main towns you cover
- Accreditations shown clearly, such as TrustMark or trade association membership

## Reply fast, and follow up

Enquiries for big jobs are competitive. A same-day reply and an early survey visit put you ahead. After you quote, follow up a few days later. Many quotes go quiet simply because the customer got busy.`,
      note('Roofers: storm days', 'After high winds, roofing enquiries arrive in a flood. Have a plan for answering them all, asking for photos, and prioritising active leaks. An [AI receptionist for trades](/insights/ai-receptionist-for-tradesmen) can take every call while you’re on a roof.'),
      table('Quick wins', [
        ['This week', 'This month'],
        ['Ask your last 10 customers for reviews', 'Add three project pages with photos'],
        ['Complete your Google profile', 'Add a page per main service'],
        ['Follow up every open quote', 'Set up call answering'],
      ]),
      cta('We’ll show you how you appear on Google today and where enquiries are slipping away.'),
    ],
    faqs: [
      ['How do builders get more clients?', 'Through photos of finished work, reviews, a strong Google profile, local service pages, quick replies and following up quotes.'],
      ['How can roofers get more leads?', 'By showing up on Google Maps, collecting reviews, answering every call, and being ready for storm-damage enquiries.'],
      ['Are lead websites worth it for builders?', 'They can help fill gaps, but you pay per lead and compete on price. Your own reputation brings better-value work.'],
      ['Should builders put prices on their website?', 'Typical ranges help customers and filter out enquiries that won’t fit your budget.'],
      ['How important are photos?', 'Very. Customers want to see work like theirs before they trust you with it.'],
    ],
    citations: cite(SRC.gbpServiceArea, SRC.gbpReviewLink, TRUSTMARK),
  },

  /* #64 */
  {
    id: 'post-how-to-get-more-cleaning-customers',
    slug: 'how-to-get-more-cleaning-customers',
    cluster: 'More customers',
    keywords: [64],
    title: 'How to Get More Customers for Your Cleaning Business',
    seoTitle: 'How to Get More Customers for a Cleaning Business',
    seoDescription: 'Practical ways cleaning businesses win more regular customers: Google Maps, reviews, fast quotes, landlord and letting agent work, and keeping clients.',
    focusKeyword: 'how to get more customers for cleaning business',
    secondaryKeywords: ['how to get more cleaning clients', 'how to get more clients for my cleaning business', 'marketing for cleaning business'],
    stage: 'consideration',
    excerpt: 'Regular cleaning clients are worth a lot over a year. Here’s how cleaning businesses find more of them, and keep the ones they have.',
    tags: ['Cleaning business', 'Local SEO', 'More customers'],
    cats: [CAT.local],
    cover: { eyebrow: 'For cleaning businesses', lines: ['More regular', 'cleaning customers'], points: ['Google Maps', 'Fast quotes', 'Keep them'] },
    coverAlt: 'How cleaning businesses win more regular customers',
    direct: ['How can a cleaning business get more customers?', 'Cleaning businesses get more customers by showing up on Google Maps in the areas they cover, collecting reviews, quoting quickly with clear prices, working with letting agents and landlords for end-of-tenancy cleans, and keeping regular clients happy so they stay and refer friends.'],
    takeaways: [
      'A regular weekly client is worth thousands of pounds a year. Treat each enquiry that way.',
      'Clear prices and fast quotes win jobs.',
      'Letting agents and landlords are a steady source of end-of-tenancy work.',
      'Reviews that mention reliability matter most in cleaning.',
      'Keeping clients is cheaper than finding new ones.',
    ],
    body: [
      `Work it out: a weekly two-hour clean at £20 an hour is about £2,000 a year from one household. Every enquiry you don’t answer quickly could be that.

## Be easy to find

Set up your Google Business Profile as a service-area business with the areas you cover, list every service (regular, deep, end of tenancy, office), and add photos. Ask every happy client for a review.

## Quote fast, with clear prices

Cleaning customers compare quickly. A price range on your website and a same-day quote beat “we’ll pop round sometime next week”. If you can quote from details and photos, do.

## Find the steady work

- Letting agents and landlords need end-of-tenancy cleans on a schedule
- Short-let owners need turnarounds between guests
- Small offices want someone reliable after hours

## Keep the clients you have

Reliability is what cleaning customers value most. Turn up when you say, send a reminder the day before, and tell them before they have to ask if something changes. Happy regulars refer friends.`,
      table('Where to focus', [
        ['Goal', 'Action'],
        ['More enquiries', 'Google profile, reviews, service pages'],
        ['More of them booked', 'Fast quotes, clear prices'],
        ['Steady work', 'Letting agents, offices, short lets'],
        ['Fewer lost clients', 'Reliability, reminders, communication'],
      ]),
      `If calls come in while you’re working, an [AI receptionist for cleaning businesses](/insights/ai-receptionist-for-cleaning-business) can take the details and quote standard jobs from your price list.`,
      cta('We’ll look at how you appear on Google and how quickly enquiries get a price.'),
    ],
    faqs: [
      ['How do cleaning businesses find clients?', 'Mostly through Google, reviews, referrals, letting agents and local offices.'],
      ['Should I put cleaning prices online?', 'Yes, at least typical prices or ranges. It speeds up decisions and filters out enquiries that won’t fit.'],
      ['How do I get end-of-tenancy work?', 'Build relationships with local letting agents and landlords, and offer a reliable turnaround.'],
      ['How do I keep regular clients?', 'Be reliable, communicate early about changes, and send reminders.'],
      ['Is Google Maps important for cleaners?', 'Yes. Set up as a service-area business so you appear in the areas you cover.'],
    ],
    citations: cite(SRC.gbpServiceArea, SRC.gbpReviewLink),
  },

  /* #65 */
  {
    id: 'post-how-to-get-more-accounting-clients',
    slug: 'how-to-get-more-accounting-clients',
    cluster: 'More customers',
    keywords: [65],
    title: 'How to Get More Accounting Clients: A Practical Guide for Small Practices',
    seoTitle: 'How to Get More Accounting Clients: Practical Guide',
    seoDescription: 'How accountancy practices win more of the right clients: niche focus, Google reviews, clear fixed fees, fast responses and referrals.',
    focusKeyword: 'how to get more accounting clients',
    secondaryKeywords: ['how to get more clients as an accountant', 'marketing for accountants', 'accountancy practice marketing'],
    stage: 'consideration',
    excerpt: 'The practices growing fastest often pick a niche, publish clear fees and reply quickly. Here’s how smaller practices win more of the clients they actually want.',
    tags: ['Accountants', 'More customers'],
    cats: [CAT.local],
    cover: { eyebrow: 'For accountants', lines: ['More of the right', 'accounting clients'], points: ['A niche', 'Clear fees', 'Fast replies'] },
    coverAlt: 'How accountants win more of the right clients: a niche, clear fees and fast replies',
    direct: ['How can an accountant get more clients?', 'Accountancy practices win more clients by focusing on a niche they understand, publishing clear fixed fees or ranges, collecting Google reviews, making it easy to book a consultation online, responding quickly to enquiries, and asking happy clients and other professionals for referrals.'],
    takeaways: [
      'A niche (trades, landlords, dentists, contractors) makes marketing much easier.',
      'Clear fees reassure people who fear hidden costs.',
      'Reviews matter more than many accountants think.',
      'Fast replies win new clients, especially around deadlines.',
      'Referrals from solicitors, mortgage brokers and banks are valuable.',
    ],
    body: [
      `“Accountant near me” is a crowded search. “Accountant for landlords” or “accountant for tradespeople” is much easier to win, and the clients who find you that way already feel you understand them.

## Pick a niche, or two

You don’t have to turn anyone away. But your website and marketing can speak directly to one or two groups you know well. Their questions, their deadlines, their language.

## Publish clear fees

People put off finding an accountant because they’re worried about cost. Fixed fees or clear ranges for common services (Self Assessment, sole trader accounts, limited company packages) remove that worry.

## Collect reviews

Clients rarely think to review their accountant. Ask after you file their return, when they’re relieved. A link by email or text makes it easy.

## Respond quickly

Especially in January. Someone who’s left their return late will book the first accountant who replies. If your phone is swamped, an [AI receptionist for accountants](/insights/ai-receptionist-for-accountants) can qualify enquiries and book consultations.

## Build referral relationships

Mortgage brokers, solicitors, business banking managers and other professionals all meet people who need an accountant.`,
      table('Messages that work for a niche page', [
        ['Generic', 'Niche'],
        ['“We offer a range of accounting services”', '“Accounts and tax for landlords with 1 to 20 properties”'],
        ['“Competitive rates”', '“Self Assessment from £X, fixed”'],
        ['“Contact us”', '“Book a free 15-minute call”'],
      ]),
      cta('We’ll look at how new clients find your practice and how quickly they get a reply.'),
    ],
    faqs: [
      ['How do small accounting firms get clients?', 'Through a clear niche, published fees, reviews, fast responses and referrals from other professionals.'],
      ['Should accountants publish their fees?', 'Many do, at least as fixed prices or ranges. It reassures prospective clients.'],
      ['Do accountants need Google reviews?', 'Yes. Many clients check reviews before choosing an accountant.'],
      ['Is choosing a niche a good idea?', 'Usually. It makes marketing clearer and attracts clients who value your expertise.'],
      ['When do most people look for an accountant?', 'Around deadlines, especially Self Assessment in January, and when starting a business.'],
    ],
    citations: cite(SRC.gbpReviewTips, { title: 'Self Assessment tax returns', publisher: 'GOV.UK', url: 'https://www.gov.uk/self-assessment-tax-returns' }),
  },

  /* #66 */
  {
    id: 'post-how-to-get-more-gym-members',
    slug: 'how-to-get-more-gym-members',
    cluster: 'More customers',
    keywords: [66],
    title: 'How to Get More Leads for Your Gym, and Turn More of Them Into Members',
    seoTitle: 'How to Get More Leads for My Gym (and Convert Them)',
    seoDescription: 'How independent gyms and studios get more leads and members: Google Maps, reviews, free trials, fast replies and follow-up after the first visit.',
    focusKeyword: 'how to get more leads for my gym',
    secondaryKeywords: ['how to get more gym members', 'how to get more clients in gym', 'marketing for gyms', 'local seo for gyms'],
    stage: 'consideration',
    excerpt: 'Independent gyms don’t win on price. They win on community, results and a great first visit. Here’s how to get more people through the door, and keep them.',
    tags: ['Gyms', 'More customers', 'Local SEO'],
    cats: [CAT.local],
    cover: { eyebrow: 'For gyms and studios', lines: ['More gym leads,', 'more members'], points: ['Free trials', 'Fast replies', 'Follow-up'] },
    coverAlt: 'How gyms get more leads and members through free trials, fast replies and follow-up',
    direct: ['How can a gym get more leads?', 'Independent gyms get more leads by showing up on Google Maps with photos and reviews, offering an easy free trial or taster session, replying to enquiries within minutes, and following up after the first visit. Converting more existing leads is often easier than finding new ones.'],
    takeaways: [
      'Independent gyms win on community and results, not price.',
      'A free trial or taster session lowers the barrier to trying you.',
      'Reply within minutes. Motivation fades fast.',
      'Follow up after the trial. Many people join on the second nudge.',
      'Member stories and reviews sell better than equipment lists.',
    ],
    body: [
      `The big chains will always be cheaper. Independent gyms win on coaching, community and how people feel after their first visit. Your marketing should show that.

## Get found

- Google Business Profile with real photos of your space and classes
- Reviews from members, especially ones mentioning coaches and results
- Pages for what people search: personal training, classes, beginners, strength

## Make the first step easy

A free trial, taster class or discounted first week. Make it bookable online at any hour.

## Reply fast

People decide to start training on a Sunday night. If you reply on Monday afternoon, they’ve cooled off. Instant replies by WhatsApp or chat, with a trial slot offered, catch them while they’re keen. An [AI receptionist for gyms](/insights/ai-receptionist-for-gyms) does this automatically.

## Follow up after the trial

A message the next day asking how it went, with a clear joining offer, converts more trials into members than hoping they’ll come back on their own.

## Keep members

Check in with members who stop showing up. A friendly message after two weeks away brings plenty back before they cancel.`,
      table('The lead-to-member journey', [
        ['Stage', 'What helps'],
        ['Finding you', 'Google profile, reviews, photos'],
        ['First contact', 'Instant reply, easy trial booking'],
        ['Trial', 'A great first session with a coach'],
        ['Joining', 'Next-day follow-up and a clear offer'],
        ['Staying', 'Check-ins when attendance drops'],
      ]),
      cta('We’ll look at how quickly your enquiries get a reply and how many trials turn into members.'),
    ],
    faqs: [
      ['How do independent gyms get more members?', 'By showing their community and coaching, offering easy trials, replying fast and following up after the first visit.'],
      ['Do free trials work for gyms?', 'They lower the barrier to trying you. Follow-up afterwards is what turns trials into members.'],
      ['How fast should a gym reply to enquiries?', 'Within minutes if possible. Motivation fades quickly.'],
      ['Is local SEO important for gyms?', 'Yes. Most people search for gyms near them on Google.'],
      ['How can a gym reduce cancellations?', 'Check in with members whose attendance drops before they decide to cancel.'],
    ],
    citations: cite(SRC.gbpGuidelines, SRC.gbpReviewTips),
  },

  /* #67 */
  {
    id: 'post-how-to-get-more-customers-for-my-restaurant',
    slug: 'how-to-get-more-customers-for-my-restaurant',
    cluster: 'More customers',
    keywords: [67],
    title: 'How to Get More Customers for Your Restaurant (Without Discounting Yourself Into Trouble)',
    seoTitle: 'How to Get More Customers for My Restaurant',
    seoDescription: 'How independent restaurants fill more tables: Google Maps, photos, reviews, easy booking, answering the phone during service and bringing regulars back.',
    focusKeyword: 'how to get more customers for my restaurant',
    secondaryKeywords: ['how to get more customers restaurant', 'marketing for restaurants', 'restaurant marketing ideas'],
    stage: 'consideration',
    excerpt: 'Discounts fill tables once. Being easy to find, easy to book and worth coming back to fills them every week. Here’s where to start.',
    tags: ['Restaurants', 'More customers', 'Google reviews'],
    cats: [CAT.local],
    cover: { eyebrow: 'For restaurants', lines: ['Fill more tables,', 'every week'], points: ['Google Maps', 'Easy booking', 'Regulars'] },
    coverAlt: 'How restaurants fill more tables with Google Maps, easy booking and regulars',
    direct: ['How can a restaurant get more customers?', 'Restaurants get more customers by keeping their Google Business Profile complete with up-to-date photos, menus and hours, collecting reviews, making table booking easy online and by phone, answering calls during service, and giving regulars reasons to return. Deep discounts tend to attract one-off visits rather than loyal customers.'],
    takeaways: [
      'Most diners check Google Maps, photos and reviews before choosing.',
      'Keep your menu, hours and photos current on your Google profile.',
      'Missed booking calls during service are lost covers.',
      'Online booking captures people planning an evening out.',
      'Regulars are worth more than one-off discount hunters.',
    ],
    body: [
      `When people decide where to eat, they open Google Maps, look at photos, skim reviews and check whether they can get a table. Your restaurant is judged in about 20 seconds.

## Make your Google profile irresistible

- Recent, appetising photos of dishes and the room
- Your current menu, with prices
- Accurate opening hours, including bank holidays
- A booking link
- Your food hygiene rating, if it’s good, shown proudly

## Reply to reviews

Thank people for good reviews. Reply calmly to bad ones. Future diners read your replies as much as the reviews.

## Make booking effortless

Online booking for planners, and a phone that gets answered. The phone rings most during service, when nobody can answer. An [AI receptionist for restaurants](/insights/ai-receptionist-for-restaurants) takes those bookings so you don’t lose covers.

## Bring people back

Collect emails or numbers with consent, and give regulars reasons to return: a new seasonal menu, an event, a birthday message. That works better than constant discounts.`,
      note('Careful with discounts', 'Big discounts on deal sites can fill tables, but often with people who never come back at full price. If you discount, do it for regulars or quiet nights, not for everyone.'),
      cta('We’ll look at your Google profile, booking and phone handling, and where covers are slipping away.'),
    ],
    faqs: [
      ['How do restaurants attract more customers?', 'With a strong Google profile, great photos, reviews, easy booking and a reason for regulars to return.'],
      ['Do restaurant reviews matter?', 'Yes. Most diners read reviews before choosing where to eat, and they read your replies too.'],
      ['Should restaurants offer online booking?', 'Yes. Many diners prefer booking online, especially outside opening hours.'],
      ['Are discount deals worth it?', 'Sometimes for quiet nights, but they often bring one-off visitors rather than regulars.'],
      ['How do I stop missing booking calls during service?', 'Use online booking and a call answering set-up that books tables during service.'],
    ],
    citations: cite(SRC.gbpGuidelines, FHRS),
  },

  /* #57, #58 */
  {
    id: 'post-how-to-get-more-clients-for-beauty-salon',
    slug: 'how-to-get-more-clients-for-beauty-salon',
    cluster: 'More customers',
    keywords: [57, 58, 78],
    title: 'How to Get More Clients for Your Salon: A Guide for Hairdressers and Beauty Therapists',
    seoTitle: 'How to Get More Clients for a Beauty or Hair Salon',
    seoDescription: 'How hairdressers and beauty salons get more clients: Instagram and Google, reviews, easy booking, rebooking and referrals.',
    focusKeyword: 'how to get more clients for beauty salon',
    secondaryKeywords: ['how to get more clients as a hairdresser', 'how to get more clients beauty salon', 'local seo for salons', 'marketing for hair salon'],
    stage: 'consideration',
    excerpt: 'Full salons usually have three things in common: people can find them, booking is easy, and clients rebook before they leave. Here’s how to build all three.',
    tags: ['Salons', 'Hairdressers', 'More customers'],
    cats: [CAT.local],
    cover: { eyebrow: 'For salons', lines: ['More clients for', 'your salon'], points: ['Get found', 'Easy booking', 'Rebooking'] },
    coverAlt: 'How salons get more clients: get found, easy booking and rebooking',
    direct: ['How can a salon get more clients?', 'Salons get more clients by showing their work on Instagram and Google, keeping a complete Google Business Profile with reviews, making booking easy online and by WhatsApp, rebooking clients before they leave, and rewarding referrals. Keeping existing clients coming back is usually the fastest way to grow.'],
    takeaways: [
      'Show your work: real photos of real clients (with permission).',
      'Your Google profile matters as much as Instagram for local searches.',
      'Booking must be easy at 10pm on a phone.',
      'Rebooking before clients leave keeps the diary full.',
      'Referral rewards turn happy clients into your marketing team.',
    ],
    body: [
      `A new client usually finds a salon in one of two ways: a friend’s recommendation, or a search on Google or Instagram. Either way, they check your photos and reviews, and then try to book. If booking is hard, they move on.

## Show your work

Photos of real results, with clients’ permission, sell far better than stock images. Post them to your Google profile as well as Instagram. Google Maps is where many people searching “hairdresser near me” will find you.

## Collect reviews

Ask while the client is admiring their hair in the mirror. A QR code at the till or a text with your review link makes it take seconds.

## Make booking effortless

- Online booking that works on a phone
- WhatsApp replies, even when you’re with a client
- Clear prices, so nobody has to ask

## Rebook before they leave

The easiest client to fill your diary with is one you already have. Offer to book their next appointment at the till. Then send a reminder.

## Reward referrals

A thank-you for every friend they bring. Word of mouth is still the strongest marketing a salon has.`,
      table('Grow your salon', [
        ['Focus', 'Action this month'],
        ['Get found', 'Update Google profile photos, ask for 20 reviews'],
        ['Get booked', 'Test booking on your phone at 10pm'],
        ['Keep clients', 'Rebook at the till, send reminders'],
        ['Grow by referral', 'Simple thank-you for referrals'],
      ]),
      `If you’re missing calls while you work, our [AI receptionist for salons](/insights/ai-receptionist-for-salons) books clients by phone and WhatsApp.`,
      cta('We’ll look at how clients find and book with your salon and where bookings slip through.'),
    ],
    faqs: [
      ['How do hairdressers get more clients?', 'Through photos of their work, reviews, easy booking, rebooking and referrals.'],
      ['Is Instagram or Google more important for salons?', 'Both. Instagram shows your style; Google Maps is where many local clients search.'],
      ['How do salons get more reviews?', 'Ask at the till, when clients are happiest, with a QR code or review link.'],
      ['How can I get clients to rebook?', 'Offer to book their next appointment before they leave, and send reminders.'],
      ['Do referral schemes work for salons?', 'Yes. A simple thank-you for each referral encourages happy clients to recommend you.'],
    ],
    citations: cite(SRC.gbpReviewLink, SRC.gbpGuidelines),
  },

  /* #54 */
  {
    id: 'post-how-to-get-more-patients-in-your-clinic',
    slug: 'how-to-get-more-patients-in-your-clinic',
    cluster: 'More customers',
    keywords: [54, 79],
    title: 'How to Get More Patients in Your Private Clinic',
    seoTitle: 'How to Get More Patients in Your Clinic',
    seoDescription: 'How private clinics attract more patients: local SEO, reviews, clear information on practitioners and prices, easy booking and fast replies.',
    focusKeyword: 'how to get more patients in your clinic',
    secondaryKeywords: ['how to get more patients in your practice', 'local seo for clinics', 'marketing for clinic', 'private clinic marketing'],
    stage: 'consideration',
    excerpt: 'Patients choosing a private clinic look for trust, clarity and convenience. Here’s how to show all three, and make booking the easy part.',
    tags: ['Clinics', 'Local SEO', 'More customers'],
    cats: [CAT.local],
    cover: { eyebrow: 'For private clinics', lines: ['More patients for', 'your clinic'], points: ['Trust', 'Clear prices', 'Easy booking'] },
    coverAlt: 'How private clinics attract more patients through trust, clear prices and easy booking',
    direct: ['How can a private clinic get more patients?', 'Private clinics attract more patients by showing up in local Google searches with a complete Business Profile and reviews, explaining conditions treated and practitioners’ qualifications clearly, publishing prices and insurer information, offering online booking, and replying quickly to calls and messages.'],
    takeaways: [
      'Patients choose clinics on trust. Qualifications and reviews matter.',
      'Pages for the conditions you treat match what patients search for.',
      'Clear prices and insurer lists answer the first question most people have.',
      'Online booking and fast replies turn interest into appointments.',
      'Healthcare advertising has extra rules. Keep claims accurate.',
    ],
    body: [
      `Patients looking for a private clinic are often worried, sometimes in pain, and usually comparing two or three options. They’re looking for reasons to trust you, and for the easiest way to be seen.

## Be visible where they search

- A complete Google Business Profile with the right category, photos and hours
- Pages for the conditions and treatments you offer, in plain language
- Reviews from patients, collected consistently

## Build trust quickly

Show who treats patients: names, photos, qualifications and professional registration. Explain what happens at a first appointment. Answer common worries before they’re asked.

## Remove friction

- Prices, or at least typical ranges, and which insurers you work with
- Online booking for first appointments
- Fast replies to calls, emails and WhatsApp

## Keep claims accurate

Healthcare advertising must not mislead. Avoid promising outcomes, and follow the rules for your profession. When in doubt, say what you do, not what it will achieve.`,
      table('Patient questions your website should answer', [
        ['Question', 'Where to answer it'],
        ['Can you help with my problem?', 'Condition and treatment pages'],
        ['Who will I see?', 'Practitioner profiles'],
        ['How much will it cost?', 'Prices page'],
        ['Do you take my insurer?', 'Insurers list'],
        ['How soon can I be seen?', 'Online booking with next availability'],
      ]),
      `Our [AI receptionist for clinics](/insights/ai-receptionist-for-clinics) answers calls and messages and books patients 24/7, and [Review Your Doctor](/review-your-doctor) collects reviews after each visit.`,
      cta('We’ll look at how patients find your clinic and where they drop off before booking.'),
    ],
    faqs: [
      ['How do private clinics attract patients?', 'Through local search visibility, reviews, clear information on practitioners and prices, easy booking and fast replies.'],
      ['Is local SEO important for clinics?', 'Yes. Many patients search for treatments near them on Google.'],
      ['Should clinics publish prices?', 'Yes, at least typical prices. It answers the first question most patients have.'],
      ['How can clinics get more reviews?', 'Ask every patient after their appointment and make leaving a review quick.'],
      ['Are there rules for clinic advertising?', 'Yes. Healthcare advertising must be accurate and not misleading, and professions often have their own guidance.'],
    ],
    citations: cite(SRC.gbpGuidelines, SRC.gbpReviewTips),
  },

  /* #69, #70 */
  {
    id: 'post-how-to-get-more-customers-for-my-business',
    slug: 'how-to-get-more-customers-for-my-business',
    cluster: 'More customers',
    keywords: [69, 70],
    title: 'How to Get More Customers for Your Business: Fix the Leaks Before You Buy More Leads',
    seoTitle: 'How to Get More Customers for My Business',
    seoDescription: 'Before paying for more leads, fix where you lose them: missed calls, slow replies, quotes that go quiet and no-shows. A practical guide for local businesses.',
    focusKeyword: 'how to get more customers for my business',
    secondaryKeywords: ['how to get more leads for my business', 'how to get more customers', 'how to get more leads'],
    stage: 'consideration',
    excerpt: 'Most local businesses already get more enquiries than they win. Here’s how to find where yours leak away, and fix those before spending on ads.',
    tags: ['More customers', 'Leads', 'Missed calls'],
    cats: [CAT.conversion],
    cover: { eyebrow: 'More customers', lines: ['Fix the leaks before', 'you buy more leads'], points: ['Missed calls', 'Slow replies', 'Quiet quotes'] },
    coverAlt: 'Fix the leaks before buying more leads: missed calls, slow replies and quiet quotes',
    direct: ['How can I get more customers for my business?', 'Start by winning more of the enquiries you already get: answer every call, reply to messages within minutes, follow up every quote and reduce no-shows. Then improve how people find you, with a complete Google Business Profile, reviews and a website that makes it easy to get in touch. Paid ads work best once these leaks are fixed.'],
    takeaways: [
      'Most businesses lose customers after the enquiry, not before it.',
      'Missed calls, slow replies and forgotten quotes are the biggest leaks.',
      'Fixing leaks is cheaper than buying more leads.',
      'Then improve how people find you: Google profile, reviews, website.',
      'Measure enquiries and bookings, not just website visits.',
    ],
    body: [
      `Here’s an uncomfortable exercise. Last week, how many calls did you miss? How many messages waited more than an hour for a reply? How many quotes did you send that you never followed up?

For most local businesses, the answer to “how do I get more customers?” is sitting in those numbers.

## Step 1: find your leaks`,
      table('Common leaks and fixes', [
        ['Leak', 'How to spot it', 'Fix'],
        ['Missed calls', 'Missed call log on your phone', 'Call answering or an AI receptionist'],
        ['Slow replies', 'Messages waiting hours', 'Instant replies on WhatsApp and chat'],
        ['Quiet quotes', 'Quotes with no follow-up', 'Automatic follow-up after a few days'],
        ['No-shows', 'Empty slots in the diary', 'Reminders and deposits'],
        ['Website visitors who leave', 'Visits but few enquiries', 'Clear next step on every page'],
      ]),
      `## Step 2: fix the biggest one first

Don’t try to fix everything. Pick the leak that costs the most and fix it this month. For most service businesses it’s missed calls or slow replies.

## Step 3: then get found by more people

Once you’re winning more of the enquiries you get, more enquiries are worth more. Now work on:

- A complete Google Business Profile
- A steady stream of reviews
- A website that loads fast and makes calling or booking easy
- Pages for each service and area you cover

## Step 4: measure what matters

Count enquiries, bookings and jobs won each week. Website visits and social likes are nice, but they don’t pay the bills.`,
      note('A quick test', 'Ask a friend to contact your business three ways this week: a call at lunchtime, a WhatsApp at 8pm and a website form on Sunday. Time how long each reply takes. It’s usually eye-opening.'),
      `We help businesses [never miss a call](/services/shiftspeed), [win more jobs](/services/shiftconvert) and [get found by more customers](/services/shiftbuild).`,
      cta('We’ll find where your business is losing customers and show you the simplest fix, free.'),
    ],
    faqs: [
      ['What is the fastest way to get more customers?', 'Win more of the enquiries you already get: answer every call, reply quickly and follow up quotes.'],
      ['Should I spend money on ads to get more customers?', 'Fix your leaks first. Ads work much better when every enquiry gets answered and followed up.'],
      ['How do I get more leads for a local business?', 'A complete Google Business Profile, reviews and a website that makes contacting you easy.'],
      ['How do I know where I’m losing customers?', 'Check missed calls, reply times, quotes without follow-up and no-shows.'],
      ['What should I measure?', 'Enquiries, bookings and jobs won, not just website traffic.'],
    ],
    citations: cite(SRC.gbpGuidelines, SRC.gbpReviewTips),
  },
];
