export const revalidate = 3600;
import PlumbersPage from '../../src/Pages/PlumbersPage/PlumbersPage';
import JsonLd from '../../src/components/JsonLd';

export const metadata = {
  title: 'Websites & Local SEO for UK Plumbers',
  description:
    'Get found on Google when local customers search for a plumber. Websites, local SEO and AI visibility built for UK plumbers. Free 24-hour audit, first website free.',
  keywords: [
    'plumber website design',
    'plumber SEO UK',
    'local SEO for plumbers',
    'website for plumbers',
    'plumber marketing UK',
    'Google Maps ranking plumber',
  ],
  alternates: { canonical: 'https://shiftdeploy.com/plumbers' },
  openGraph: {
    title: 'Websites & Local SEO for UK Plumbers | ShiftDeploy',
    description:
      'Get found on Google when local customers search for a plumber. Free 24-hour audit, first website free.',
    url: 'https://shiftdeploy.com/plumbers',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }],
  },
  robots: { index: true, follow: true },
};

/* Ties the page to the organisation node declared in app/layout.jsx rather
   than redeclaring it, matching the approach in the Services pages. */
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Websites & Local SEO for UK Plumbers',
  provider: { '@id': 'https://shiftdeploy.com/#organization' },
  description:
    'Website design, local SEO and AI search visibility for plumbing businesses across the United Kingdom.',
  url: 'https://shiftdeploy.com/plumbers',
  serviceType: 'Web Design and Local SEO for Plumbers',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  audience: { '@type': 'BusinessAudience', name: 'Plumbers and plumbing contractors' },
};

export default function Plumbers() {
  return (
    <>
      <JsonLd data={schema} />
      <PlumbersPage />
    </>
  );
}
