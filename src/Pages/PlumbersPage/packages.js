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
    price: 'Tailored quote',
    priceNote: 'Setup and ongoing support agreed before work starts',
    features: [
      '5-page professional website',
      'Mobile optimised',
      'Google Business Profile setup',
      'Basic local SEO (5 keywords)',
      'Hosting requirements agreed in your quote',
      'SSL included',
    ],
    cta: 'Start Here',
    variant: 'secondary',
    packageValue: 'Starter - tailored quote',
  },
  {
    name: 'Premium',
    price: 'Tailored quote',
    priceNote: 'Setup and ongoing support agreed before work starts',
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
    packageValue: 'Premium - tailored quote',
  },
  {
    name: 'Full CMS',
    price: 'Tailored quote',
    priceNote: 'Setup and ongoing support agreed before work starts',
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
    packageValue: 'Full CMS - tailored quote',
  },
];

/* The free-offer banner is not a priced package but is selectable in the form. */
export const FREE_OFFER_VALUE = 'New website - tailored quote';

/* Exactly what the booking <select> renders under its "Packages" optgroup. */
export const PACKAGE_OPTIONS = [
  ...PACKAGES.map((p) => p.packageValue),
  FREE_OFFER_VALUE,
];
