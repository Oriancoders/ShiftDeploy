export const revalidate = 3600;

import Landing from '../src/Pages/LandingPage/Landing';
import JsonLd from '../src/components/JsonLd';

export const metadata = {
  title: 'Losing Customers? AI, Apps & Automation | ShiftDeploy',
  description:
    'Missed calls and slow replies cost you customers. We fix it with AI receptionists, WhatsApp automation, apps and websites.',
  keywords: [
    'AI receptionist UK', 'telephone answering service', 'WhatsApp automation for business', 'mobile app development UK', 'virtual receptionist', 'call answering service for small business', 'missed call text back',
    'small business web design UK', 'local SEO', 'website speed optimisation',
    'business automation UK', 'get more Google reviews', 'ShiftDeploy',
  ],
  alternates: { canonical: 'https://shiftdeploy.com' },
  openGraph: {
    title: 'Losing Customers? AI, Apps & Automation | ShiftDeploy',
    description:
      'Stop losing customers you never knew you had. We fix it with the right tool: AI call answering, WhatsApp automation, an app or a website.',
    url: 'https://shiftdeploy.com',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy logo - AI, apps and automation that stop you losing customers' }],
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
