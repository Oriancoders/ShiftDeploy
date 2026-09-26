import { table, note, cta, cite, SRC, CAT } from './lib.mjs';

const RCVS = { title: 'Code of Professional Conduct for Veterinary Surgeons', publisher: 'Royal College of Veterinary Surgeons', url: 'https://www.rcvs.org.uk/setting-standards/advice-and-guidance/code-of-professional-conduct-for-veterinary-surgeons/' };

export default [
  /* #2, #3, #27 */
  {
    id: 'post-ai-receptionist-for-dentists',
    slug: 'ai-receptionist-for-dentists',
    cluster: 'AI receptionist',
    keywords: [2, 3, 27],
    title: 'AI Receptionist for Dental Practices: What It Can Handle, and What It Shouldn’t',
    seoTitle: 'AI Receptionist for Dentists UK: What It Handles',
    seoDescription: 'How an AI receptionist works in a dental practice: new patient enquiries, check-up bookings, out-of-hours calls and dental emergencies handled safely.',
    focusKeyword: 'ai receptionist for dentist uk',
    secondaryKeywords: ['ai receptionist for dental practices', 'answering service for dentist', 'ai receptionist for dental office', 'dental practice call answering'],
    stage: 'decision',
    excerpt: 'Reception is the busiest job in a dental practice. An AI receptionist can take the routine calls and bookings off the front desk, as long as it knows where its job ends.',
    tags: ['AI receptionist', 'Dental practices', 'Call answering'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For dental practices', lines: ['An AI receptionist', 'for your practice'], points: ['New patients', 'Check-ups', 'Out of hours'] },
    coverAlt: 'An AI receptionist for dental practices handling new patients, check-up bookings and out-of-hours calls',
    direct: ['Can a dental practice use an AI receptionist?', 'Yes. An AI receptionist can answer calls, website chats and WhatsApp messages for a dental practice, book check-ups and hygiene appointments, answer questions about fees and opening hours, and take new patient enquiries. Anything clinical, including dental pain and emergencies, should be passed to the team or pointed to the right urgent care route.'],
    takeaways: [
      'The front desk juggles patients in the room and the phone. That’s where calls get missed.',
      'An AI receptionist can handle bookings, fees, opening hours and new patient enquiries.',
      'Dental pain and emergencies need clear rules: flag to the team or point to urgent care.',
      'Callers should always be told they’re speaking to an assistant.',
      'It works best alongside your reception team, not instead of them.',
    ],
    body: [
      `Watch a dental reception for ten minutes at 8.45am. Someone’s checking in, someone’s paying, a patient wants to rebook, and the phone is ringing. Nobody can answer it. That caller might be a new patient looking for a practice, and they’ll try the next one on the list.

This is the job an AI receptionist does well: picking up the calls your team can’t get to.

## What it can handle

Most calls to a dental practice are the same few things:

- “Are you taking new patients?”
- “Can I book a check-up or a hygiene appointment?”
- “How much is a white filling / whitening / an implant consultation?”
- “What time do you open on Saturday?”
- “I need to move my appointment.”

An AI receptionist answers these in a natural voice, books into your diary if it’s connected, and sends your team a note of every call. The same assistant can answer WhatsApp and website chat, which is where a lot of younger patients start.

## What it shouldn’t handle

A dental practice has calls that need a person, and the set-up has to respect that.`,
      table('Who handles which call', [
        ['Call', 'AI receptionist', 'Your team'],
        ['New patient enquiry', 'Takes details, books the first visit', 'Reviews the booking'],
        ['Check-up or hygiene booking', 'Books it', 'No action needed'],
        ['Fees and opening hours', 'Answers from your price list', 'No action needed'],
        ['Toothache or swelling', 'Flags it straight away, gives your urgent care guidance', 'Calls back or triages'],
        ['Complaint', 'Takes details politely', 'Handles it'],
        ['Clinical question', 'Doesn’t answer, passes it on', 'Answers'],
      ]),
      note('Emergencies need your rules', 'Decide with your clinicians what the assistant says when someone reports pain, swelling or trauma, in hours and out of hours. Usually that’s flagging it to the team straight away and pointing callers to your emergency arrangements or NHS 111 when you’re closed.', 'warning'),
      `## Out of hours

Dental practices get calls in the evening from people who’ve put off booking all day. With an AI receptionist those calls get answered and booked, rather than hitting voicemail. Out-of-hours pain calls get your agreed message, not silence.

## Patient data

Callers should be told they’re speaking to an assistant and that the call may be recorded. Health information is special category data under UK GDPR, so the assistant should collect only what’s needed to book, and you should agree how long records are kept.

## Where it fits with your team

The practices that get the most from it don’t replace reception. They let the AI take the overflow and the evenings, and let the team focus on the patients standing in front of them.

See how our [AI receptionist](/digital-receptionist) works, and how [Review Your Doctor](/review-your-doctor) turns happy patients into Google reviews after each visit.`,
      cta('Book a free demo. We’ll show you the assistant answering a new patient call and booking a check-up into a diary.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist book dental appointments?', 'Yes, if it’s connected to your practice diary or booking system. It can book check-ups, hygiene visits and new patient appointments.'],
      ['How does it handle dental emergencies?', 'You set the rules. Usually it flags pain or swelling to the team straight away and gives your emergency guidance, including NHS 111 when you’re closed. It never gives clinical advice.'],
      ['Will patients know it’s not a person?', 'Yes. It should say the caller is speaking to the practice’s assistant.'],
      ['Is it GDPR compliant for a dental practice?', 'It can be set up in line with UK GDPR by collecting only what’s needed, telling callers about recording and agreeing how long information is kept.'],
      ['Does it replace our receptionists?', 'It shouldn’t. It works best taking overflow calls, busy periods and out-of-hours enquiries so your team can focus on patients in the practice.'],
    ],
    citations: cite(SRC.ico, SRC.gdcAds),
  },

  /* #4, #21 */
  {
    id: 'post-ai-receptionist-for-clinics',
    slug: 'ai-receptionist-for-clinics',
    cluster: 'AI receptionist',
    keywords: [4, 21],
    title: 'AI Receptionist for Private Clinics: A Front Desk That Never Puts Patients on Hold',
    seoTitle: 'AI Receptionist for Clinics: 24/7 Front Desk Help',
    seoDescription: 'How private clinics use an AI front desk for bookings, prices and patient questions, while keeping clinical calls with qualified staff.',
    focusKeyword: 'ai receptionist for clinics',
    secondaryKeywords: ['ai front desk for clinics', 'ai receptionist for medical clinic', 'clinic call answering', 'medical receptionist ai'],
    stage: 'decision',
    excerpt: 'Patients hate being on hold. Private clinics lose bookings to it every day. Here’s how an AI front desk answers every call, and where the line with clinical staff sits.',
    tags: ['AI receptionist', 'Clinics', 'Patient bookings'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For private clinics', lines: ['A front desk that', 'never says “please hold”'], points: ['Bookings', 'Prices', 'Hand-over'] },
    coverAlt: 'An AI front desk for private clinics handling bookings and prices, and handing clinical calls to staff',
    direct: ['What does an AI receptionist do for a clinic?', 'An AI receptionist answers a clinic’s calls, website chats and WhatsApp messages 24/7. It books and moves appointments, answers questions about prices, practitioners, insurers and location, and sends reminders. Clinical questions and anything urgent are passed to qualified staff.'],
    takeaways: [
      'Private patients compare clinics, and the first one to answer often wins the booking.',
      'Routine calls like bookings, prices and directions can be fully automated.',
      'Clinical questions and urgent symptoms must go to qualified staff.',
      'Answering insurance and self-pay questions up front saves a lot of calls.',
      'Collect the minimum patient data and tell callers how it’s used.',
    ],
    body: [
      `Private patients are paying, and they know it. If they ring a clinic and hear “all our team are busy”, plenty will hang up and try somewhere else. The clinic never knows that booking existed.

## What an AI front desk handles

Think about the calls your reception team takes most:

- Booking, moving and cancelling appointments
- “How much is an initial consultation?”
- “Do you take my insurer?”
- “Which practitioner is best for my knee?” (it can explain who treats what, without advising)
- “Where do I park?”
- “Can I get a receipt for my insurer?”

An AI receptionist answers these from information you give it, books straight into your system, and texts or emails your team a summary. Patients get an answer at 9pm on a Sunday, which is often when they finally sit down to sort out that appointment.

## The line it must not cross

It shouldn’t discuss symptoms, suggest treatment or decide how urgent something is. When a patient describes something worrying, it should follow your escalation rules and get a person involved. Write those rules with your clinical lead.`,
      table('A typical split for a private clinic', [
        ['Handled by the AI front desk', 'Passed to your team'],
        ['New and follow-up bookings', 'Symptoms and clinical questions'],
        ['Prices, insurers and payment', 'Complaints'],
        ['Directions, parking, opening hours', 'Test results'],
        ['Reminders and rescheduling', 'Anything the patient asks to discuss with a person'],
      ]),
      note('Data protection', 'Health information is special category data under UK GDPR. Tell callers they’re speaking to an assistant and that calls may be recorded, collect only what’s needed to book, and agree retention periods with your provider.', 'warning'),
      `## What patients notice

They notice that someone answered straight away. They notice they got a booking, not a promise of a callback. And they notice a reminder the day before, which is one reason clinics using reminders see fewer missed appointments.

Our [AI receptionist](/digital-receptionist) covers calls, WhatsApp and website chat from one place. For clinics that want more reviews, [Review Your Doctor](/review-your-doctor) asks every patient after their visit.`,
      cta('Book a free demo and hear the assistant handle a real clinic booking call.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist work for a medical clinic?', 'Yes, for admin: bookings, prices, insurers, directions and reminders. Clinical questions should always go to qualified staff.'],
      ['What is an AI front desk?', 'Software that answers your clinic’s phone, chat and messages like a receptionist would, and books appointments into your system.'],
      ['Can it take insurance details?', 'It can collect the details your team needs to check cover, and explain which insurers you work with.'],
      ['Will it replace our receptionist?', 'Most clinics use it for overflow, busy periods and out of hours, so the team can focus on patients in front of them.'],
      ['Is it secure?', 'Choose a provider with proper data protection terms, and set it up to collect the minimum personal data.'],
    ],
    citations: cite(SRC.ico),
  },

  /* #5 */
  {
    id: 'post-ai-receptionist-for-aesthetic-clinics',
    slug: 'ai-receptionist-for-aesthetic-clinics',
    cluster: 'AI receptionist',
    keywords: [5],
    title: 'AI Receptionist for Aesthetic Clinics: Answer Every Late-Night Enquiry',
    seoTitle: 'AI Receptionist for Aesthetic Clinics: 24/7 Replies',
    seoDescription: 'Aesthetic enquiries arrive late at night on Instagram and WhatsApp. How an AI receptionist replies instantly, books consultations and stays within ASA rules.',
    focusKeyword: 'ai receptionist for aesthetic clinic',
    secondaryKeywords: ['aesthetics clinic receptionist', 'aesthetic clinic enquiries', 'book consultation aesthetics'],
    stage: 'decision',
    excerpt: 'Aesthetic clients message at 11pm and book with whoever replies first. An AI receptionist answers instantly and books the consultation, without saying anything the ASA would object to.',
    tags: ['AI receptionist', 'Aesthetics', 'Consultations'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For aesthetic clinics', lines: ['Answer every', '11pm enquiry'], points: ['Instant replies', 'Consultations', 'ASA-safe'] },
    coverAlt: 'An AI receptionist for aesthetic clinics answering late-night enquiries and booking consultations',
    direct: ['Should an aesthetic clinic use an AI receptionist?', 'Many aesthetic enquiries arrive in the evening by WhatsApp, Instagram or website chat, and clients often book with the first clinic that replies. An AI receptionist can answer instantly, explain consultations and prices, and book a consultation. It must not promote prescription-only medicines such as Botox, and medical questions should go to a practitioner.'],
    takeaways: [
      'Aesthetic enquiries peak in the evening, when clinics are closed.',
      'An instant reply and an easy consultation booking win clients.',
      'The assistant must never promote Botox or other prescription-only medicines.',
      'Use wording like “anti-wrinkle consultation” and let practitioners discuss treatment.',
      'Deposits and reminders protect expensive appointment slots.',
    ],
    body: [
      `Scroll through a busy aesthetics clinic’s messages and you’ll see the pattern. “Hi, how much for lips?” at 10.47pm. “Do you have anything Saturday?” at 11.20pm. By the time someone replies at lunchtime the next day, half of them have booked elsewhere.

## What the assistant does

- Replies to calls, WhatsApp and website chat instantly, any time
- Explains that treatment starts with a consultation, and what that involves
- Gives consultation prices and treatment price ranges you’ve approved
- Books the consultation into your diary and takes a deposit if you use them
- Sends reminders, so fewer expensive slots go empty

## Staying within the rules

This is where aesthetics differs from other clinics. Botox and similar products are prescription-only medicines, and UK advertising rules don’t allow them to be promoted to the public. The ASA treats your own website and social channels as advertising, and the same caution applies to an assistant replying on your behalf.`,
      table('Wording for your assistant', [
        ['Avoid', 'Use instead'],
        ['“Botox from £150”', '“Anti-wrinkle consultations from £X”'],
        ['“Book your Botox today”', '“Book a consultation to discuss lines and wrinkles”'],
        ['Promising results', 'Explaining what happens at the consultation'],
      ]),
      note('Medical questions go to a practitioner', 'Questions about suitability, side effects, pregnancy, medication or previous reactions should always be passed to a qualified practitioner. The assistant books the consultation; it doesn’t decide who’s suitable.', 'warning'),
      `## Why speed matters so much here

Aesthetic clients usually message two or three clinics at once. Trust and speed decide it. A friendly, accurate reply in seconds, with a consultation slot offered, does both.

See our [AI receptionist](/digital-receptionist), and read our guide to [marketing an aesthetic clinic within the rules](/insights/marketing-for-aesthetic-clinic).`,
      cta('We’ll show you how your assistant would reply to a real late-night enquiry, using your prices and wording.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist talk about Botox?', 'It shouldn’t promote Botox or other prescription-only medicines. It should talk about consultations and anti-wrinkle treatment, and leave treatment discussion to practitioners.'],
      ['Can it take deposits for consultations?', 'Yes, if it’s connected to a booking system that takes deposits.'],
      ['Does it work on Instagram?', 'Most set-ups cover phone, WhatsApp and website chat. Instagram messages can often be connected too; check with your provider.'],
      ['What if a client asks a medical question?', 'The assistant passes it to a practitioner and books a consultation instead of answering.'],
      ['Will it reduce no-shows?', 'Automatic reminders and deposits are two of the most effective ways to reduce no-shows.'],
    ],
    citations: cite(SRC.asaBotox, SRC.ico),
  },

  /* #6 */
  {
    id: 'post-ai-receptionist-for-physiotherapy',
    slug: 'ai-receptionist-for-physiotherapy',
    cluster: 'AI receptionist',
    keywords: [6],
    title: 'AI Receptionist for Physiotherapy Clinics: Stop Losing Patients to Voicemail',
    seoTitle: 'AI Receptionist for Physio Clinics: Never Miss a Booking',
    seoDescription: 'Physios can’t answer the phone mid-treatment. How an AI receptionist books assessments, answers insurance questions and keeps courses of treatment on track.',
    focusKeyword: 'ai receptionist for physiotherapy',
    secondaryKeywords: ['ai receptionist for physio', 'physio clinic call answering', 'physiotherapy booking calls'],
    stage: 'decision',
    excerpt: 'When you’re treating a patient you can’t answer the phone. Here’s how physio clinics use an AI receptionist to book new patients while they work.',
    tags: ['AI receptionist', 'Physiotherapy', 'Bookings'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For physio clinics', lines: ['Book new patients', 'while you treat'], points: ['Assessments', 'Insurers', 'Follow-ups'] },
    coverAlt: 'An AI receptionist for physio clinics booking assessments, answering insurer questions and follow-ups',
    direct: ['How can an AI receptionist help a physiotherapy clinic?', 'Physiotherapists are hands-on with patients all day and can’t answer the phone. An AI receptionist answers every call and message, books initial assessments and follow-ups, answers questions about prices and insurers, and sends reminders. Questions about injuries or symptoms are passed to a physiotherapist.'],
    takeaways: [
      'Solo and small physio clinics miss calls every time they’re treating someone.',
      'People in pain book quickly, usually with whoever answers first.',
      'The assistant can book assessments, handle insurers and send reminders.',
      'It should never assess symptoms; that’s the physio’s job.',
      'Rebooking follow-ups keeps courses of treatment on track.',
    ],
    body: [
      `If you run a small physio clinic, you know the feeling. Your phone buzzes in your pocket halfway through a treatment. You can’t answer. By the time you check at the end of the session, they’ve found someone else.

People with a bad back or a sports injury want to be seen soon. They don’t leave voicemails and wait.

## What the assistant handles

- New patient enquiries and initial assessment bookings
- Follow-up bookings, moves and cancellations
- Prices, self-pay and which insurers you work with
- “Do I need a GP referral?” (your answer, in your words)
- Directions, parking and what to wear
- Reminders the day before

It answers on the phone, WhatsApp and your website, and books into your diary.

## What it leaves to you

It won’t assess an injury, suggest exercises or tell anyone whether physio is right for them. If a caller describes red-flag symptoms, it follows the rules you set, which normally means telling them to seek urgent medical help and flagging it to you.`,
      note('Keep courses of treatment going', 'Patients who drop out halfway don’t get better, and your diary gets gaps. An assistant that sends reminders and makes rebooking easy by text or WhatsApp keeps more patients on track.'),
      `## A day in a small clinic`,
      table('Calls on a typical day', [
        ['Time', 'Call', 'What happens'],
        ['9.15am (you’re treating)', 'New patient, knee pain', 'Assistant books an assessment for tomorrow'],
        ['12.40pm', 'Existing patient needs to move', 'Assistant reschedules and updates the diary'],
        ['6.30pm (closed)', '“Do you take my insurer?”', 'Assistant answers and books'],
        ['9pm', 'WhatsApp: price of a sports massage', 'Assistant replies and offers a slot'],
      ]),
      `Our [AI receptionist](/digital-receptionist) is built for exactly this. Read more about [marketing a physiotherapy clinic](/insights/marketing-for-physiotherapy-clinic).`,
      cta('Book a free demo. We’ll show you the assistant booking a physio assessment into a real diary.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist book physio appointments?', 'Yes, when it’s connected to your booking system. It can book assessments and follow-ups and reschedule appointments.'],
      ['Can it answer insurance questions?', 'It can tell patients which insurers you work with and what they need to bring. Checking individual cover stays with your team.'],
      ['What happens if a patient describes serious symptoms?', 'It follows your escalation rules, usually advising urgent medical help and alerting you. It never assesses symptoms.'],
      ['Is it worth it for a solo physio?', 'Often most of all. Solo physios can’t answer while treating, so they miss the most calls.'],
      ['Can it send appointment reminders?', 'Yes, by text or WhatsApp, which helps reduce missed appointments.'],
    ],
    citations: cite(SRC.hcpc, SRC.ico),
  },

  /* #7 */
  {
    id: 'post-ai-receptionist-for-vets',
    slug: 'ai-receptionist-for-vets',
    cluster: 'AI receptionist',
    keywords: [7],
    title: 'AI Receptionist for Vets: Handling Routine Calls So Your Team Can Handle Emergencies',
    seoTitle: 'AI Receptionist for Vets: Routine Calls Handled',
    seoDescription: 'How vet practices use an AI receptionist for vaccination bookings, repeat prescriptions and opening hours, while every emergency goes straight to a person.',
    focusKeyword: 'ai receptionist for vets',
    secondaryKeywords: ['ai receptionist for veterinary clinics', 'vet practice call answering', 'veterinary receptionist'],
    stage: 'decision',
    excerpt: 'Vet receptions are overwhelmed by routine calls while worried owners wait on hold. An AI receptionist takes the routine calls, and gets emergencies to a person faster.',
    tags: ['AI receptionist', 'Vets', 'Call answering'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For vet practices', lines: ['Routine calls handled,', 'emergencies prioritised'], points: ['Vaccinations', 'Repeat meds', 'Urgent first'] },
    coverAlt: 'An AI receptionist for vets handling vaccination bookings and repeat medication requests, with emergencies prioritised',
    direct: ['Can vets use an AI receptionist?', 'Yes, for routine calls: booking vaccinations and check-ups, repeat prescription requests, opening hours, prices and directions. Emergencies, sick animals and any clinical question must go straight to the veterinary team or your out-of-hours provider. Set up well, it shortens hold times for the calls that matter most.'],
    takeaways: [
      'A lot of vet calls are routine: vaccinations, repeat medication, opening hours.',
      'Every call about a sick or injured animal must reach a person quickly.',
      'The assistant can book, take repeat prescription requests and answer questions.',
      'It should never advise on an animal’s health.',
      'Taking routine calls off reception means urgent calls wait less.',
    ],
    body: [
      `A vet reception phone line carries two very different kinds of call. “Can I book Bella’s booster?” and “My dog’s eaten chocolate.” When the line is jammed with the first kind, the second kind waits too.

An AI receptionist helps by taking the routine calls, so your team has more time for the urgent ones.

## Routine calls it can take

- Booking vaccinations, check-ups, nail clips and nurse clinics
- Repeat medication requests, passed to your team to approve
- Opening hours, prices and directions
- Moving or cancelling appointments
- Reminders for boosters and appointments

## Calls that go straight to a person

Any call about an animal that’s unwell, injured, has eaten something harmful or is in distress. The assistant’s only job there is to get the owner to your team, or to your out-of-hours provider, as fast as possible. It must never give advice about an animal’s health.`,
      note('Set your emergency route first', 'Before anything else, agree with your vets exactly what the assistant does with an urgent call, in hours and out of hours. Test it. That route matters more than any booking feature.', 'warning'),
      table('Who handles what', [
        ['Call', 'Handled by'],
        ['Vaccination or check-up booking', 'Assistant'],
        ['Repeat prescription request', 'Assistant takes it, vet approves'],
        ['Opening hours and prices', 'Assistant'],
        ['Sick or injured animal', 'Straight to the team or out-of-hours provider'],
        ['Anything clinical', 'Veterinary team'],
      ]),
      `## Worth it for a small practice?

If your team regularly can’t answer during consults and surgery, yes. Clients ringing for routine things get booked, and the phone is freer for the calls that can’t wait.

See how our [AI receptionist](/digital-receptionist) works.`,
      cta('We’ll show you how the assistant books a routine appointment and puts an urgent call through to your team.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist handle vet emergencies?', 'Its only role in an emergency is to get the owner to your team or out-of-hours provider immediately. It must not give advice.'],
      ['Can it take repeat prescription requests?', 'Yes. It can take the request and pass it to your team, who approve it as normal.'],
      ['Can it book vaccinations?', 'Yes, if it’s connected to your practice booking system.'],
      ['Will clients mind talking to an assistant?', 'Most care about getting an answer quickly. It should always say it’s an assistant and offer a person when needed.'],
      ['Does it work out of hours?', 'Yes. It can answer routine questions and direct urgent calls to your out-of-hours provider.'],
    ],
    citations: cite(RCVS, SRC.ico),
  },

  /* #8, #9, #29 */
  {
    id: 'post-ai-receptionist-for-salons',
    slug: 'ai-receptionist-for-salons',
    cluster: 'AI receptionist',
    keywords: [8, 9, 29],
    title: 'AI Receptionist for Hair and Beauty Salons: Book Clients Without Putting Down the Scissors',
    seoTitle: 'AI Receptionist for Salons: Book Without Stopping',
    seoDescription: 'How hair and beauty salons use an AI receptionist to answer calls and WhatsApps, book appointments and cut no-shows, without stopping mid-appointment.',
    focusKeyword: 'ai receptionist for hair salon',
    secondaryKeywords: ['ai receptionist for beauty salon', 'answering service for salons', 'ai receptionist for nail salon', 'salon phone answering'],
    stage: 'decision',
    excerpt: 'You can’t answer the phone with foils in someone’s hair. An AI receptionist books clients by phone, WhatsApp and Instagram while you work, and reminds them to turn up.',
    tags: ['AI receptionist', 'Salons', 'Bookings', 'No-shows'],
    cats: [CAT.automation],
    cover: { eyebrow: 'For salons', lines: ['Book clients without', 'putting down the scissors'], points: ['Calls', 'WhatsApp', 'Reminders'] },
    coverAlt: 'An AI receptionist for salons booking clients by phone and WhatsApp and sending reminders',
    direct: ['Can a salon use an AI receptionist?', 'Yes. An AI receptionist answers a salon’s calls, WhatsApp messages and website chat, checks the diary for the right stylist and service length, books the appointment and sends reminders. It’s especially useful for salons without a front desk, where stylists can’t answer mid-appointment.'],
    takeaways: [
      'Salons without a front desk miss calls every time a stylist is with a client.',
      'The assistant needs to know service lengths and which stylist does what.',
      'WhatsApp is often clients’ favourite way to book.',
      'Reminders and deposits cut no-shows and last-minute gaps.',
      'It can fill cancellations by offering the slot to people who wanted that day.',
    ],
    body: [
      `Most salons don’t have a receptionist. They have a stylist who dashes to the phone between clients, and a ringing phone during a colour appointment that nobody answers.

Clients who can’t get through don’t wait. They book with the salon that answered, or the one with online booking.

## What an AI receptionist does for a salon

- Answers calls, WhatsApp and website messages while you’re working
- Knows your services, prices and how long each one takes
- Books with the right stylist, in a gap that actually fits
- Moves and cancels appointments
- Sends reminders the day before

## Getting the details right

Salon booking is fiddlier than most. A cut and colour isn’t the same length as a trim, some stylists don’t do certain services, and new clients may need a patch test first. A good set-up includes all of that, so the assistant doesn’t book a balayage into a 30-minute gap.`,
      table('What to set up before you go live', [
        ['Detail', 'Why it matters'],
        ['Service durations', 'Stops double-bookings and overruns'],
        ['Which stylist does which service', 'Books clients with the right person'],
        ['Patch test rules', 'New colour clients are booked for a test first'],
        ['Deposit policy', 'Protects long appointments'],
        ['Cancellation policy', 'The assistant can explain it politely'],
      ]),
      note('No-shows cost more than you think', 'A missed two-hour colour appointment is a big hole in the day. Reminders by text or WhatsApp, and a deposit for long services, are the simplest fixes.'),
      `## Beauty salons and nail bars

The same works for beauty and nails: brows, lashes, nails and treatments. The assistant answers the common questions (“how long do gel nails last?”, “do you do lash lifts?”) from your own answers, and books the slot.

See our [AI receptionist](/digital-receptionist), or read about [reducing no-shows and cancellations](/insights/how-to-reduce-no-shows).`,
      cta('Book a free demo. We’ll show you a client booking a cut and colour by WhatsApp, straight into your diary.', 'Book a free demo'),
    ],
    faqs: [
      ['Can an AI receptionist book salon appointments?', 'Yes, if it’s connected to your salon booking system. It can pick the right stylist and a slot long enough for the service.'],
      ['Does it work with WhatsApp?', 'Yes. Many salon clients prefer booking by WhatsApp, and the assistant can reply and book there too.'],
      ['Can it handle patch tests?', 'It can follow your rules, for example booking a patch test before a first colour appointment.'],
      ['How does it reduce no-shows?', 'By sending reminders before each appointment and, if you use them, taking deposits for longer services.'],
      ['Is it worth it for a one-chair salon?', 'Often yes. Solo stylists miss the most calls because there’s nobody else to answer.'],
    ],
    citations: cite(SRC.ico),
  },
];
