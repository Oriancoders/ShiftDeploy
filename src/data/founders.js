/**
 * Founders. Single source of truth for both the Inside ShiftDeploy section and
 * the Person schema, so the visible page and the markup cannot drift apart.
 *
 * How this copy is written matters. The first version read like a team
 * directory - job duties and skill chips - which is how you present an
 * employee, not a founder. The pattern the strong agency and B2B about pages
 * use is the opposite: a founder is positioned by the conviction that made the
 * company exist, in their own voice, not by what they do on a Tuesday.
 *
 * So each entry has:
 *   - `belief`  a short line of conviction, pulled forward as a pull-quote
 *   - `story`   why they build what they build, in narrative form
 *   - `proof`   concrete, checkable evidence rather than adjectives
 *
 * `linkedin` becomes sameAs in the schema. Google is explicit that sameAs must
 * resolve and identify the same person, so a guessed or dead URL is worse than
 * omitting it - the component and the schema both skip a missing one.
 */

export const COMPANY_LINKEDIN = 'https://www.linkedin.com/company/shiftdeploy/';

export const FOUNDERS = [
  {
    slug: 'muhammad-ali',
    name: 'Muhammad Ali',
    initials: 'MA',
    role: 'Co-Founder',
    linkedin: 'https://www.linkedin.com/in/muhammad-ali-296943208/',
    // Self-hosted, not hotlinked. LinkedIn signs its CDN URLs with an expiry
    // (the e= parameter) - the originals given to us died 16 days later, which
    // would have turned both photos into broken images with no warning.
    image: '/team/muhammad-ali.jpg',

    belief: 'Every business problem has a solution. We find it, build it, ship it.',

    story:
      'Ali does not wait to be told what to build. He watches where businesses ' +
      'actually struggle, builds the fix, and puts it on the shelf. That instinct ' +
      'is where ShiftDeploy came from and it is still how the company operates.\n\n' +
      'Six products are live so far across healthcare and retail. A point-of-sale ' +
      'system that keeps shops trading when the internet drops. A chatbot that ' +
      'books patients at 3am in two languages. A virtual try-on tool, an ' +
      'assessment platform, a health records app, an outreach system for clinics.\n\n' +
      'Every so often a problem arrives that none of them solve. If it is ' +
      'interesting enough, we build it from scratch. Some of our best products ' +
      'started exactly that way.',

    proof: [
      { value: '6', label: 'products live' },
      { value: '2', label: 'sectors: healthcare and retail' },
    ],

    focus: ['Product engineering', 'Full-stack development', 'Healthcare systems', 'Retail and POS'],
  },
  {
    slug: 'sami-ullah',
    name: 'Sami Ullah',
    initials: 'SU',
    role: 'Co-Founder',
    // TODO: add the public /in/ profile URL. Left null deliberately rather than
    // guessed - a sameAs pointing at the wrong person is worse than none.
    linkedin: null,
    image: '/team/sami-ullah.jpg',

    belief: 'Decisions should be based on evidence, not assumptions.',

    story:
      'Sami is the reason ShiftDeploy measures before it changes anything. Most ' +
      'agencies open with a redesign. We open with a question: how quickly does ' +
      'this page load for a real visitor, how stable does it feel, and where is ' +
      'friction costing you enquiries?\n\n' +
      'That answer decides whether work is needed at all. Sometimes it says no, ' +
      'and we say so.\n\n' +
      'His background is hands-on frontend: modern UI systems, performance ' +
      'optimisation, scalable architecture. The role grew from building features ' +
      'to running delivery, but the discipline stayed the same. Clear scope, ' +
      'honest communication, real fixes.',

    proof: [
      { value: 'Measure', label: 'first, then change' },
      { value: 'CWV', label: 'Core Web Vitals specialist' },
    ],

    focus: ['Core Web Vitals', 'Frontend architecture', 'UI/UX and conversion', 'Delivery planning'],
  },
];
