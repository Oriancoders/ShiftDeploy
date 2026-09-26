import { table, note, cta, cite, SRC, CAT } from './lib.mjs';

const NICEIC = { title: 'Find a registered electrician', publisher: 'Electrical Competent Person', url: 'https://www.electricalcompetentperson.co.uk/' };
const TPO = { title: 'The Property Ombudsman', publisher: 'The Property Ombudsman', url: 'https://www.tpos.co.uk/' };
const FSA_ALLERGY = { title: 'Allergen guidance for food businesses', publisher: 'Food Standards Agency', url: 'https://www.food.gov.uk/business-guidance/allergen-guidance-for-food-businesses' };
const MOT = { title: 'Getting an MOT', publisher: 'GOV.UK', url: 'https://www.gov.uk/getting-an-mot' };

export default [
  /* #10, #28 */
  {
    id: 'post-ai-receptionist-for-plumbers',
    slug: 'ai-receptionist-for-plumbers',
    cluster: 'AI receptionist',
    keywords: [10, 28],
    title: 'AI Receptionist for Plumbers: Stop Losing Jobs While You’re Under a Sink',
    seoTitle: 'AI Receptionist for Plumbers: Never Miss a Job Call',
    seoDescription: 'Plumbers miss calls on every job. An AI receptionist answers, takes the job details, flags emergencies and texts you before the customer rings someone else.',
    focusKeyword: 'ai receptionist for plumbers',
    secondaryKeywords: ['answering service for plumbing', 'ai answering service for plumbers', 'plumber call answering', 'ai receptionist for plumbing company'],
    stage: 'decision',
    excerpt: 'Someone with a leak rings three plumbers and books the first one who answers. Here’s how an AI receptionist makes sure that’s you, even when your hands are full.',
    tags: ['AI receptionist', 'Plumbers', 'Trades', 'Call answering'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For plumbers', lines: ['Stop losing jobs', 'while you’re on a job'], points: ['Every call answered', 'Emergencies flagged', 'Texted to you'] },
    coverAlt: 'An AI receptionist for plumbers answering every call, flagging emergencies and texting job details',
    direct: ['Do plumbers need an answering service?', 'Most plumbers miss calls while they’re working, and customers with urgent problems ring the next plumber rather than leave a voicemail. An answering service or AI receptionist picks up, takes the job details, postcode and urgency, and texts them to you, so you can call back or book the job in.'],
    takeaways: [
      'Urgent plumbing customers rarely leave voicemails. They ring the next number.',
      'An AI receptionist takes the name, number, postcode, problem and urgency.',
      'Emergencies like active leaks can be flagged to your phone straight away.',
      'Routine jobs and quotes can be booked into your diary.',
      'It costs far less than one lost boiler job a month.',
    ],
    body: [
      `You’re on your back under a kitchen sink. Phone goes. You can’t get to it. You finish, check, and it’s a missed call from a number you don’t know. You ring back. “Oh, sorry, we’ve already got someone.”

That’s the job an AI receptionist exists to stop.

## What it does on a plumbing call

It answers in your business name, says it’s your assistant, and asks what you’d ask:

- What’s the problem? (leak, no hot water, blocked drain, boiler)
- Is water coming through right now?
- What’s the address or postcode?
- When are they free?
- Best number to call back

Then it texts you the details. Routine jobs can go straight into your diary. Quotes for bathrooms or boiler swaps get booked as a visit.

## Emergencies

You decide what counts. An active leak through a ceiling might mean an instant text and a call to your mobile. A dripping tap can wait until tonight. The assistant can also give sensible safety messages you’ve approved, like where to turn off the water, without pretending to be a plumber.`,
      note('Gas is different', 'If a caller says they can smell gas, the assistant should tell them to call the National Gas Emergency Service on 0800 111 999 straight away. Set this up before anything else.', 'warning'),
      table('What it’s worth', [
        ['Missed calls a week', 'New jobs among them (guess)', 'Average job value', 'Lost per month'],
        ['5', '2', '£150', 'About £1,300'],
        ['10', '4', '£200', 'About £3,450'],
      ]),
      `Put in your own numbers. For most plumbers, catching even one extra job a week covers the cost several times over.

## Out of hours

Evening callers are often homeowners who’ve just got back from work and found the problem. If you do emergency call-outs, the assistant can take those details and alert you. If you don’t, it can book them in for tomorrow morning, so they don’t go elsewhere.

See our [work for plumbers](/plumbers), our [AI receptionist](/digital-receptionist), and our guide to [marketing a plumbing business](/insights/marketing-for-plumbers).`,
      cta('Book a free demo. We’ll show you the assistant taking a leak call and texting you the job.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist take plumbing job details?', 'Yes. It asks for the problem, urgency, address and a callback number, then texts you the details.'],
      ['How does it handle emergencies?', 'You set the rules. Urgent jobs can be sent to your mobile straight away. For a gas smell it should tell the caller to ring the National Gas Emergency Service on 0800 111 999.'],
      ['Can it book jobs into my diary?', 'Yes, if it’s connected to your calendar or job management app.'],
      ['Is it better than voicemail?', 'Much. Most urgent callers don’t leave a voicemail; they ring another plumber.'],
      ['How much does it cost?', 'Basic AI answering starts from roughly £50 to £100 a month. A set-up that books into your diary costs more.'],
    ],
    citations: cite(SRC.gasSafe, { title: 'Emergency contacts', publisher: 'National Gas', url: 'https://www.nationalgas.com/emergency-contacts' }),
  },

  /* #11, #30 */
  {
    id: 'post-ai-receptionist-for-electricians',
    slug: 'ai-receptionist-for-electricians',
    cluster: 'AI receptionist',
    keywords: [11, 30],
    title: 'AI Receptionist for Electricians: Answer Every Call, Even Up a Ladder',
    seoTitle: 'AI Receptionist for Electricians: Answer Every Call',
    seoDescription: 'Electricians can’t answer calls while working live. How an AI receptionist answers, qualifies the job, flags safety issues and books quotes into your diary.',
    focusKeyword: 'ai receptionist for electricians',
    secondaryKeywords: ['answering service for electricians', 'electrician call answering', 'electrical contractor answering service'],
    stage: 'decision',
    excerpt: 'You shouldn’t be answering your phone mid-job. An AI receptionist takes the call, works out if it’s urgent, and books quotes for rewires and EV chargers while you work.',
    tags: ['AI receptionist', 'Electricians', 'Trades'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For electricians', lines: ['Answer every call,', 'even up a ladder'], points: ['Quotes booked', 'Urgent flagged', 'Texted to you'] },
    coverAlt: 'An AI receptionist for electricians booking quotes and flagging urgent calls',
    direct: ['Should electricians use an answering service?', 'Electricians often can’t take calls safely while working. An AI receptionist answers every call, asks what the job is, checks whether it’s urgent, takes the address and books a quote visit or texts you the details. Anything involving danger, such as burning smells or sparking, can be flagged immediately.'],
    takeaways: [
      'You shouldn’t be taking calls while working on live circuits.',
      'The assistant can qualify jobs: rewire, fault, EICR, EV charger, new sockets.',
      'Safety issues like burning smells get flagged to you straight away.',
      'Quote visits can be booked into your diary.',
      'Big jobs like rewires often go to whoever answers and quotes first.',
    ],
    body: [
      `Taking a call while you’re working on a consumer unit isn’t just inconvenient. It’s a bad idea. So the phone goes unanswered, and the customer who wanted a full rewire rings the next electrician.

## What the assistant asks

- What do you need? Fault, rewire, EICR, EV charger, extra sockets, lighting
- Is anything burning, sparking or tripping repeatedly?
- Domestic or commercial?
- Postcode and a good time for a visit

Then it books a quote visit or texts you the details. You get a clean summary rather than a voicemail saying “ring me back”.`,
      note('Safety first', 'Agree what the assistant says if a caller reports burning smells, sparking or scorching. Usually: switch off at the consumer unit if it’s safe to do so, and if there’s fire or immediate danger, call 999. Then alert you straight away.', 'warning'),
      table('Typical electrician calls', [
        ['Call', 'What happens'],
        ['“I need a quote for a rewire”', 'Books a survey visit'],
        ['“Can you fit an EV charger?”', 'Takes details and books a quote'],
        ['“Landlord EICR needed”', 'Books the inspection'],
        ['“Lights keep tripping”', 'Takes details, flags if it sounds urgent'],
        ['“Burning smell from a socket”', 'Safety message, alerts you immediately'],
      ]),
      `## Why speed wins bigger jobs

Rewires, EV chargers and commercial work are high value. Customers usually ask two or three electricians to quote. The one who answers, books a visit quickly and turns up on time has a head start.

See our [AI receptionist](/digital-receptionist) and how we help trades [never miss a call](/services/shiftspeed).`,
      cta('Book a free demo. We’ll show you the assistant booking a rewire survey from a real call.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist book electrical quotes?', 'Yes. It can take the job details and book a survey or quote visit into your diary.'],
      ['What about urgent electrical faults?', 'It follows your rules: safety advice you’ve approved, 999 for immediate danger, and an instant alert to you.'],
      ['Does it work for commercial electrical contractors?', 'Yes. It can ask whether the job is domestic or commercial and route it accordingly.'],
      ['Will customers know it’s an assistant?', 'Yes. It should say so at the start of the call.'],
      ['Can it answer after hours?', 'Yes, 24/7. It can book callers in for the next working day.'],
    ],
    citations: cite(NICEIC),
  },

  /* #12, #13, #14 */
  {
    id: 'post-ai-receptionist-for-tradesmen',
    slug: 'ai-receptionist-for-tradesmen',
    cluster: 'AI receptionist',
    keywords: [12, 13, 14],
    title: 'AI Receptionist for Builders, Roofers and Tradesmen: Win the Quote Before Anyone Else Answers',
    seoTitle: 'AI Receptionist for Tradesmen, Builders & Roofers',
    seoDescription: 'Builders and roofers lose quotes to missed calls. How an AI receptionist answers, takes the project details and photos, and books survey visits while you work.',
    focusKeyword: 'ai receptionist for tradesmen',
    secondaryKeywords: ['ai receptionist for builders', 'ai receptionist for roofers', 'ai receptionist for trades', 'call answering for tradesmen'],
    stage: 'decision',
    excerpt: 'Extensions, loft conversions and roof repairs are big jobs, and customers ring several firms. Here’s how builders and roofers use an AI receptionist to get to the survey first.',
    tags: ['AI receptionist', 'Builders', 'Roofers', 'Trades'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For builders and roofers', lines: ['Get to the quote', 'before anyone else'], points: ['Project details', 'Surveys booked', 'Storm call-outs'] },
    coverAlt: 'An AI receptionist for builders and roofers taking project details and booking survey visits',
    direct: ['Why would a builder or roofer use an AI receptionist?', 'Builders and roofers are on site all day and miss calls, while customers planning big jobs ring several firms. An AI receptionist answers every call, asks about the project, timescale and budget, asks for photos by text or WhatsApp, and books a survey visit, so you reach the customer first.'],
    takeaways: [
      'Big-job customers ring several firms and go with whoever responds best.',
      'The assistant can ask about the project, timescale, budget and access.',
      'Asking for photos by WhatsApp saves wasted survey visits.',
      'Roofers can handle storm-day call surges without missing leads.',
      'You get a summary instead of a vague voicemail.',
    ],
    body: [
      `A homeowner planning an extension doesn’t ring one builder. They ring four. Two don’t answer, one calls back three days later, and one books a site visit the same afternoon. Guess who gets the job.

## What the assistant asks

For builders:
- What’s the project? Extension, loft, kitchen, renovation, repairs
- Rough timescale and budget, if they know
- Do they have plans or planning permission yet?
- Postcode and a good time for a site visit

For roofers:
- Repair or replacement? Leak, missing tiles, flat roof, guttering, chimney
- Is water coming in now?
- Type of property and roof, if they know

Then it asks for a few photos by WhatsApp and books a survey. You arrive knowing what you’re looking at.`,
      table('Why photos first saves you time', [
        ['Without photos', 'With photos'],
        ['Drive out to price a job you can’t do', 'Spot it’s not for you before you go'],
        ['Arrive without the right ladder or kit', 'Arrive prepared'],
        ['Customer wonders why you asked so little', 'Customer sees you’ve taken it seriously'],
      ]),
      note('Storm days', 'After high winds, roofers can get more calls in a morning than in a normal week. An assistant answers all of them, takes details and photos, and lets you prioritise the worst leaks first instead of losing them to voicemail.'),
      `## Small jobs too

Not every caller wants an extension. The assistant can book smaller jobs straight in, or politely explain if something’s not a job you take on, which saves you a callback.

See our [AI receptionist](/digital-receptionist) and our guide to [website design for tradesmen](/insights/website-design-for-tradesmen).`,
      cta('Book a free demo. We’ll show you the assistant booking a survey from a real enquiry.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist book site surveys?', 'Yes. It takes the project details and books a visit into your calendar.'],
      ['Can it ask customers for photos?', 'Yes. It can ask them to send photos by WhatsApp or text before the visit.'],
      ['What about emergency roof leaks?', 'You decide. Urgent leaks can be flagged to your phone straight away.'],
      ['Is it worth it for a sole trader?', 'Usually more than for a big firm, because there’s nobody else to answer while you work.'],
      ['Can it turn away jobs we don’t do?', 'Yes. It can explain politely and, if you like, suggest what the customer should look for instead.'],
    ],
    citations: cite({ title: 'TrustMark: government endorsed quality scheme', publisher: 'TrustMark', url: 'https://www.trustmark.org.uk/' }),
  },

  /* #15 */
  {
    id: 'post-ai-receptionist-for-cleaning-business',
    slug: 'ai-receptionist-for-cleaning-business',
    cluster: 'AI receptionist',
    keywords: [15, 37],
    title: 'AI Receptionist for Cleaning Businesses: Quote and Book While Your Team Cleans',
    seoTitle: 'AI Receptionist for Cleaning Businesses: Quote & Book',
    seoDescription: 'How cleaning companies use an AI receptionist to answer enquiries, gather what’s needed for a quote, and book regular and one-off cleans.',
    focusKeyword: 'ai receptionist for cleaning business',
    secondaryKeywords: ['cleaning business call answering', 'cleaning company enquiries', 'answering service cleaning company', 'booking system for cleaning service'],
    stage: 'decision',
    excerpt: 'Cleaning enquiries all need the same details before you can quote. An AI receptionist collects them, books the clean, and sends you a tidy summary.',
    tags: ['AI receptionist', 'Cleaning business', 'Quotes'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For cleaning businesses', lines: ['Quote and book', 'while you clean'], points: ['Property size', 'Regular or one-off', 'Booked in'] },
    coverAlt: 'An AI receptionist for cleaning businesses gathering property details and booking cleans',
    direct: ['How can a cleaning business use an AI receptionist?', 'An AI receptionist answers every enquiry for a cleaning business, asks the questions you need for a quote, such as property size, type of clean, frequency and access, and either gives a price from your price list or books a quote visit. It also handles changes and reminders for regular clients.'],
    takeaways: [
      'Every cleaning quote needs the same handful of details.',
      'The assistant can collect them and price standard jobs from your list.',
      'End-of-tenancy and deep cleans can be booked as quote visits.',
      'Regular clients can move their cleans without calling you.',
      'You spend less time on the phone and more time running jobs.',
    ],
    body: [
      `Ask any cleaning business owner how many “how much for a clean?” calls they get. Then ask how many of those they answer while they’re scrubbing an oven.

## The questions every quote needs

- Domestic or commercial?
- Regular, one-off, deep clean or end of tenancy?
- Number of bedrooms and bathrooms, or office size
- How often?
- Pets, parking, keys and access
- Postcode and preferred days

An AI receptionist asks these every time, in the same order, and never forgets one. For standard jobs it can give a price from your list. For bigger jobs, it books a quote visit.`,
      table('What gets automated', [
        ['Enquiry', 'What the assistant does'],
        ['Regular domestic clean', 'Prices it and books the first visit'],
        ['End of tenancy', 'Collects details, books a quote or prices from your list'],
        ['Office cleaning', 'Books a site visit'],
        ['Existing client moving a clean', 'Reschedules it'],
        ['Complaint', 'Takes details and alerts you'],
      ]),
      note('Keys and access', 'Decide what the assistant can and can’t say about keys, alarm codes and access. Never have it collect alarm codes or door codes over the phone. Handle those in person.', 'warning'),
      `See our [AI receptionist](/digital-receptionist) and how we help businesses [never miss a call](/services/shiftspeed).`,
      cta('We’ll show you the assistant quoting a regular clean from your own price list.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist quote for cleaning jobs?', 'Yes, for standard jobs using your price list. Larger or unusual jobs can be booked as a quote visit.'],
      ['Can clients reschedule regular cleans?', 'Yes, if it’s connected to your diary or booking system.'],
      ['Does it work for commercial cleaning?', 'Yes. It can take office details and book a site visit.'],
      ['Should it collect keys or alarm codes?', 'No. Keep access codes out of calls and handle them directly with clients.'],
      ['Can it answer on WhatsApp?', 'Yes. The same assistant can answer calls, WhatsApp and website chat.'],
    ],
    citations: cite(SRC.ico),
  },

  /* #16 */
  {
    id: 'post-ai-receptionist-for-garages',
    slug: 'ai-receptionist-for-garages',
    cluster: 'AI receptionist',
    keywords: [16, 39],
    title: 'AI Receptionist for Garages: Book MOTs and Services Without Leaving the Workshop',
    seoTitle: 'AI Receptionist for Garages: MOTs & Services Booked',
    seoDescription: 'How independent garages use an AI receptionist to book MOTs and services, answer price questions and send reminders, while mechanics stay in the workshop.',
    focusKeyword: 'ai receptionist for garages',
    secondaryKeywords: ['garage call answering', 'mot booking phone', 'ai receptionist for auto repair shop', 'booking system for garages'],
    stage: 'decision',
    excerpt: 'Mechanics with oily hands don’t answer phones. An AI receptionist books MOTs and services, answers “how much?” and reminds customers when their MOT is due.',
    tags: ['AI receptionist', 'Garages', 'MOT'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For garages', lines: ['Book MOTs without', 'leaving the workshop'], points: ['MOTs', 'Services', 'Reminders'] },
    coverAlt: 'An AI receptionist for garages booking MOTs and services and sending reminders',
    direct: ['Can a garage use an AI receptionist?', 'Yes. An AI receptionist answers a garage’s calls and messages, books MOTs, services and repairs into the workshop diary, answers questions about prices and opening hours, takes the registration and a description of the problem, and sends MOT and service reminders.'],
    takeaways: [
      'Independent garages miss calls whenever everyone is under a car.',
      'MOTs and services are easy to book automatically.',
      'For repairs, the assistant takes the reg and symptoms for the mechanic.',
      'MOT reminders bring customers back every year.',
      'It shouldn’t diagnose faults or quote repair prices it can’t know.',
    ],
    body: [
      `In a small garage, answering the phone means stopping a job, wiping your hands and walking to the office. Often nobody does, and the caller books their MOT down the road.

## What the assistant books

- MOTs, with the registration
- Services, interim or full
- Repairs, with a description of the problem
- Tyres, brakes, diagnostics and air con
- Collection and courtesy car requests, if you offer them

It checks the workshop diary and books a slot that fits the job.

## What it shouldn’t do

Diagnose a fault or give a repair price it can’t know. “It’s making a grinding noise when I brake” gets written down and passed to your mechanic, with a diagnostic slot booked.`,
      note('MOT reminders are free money', 'Customers forget MOT dates. A reminder a few weeks before, with a booking link, brings them back to you instead of the first garage they find on Google.'),
      table('Common garage calls', [
        ['Call', 'Assistant'],
        ['“Can I book an MOT?”', 'Takes reg, books a slot'],
        ['“How much is a full service?”', 'Gives your price for their type of car'],
        ['“My car’s making a noise”', 'Takes details, books diagnostics'],
        ['“Is my car ready?”', 'Passes to the team or checks job status if connected'],
      ]),
      `See our [AI receptionist](/digital-receptionist).`,
      cta('We’ll show you an MOT being booked by phone, straight into your workshop diary.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist book MOTs?', 'Yes. It takes the registration and books a slot in your workshop diary.'],
      ['Can it give repair quotes?', 'It can give fixed prices you’ve set, like services and MOTs. Repair prices should come from a mechanic after diagnosis.'],
      ['Can it send MOT reminders?', 'Yes, by text or WhatsApp, if it has the customer’s MOT date.'],
      ['Does it work for car body shops?', 'Yes. It can take details and ask for photos of the damage.'],
      ['Will customers mind?', 'Most just want to get booked in quickly. It should say it’s an assistant.'],
    ],
    citations: cite(MOT),
  },

  /* #17 */
  {
    id: 'post-ai-receptionist-for-estate-agents',
    slug: 'ai-receptionist-for-estate-agents',
    cluster: 'AI receptionist',
    keywords: [17],
    title: 'AI Receptionist for Estate Agents: Never Miss a Valuation Call',
    seoTitle: 'AI Receptionist for Estate Agents: Catch Every Lead',
    seoDescription: 'How estate and letting agents use an AI receptionist to book viewings and valuations, answer property questions and handle out-of-hours enquiries.',
    focusKeyword: 'ai receptionist for estate agents',
    secondaryKeywords: ['estate agent call answering', 'letting agent answering service', 'ai receptionist for real estate'],
    stage: 'decision',
    excerpt: 'A missed viewing call is annoying. A missed valuation call can cost you an instruction. Here’s how agents use an AI receptionist to answer every enquiry.',
    tags: ['AI receptionist', 'Estate agents', 'Lettings'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For estate agents', lines: ['Never miss a', 'valuation call'], points: ['Viewings', 'Valuations', 'Evenings'] },
    coverAlt: 'An AI receptionist for estate agents booking viewings and valuations, including evenings',
    direct: ['How can estate agents use an AI receptionist?', 'An AI receptionist answers an estate or letting agent’s calls and messages, books viewings and valuations, answers questions about listed properties, qualifies buyers and tenants with your questions, and handles evening and weekend enquiries. Maintenance emergencies from tenants can be routed to the right contractor or team member.'],
    takeaways: [
      'Valuation enquiries are your most valuable calls. Don’t let them hit voicemail.',
      'Many buyers and tenants call in the evening after work.',
      'The assistant can book viewings and ask your qualifying questions.',
      'Tenant maintenance calls can be triaged and routed.',
      'Property details must be accurate. Keep the assistant’s information up to date.',
    ],
    body: [
      `An estate agency phone rings for three reasons: buyers and tenants wanting viewings, landlords and sellers wanting valuations, and tenants reporting problems. Only one of them wins you new instructions, and it’s the one you can least afford to miss.

## What the assistant handles

- Viewing requests, booked into your negotiators’ diaries
- Valuation enquiries, with property type, postcode and timescale
- Questions about listed properties: price, bedrooms, parking, availability
- Qualifying questions you set: mortgage in principle, chain position, move date
- Tenant maintenance reports, routed by urgency

## Accuracy matters

Buyers rely on what they’re told. The assistant should only use the property details you’ve published, and pass anything else to a negotiator. If it doesn’t know, it should say so.`,
      table('Out-of-hours calls it can handle', [
        ['Call', 'Assistant'],
        ['“Can I view the flat on High Street?”', 'Books a viewing'],
        ['“How much is my house worth?”', 'Books a valuation'],
        ['“My boiler’s broken” (tenant)', 'Follows your maintenance process'],
        ['“Is it still available?”', 'Answers from your listings'],
      ]),
      note('Complaints and redress', 'Agents in the UK must belong to a redress scheme. Make sure complaints are taken down properly and passed to the right person, not handled by the assistant.'),
      `See our [AI receptionist](/digital-receptionist).`,
      cta('We’ll show you the assistant booking a valuation from a real call.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist book property viewings?', 'Yes, if it’s connected to your diary or property software.'],
      ['Can it book valuations?', 'Yes. It takes the property details and books an appointment with a valuer.'],
      ['Can it handle tenant maintenance calls?', 'It can take the details, judge urgency using your rules and route them to the right person.'],
      ['Will it give wrong property information?', 'It should only use the details you provide and pass anything else to a negotiator.'],
      ['Does it work evenings and weekends?', 'Yes, 24/7.'],
    ],
    citations: cite(TPO),
  },

  /* #18, #31 */
  {
    id: 'post-ai-receptionist-for-accountants',
    slug: 'ai-receptionist-for-accountants',
    cluster: 'AI receptionist',
    keywords: [18, 31],
    title: 'AI Receptionist for Accountants: Survive Self Assessment Season Without Missing New Clients',
    seoTitle: 'AI Receptionist for Accountants: Catch New Clients',
    seoDescription: 'How accountancy practices use an AI receptionist to handle January call peaks, qualify new client enquiries and book consultations.',
    focusKeyword: 'ai receptionist for accountants',
    secondaryKeywords: ['answering service for accountants', 'accountancy practice call answering', 'accountant receptionist'],
    stage: 'decision',
    excerpt: 'January is chaos for accountants, and it’s also when new clients call. An AI receptionist answers every call, qualifies new enquiries and books consultations.',
    tags: ['AI receptionist', 'Accountants'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For accountants', lines: ['January calls,', 'handled'], points: ['New clients', 'Deadlines', 'Consultations'] },
    coverAlt: 'An AI receptionist for accountants handling January call peaks and booking consultations',
    direct: ['Should an accountancy practice use an AI receptionist?', 'Accountancy practices get call peaks around deadlines like Self Assessment in January, which is also when many new clients look for help. An AI receptionist answers every call, asks qualifying questions such as business type and services needed, books consultations and routes existing clients to the right team member. It should not give tax advice.'],
    takeaways: [
      'Deadline season brings a flood of calls, including new clients.',
      'The assistant can qualify enquiries: sole trader, limited company, landlord, payroll.',
      'It books consultations with the right person.',
      'It must never give tax or financial advice.',
      'Existing clients can be routed without tying up the front desk.',
    ],
    body: [
      `Every January the same thing happens. Existing clients ring about their tax returns, and people who’ve left it late ring looking for an accountant. The phone never stops, and the calls from brand new clients get lost among the rest.

## What the assistant asks new callers

- Are they a sole trader, limited company, landlord or individual?
- What do they need? Self Assessment, accounts, VAT, payroll, bookkeeping
- Rough turnover or size, if you price by it
- Any deadline they’re worried about

Then it books a consultation with the right person, or tells them honestly if you’re not taking on that kind of work.

## What it won’t do

Give tax advice, discuss someone’s figures or promise anything about their return. Those go to a qualified member of your team.`,
      table('Routing calls', [
        ['Caller', 'Where it goes'],
        ['New sole trader, Self Assessment', 'Consultation booked'],
        ['New limited company', 'Consultation with a manager'],
        ['Existing client with a question', 'Message to their accountant'],
        ['“Can you do my return by Friday?”', 'Your deadline policy, then booked or declined politely'],
      ]),
      note('Client confidentiality', 'Callers should be told they’re speaking to an assistant. Keep personal financial details out of the call wherever possible, and make sure your provider’s data terms fit your professional obligations.', 'warning'),
      `See our [AI receptionist](/digital-receptionist).`,
      cta('We’ll show you the assistant qualifying a new client enquiry and booking a consultation.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist give tax advice?', 'No. It should only book, route and answer practical questions like fees and opening hours.'],
      ['Can it qualify new client enquiries?', 'Yes. It asks your questions, such as business type and services needed, before booking.'],
      ['Does it help during Self Assessment season?', 'Yes. It answers every call during peaks so new enquiries aren’t lost.'],
      ['Can it route calls to specific accountants?', 'It can take messages for the right person or book time in their diary.'],
      ['Is client information safe?', 'Choose a provider with suitable data protection terms and keep financial details out of calls.'],
    ],
    citations: cite({ title: 'Self Assessment tax returns', publisher: 'GOV.UK', url: 'https://www.gov.uk/self-assessment-tax-returns' }, SRC.ico),
  },

  /* #19 */
  {
    id: 'post-ai-receptionist-for-gyms',
    slug: 'ai-receptionist-for-gyms',
    cluster: 'AI receptionist',
    keywords: [19, 40],
    title: 'AI Receptionist for Gyms and Studios: Turn Enquiries Into Trial Sessions',
    seoTitle: 'AI Receptionist for Gyms: Enquiries to Trial Sessions',
    seoDescription: 'How independent gyms, PT studios and fitness classes use an AI receptionist to answer membership questions and book trials and classes.',
    focusKeyword: 'ai receptionist for gyms',
    secondaryKeywords: ['gym enquiries', 'gym membership enquiries', 'fitness studio call answering', 'booking system for gyms'],
    stage: 'decision',
    excerpt: 'Most gym enquiries come in the evening, when your staff are coaching. An AI receptionist answers them and books a trial session while they’re still keen.',
    tags: ['AI receptionist', 'Gyms', 'Fitness'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For gyms and studios', lines: ['Turn enquiries into', 'trial sessions'], points: ['Memberships', 'Classes', 'Trials'] },
    coverAlt: 'An AI receptionist for gyms answering membership questions and booking trial sessions',
    direct: ['How can a gym use an AI receptionist?', 'An AI receptionist answers a gym or studio’s calls, WhatsApp and website messages, explains memberships, prices and class timetables, and books trial sessions, inductions or classes. It’s most useful in the evening and early morning, when staff are coaching and enquiries peak.'],
    takeaways: [
      'Gym enquiries spike when staff are busiest: early morning and evening.',
      'Motivation fades fast. Book the trial while they’re keen.',
      'The assistant can explain memberships, classes and prices.',
      'Health questions go to a qualified coach.',
      'Follow-ups after a trial convert more trials into members.',
    ],
    body: [
      `Someone decides at 9pm on a Sunday that this is the week they start training. They message three gyms. The one that replies straight away, with a free trial slot for Tuesday, gets them. The others reply on Monday afternoon, when the motivation has already worn off.

## What the assistant handles

- Membership options and prices
- Class timetables and availability
- Trial sessions and inductions
- PT enquiries, booked with the right coach
- Freezes and cancellations, following your policy

## Following up after a trial

The trial is only half the job. A message the next day asking how it went, with an offer to join, turns more trials into members. That can be automated too.`,
      note('Health questions', 'Questions about injuries, medical conditions or pregnancy should be passed to a qualified coach. The assistant can book a consultation, not give advice.', 'warning'),
      `See our [AI receptionist](/digital-receptionist) and how we help businesses [win more of the enquiries they get](/services/shiftconvert).`,
      cta('We’ll show you the assistant booking a trial session from a late-night WhatsApp message.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist sell gym memberships?', 'It can explain options and prices and book a trial or sign-up session. Taking payment depends on your membership system.'],
      ['Can it book classes?', 'Yes, if it’s connected to your class booking system.'],
      ['Can it follow up after trial sessions?', 'Yes. Automatic follow-ups after a trial help turn more visitors into members.'],
      ['What about health questions?', 'Those go to a qualified coach. The assistant books a consultation instead.'],
      ['Does it work on Instagram and WhatsApp?', 'WhatsApp and website chat are standard. Instagram depends on the set-up.'],
    ],
    citations: cite(SRC.ico),
  },

  /* #20 */
  {
    id: 'post-ai-receptionist-for-restaurants',
    slug: 'ai-receptionist-for-restaurants',
    cluster: 'AI receptionist',
    keywords: [20],
    title: 'AI Receptionist for Restaurants: Take Bookings in the Middle of Service',
    seoTitle: 'AI Receptionist for Restaurants: Bookings During Service',
    seoDescription: 'How restaurants use an AI receptionist to take table bookings during service, answer opening hours and menu questions, and handle allergy questions safely.',
    focusKeyword: 'ai receptionist for restaurants',
    secondaryKeywords: ['restaurant phone answering', 'ai phone answering service for restaurants', 'restaurant table booking calls'],
    stage: 'decision',
    excerpt: 'The phone rings hardest when you’re busiest. An AI receptionist takes table bookings during service, and knows to hand allergy questions to a person.',
    tags: ['AI receptionist', 'Restaurants', 'Bookings'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For restaurants', lines: ['Take bookings in the', 'middle of service'], points: ['Tables', 'Opening hours', 'Allergies to staff'] },
    coverAlt: 'An AI receptionist for restaurants taking table bookings during service and passing allergy questions to staff',
    direct: ['Can restaurants use an AI receptionist?', 'Yes. An AI receptionist answers a restaurant’s phone during service, takes table bookings into your booking system, answers questions about opening hours, parking and the menu, and handles changes and cancellations. Allergy and dietary questions should always be passed to a member of staff.'],
    takeaways: [
      'Booking calls peak during service, when staff can’t answer.',
      'The assistant books tables straight into your booking system.',
      'It can handle group bookings using your rules and deposits.',
      'Allergy questions must always go to a person who can check.',
      'Confirmations and reminders reduce no-shows on busy nights.',
    ],
    body: [
      `Friday, 7.30pm. Every table’s full, the kitchen’s flat out, and the phone behind the bar has rung six times. Nobody’s answered, because everyone’s carrying plates. Each of those calls was probably someone wanting to book.

## What the assistant handles

- Table bookings, checked against real availability
- Changes and cancellations
- Opening hours, parking and directions
- Group bookings, following your deposit rules
- “Do you have a table tonight?” answered in seconds

## Allergies: always a person

Allergy and dietary questions need someone who can check the actual ingredients and preparation. The assistant should never promise a dish is safe. It should take the question, note it on the booking, and pass it to the team.`,
      note('Never guess on allergens', 'Food businesses must give accurate allergen information. Set the assistant to note allergies on the booking and pass questions to staff, never to answer them itself.', 'warning'),
      table('Friday night calls', [
        ['Call', 'Assistant'],
        ['“Table for four at 8?”', 'Checks, books, confirms by text'],
        ['“We’re 10 people on Saturday”', 'Follows your group booking and deposit rules'],
        ['“Is the risotto gluten free?”', 'Notes it and passes to staff'],
        ['“What time do you close?”', 'Answers'],
      ]),
      `See our [AI receptionist](/digital-receptionist).`,
      cta('We’ll show you a table being booked by phone during a busy service.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist take restaurant bookings?', 'Yes, when it’s connected to your table booking system.'],
      ['Can it answer allergy questions?', 'No. It should note them on the booking and pass them to staff, who can check properly.'],
      ['Can it handle large group bookings?', 'Yes, following your rules for groups and deposits.'],
      ['Does it help with no-shows?', 'Confirmations and reminders help reduce no-shows, especially on busy nights.'],
      ['Can it take takeaway orders?', 'It can if connected to an ordering system, but many restaurants keep that separate.'],
    ],
    citations: cite(FSA_ALLERGY),
  },
];
