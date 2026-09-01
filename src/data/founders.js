/**
 * Founders. Single source of truth for both the Inside ShiftDeploy section and
 * the Person schema, so the visible page and the markup cannot drift apart.
 *
 * `linkedin` becomes sameAs in the schema. Google is explicit that sameAs must
 * resolve and identify the same person, so a guessed or dead URL is worse than
 * omitting it - the component and the schema both skip a missing one.
 *
 * Bios are condensed from each founder's own LinkedIn copy. Keep them factual;
 * this is the page an AI assistant reads when asked who runs ShiftDeploy.
 */

export const COMPANY_LINKEDIN = 'https://www.linkedin.com/company/shiftdeploy/';

export const FOUNDERS = [
  {
    slug: 'muhammad-ali',
    name: 'Muhammad Ali',
    initials: 'MA',
    role: 'Co-Founder',
    linkedin: 'https://www.linkedin.com/in/muhammad-ali-296943208/',
    image: null,
    bio:
      'Ali builds the products businesses cannot run without. Six are live so far, ' +
      'across healthcare and retail: a POS that keeps shops trading when the internet ' +
      'drops, a chatbot that books patients at 3am in two languages, a virtual try-on ' +
      'tool, an assessment platform, a health records app, and an outreach system for ' +
      'clinics. He does not wait to be told what to build. He watches where businesses ' +
      'struggle, builds the fix, and ships it.',
    focus: [
      'Product engineering',
      'Full-stack development',
      'Healthcare systems',
      'Retail and POS',
      'AI chatbots',
    ],
  },
  {
    slug: 'sami-ullah',
    name: 'Sami Ullah',
    initials: 'SU',
    role: 'Co-Founder',
    // TODO: add the public /in/ profile URL. Left null deliberately rather than
    // guessed - a sameAs pointing at the wrong person is worse than none.
    linkedin: null,
    image: null,
    bio:
      'Sami leads frontend execution and technical direction. His background is ' +
      'hands-on frontend development with modern UI systems, performance optimisation ' +
      'and scalable web architecture, and his role has grown from building features to ' +
      'running delivery. He works on Core Web Vitals, UI and UX changes that move ' +
      'conversions, and keeping scope and communication clear on client work.',
    focus: [
      'Core Web Vitals',
      'Frontend architecture',
      'UI/UX and conversion',
      'Performance optimisation',
      'Delivery planning',
    ],
  },
];
