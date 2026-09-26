/**
 * Extra sections for posts that were thinner than we wanted. Each entry is
 * inserted just before the post's call to action (see withExtras below).
 */
import { table } from './lib.mjs';

export const EXTRAS = {
  'ai-receptionist-for-aesthetic-clinics': [
    `## Setting it up in a week

**Day 1:** list your treatments, consultation prices and the wording you’re happy with.
**Day 2:** decide which questions always go to a practitioner: suitability, medication, pregnancy, previous reactions.
**Day 3:** connect your booking system, deposits and reminders.
**Days 4 to 5:** test it with your team, pretending to be nervous first-time clients.
**Day 6 onwards:** go live on WhatsApp and website chat first, then phone.

Most of the work is deciding what you want it to say. The software is the easy part.`,
  ],
  'ai-receptionist-for-physiotherapy': [
    `## Questions to ask before you choose one

1. Can it book into the diary system I already use?
2. Can it tell a new assessment from a follow-up, and book the right length?
3. Will it pass red-flag symptoms to me straight away?
4. Can patients reschedule by text or WhatsApp?
5. What does it cost in a busy month, not just a quiet one?
6. Can I change prices and opening hours myself?

If the answer to the first question is no, you’ll spend your evenings copying bookings across. That defeats the point.`,
  ],
  'ai-receptionist-for-vets': [
    `## What clients say about getting through

The most common complaint about vet practices in reviews isn’t the vets. It’s the phone: “couldn’t get through”, “on hold for 20 minutes”. Taking routine calls off the line is one of the simplest ways to improve how clients feel about the practice, before they’ve even walked in.

## Starting small

You don’t have to automate everything at once. Many practices start with out-of-hours calls and repeat prescription requests, then add booking once the team trusts it.`,
  ],
  'ai-receptionist-for-electricians': [
    `## A quick cost check

Say you miss eight calls a week. If three of those were real jobs, and your average job is £250, that’s about £750 a week walking to other electricians. Even if you only win back one of them, call answering usually pays for itself in the first week of the month.

## What to tell the assistant about you

- The areas you cover, and ones you don’t
- Jobs you do and jobs you don’t (commercial, three-phase, solar)
- How far ahead you’re booked, so it doesn’t promise tomorrow when you’re full
- Your callout fee and typical prices, if you share them
- When to put a call straight through to you`,
  ],
  'ai-receptionist-for-tradesmen': [
    `## What a good summary looks like

Instead of a voicemail saying “ring me back”, you get something like this:

“Sarah Khan, 07700 900123. Wants a rear extension on a 1930s semi in Headingley, LS6. Has drawings, no planning yet. Budget around £60k. Free weekday afternoons. Photos sent by WhatsApp. Survey booked Thursday 3pm.”

That’s the difference between a lead you have to chase and a job you can plan for.`,
    table('Set-up checklist for trades', [
      ['Tell it', 'Why'],
      ['Areas you cover', 'Stops wasted surveys'],
      ['Jobs you take on', 'Turns away the wrong work politely'],
      ['How far ahead you’re booked', 'Sets honest expectations'],
      ['What counts as urgent', 'Gets emergencies to you fast'],
    ]),
  ],
  'ai-receptionist-for-cleaning-business': [
    `## A worked example

A three-bedroom house, fortnightly clean, two bathrooms, one dog, parking on the drive. The assistant collects all of that, checks your price list, and replies:

“Thanks, Emma. A fortnightly clean for a three-bed, two-bath home is £X per visit. We have a regular slot on Tuesday mornings starting next week. Would you like to book it?”

The customer gets a price in a minute. You get a booked regular client without picking up the phone.

## What to watch

Prices for unusual jobs, like hoarder cleans or post-build cleans, are better quoted by you after seeing photos. Tell the assistant to book a quote visit for those rather than guess.`,
  ],
  'ai-receptionist-for-garages': [
    `## Calls that are worth the most

MOTs bring the customer in. Repairs found at the MOT, and the service they book next year, are where the money is. A garage that answers every MOT call, reminds customers every year and books them straight back in keeps customers for years.

## Before you go live

- Your MOT and service prices by vehicle type
- How long each job takes, so the diary doesn’t overfill
- Whether you offer collection, courtesy cars or waiting
- Which jobs you don’t do (for example, certain makes or EV repairs)
- What to say when someone asks “is my car ready?” if the assistant can’t see job status`,
  ],
  'ai-receptionist-for-estate-agents': [
    `## Qualifying without putting people off

Buyers and tenants don’t mind a couple of questions, as long as they get a viewing out of it. Keep qualifying short:

1. Are you buying or renting?
2. Do you have a mortgage agreed in principle? (buyers)
3. Do you have a property to sell? (buyers)
4. When are you looking to move?

Anything more can wait for the negotiator.

## Valuation calls

Treat these as your most important calls. The assistant should book them quickly, with a named valuer and a time, and alert the valuer straight away. Sellers often ask two or three agents; the first to turn up well-prepared often wins the instruction.`,
  ],
  'ai-receptionist-for-accountants': [
    `## A January example

It’s 20 January. A sole trader rings at 7pm: they’ve never filed a return and they’re panicking. The assistant asks what they do, whether they’re registered for Self Assessment, and whether they have their figures. It explains your fee, checks your capacity rules, and either books a call for tomorrow or tells them honestly that you’re full this season.

Either way, they get an answer tonight, and your team starts tomorrow with a list of qualified enquiries instead of voicemails.

## Capacity rules

Tell the assistant how many new Self Assessment clients you can take after a certain date, and what to say when you’re full. It avoids promises your team can’t keep.`,
  ],
  'ai-receptionist-for-gyms': [
    `## What to put in its answers

- Membership options, prices and joining fees
- Class timetable and how to book
- Trial or taster session details
- Opening hours, parking and facilities
- Cancellation and freeze policy
- Whether beginners are welcome (they want to hear yes)

## Measure it

Count enquiries, trials booked, trials attended and joiners each week. If trials are booked but not attended, add a reminder. If trials don’t join, look at the follow-up.

## A Sunday night, handled

9.40pm, WhatsApp: “Hi, do you do beginner classes? I’ve never lifted before.” The assistant replies straight away: yes, there’s a beginners’ strength class on Tuesday at 6.30pm and Thursday at 7pm, the first one’s free, and a coach will show them the basics. It books Tuesday, sends the address and what to bring, and reminds them on Tuesday afternoon.

Monday morning, your coach sees a new beginner booked in, with a note that they’re nervous. That’s a member in the making.`,
  ],
  'ai-receptionist-for-restaurants': [
    `## Busy nights and big groups

Group bookings are worth the most and cause the most trouble. Give the assistant clear rules: the largest group it can book, when a deposit is needed, and when to pass it to a manager. For Christmas and other busy periods, update availability and menus early.

## What it shouldn’t touch

Allergies, as above. Complaints, which go to a manager. And anything about staff or suppliers. Keep it to bookings, opening hours and practical questions.

## Is it worth it for a small restaurant?

If your phone rings during service and nobody answers, yes. Count how many calls you miss on a Friday and Saturday. Each one is probably a table.`,
  ],
  'booking-system-for-dental-practice': [
    `## Setting it up without chaos

1. Start with one appointment type, such as hygiene, for existing patients.
2. Set the exact length and which clinicians offer it.
3. Run it for a month and check the diary for problems.
4. Add check-ups, then new patient examinations.
5. Keep emergencies and complex treatment off the online menu.

Rolling it out slowly lets the team trust it before it’s taking a big share of bookings.`,
  ],
  'booking-system-for-physio': [
    `## A patient’s journey, done well

Tuesday, 9pm: a runner with knee pain searches “sports physio near me”, finds you, sees an assessment available Thursday, and books it in a minute. They fill in a health questionnaire and add their insurer. Wednesday: a reminder with parking details. Thursday: assessment, and the next session booked before they leave. A week later: another reminder. Six sessions later: discharged, and a review request.

Every step there is the booking system and messages doing their job. The physio just treats.`,
  ],
  'booking-system-for-aesthetics': [
    `## Questions to ask each provider

1. Can clients book a consultation first, with treatment only after?
2. Where are medical history, consent forms and photos stored, and who can access them?
3. Can I take deposits, and what are the card fees?
4. Can I send reminders by WhatsApp as well as text and email?
5. How easy is it to export my client records if I leave?
6. What does it cost with my number of practitioners?

Run a real booking through two or three systems before you choose. How it feels for the client matters as much as the feature list.`,
  ],
  'booking-system-for-salons': [
    `## Test it like a client

Before you commit, book yourself a cut and colour on your phone at 10pm. Count the taps. Check it offers the right stylist and a slot long enough. Try to cancel. If any of it is annoying for you, it’s annoying for your clients.

## Moving from phone and paper

Import your client list, set up services and stylists, and run both systems side by side for a couple of weeks. Tell regulars about the new booking link at the till and in their next reminder.`,
  ],
  'booking-system-for-tradespeople': [
    `## A simple set-up that works for most sole traders

- A shared calendar on your phone for every job, with travel time blocked out
- Online booking only for fixed-price jobs like services and certificates
- Every call answered, with details texted to you
- A reminder the day before each job
- Annual reminders for services and certificates

That covers most of what a full job management system does for a one-person business. Add software when you add staff.`,
  ],
  'how-to-reduce-patient-no-shows': [
    `## Measuring it

Track missed appointments each week, and by appointment type. If new patient appointments are missed more than follow-ups, look at how they were booked and reminded. If Monday mornings are worst, try an extra reminder on Friday afternoon.

## What doesn’t work

Long reminder messages, reminders sent weeks early and never again, and making patients ring during office hours to cancel. All three increase no-shows rather than reducing them.`,
  ],
  'appointment-reminder-text-examples': [
    `## Two-step reminders for bigger appointments

For long or expensive appointments, send two reminders:

**Three days before:**
“Hi Alex, just a heads-up that your appointment with us is on Friday at 2pm. Need to change it? Reply here and we’ll sort it.”

**The day before:**
“See you tomorrow at 2pm, Alex. Reply YES to confirm.”

The first gives time to rebook if plans have changed. The second is the nudge.`,
  ],
  'how-to-get-more-work-builders-roofers': [
    `## Writing a project page that sells

Keep it short and specific:

- What the customer wanted, in one sentence
- What made it tricky (access, an old property, a tight timescale)
- What you did about it
- How long it took
- Five or six good photos
- A quote from the customer, if they’re happy to give one

Nobody reads a wall of text. They look at the photos, read the first line, and check the review.`,
  ],
  'how-to-get-more-cleaning-customers': [
    `## Words that win cleaning clients

People hiring a cleaner worry about three things: trust, reliability and hassle. Answer each on your website and in your replies.

- Trust: insured, vetted staff, reviews from local clients
- Reliability: the same cleaner each time where possible, and you tell them if anything changes
- Hassle: clear prices, easy booking, easy to pause or cancel

A reply that covers all three in a couple of sentences beats a long brochure.`,
  ],
  'how-to-get-more-accounting-clients': [
    `## A page that converts

A good niche page for an accountant answers:

1. Who is this for? (“Landlords with one to 20 properties”)
2. What do you do for them? (returns, allowable expenses, Making Tax Digital)
3. What does it cost? (a fixed fee or range)
4. Why you? (experience with this kind of client, reviews)
5. What happens next? (book a free 15-minute call)

Five short sections. That page will do more than a generic services list ever will.`,
  ],
  'how-to-get-more-gym-members': [
    `## Reviews that sell a gym

The best gym reviews mention a coach by name and a result: “Sam helped me deadlift my bodyweight after six months.” Ask members for reviews after milestones, like their first month, a personal best or finishing a challenge. They’re happiest then, and the review is more specific.`,
  ],
  'how-to-get-more-customers-for-my-restaurant': [
    `## Your Google profile, week by week

- Week 1: replace old photos with new ones of your best dishes and the room
- Week 2: update the menu and prices
- Week 3: reply to every review from the last three months
- Week 4: add holiday hours for the next busy period

A month of small updates makes a real difference to how the profile looks to someone deciding where to eat tonight.`,
  ],
  'how-to-get-more-clients-for-beauty-salon': [
    `## Your first 20 reviews

If you have few reviews, message your 20 most loyal clients personally. Most will happily leave one for a salon they love. After that, ask every client at the till, every day. Within a few months you’ll have more reviews than most salons nearby.`,
  ],
  'how-to-get-more-patients-in-your-clinic': [
    `## Condition pages that help patients and search

A good condition page explains, in plain language, what the condition is, how your clinic can help, who treats it, what the first appointment involves, and how much it costs. Keep claims modest and accurate. “We can assess your back pain and create a treatment plan” is better than any promise of a cure.`,
  ],
  'how-to-get-my-business-on-google-maps': [
    `## A good business description

You have up to 750 characters. Use them to say what you do, where, and for whom, in plain English. For example:

“Family-run plumbing and heating business covering Leeds and surrounding areas. We fix leaks, service and repair boilers, and fit new bathrooms. Gas Safe registered, with same-day appointments for urgent jobs.”

No keyword lists, no links, no special offers. Just a clear picture of your business.`,
  ],
  'local-seo-for-trades': [
    `## A month-one plan

- Week 1: complete your Google profile, add ten photos, list every service
- Week 2: ask your last 20 customers for reviews
- Week 3: add a website page for your most profitable service
- Week 4: check your details on the main directories and fix any that don’t match

Then keep going: a review request after every job, a new photo each week, a new service or area page each month.`,
  ],
  'qr-code-for-google-reviews': [
    `## Testing your code

Before printing, scan it with two or three different phones. Make sure it opens your review form, not just your profile. Print it at least 3cm wide so it scans from a desk or counter. Keep the area around it clear of other designs so phones can read it easily.`,
  ],
  'google-reviews-for-dental-practices': [
    `## Getting the team on board

Reviews come from the whole team, not just reception. Hygienists and dentists can mention it at the end of a good appointment: “If you were happy today, a quick Google review really helps us.” Reception then hands over the card or sends the link. When everyone asks, the numbers change quickly.`,
  ],
  'ai-automation-for-dental-practices': [
    `## Where to start

If you automate one thing first, make it the phone overflow: calls the team can’t answer during busy periods and after hours. It’s where practices lose the most new patients. Recalls and reminders come next, because they fill the diary with patients you already have.`,
  ],
  'crm-for-beauty-salon': [
    `## A simple win-back message

“Hi Priya, it’s been a little while since we saw you at [Salon]. We’d love to have you back. We have some availability next week if you’d like to book: [link]”

Send it to clients who haven’t visited in three months and have agreed to hear from you. No pressure, no discount needed. Many simply forgot to rebook.`,
  ],
};

/** Insert extra sections just before the post’s last call to action. */
export function withExtras(slug, body) {
  const extra = EXTRAS[slug];
  if (!extra) return body;
  let at = body.length;
  for (let i = body.length - 1; i >= 0; i--) {
    if (typeof body[i] === 'object' && body[i]._type === 'cta') { at = i; break; }
  }
  return [...body.slice(0, at), ...extra, ...body.slice(at)];
}

