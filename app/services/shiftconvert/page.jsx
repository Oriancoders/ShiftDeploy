export const revalidate = 3600;
import ShiftConvert from '../../../src/Pages/Services/ShiftConvert/ShiftConvert';
import JsonLd from '../../../src/components/JsonLd';
import RelatedInsights from '../../../src/components/RelatedInsights';

export const metadata = {
  title: 'Conversion Rate Optimisation UK | ShiftConvert',
  description: 'Conversion rate optimisation for UK businesses. Improve landing pages, enquiry forms and booking journeys through audits, clearer messaging and testing.',
  keywords: ['conversion rate optimisation', 'CRO agency', 'A/B testing', 'funnel optimisation', 'landing page optimisation', 'increase conversions'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftconvert' },
  openGraph: {
    title: 'Conversion Rate Optimisation UK | ShiftConvert',
    description: 'Conversion rate optimisation for UK businesses, focused on completed enquiries and booking journeys.',
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
      <JsonLd data={schema} />
      <ShiftConvert />
      {/* Links the service page into the blog. Without this the two were
          separate islands with no crawlable path between them. */}
      <RelatedInsights
        tags={['Conversion rate', 'Forms', 'Booking pages', 'Lead capture', 'Lead response']}
        categories={['Conversion']}
        heading={"Conversion work we have written up"}
        subheading={"Where booking and enquiry flows actually lose people."}
      />
    </>
  );
}
