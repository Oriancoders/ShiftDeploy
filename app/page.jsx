export const revalidate = 3600;

import Landing from '../src/Pages/LandingPage/Landing';
import JsonLd from '../src/components/JsonLd';

export const metadata = {
  title: 'Web & App Development for UK Businesses',
  description:
    'Websites, apps and digital products for UK businesses. ShiftDeploy combines development, technical SEO and conversion optimisation. Discuss your project.',
  keywords: [
    'web performance agency', 'website speed optimisation', 'Core Web Vitals expert',
    'conversion rate optimisation', 'CRO agency UK', 'custom web development',
    'business automation', 'AI chatbot agency', 'ShiftDeploy',
  ],
  alternates: { canonical: 'https://shiftdeploy.com' },
  openGraph: {
    title: 'Web & App Development for UK Businesses',
    description:
      'Websites, apps and digital products for UK businesses, with technical SEO, speed and conversion optimisation.',
    url: 'https://shiftdeploy.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy - Web and App Development for UK Businesses' }],
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
      <JsonLd data={websiteSchema} />
      <Landing />
    </>
  );
}
