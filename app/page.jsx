export const revalidate = 3600;

import Landing from '../src/Pages/LandingPage/Landing';
import JsonLd from '../src/components/JsonLd';

export const metadata = {
  title: 'Losing Customers? AI Receptionist & Automation | ShiftDeploy',
  description:
    'Missed calls and slow replies cost you customers. We fix it with an AI receptionist, WhatsApp automation, online booking, apps and websites.',
  keywords: [
    'AI receptionist UK', 'answering service', 'call answering service for small business', 'telephone answering service',
    'WhatsApp Business API', 'WhatsApp automation for business', 'online booking system for small business UK',
    'AI automation', 'business automation UK', 'mobile app development UK',
    'small business web design UK', 'local SEO', 'Google Business Profile', 'get more Google reviews', 'ShiftDeploy',
  ],
  alternates: { canonical: 'https://shiftdeploy.com' },
  openGraph: {
    title: 'Losing Customers? AI Receptionist & Automation | ShiftDeploy',
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
  publisher: { '@id': 'https://shiftdeploy.com/#organization' },
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
