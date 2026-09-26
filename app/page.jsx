export const revalidate = 3600;

import Landing from '../src/Pages/LandingPage/Landing';
import JsonLd from '../src/components/JsonLd';

export const metadata = {
  title: 'AI Receptionist, Web Design & Automation | ShiftDeploy',
  description:
    'AI receptionist and telephone answering, web design, local SEO and business automation for UK service businesses. Stop missing calls and get more enquiries.',
  keywords: [
    'AI receptionist UK', 'telephone answering service', 'virtual receptionist', 'call answering service for small business', 'missed call text back',
    'small business web design UK', 'local SEO', 'website speed optimisation',
    'business automation UK', 'get more Google reviews', 'ShiftDeploy',
  ],
  alternates: { canonical: 'https://shiftdeploy.com' },
  openGraph: {
    title: 'AI Receptionist, Web Design & Automation | ShiftDeploy',
    description:
      'Stop losing customers you never knew you had. AI call answering, websites that bring enquiries and business automation.',
    url: 'https://shiftdeploy.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy - AI receptionist, web design and automation' }],
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
