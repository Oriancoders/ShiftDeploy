export const revalidate = 3600;

import Landing from '../src/Pages/LandingPage/Landing';

export const metadata = {
  title: 'ShiftDeploy | Performance-First Web Agency',
  description:
    'We help businesses build faster websites, improve conversions, and grow with a performance-first approach. Book your free audit today.',
  keywords: [
    'web performance agency', 'website speed optimisation', 'Core Web Vitals expert',
    'conversion rate optimisation', 'CRO agency UK', 'custom web development',
    'business automation', 'AI chatbot agency', 'ShiftDeploy',
  ],
  alternates: { canonical: 'https://shiftdeploy.com' },
  openGraph: {
    title: 'ShiftDeploy | Performance-First Web Agency',
    description:
      'We help businesses build faster websites, improve conversions, and grow with a performance-first approach.',
    url: 'https://shiftdeploy.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy – Performance-First Web Agency' }],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ShiftDeploy',
  url: 'https://shiftdeploy.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://shiftdeploy.com/insights?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Landing />
    </>
  );
}
