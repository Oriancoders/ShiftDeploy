export const revalidate = 3600;
import ShiftSpeed from '../../../src/Pages/Services/ShiftSpeed/ShiftSpeed';

export const metadata = {
  title: 'ShiftSpeed | Core Web Vitals & Page Speed Optimisation',
  description: 'ShiftSpeed makes your website lightning-fast. We optimise Core Web Vitals, cut load times, and improve Google rankings through expert performance engineering.',
  keywords: ['Core Web Vitals', 'page speed optimisation', 'LCP fix', 'CLS fix', 'website speed', 'Google PageSpeed', 'performance engineering'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftspeed' },
  openGraph: {
    title: 'ShiftSpeed | Core Web Vitals & Page Speed Optimisation',
    description: 'ShiftSpeed makes your website lightning-fast. We optimise Core Web Vitals, cut load times, and improve Google rankings.',
    url: 'https://shiftdeploy.com/services/shiftspeed',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ShiftSpeed - Website Speed Optimisation',
  provider: { '@type': 'Organization', name: 'ShiftDeploy', url: 'https://shiftdeploy.com' },
  description: 'Expert Core Web Vitals and page speed optimisation service. We cut load times, fix LCP/CLS/INP scores, and improve Google rankings.',
  url: 'https://shiftdeploy.com/services/shiftspeed',
  serviceType: 'Website Performance Optimisation',
  areaServed: { '@type': 'Place', name: 'United Kingdom' },
};

export default function ShiftSpeedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ShiftSpeed />
    </>
  );
}
