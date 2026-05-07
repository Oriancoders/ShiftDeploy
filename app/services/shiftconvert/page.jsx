export const revalidate = 3600;
import ShiftConvert from '../../../src/Pages/Services/ShiftConvert/ShiftConvert';

export const metadata = {
  title: 'ShiftConvert | Conversion Rate Optimisation (CRO)',
  description: 'ShiftConvert turns more visitors into customers. We audit, redesign, and A/B test your funnels to maximise conversions and revenue.',
  keywords: ['conversion rate optimisation', 'CRO agency', 'A/B testing', 'funnel optimisation', 'landing page optimisation', 'increase conversions'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftconvert' },
  openGraph: {
    title: 'ShiftConvert | Conversion Rate Optimisation (CRO)',
    description: 'ShiftConvert turns more visitors into customers. We audit, redesign, and A/B test your funnels to maximise conversions.',
    url: 'https://shiftdeploy.com/services/shiftconvert',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ShiftConvert - Conversion Rate Optimisation',
  provider: { '@type': 'Organization', name: 'ShiftDeploy', url: 'https://shiftdeploy.com' },
  description: 'Data-driven CRO: funnel audits, A/B testing, landing page redesigns to turn more visitors into paying customers.',
  url: 'https://shiftdeploy.com/services/shiftconvert',
  serviceType: 'Conversion Rate Optimisation',
  areaServed: { '@type': 'Place', name: 'United Kingdom' },
};

export default function ShiftConvertPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ShiftConvert />
    </>
  );
}
