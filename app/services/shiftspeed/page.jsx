export const revalidate = 3600;
import ShiftSpeed from '../../../src/Pages/Services/ShiftSpeed/ShiftSpeed';
import JsonLd from '../../../src/components/JsonLd';
import RelatedInsights from '../../../src/components/RelatedInsights';

export const metadata = {
  title: 'Website Speed Optimisation UK | ShiftSpeed',
  description: 'Website speed optimisation for UK businesses. Audit and improve LCP, INP and CLS, reduce loading delays and make booking journeys easier to use.',
  keywords: ['Core Web Vitals', 'page speed optimisation', 'LCP fix', 'CLS fix', 'website speed', 'Google PageSpeed', 'performance engineering'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftspeed' },
  openGraph: {
    title: 'Website Speed Optimisation UK | ShiftSpeed',
    description: 'Website speed optimisation for UK businesses, focused on Core Web Vitals, mobile usability and booking journeys.',
    url: 'https://shiftdeploy.com/services/shiftspeed',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ShiftSpeed - Website Speed Optimisation',
  provider: { '@type': 'Organization', name: 'ShiftDeploy', url: 'https://shiftdeploy.com' },
  description: 'Core Web Vitals and website speed optimisation for UK businesses. We diagnose loading, responsiveness and layout stability issues.',
  url: 'https://shiftdeploy.com/services/shiftspeed',
  serviceType: 'Website Performance Optimisation',
  areaServed: { '@type': 'Place', name: 'United Kingdom' },
};

export default function ShiftSpeedPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ShiftSpeed />
      {/* Links the service page into the blog. Without this the two were
          separate islands with no crawlable path between them. */}
      <RelatedInsights
        tags={['Core Web Vitals', 'LCP', 'INP', 'CLS', 'Mobile', 'TTFB']}
        categories={['Web Performance']}
        heading={"Speed work we have written up"}
        subheading={"Real audits and the numbers behind them, not theory."}
      />
    </>
  );
}
