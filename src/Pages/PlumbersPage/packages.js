/*
  Single source of truth for the pricing packages.

  Both the packages section and the booking form's <select> read from here.
  They must agree exactly: a <select> silently ignores a value that has no
  matching <option>, so a price edited in one file but not the other would
  leave the dropdown blank with no error anywhere.
*/
export const PACKAGES = [
  {
    name: 'Starter',
    price: '£200',
    priceNote: 'one-time + £20/month',
    features: [
      '5-page professional website',
      'Mobile optimised',
      'Google Business Profile setup',
      'Basic local SEO (5 keywords)',
      '1 year free hosting',
      'SSL included',
    ],
    cta: 'Start Here',
    variant: 'secondary',
    packageValue: 'Starter: £200 + £20/mo',
  },
  {
    name: 'Premium',
    price: '£499',
    priceNote: 'one-time + £40/month',
    featured: true,
    features: [
      'Everything in Starter',
      'Advanced local SEO (15 keywords)',
      'Google Maps optimisation',
      'Monthly performance report',
      'Review generation system',
      'WhatsApp support',
    ],
    cta: 'Get Premium',
    variant: 'primary',
    packageValue: 'Premium: £499 + £40/mo',
  },
  {
    name: 'Full CMS',
    price: '£1,299',
    priceNote: 'one-time (or £120/mo × 12)',
    features: [
      'Everything in Premium',
      'Full CMS, edit content yourself',
      'AI SEO / GEO setup',
      'Google Ads setup',
      'Quarterly strategy call',
      'Competitor gap analysis',
    ],
    cta: 'Let’s Talk',
    variant: 'secondary',
    packageValue: 'Full CMS: £1,299',
  },
];

/* The free-offer banner is not a priced package but is selectable in the form. */
export const FREE_OFFER_VALUE = 'Free Website Offer';

/* Exactly what the booking <select> renders under its "Packages" optgroup. */
export const PACKAGE_OPTIONS = [
  ...PACKAGES.map((p) => p.packageValue),
  FREE_OFFER_VALUE,
];
