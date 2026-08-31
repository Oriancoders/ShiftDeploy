/**
 * Adds the AI-SEO layer to the six posts that predate it.
 *
 * Every field below is drawn from what each post actually argues and the
 * figures it already cites - nothing is invented, and no body content is
 * touched. Patch (not createOrReplace) so the existing body, images and
 * classic SEO fields are left exactly as they are.
 *
 * Re-runnable: patching the same fields twice is a no-op.
 *
 *   node scripts/enrich-legacy-posts.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const env = {};
for (const line of fs.readFileSync(path.join(root, '.env.local'), 'utf8').split(/\r?\n/)) {
  const m = /^([A-Z0-9_]+)=(.*)$/.exec(line.trim());
  if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
}

if (!env.SANITY_API_TOKEN) {
  console.error('SANITY_API_TOKEN is empty in .env.local');
  process.exit(1);
}

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
  token: env.SANITY_API_TOKEN,
});

let n = 0;
const k = (p) => `${p}${n++}`;
const faqs = (items) => items.map((i, idx) => ({ _key: `faq${idx}`, ...i }));
const list = (items, p) => items.map((i, idx) => ({ _key: `${p}${idx}`, ...i }));

/* ------------------------------------------------------------------ */

const ENRICHMENTS = {
  /* 1. LCP above 3.5s on booking pages */
  '17e06878-a1c0-420a-9f04-af1005cb745f': {
    directAnswer: {
      question: 'Why does a slow booking page cost a dental practice money?',
      answer:
        'Largest Contentful Paint on a booking page measures the gap between a patient deciding to book and the interface appearing. Above 2.5 seconds that gap starts costing appointments, because the patient has committed intent and the page has returned nothing. Most practices never see the loss, since the session ends before any conversion is recorded.',
      supportingStat:
        'As page load time rises from 1 to 5 seconds, bounce probability increases by 90%.',
      statSource: 'Google / SOASTA',
      statSourceUrl: 'https://web.dev/articles/lcp',
    },
    keyTakeaways: {
      title: 'Key takeaways',
      points: [
        'LCP on a booking page measures the interval between a patient deciding to act and the booking interface becoming usable.',
        'A booking page is almost always slower than the homepage, because it carries a booking widget, chat, reviews and tracking scripts the homepage does not.',
        'Time to First Byte sets a floor no image optimisation can get under; a 1.1 second TTFB leaves only 1.4 seconds of the 2.5 second budget.',
        'Mobile is where practice bookings happen, and mobile TTFB averages roughly twice desktop.',
        'Recovering 90 sessions a month on an 800-session booking page is worth around $4,100 monthly at a 12% conversion and $380 appointment value.',
      ],
    },
    faqSection: {
      title: 'Frequently asked questions',
      items: faqs([
        {
          isPrimary: true,
          question: 'What is a good LCP for a dental booking page?',
          answer:
            'Under 2.5 seconds on mobile. That threshold is the window in which a visitor\'s attention stays anchored to the page rather than shifting to the back button. Booking pages deserve a stricter target than the rest of the site because the visitor has already decided to act.',
        },
        {
          question: 'Why is my booking page slower than my homepage?',
          answer:
            'Booking pages carry a payload other pages do not: a calendar embed or booking widget, a live chat script, a review feed, a cookie banner and several tracking tags. Each was added separately by a different vendor, and together they push the booking widget to load last.',
        },
        {
          question: 'Will a website redesign fix my slow booking page?',
          answer:
            'Not if the hosting stays the same. Time to First Byte is the structural floor beneath every other metric, and on shared hosting it commonly runs 600 to 1,400 milliseconds. Practices that redesign without changing infrastructure typically report no improvement in booking conversion, because the design was never the ceiling.',
        },
        {
          question: 'How do I check my own booking page LCP?',
          answer:
            'Run the booking page URL, not the homepage, through Google PageSpeed Insights and read the mobile tab specifically. Note the LCP and the TTFB. A TTFB above 600ms on mobile points at hosting rather than images.',
        },
        {
          question: 'How much revenue does a slow booking page actually lose?',
          answer:
            'On a page taking 800 monthly sessions with a 4.2 second LCP, recovering 90 to 120 sessions that currently bounce is worth roughly $4,100 a month at a 12% conversion rate and a $380 average appointment. That requires no additional traffic or ad spend.',
        },
      ]),
    },
    citations: list(
      [
        { title: 'Largest Contentful Paint (LCP)', publisher: 'Google web.dev', url: 'https://web.dev/articles/lcp' },
        { title: 'Time to First Byte (TTFB)', publisher: 'Google web.dev', url: 'https://web.dev/articles/ttfb' },
        { title: 'Core Web Vitals', publisher: 'Google web.dev', url: 'https://web.dev/articles/vitals' },
      ],
      'cite'
    ),
    entities: list(
      [
        { name: 'Largest Contentful Paint', type: 'Thing', sameAs: 'https://web.dev/articles/lcp' },
        { name: 'Time to First Byte', type: 'Thing', sameAs: 'https://web.dev/articles/ttfb' },
        { name: 'Core Web Vitals', type: 'Thing', sameAs: 'https://web.dev/articles/vitals' },
        { name: 'ShiftDeploy', type: 'Organization', sameAs: 'https://shiftdeploy.com' },
      ],
      'ent'
    ),
  },

  /* 2. Dental website losing patients before prices */
  '1df07e7c-a2f8-4db6-99be-00fce6c0978b': {
    directAnswer: {
      question: 'Why is my dental website losing patients on mobile?',
      answer:
        'Usually because the site is slow on a mid-range phone rather than broken. Oversized hero images, accumulated third-party scripts, shared hosting and late layout shifts combine so the patient waits, feels the practice is disorganised, and closes the tab before reaching treatments, pricing or the booking form.',
      supportingStat:
        'Google has reported that 53% of mobile visitors abandon a site taking longer than three seconds to load.',
      statSource: 'Google / SOASTA',
      statSourceUrl: 'https://web.dev/articles/vitals',
    },
    keyTakeaways: {
      title: 'Key takeaways',
      points: [
        'The site is reviewed on a fast office laptop, but patients experience it on a mid-range phone on 4G.',
        'A slow dental website is rarely one fault; it is usually oversized images, excess scripts, shared hosting and layout shift compounding.',
        'Patients do not diagnose a Largest Contentful Paint issue, they conclude the clinic feels disorganised and leave.',
        'Every pound of Google Ads or Meta spend sent to a slow landing page is partly wasted, because the click is paid for whether or not the page renders.',
        'Test the treatments and pricing pages, not just the homepage, on the mobile tab of PageSpeed Insights.',
      ],
    },
    faqSection: {
      title: 'Frequently asked questions',
      items: faqs([
        {
          isPrimary: true,
          question: 'How fast should a dental website load on mobile?',
          answer:
            'Aim for Largest Contentful Paint under 2.5 seconds, and closer to 2 seconds on booking-led pages. Interaction to Next Paint should be under 200 milliseconds so taps feel immediate, and Cumulative Layout Shift close to zero on booking and pricing pages.',
        },
        {
          question: 'Why does my website look fine to me but slow to patients?',
          answer:
            'You are almost certainly viewing it on a laptop over office broadband with the assets already cached. Patients arrive on a mid-range Android or older iPhone over mobile data with an empty cache, which is a fundamentally different experience of the same site.',
        },
        {
          question: 'Is a slow website really wasting my ad budget?',
          answer:
            'Yes. Paid traffic does not wait to see whether the page is fast, and you pay for the click regardless. If the landing page takes five seconds to appear, a meaningful share of that paid traffic leaves before seeing anything. The ads are not the problem; the experience after the click is.',
        },
        {
          question: 'What should I check before spending more on ads?',
          answer:
            'Run the treatments or pricing page through PageSpeed Insights on mobile, open the site on a real phone on 4G with the cache cleared, attempt a booking end to end, count the third-party widgets on the homepage, and ask when performance was last reviewed rather than design.',
        },
        {
          question: 'What causes layout shift on a dental website?',
          answer:
            'Late-loading banners, resizing ad or embed slots, and cookie notices that appear after content has already rendered. On a treatment page it is annoying. On a booking page it moves the form under the patient just as they reach for it.',
        },
      ]),
    },
    citations: list(
      [
        { title: 'Core Web Vitals', publisher: 'Google web.dev', url: 'https://web.dev/articles/vitals' },
        { title: 'Cumulative Layout Shift (CLS)', publisher: 'Google web.dev', url: 'https://web.dev/articles/cls' },
        { title: 'Interaction to Next Paint (INP)', publisher: 'Google web.dev', url: 'https://web.dev/articles/inp' },
      ],
      'cite'
    ),
    entities: list(
      [
        { name: 'Core Web Vitals', type: 'Thing', sameAs: 'https://web.dev/articles/vitals' },
        { name: 'Cumulative Layout Shift', type: 'Thing', sameAs: 'https://web.dev/articles/cls' },
        { name: 'PageSpeed Insights', type: 'SoftwareApplication', sameAs: 'https://pagespeed.web.dev/' },
        { name: 'ShiftDeploy', type: 'Organization', sameAs: 'https://shiftdeploy.com' },
      ],
      'ent'
    ),
  },

  /* 3. Google Ads before website audit */
  'a90c6888-7361-451e-89fc-44503e4fcb95': {
    directAnswer: {
      question: 'Should I run Google Ads before auditing my landing page?',
      answer:
        'No. Paid traffic sent to a landing page that has not been audited for conversion readiness pays full price for every click while a predictable share of visitors leave before the page renders. Audit and fix the page first, then buy traffic, or the campaign subsidises a problem it cannot solve.',
      supportingStat:
        'The landing page in this engagement was failing Google\'s Core Web Vitals assessment before any budget was committed.',
      statSource: 'ShiftDeploy audit',
      statSourceUrl: 'https://shiftdeploy.com/insights',
    },
    keyTakeaways: {
      title: 'Key takeaways',
      points: [
        'Running ads before a landing page audit is a consistent pattern among service businesses reporting poor return on ad spend.',
        'The traffic arrives and the page fails to convert it, so the conclusion drawn is usually that the ads did not work.',
        'A pre-campaign audit found this dental clinic\'s single-page site failing Core Web Vitals, which changed the priority order before any spend.',
        'Paid clicks cost the same whether or not the page renders in time, so a slow page converts budget directly into waste.',
        'Sequencing matters more than channel choice: fix conversion readiness first, then buy traffic.',
      ],
    },
    faqSection: {
      title: 'Frequently asked questions',
      items: faqs([
        {
          isPrimary: true,
          question: 'Should I fix my website before running Google Ads?',
          answer:
            'Yes, if the landing page has not been audited for conversion readiness. Paid traffic is charged per click regardless of whether the page renders in time, so sending it to a slow page converts budget into waste rather than enquiries.',
        },
        {
          question: 'Why would an agency turn down an ads request?',
          answer:
            'Because directing paid traffic at an unaudited landing page produces a predictable outcome: spend with no conversions, and a false conclusion that the channel does not work. Taking the work would have meant billing for a campaign already set up to underperform.',
        },
        {
          question: 'How do I know if my landing page is ready for paid traffic?',
          answer:
            'Run it through Core Web Vitals on mobile, confirm the primary call to action is visible and responsive within the first few seconds, and complete the enquiry or booking flow yourself on a phone. If any of those fail, the page is not ready.',
        },
        {
          question: 'What is the cost of running ads to a slow page?',
          answer:
            'You pay the full click price for every visitor, including the share who leave before content appears. That loss scales directly with budget and never appears as a line item, because the session ends before any conversion event fires.',
        },
      ]),
    },
    citations: list(
      [
        { title: 'Core Web Vitals', publisher: 'Google web.dev', url: 'https://web.dev/articles/vitals' },
        { title: 'PageSpeed Insights', publisher: 'Google', url: 'https://pagespeed.web.dev/' },
      ],
      'cite'
    ),
    entities: list(
      [
        { name: 'Google Ads', type: 'SoftwareApplication', sameAs: 'https://ads.google.com/' },
        { name: 'Core Web Vitals', type: 'Thing', sameAs: 'https://web.dev/articles/vitals' },
        { name: 'ShiftDeploy', type: 'Organization', sameAs: 'https://shiftdeploy.com' },
      ],
      'ent'
    ),
  },

  /* 4. Slow contact form submission speed */
  'c1d6662f-283d-4ea3-9878-1bbe33220f6c': {
    directAnswer: {
      question: 'Does slow contact form submission speed reduce conversions?',
      answer:
        'Yes. When a form gives no visual feedback for one to two seconds after submit, users cannot tell whether it registered. Some leave before the server confirms, producing leads that never reach your CRM; others click repeatedly, producing duplicates. Both distort your conversion data rather than appearing as an obvious failure.',
      supportingStat:
        'In audits of forms with 1-3 second submission delays, mobile completion rates fell 12-28% against desktop.',
      statSource: 'ShiftDeploy audit samples',
      statSourceUrl: 'https://shiftdeploy.com/services/shiftspeed',
    },
    keyTakeaways: {
      title: 'Key takeaways',
      points: [
        'Conversion Illusion is when analytics show normal traffic to the contact page but the inbox shows far fewer leads than that traffic predicts.',
        'A form that stalls without feedback triggers cognitive friction: the user cannot tell whether their action registered.',
        'Ghost leads are submissions abandoned during the lag, leaving a session in analytics but no record in the CRM.',
        'Duplicate submissions from repeated clicking distort pipeline analytics as much as the lost leads do.',
        'Mobile users on 4G are disproportionately affected, because network latency compresses the margin for acceptable response time.',
      ],
    },
    faqSection: {
      title: 'Frequently asked questions',
      items: faqs([
        {
          isPrimary: true,
          question: 'How fast should a contact form respond after submit?',
          answer:
            'Visual feedback should appear immediately on tap, before the server responds. Interaction to Next Paint under 200 milliseconds is the target. The server round trip can take longer provided the interface has already acknowledged the action.',
        },
        {
          question: 'What is a ghost lead?',
          answer:
            'A visitor who submits your form, experiences a lag with no confirmation, and navigates away before the server responds. The enquiry never reaches your CRM, so analytics record a session with no enquiry and the loss is invisible.',
        },
        {
          question: 'Why do I get duplicate form submissions?',
          answer:
            'Because the form gave no feedback on the first click, so the user assumed it failed and clicked again. Duplicates are a symptom of the same missing-feedback problem that causes ghost leads, not a separate bug.',
        },
        {
          question: 'Why does my inbox show fewer leads than my analytics suggest?',
          answer:
            'That gap is the signature of Conversion Illusion. Sessions reach the contact page at a normal rate but a share of submissions never complete, so traffic looks healthy while enquiries do not follow.',
        },
        {
          question: 'Are mobile users affected more by slow forms?',
          answer:
            'Yes. On 4G and LTE, network latency adds to server response time, so the same backend delay produces a longer perceived wait. That compresses the margin for acceptable response before the user gives up.',
        },
      ]),
    },
    citations: list(
      [
        { title: 'Interaction to Next Paint (INP)', publisher: 'Google web.dev', url: 'https://web.dev/articles/inp' },
        { title: 'Core Web Vitals', publisher: 'Google web.dev', url: 'https://web.dev/articles/vitals' },
      ],
      'cite'
    ),
    entities: list(
      [
        { name: 'Interaction to Next Paint', type: 'Thing', sameAs: 'https://web.dev/articles/inp' },
        { name: 'Conversion rate optimization', type: 'Thing', sameAs: 'https://en.wikipedia.org/wiki/Conversion_rate_optimization' },
        { name: 'ShiftDeploy', type: 'Organization', sameAs: 'https://shiftdeploy.com' },
      ],
      'ent'
    ),
  },

  /* 5. INP above 200ms on booking flows */
  'c57f6847-213a-47df-b544-cf6752119b63': {
    directAnswer: {
      question: 'What does INP above 200ms do to a booking flow?',
      answer:
        'It makes the booking widget feel unresponsive at the exact moment a patient is committing. LCP measures whether the page loaded; Interaction to Next Paint measures whether it works once it has. A patient who taps a date and waits 400 milliseconds experiences hesitation, not an error, and hesitation at the date picker is the most expensive abandonment in the funnel.',
      supportingStat:
        'Chrome usage data shows 90% of a user\'s time on a page is spent after it has loaded.',
      statSource: 'Chrome usage data',
      statSourceUrl: 'https://web.dev/articles/inp',
    },
    keyTakeaways: {
      title: 'Key takeaways',
      points: [
        'LCP and INP are different failure modes, and most practices measure only the first.',
        'A good INP score is 200 milliseconds or less; above that, taps stop feeling immediate.',
        'Booking widgets are especially vulnerable because the main thread is busy with third-party scripts at the moment of interaction.',
        'Abandonment at the date picker step is a near-certain booking lost, unlike a homepage bounce.',
        'Poor INP produces no error message, so it never appears in any log; it only shows as a flat conversion rate.',
      ],
    },
    faqSection: {
      title: 'Frequently asked questions',
      items: faqs([
        {
          isPrimary: true,
          question: 'What is a good INP score for a booking page?',
          answer:
            '200 milliseconds or less. Above that, the delay between a tap and the visual response becomes perceptible, and on a booking calendar that hesitation lands on a patient who had already decided to book.',
        },
        {
          question: 'What is the difference between LCP and INP?',
          answer:
            'LCP measures whether the page loaded, INP measures whether it responds once it has. They are separate failure modes, and a page can pass one while failing the other. Measuring only LCP misses everything that happens after the page appears, which is most of the visit.',
        },
        {
          question: 'Why is my booking widget slow to respond to taps?',
          answer:
            'Long JavaScript tasks are blocking the main thread. On a third-party booking embed or an Elementor page, the browser is typically still executing analytics, chat and review scripts at the moment the patient taps a date.',
        },
        {
          question: 'Why does drop-off at the date picker matter more than a homepage bounce?',
          answer:
            'Because the patient had already cleared every prior hurdle: they found the practice, evaluated the services, navigated to the booking page and started choosing a time. That session was a near-certain booking, so the loss is worth far more than an early exit.',
        },
        {
          question: 'How do I diagnose an INP problem?',
          answer:
            'Read field data rather than lab scores, since INP depends on real interactions. Check the INP value in PageSpeed Insights on mobile, then use session recordings to find where users tap and nothing appears to happen.',
        },
      ]),
    },
    citations: list(
      [
        { title: 'Interaction to Next Paint (INP)', publisher: 'Google web.dev', url: 'https://web.dev/articles/inp' },
        { title: 'Optimize long tasks', publisher: 'Google web.dev', url: 'https://web.dev/articles/optimize-long-tasks' },
        { title: 'Core Web Vitals', publisher: 'Google web.dev', url: 'https://web.dev/articles/vitals' },
      ],
      'cite'
    ),
    entities: list(
      [
        { name: 'Interaction to Next Paint', type: 'Thing', sameAs: 'https://web.dev/articles/inp' },
        { name: 'First Input Delay', type: 'Thing', sameAs: 'https://web.dev/articles/fid' },
        { name: 'Core Web Vitals', type: 'Thing', sameAs: 'https://web.dev/articles/vitals' },
        { name: 'ShiftDeploy', type: 'Organization', sameAs: 'https://shiftdeploy.com' },
      ],
      'ent'
    ),
  },

  /* 6. Static contact forms */
  'f90a5176-bf60-4c0d-82c0-1a5e2dfa3050': {
    directAnswer: {
      question: 'Why can a static contact form not capture high-intent appointments?',
      answer:
        'Because it is a message relay, not a booking system. It has no awareness of your availability, cannot prevent a double booking, and cannot confirm anything. It captures an expression of interest, which the practice then has to resolve into an appointment by hand, usually many hours later.',
      supportingStat:
        'Only 9.09% of users who encounter a contact form actually submit it.',
      statSource: 'Zuko Analytics',
      statSourceUrl: 'https://www.zuko.io/',
    },
    keyTakeaways: {
      title: 'Key takeaways',
      points: [
        'A static form accepts input and delivers it to an inbox; checking availability and confirming a time are outside its functional scope.',
        'Leads contacted within five minutes are ten times more likely to convert, while average medical practice response time is 47 hours.',
        'Peak booking windows for med spas are Tuesday 8-10pm and Sunday 4-6pm, precisely when no staff member is reading the inbox.',
        'Letting patients book immediately after submitting moves inbound conversion from roughly 30% to 66.7%.',
        'This is an architecture problem, not a design problem, so restyling the form changes nothing.',
      ],
    },
    faqSection: {
      title: 'Frequently asked questions',
      items: faqs([
        {
          isPrimary: true,
          question: 'What is wrong with using a contact form for appointment bookings?',
          answer:
            'A static form is a message relay. It cannot see your calendar, cannot hold a slot, and cannot confirm anything to the patient. It captures interest that someone then has to convert into an appointment manually, and that delay is where high-intent patients are lost.',
        },
        {
          question: 'How quickly should a practice respond to a booking enquiry?',
          answer:
            'Within five minutes if possible: leads contacted that fast are roughly ten times more likely to convert. The industry average of 47 hours means most enquiries are answered long after the patient has booked elsewhere.',
        },
        {
          question: 'When do patients actually submit booking requests?',
          answer:
            'Outside working hours. Peak windows for med spas are Tuesday 8-10pm and Sunday 4-6pm, when patients finally have time to deal with it. Those are exactly the hours when a form-based process guarantees no response until the next working morning.',
        },
        {
          question: 'How much does instant booking improve conversion?',
          answer:
            'Analysis of around 4 million form submissions found that letting patients book immediately after submitting moves inbound conversion from about 30% to 66.7% on average, roughly doubling it.',
        },
        {
          question: 'Will redesigning my contact form fix this?',
          answer:
            'No. The constraint is architectural, not visual. A better-looking form still cannot read your calendar, hold a slot, or confirm an appointment. Only adding a scheduling layer changes the outcome.',
        },
      ]),
    },
    citations: list(
      [
        { title: 'Form conversion benchmarks', publisher: 'Zuko Analytics', url: 'https://www.zuko.io/' },
        { title: 'Inbound conversion and speed to lead', publisher: 'Chili Piper', url: 'https://www.chilipiper.com/' },
      ],
      'cite'
    ),
    entities: list(
      [
        { name: 'Appointment scheduling software', type: 'SoftwareApplication', sameAs: 'https://en.wikipedia.org/wiki/Appointment_scheduling_software' },
        { name: 'Lead response time', type: 'Thing', sameAs: 'https://en.wikipedia.org/wiki/Lead_management' },
        { name: 'ShiftDeploy', type: 'Organization', sameAs: 'https://shiftdeploy.com' },
      ],
      'ent'
    ),
  },
};

/* ------------------------------------------------------------------ */

async function main() {
  const ids = Object.keys(ENRICHMENTS);
  console.log(`Enriching ${ids.length} posts…\n`);

  for (const id of ids) {
    const fields = ENRICHMENTS[id];
    const doc = await client.fetch('*[_id == $id][0]{title}', { id });
    if (!doc) {
      console.log(`  SKIP  ${id} — not found`);
      continue;
    }

    await client
      .patch(id)
      .set({
        ...fields,
        speakable: { enabled: true, cssSelectors: ['.direct-answer', '.key-takeaways'] },
        updatedAt: new Date().toISOString(),
      })
      .commit();

    console.log(`  OK    ${doc.title.slice(0, 62)}`);
  }

  console.log('\nDone. Reload /admin/insights — all posts should read Ready.');
}

main().catch((err) => {
  console.error('\nFailed:', err.message);
  process.exit(1);
});
