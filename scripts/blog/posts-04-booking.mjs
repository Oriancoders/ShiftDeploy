import { table, note, cta, cite, SRC, CAT } from './lib.mjs';

export default [
  /* #32 */
  {
    id: 'post-booking-system-for-dental-practice',
    slug: 'booking-system-for-dental-practice',
    cluster: 'Online booking',
    keywords: [32],
    title: 'Online Booking for Dental Practices: What Patients Expect and What to Watch For',
    seoTitle: 'Booking System for Dental Practices: What to Look For',
    seoDescription: 'What a dental booking system should do: online check-up and hygiene booking, new patient forms, deposits and reminders that cut failed appointments.',
    focusKeyword: 'booking system for dental practice',
    secondaryKeywords: ['online booking for dentist', 'dental appointment booking system', 'booking system for dentist'],
    stage: 'decision',
    excerpt: 'Patients expect to book a check-up online, at 10pm, in under a minute. Here’s what a dental booking system needs to do, and the settings that stop it causing chaos in your diary.',
    tags: ['Online booking', 'Dental practices', 'No-shows'],
    cats: [CAT.conversion],
    cover: { eyebrow: 'For dental practices', lines: ['Online booking', 'patients actually use'], points: ['Check-ups', 'Hygiene', 'Fewer FTAs'] },
    coverAlt: 'Online booking for dental practices: check-ups, hygiene appointments and fewer failed appointments',
    direct: ['What should a dental practice booking system do?', 'A dental booking system should let patients book routine appointments like check-ups and hygiene visits online at any time, show real availability for the right clinician, collect new patient details before the visit, take deposits where you use them, and send reminders by text or email to reduce failed appointments.'],
    takeaways: [
      'Let patients book routine appointments online. Keep complex treatment for a call.',
      'Only offer appointment types that are safe to book without triage.',
      'New patient forms online save time at reception.',
      'Reminders are the simplest way to cut failed appointments.',
      'Connect it to phone and WhatsApp so every route ends in the same diary.',
    ],
    body: [
      `Most patients who want a check-up would rather tap a few buttons than ring during working hours. Practices that offer online booking capture the patients who decide at 10pm that it’s time to find a dentist.

The worry is always the diary. Nobody wants a stranger booking a root canal into a 15-minute hygiene slot. That’s a settings problem, not a reason to avoid online booking.

## What to offer online, and what not to`,
      table('Online booking: what to open up', [
        ['Safe to book online', 'Better by phone or after triage'],
        ['Check-ups for existing patients', 'Pain and emergencies'],
        ['Hygiene appointments', 'Complex treatment'],
        ['New patient examinations', 'Anything needing a clinician’s judgement'],
        ['Whitening or cosmetic consultations', 'Sedation appointments'],
      ]),
      `## Features that matter

- Real availability for each clinician, with the right appointment lengths
- New patient forms and medical history completed before the visit
- Deposits for new patients or long appointments, if that’s your policy
- Reminders by text or email, with an easy way to rebook
- Clear information on NHS or private status, so there are no surprises

## Don’t forget the phone

Online booking helps the people who go looking for it. Plenty of patients will still ring or message. If those calls go unanswered, they don’t go online instead. They ring another practice. That’s why we pair online booking with an [AI receptionist](/insights/ai-receptionist-for-dentists) that books into the same diary.`,
      note('Failed appointments', 'Every practice has patients who don’t turn up. Reminders and easy rebooking are the cheapest fix. Deposits help for long or high-value appointments.'),
      cta('We’ll look at how patients book with your practice now and where appointments slip through.'),
    ],
    faqs: [
      ['Should dental practices offer online booking?', 'Yes, for routine appointments like check-ups and hygiene. Keep emergencies and complex treatment for phone triage.'],
      ['Can new patients book online?', 'Yes. Many practices let new patients book an examination and complete their forms online beforehand.'],
      ['How do we stop the wrong appointment being booked?', 'Only offer specific appointment types online, each with the right length and clinician.'],
      ['Do reminders reduce failed appointments?', 'Reminders are one of the simplest and most effective ways to reduce them.'],
      ['Can patients book through WhatsApp?', 'Yes, if WhatsApp is connected to your booking system.'],
    ],
    citations: cite(SRC.ico),
  },

  /* #33 */
  {
    id: 'post-booking-system-for-physio',
    slug: 'booking-system-for-physio',
    cluster: 'Online booking',
    keywords: [33],
    title: 'Booking System for Physio Clinics: Features That Fill Your Diary',
    seoTitle: 'Booking System for Physio Clinics: Must-Have Features',
    seoDescription: 'What to look for in a physiotherapy booking system: online assessments, insurer details, reminders, packages and easy rebooking for courses of treatment.',
    focusKeyword: 'booking system for physio',
    secondaryKeywords: ['physiotherapy booking system', 'physio online booking', 'physio clinic software'],
    stage: 'decision',
    excerpt: 'Physio patients book when they’re in pain and drop off when they feel better. A good booking system fixes both. Here’s what to look for.',
    tags: ['Online booking', 'Physiotherapy'],
    cats: [CAT.conversion],
    cover: { eyebrow: 'For physio clinics', lines: ['A booking system that', 'fills your diary'], points: ['Assessments', 'Insurers', 'Rebooking'] },
    coverAlt: 'A physio booking system that handles assessments, insurers and rebooking',
    direct: ['What should a physio booking system include?', 'A physiotherapy booking system should let new patients book an initial assessment online, collect insurer and medical history details beforehand, show availability for each clinician, sell treatment packages, send reminders and make it easy to rebook the next session so patients complete their course of treatment.'],
    takeaways: [
      'Let new patients book an initial assessment online, any time.',
      'Collect insurer and health questionnaire details before the visit.',
      'Packages and easy rebooking keep courses of treatment on track.',
      'Reminders reduce missed appointments.',
      'Show the next available slot. Patients in pain book the soonest.',
    ],
    body: [
      `Physio patients have two habits that cost clinics money. They book the moment they’re in pain, with whoever can see them soonest. And they stop coming the moment they feel a bit better, often before the job’s done.

A good booking system helps with both.

## Getting them in

- New patients can book an initial assessment online at any hour
- The next available slot is obvious, not buried three screens deep
- Health questionnaires and insurer details are completed before they arrive
- Clinicians’ specialisms are clear, so patients pick the right person

## Keeping them coming

- Rebooking the next session before they leave, or in one tap from a reminder
- Packages or blocks of sessions, if you offer them
- Reminders by text or WhatsApp before each appointment
- A nudge if someone hasn’t rebooked when their plan says they should`,
      table('Must-haves vs nice-to-haves', [
        ['Must-have', 'Nice-to-have'],
        ['Online assessment booking', 'Online exercise programmes'],
        ['Reminders', 'Marketing emails'],
        ['Insurer and pre-visit forms', 'Loyalty schemes'],
        ['Easy rebooking', 'Detailed analytics'],
      ]),
      `## Calls still matter

Some patients will always ring, and physios can’t answer mid-treatment. An [AI receptionist for physio clinics](/insights/ai-receptionist-for-physiotherapy) books callers into the same diary, so nobody’s lost to voicemail.`,
      cta('We’ll show you where patients drop off between enquiry, first visit and completed treatment.'),
    ],
    faqs: [
      ['What’s the best booking system for a physio clinic?', 'One that handles online assessments, insurer details, reminders and easy rebooking, and works with your clinical notes system.'],
      ['Can patients book an assessment online?', 'Yes, most physio booking systems support online booking for initial assessments.'],
      ['How do I stop patients dropping out of treatment?', 'Make rebooking easy, send reminders, and follow up when someone hasn’t booked their next session.'],
      ['Can it handle insurance patients?', 'Many systems let patients add insurer and authorisation details when booking.'],
      ['Do I still need someone to answer calls?', 'Yes, or an assistant that can. Many patients still prefer to phone.'],
    ],
    citations: cite(SRC.hcpc),
  },

  /* #34 */
  {
    id: 'post-booking-system-for-aesthetics',
    slug: 'booking-system-for-aesthetics',
    cluster: 'Online booking',
    keywords: [34],
    title: 'The Best Booking System for Aesthetics Clinics: A Checklist Before You Choose',
    seoTitle: 'Best Booking System for Aesthetics UK: A Checklist',
    seoDescription: 'Choosing a booking system for an aesthetics clinic: consultations, consent forms, deposits, before-and-after records and reminders. A plain checklist.',
    focusKeyword: 'best booking system for aesthetics uk',
    secondaryKeywords: ['booking system for aesthetics', 'aesthetics clinic software', 'aesthetic clinic booking'],
    stage: 'decision',
    excerpt: 'Aesthetics booking is more than picking a time. Consultations, consent, deposits and follow-ups all need to work together. Here’s a checklist to compare systems.',
    tags: ['Online booking', 'Aesthetics'],
    cats: [CAT.conversion],
    cover: { eyebrow: 'For aesthetics clinics', lines: ['Choosing a booking', 'system for aesthetics'], points: ['Consultations', 'Consent', 'Deposits'] },
    coverAlt: 'Choosing a booking system for an aesthetics clinic: consultations, consent forms and deposits',
    direct: ['What is the best booking system for an aesthetics clinic?', 'The best booking system for an aesthetics clinic lets clients book consultations online, collects medical history and consent forms before treatment, takes deposits, keeps treatment records and photos securely, sends reminders and prompts follow-up appointments. Which product is best depends on your treatments, team size and budget.'],
    takeaways: [
      'Consultation first: the system should support a consultation before treatment.',
      'Digital medical history and consent forms save time and keep records.',
      'Deposits protect long and high-value appointments.',
      'Treatment records and photos must be stored securely.',
      'Follow-up and top-up reminders bring clients back.',
    ],
    body: [
      `We won’t tell you which brand to buy. The right system depends on your treatments and your team. What we can give you is the checklist we’d use.

## The checklist`,
      table('Aesthetics booking system checklist', [
        ['Feature', 'Why it matters'],
        ['Online consultation booking', 'Clients browse and book in the evening'],
        ['Medical history and consent forms', 'Completed before the appointment, stored with the record'],
        ['Deposits', 'Protects long, high-value slots from no-shows'],
        ['Treatment notes and photos', 'Secure records of what was done'],
        ['Reminders', 'Fewer missed appointments'],
        ['Follow-up and review prompts', 'Brings clients back at the right time'],
        ['Works with WhatsApp and phone', 'Every enquiry ends up in one diary'],
      ]),
      `## Consultation before treatment

For many treatments, especially those involving prescription-only medicines, a consultation with a prescriber comes first. Your booking flow should reflect that. Clients book a consultation, and treatment follows once the practitioner is happy.

## Wording on your booking page

Your booking page is advertising too. Don’t list Botox or other prescription-only medicines as bookable products for the public. Use “anti-wrinkle consultation” and let the practitioner discuss options.`,
      note('Data', 'Medical history, consent and photos are sensitive personal data. Check where the system stores them, who can access them, and how long they’re kept.', 'warning'),
      `## Booking systems don’t answer messages

Plenty of aesthetic clients message rather than book. An [AI receptionist for aesthetic clinics](/insights/ai-receptionist-for-aesthetic-clinics) replies to those messages and books consultations into the same system.`,
      cta('We’ll look at how clients find and book with your clinic, and where they drop off.'),
    ],
    faqs: [
      ['What should an aesthetics booking system include?', 'Online consultation booking, medical history and consent forms, deposits, secure treatment records, reminders and follow-up prompts.'],
      ['Can I list Botox on my booking page?', 'You shouldn’t promote prescription-only medicines to the public. Use wording like “anti-wrinkle consultation”.'],
      ['Should I take deposits?', 'Many clinics do for long or high-value appointments, as it reduces no-shows.'],
      ['Where are client photos stored?', 'Check with each provider. They should be stored securely with controlled access.'],
      ['Can clients book by WhatsApp?', 'Yes, if WhatsApp is connected to your booking system.'],
    ],
    citations: cite(SRC.asaBotox, SRC.ico),
  },

  /* #35, #36 */
  {
    id: 'post-booking-system-for-salons',
    slug: 'booking-system-for-salons',
    cluster: 'Online booking',
    keywords: [35, 36],
    title: 'Choosing a Booking System for Your Salon: What Matters and What’s Marketing Fluff',
    seoTitle: 'Best Booking System for Salons: What Really Matters',
    seoDescription: 'How to choose a salon booking system: service times, stylists, deposits, reminders and commission fees. What matters for hair and beauty salons.',
    focusKeyword: 'best booking system for salons',
    secondaryKeywords: ['booking system for hair salon', 'salon booking software', 'best booking app for salons'],
    stage: 'decision',
    excerpt: 'Salon booking apps all promise more clients. Here’s what actually matters: correct service times, fair fees, deposits and reminders that stop no-shows.',
    tags: ['Online booking', 'Salons', 'No-shows'],
    cats: [CAT.conversion],
    cover: { eyebrow: 'For salons', lines: ['Choosing a salon', 'booking system'], points: ['Service times', 'Fees', 'No-shows'] },
    coverAlt: 'Choosing a salon booking system: service times, fees and no-shows',
    direct: ['What is the best booking system for a salon?', 'The best salon booking system is one that books the right service length with the right stylist, handles patch tests and deposits, sends reminders, lets clients rebook easily and doesn’t charge commission on your existing clients. The right choice depends on team size, services and budget.'],
    takeaways: [
      'Correct service durations and stylist rules matter more than extra features.',
      'Watch for commission on bookings from your own regulars.',
      'Deposits and reminders are the two best no-show fixes.',
      'Patch test rules should be built into the booking flow.',
      'Many clients still message. Make sure those bookings land in the same diary.',
    ],
    body: [
      `Every salon booking app claims to bring you new clients. Some do. But the thing that makes or breaks a booking system is duller: does it put the right appointment, of the right length, with the right stylist?

## What actually matters

- Service durations. A full head of foils and a fringe trim can’t share the same slot length.
- Stylist rules. Who does colour, who does extensions, who’s part-time.
- Patch tests. New colour clients should be booked for a test first.
- Deposits. For long or high-value services.
- Reminders. By text or WhatsApp, with one-tap rebooking.
- Fees. Especially commission on bookings from your own clients.`,
      note('Check the commission rules', 'Some booking apps list you in a marketplace and charge commission on new clients found there. That can be worth it. Just make sure you’re not paying commission when your regulars book through your own link.'),
      table('Marketing fluff vs what you’ll use', [
        ['Often oversold', 'Used every day'],
        ['Built-in email marketing', 'Reminders'],
        ['Loyalty points', 'Easy rebooking'],
        ['Complex reports', 'Deposits'],
        ['Social media tools', 'Correct service times'],
      ]),
      `## Messages and calls

Plenty of salon clients still ring or WhatsApp. Our [AI receptionist for salons](/insights/ai-receptionist-for-salons) answers those and books into the same system, so you’re not copying bookings from your phone at 10pm.`,
      cta('We’ll look at how clients book with your salon now and where bookings or deposits are slipping.'),
    ],
    faqs: [
      ['What’s the best booking app for a hair salon?', 'The one that handles your service durations, stylist rules, deposits and reminders, at fees that suit your salon. Try two or three with your real services.'],
      ['Do salon booking apps charge commission?', 'Some charge commission on new clients found through their marketplace. Check the rules for your own clients.'],
      ['How do I stop no-shows in my salon?', 'Reminders, deposits for longer services and a clear cancellation policy.'],
      ['Can clients book by WhatsApp?', 'Yes, if WhatsApp is connected to your booking system.'],
      ['Can it handle patch tests?', 'Many systems can require a patch test before a first colour booking.'],
    ],
    citations: cite(SRC.ico),
  },

  /* #38, #41 */
  {
    id: 'post-booking-system-for-tradespeople',
    slug: 'booking-system-for-tradespeople',
    cluster: 'Online booking',
    keywords: [38, 41],
    title: 'Booking Systems for Plumbers, Trades and Sole Traders: Do You Actually Need One?',
    seoTitle: 'Booking System for Plumbers & Sole Traders: Worth It?',
    seoDescription: 'Do plumbers and sole traders need an online booking system? When it helps, when it doesn’t, and simpler ways to stop jobs slipping through.',
    focusKeyword: 'booking system for plumbers',
    secondaryKeywords: ['best booking system for sole trader', 'booking system for tradesmen', 'job booking app for trades'],
    stage: 'consideration',
    excerpt: 'Not every trade needs customers booking themselves in. Here’s when online booking helps plumbers and sole traders, and when a better phone set-up is the real fix.',
    tags: ['Online booking', 'Trades', 'Sole traders'],
    cats: [CAT.conversion],
    cover: { eyebrow: 'For trades and sole traders', lines: ['Do you need a', 'booking system?'], points: ['Fixed-price jobs', 'Quotes', 'Travel time'] },
    coverAlt: 'Do plumbers and sole traders need a booking system? Fixed-price jobs, quotes and travel time',
    direct: ['Do plumbers need an online booking system?', 'Online booking works well for trades with fixed-price, predictable jobs, like boiler services, gas safety checks or EICRs. For repairs and quotes, where the job varies, most customers still want to talk to someone. For those, answering every call and booking a visit quickly matters more than self-booking.'],
    takeaways: [
      'Online booking suits fixed-price, predictable jobs like boiler services.',
      'Repairs and quotes usually need a conversation first.',
      'Travel time between jobs must be built into any diary.',
      'For most sole traders, answering every call wins more work than a booking page.',
      'Reminders for annual services bring repeat work.',
    ],
    body: [
      `A salon lives and dies by its booking system. A plumber? Not necessarily. Before you pay for software, work out which of your jobs customers could safely book without speaking to you.

## Jobs that suit online booking

- Boiler services
- Gas safety certificates for landlords
- EICRs and PAT testing
- Fixed-price installs with a clear scope

## Jobs that don’t

- “Water’s coming through my ceiling”
- “Can you quote for a new bathroom?”
- “Something’s wrong with my boiler”

These need questions, sometimes photos, and a judgement call on urgency. Letting customers drop them into your diary causes more trouble than it saves.`,
      table('What each type of job needs', [
        ['Job type', 'Best way to book'],
        ['Annual service or certificate', 'Online booking with reminders'],
        ['Emergency repair', 'Answer the call, judge urgency'],
        ['Quote for a big job', 'Take details and photos, book a survey'],
        ['Small repair', 'Call or WhatsApp, then book'],
      ]),
      note('Travel time', 'Any booking tool you use needs travel time between jobs, and ideally areas you cover on each day. Otherwise you’ll be driving across town three times a day.'),
      `## The better fix for most sole traders

If you’re a sole trader, the thing losing you work is usually missed calls, not the lack of a booking page. An [AI receptionist for plumbers](/insights/ai-receptionist-for-plumbers) answers every call, takes the details and books a visit, and online booking can handle the annual services alongside it.`,
      cta('We’ll look at how your jobs come in and suggest the simplest set-up that stops them slipping through.'),
    ],
    faqs: [
      ['Should a plumber have online booking?', 'For fixed-price jobs like boiler services, yes. For repairs and quotes, answering the call quickly usually matters more.'],
      ['What’s the best booking system for a sole trader?', 'Something simple that handles your fixed-price jobs, travel time and reminders, and works on your phone.'],
      ['Can customers book emergency jobs online?', 'It’s usually better not to. Emergencies need a quick conversation to judge urgency.'],
      ['Can I get reminders for annual services?', 'Yes. Reminders for boiler services and certificates are one of the best ways to get repeat work.'],
      ['Do I need job management software too?', 'If you have a team or lots of jobs, often yes. Sole traders can often manage with a calendar plus good call handling.'],
    ],
    citations: cite(SRC.gasSafe),
  },

  /* #43, #45 */
  {
    id: 'post-how-to-reduce-no-shows',
    slug: 'how-to-reduce-no-shows',
    cluster: 'Online booking',
    keywords: [43, 45],
    title: 'How to Reduce No-Shows and Last-Minute Cancellations (Without Upsetting Customers)',
    seoTitle: 'How to Reduce No-Shows and Cancellations: 8 Fixes',
    seoDescription: 'Eight practical ways to reduce no-shows and last-minute cancellations: reminders, deposits, easy rebooking, waiting lists and a fair policy.',
    focusKeyword: 'how to reduce no shows and cancellations',
    secondaryKeywords: ['how to reduce no shows', 'how to stop no shows', 'reduce appointment no shows', 'cancellation policy'],
    stage: 'consideration',
    excerpt: 'No-shows cost more than the empty slot. Here are eight fixes, from the free and obvious to the ones that take a little nerve.',
    tags: ['No-shows', 'Appointment reminders', 'Online booking'],
    cats: [CAT.conversion],
    cover: { eyebrow: 'Empty slots', lines: ['How to cut no-shows', 'and cancellations'], points: ['Reminders', 'Deposits', 'Waiting lists'] },
    coverAlt: 'How to cut no-shows and cancellations with reminders, deposits and waiting lists',
    direct: ['How can I reduce no-shows?', 'The most effective ways to reduce no-shows are sending reminders before each appointment, making it easy to cancel or rebook, taking deposits for longer or high-value appointments, having a clear cancellation policy, and keeping a waiting list to fill gaps. Reminders by text or WhatsApp are the simplest starting point.'],
    takeaways: [
      'Most no-shows are forgetfulness, not rudeness. Reminders fix a lot of them.',
      'Make cancelling easy. A cancellation you hear about can be refilled.',
      'Deposits work well for long or high-value appointments.',
      'A waiting list turns cancellations into bookings.',
      'Track no-shows so you know whether your fixes are working.',
    ],
    body: [
      `A no-show doesn’t just cost you the appointment fee. It costs you the customer you turned away because the slot was full, and the time you spent preparing.

Most no-shows aren’t rude. People forget, or they can’t face ringing to cancel. Fix those two things and you fix most of the problem.

## 1. Send reminders

A reminder the day before, and for longer appointments another one a few days out. Text or WhatsApp gets read faster than email. Include the time, the address and a way to rebook.

## 2. Make cancelling easy

It sounds backwards, but it works. If cancelling means ringing during office hours, people just don’t turn up. A one-tap “I can’t make it” means you hear about it and can refill the slot.

## 3. Ask for confirmation

“Reply YES to confirm” gives you a list of who hasn’t confirmed, so you can follow up the day before.

## 4. Take deposits where it makes sense

For long, expensive or often-missed appointments, a deposit changes behaviour. Keep it proportionate and explain it clearly.

## 5. Have a clear cancellation policy

Say how much notice you need and what happens if someone doesn’t give it. Put it on your booking page and in confirmations.

## 6. Keep a waiting list

When someone cancels, offer the slot to people who wanted that day. Automated, this can fill a gap within minutes.

## 7. Book the next appointment before they leave

Regular clients who book their next visit on the way out miss fewer appointments than those who “will ring to book”.

## 8. Track it

Count no-shows each week. If a reminder change doesn’t move the number, try something else.`,
      table('Which fix for which business', [
        ['Business', 'Start with'],
        ['Salons', 'Reminders, deposits on long services'],
        ['Clinics', 'Reminders, easy rebooking'],
        ['Trades', 'Confirmation the day before, arrival window'],
        ['Restaurants', 'Confirmations, deposits for large groups'],
      ]),
      note('Be human about it', 'Charging a loyal client for a genuine emergency loses you more than the fee. Most businesses apply their policy firmly to repeat offenders and flexibly to everyone else.'),
      `We set up reminders, confirmations and waiting lists as part of [helping businesses win more jobs](/services/shiftconvert).`,
      cta('We’ll look at your no-show rate and show you the simplest fixes for your business.'),
    ],
    faqs: [
      ['What is the best way to reduce no-shows?', 'Send reminders before every appointment and make it easy to cancel or rebook. Add deposits for long or high-value appointments.'],
      ['Should I charge for no-shows?', 'Many businesses take a deposit or charge a fee for late cancellations. Be clear about the policy up front and apply it fairly.'],
      ['How far in advance should reminders go out?', 'The day before works for most appointments, with an extra reminder a few days out for longer or more expensive bookings.'],
      ['Are WhatsApp reminders better than email?', 'People usually read WhatsApp and text messages faster than email.'],
      ['How do I fill cancelled slots?', 'Keep a waiting list and offer the slot automatically to people who wanted that day.'],
    ],
    citations: cite(SRC.metaPricing),
  },

  /* #44 */
  {
    id: 'post-how-to-reduce-patient-no-shows',
    slug: 'how-to-reduce-patient-no-shows',
    cluster: 'Online booking',
    keywords: [44],
    title: 'How to Reduce Patient No-Shows in a Private Clinic',
    seoTitle: 'How to Reduce Patient No-Shows: A Clinic Guide',
    seoDescription: 'Why patients miss appointments and what private clinics can do about it: reminders, easy rebooking, deposits and follow-up, done with care.',
    focusKeyword: 'how to reduce patient no shows',
    secondaryKeywords: ['reduce patient no shows', 'patient did not attend', 'missed appointments clinic'],
    stage: 'consideration',
    excerpt: 'Patients miss appointments for reasons that are often fixable: forgetting, anxiety, or not knowing how to cancel. Here’s how clinics reduce no-shows without being heavy-handed.',
    tags: ['No-shows', 'Clinics', 'Appointment reminders'],
    cats: [CAT.conversion],
    cover: { eyebrow: 'For clinics', lines: ['Fewer patients', 'who don’t turn up'], points: ['Reminders', 'Easy rebooking', 'Follow-up'] },
    coverAlt: 'Reducing patient no-shows with reminders, easy rebooking and follow-up',
    direct: ['How do clinics reduce patient no-shows?', 'Clinics reduce patient no-shows by sending reminders before appointments, making it easy to cancel or rebook without phoning, asking patients to confirm, taking deposits for longer private appointments, and following up with patients who miss an appointment. Understanding why patients miss appointments, such as anxiety or cost, helps target the fix.'],
    takeaways: [
      'Forgetting is the most common reason. Reminders help most.',
      'Some patients avoid appointments because they’re anxious. A kind follow-up helps.',
      'Easy cancellation lets you offer the slot to someone else.',
      'Keep reminders discreet. Don’t name the treatment.',
      'Deposits suit longer private appointments.',
    ],
    body: [
      `Patients don’t miss appointments for one reason. Some forget. Some feel better and decide they don’t need to come. Some are anxious about treatment or cost. Some just couldn’t face ringing to cancel.

Each reason has a different fix.`,
      table('Why patients miss appointments, and what helps', [
        ['Reason', 'What helps'],
        ['Forgot', 'Reminders the day before, and a few days before for long appointments'],
        ['Couldn’t get through to cancel', 'Cancel or rebook by text, WhatsApp or online'],
        ['Felt better', 'Explain why the follow-up matters when booking'],
        ['Anxious', 'A friendly reminder that says what to expect'],
        ['Cost worries', 'Clear prices before the appointment'],
      ]),
      `## Reminders done well

- Send them by text or WhatsApp, which people read quickly
- Keep them discreet: “your appointment at [Clinic]”, not the treatment name
- Include the time, address, parking and how to rebook
- Ask them to reply to confirm

## After a missed appointment

A short, kind message the same day, offering another slot, brings a surprising number of patients back. A telling-off doesn’t.

## Deposits

For longer private appointments, a deposit taken at booking reduces no-shows. Explain it clearly and keep it proportionate.`,
      note('Discretion', 'Reminders often appear on lock screens. Never mention the condition or treatment in a reminder.', 'warning'),
      `Our [AI receptionist for clinics](/insights/ai-receptionist-for-clinics) sends reminders and handles rebooking by phone, WhatsApp and chat, so patients can cancel without calling during working hours. See also our general guide to [reducing no-shows](/insights/how-to-reduce-no-shows).`,
      cta('We’ll look at how patients book, confirm and cancel with your clinic, and where appointments are lost.'),
    ],
    faqs: [
      ['Why do patients miss appointments?', 'Most often they forget. Others feel better, feel anxious, worry about cost, or find it hard to cancel.'],
      ['Do text reminders reduce no-shows?', 'Reminders are one of the most effective and cheapest ways to reduce missed appointments.'],
      ['Should reminders mention the treatment?', 'No. Keep them discreet, as they can appear on lock screens.'],
      ['Should clinics charge for missed appointments?', 'Many private clinics take deposits or charge late cancellation fees. Be clear and fair about the policy.'],
      ['What should we do after a no-show?', 'Send a friendly message offering another appointment the same day.'],
    ],
    citations: cite(SRC.ico),
  },

  /* #46 */
  {
    id: 'post-appointment-reminder-text-examples',
    slug: 'appointment-reminder-text-examples',
    cluster: 'Online booking',
    keywords: [46],
    title: 'Appointment Reminder Text Examples You Can Copy (for Clinics, Salons and Trades)',
    seoTitle: 'Appointment Reminder Text Examples You Can Copy',
    seoDescription: 'Ready-to-use appointment reminder texts and WhatsApp messages for clinics, salons and trades, plus confirmation, rebooking and no-show messages.',
    focusKeyword: 'appointment reminder text example',
    secondaryKeywords: ['appointment reminder message', 'appointment reminder text', 'appointment reminder template'],
    stage: 'awareness',
    excerpt: 'Short, friendly reminder messages you can copy today, for clinics, salons and trades, plus what to send when someone cancels or doesn’t turn up.',
    tags: ['Appointment reminders', 'No-shows', 'WhatsApp'],
    cats: [CAT.conversion],
    cover: { eyebrow: 'Copy and paste', lines: ['Appointment reminder', 'texts that work'], points: ['Clinics', 'Salons', 'Trades'] },
    coverAlt: 'Appointment reminder text examples for clinics, salons and trades',
    direct: ['What should an appointment reminder text say?', 'A good appointment reminder text says who it’s from, the day and time, the address, and how to confirm, cancel or rebook. Keep it under about 160 characters where possible, avoid mentioning sensitive details like medical treatment, and send it the day before.'],
    takeaways: [
      'Say who it’s from first. People ignore messages from unknown numbers.',
      'Include day, time, place and how to rebook.',
      'Ask for a reply to confirm.',
      'Keep clinical details out of reminders.',
      'Send the day before, plus earlier for long appointments.',
    ],
    body: [
      `Copy these, change the details, and send them. That’s it. Tweak the wording to sound like you.

## Clinics

**Day before:**
“Hi Sarah, a reminder from Riverside Clinic: your appointment is tomorrow (Tue) at 10.30am. Reply YES to confirm or CHANGE to rearrange.”

**New patient:**
“Hi Tom, looking forward to seeing you at Riverside Clinic on Thu at 2pm. Please arrive 10 mins early. Parking is at the rear. Reply here with any questions.”

## Salons

**Day before:**
“Hi Jess! Just a reminder you’re booked with Amy tomorrow at 1pm for cut and colour. Reply YES to confirm. Need to change? Just reply here.”

**Patch test:**
“Hi Jess, a reminder to pop in for your quick patch test before Saturday. Any time before 5pm today works.”

## Trades

**Day before:**
“Hi Mr Patel, it’s Dave from DK Plumbing. I’ll be with you tomorrow between 8 and 10am for the boiler service. Reply if anything changes.”

**On the way:**
“On my way, about 20 minutes. Dave, DK Plumbing.”

## After a cancellation

“No problem at all, Sarah. Would you like another slot? We have Thu at 11am or Fri at 3pm.”

## After a no-show

“Hi Tom, we missed you today, hope all’s OK. Would you like to rebook? Just reply here.”`,
      table('What makes a reminder work', [
        ['Do', 'Don’t'],
        ['Name your business first', 'Send from an unknown number with no name'],
        ['Give day, time and place', 'Send a long paragraph'],
        ['Offer an easy way to rebook', 'Say “call the office” only'],
        ['Keep medical details out', 'Name the treatment in a clinic reminder'],
      ]),
      `## Automating them

Sending these by hand works until you’re busy. Most booking systems can send them automatically, and a WhatsApp set-up can handle the replies too, so “CHANGE” gets a new slot offered without you lifting a finger. Read our guide to [reducing no-shows](/insights/how-to-reduce-no-shows).`,
      cta('We’ll set up reminders and replies that run on their own, in your business’s own words.'),
    ],
    faqs: [
      ['When should I send an appointment reminder?', 'The day before works for most appointments. For long or expensive ones, add a reminder a few days earlier.'],
      ['Text or WhatsApp for reminders?', 'Both work well. WhatsApp allows replies and rebooking in the same chat.'],
      ['How long should a reminder be?', 'Short. Who, when, where and how to rebook. Around 160 characters is a good target for texts.'],
      ['Should I ask customers to confirm?', 'Yes. It shows you who might not turn up so you can follow up.'],
      ['Can reminders be automated?', 'Yes. Most booking systems and WhatsApp set-ups can send them automatically.'],
    ],
    citations: cite(SRC.metaPricing),
  },
];
