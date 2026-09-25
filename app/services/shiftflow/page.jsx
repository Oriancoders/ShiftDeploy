export const revalidate = 3600;
import ShiftFlow from '../../../src/Pages/Services/ShiftFlow/ShiftFlow';
import JsonLd from '../../../src/components/JsonLd';
import RelatedInsights from '../../../src/components/RelatedInsights';

export const metadata = {
  title: 'Website Maintenance & Support UK | ShiftFlow',
  description: 'Website maintenance and ongoing support for UK businesses. Monitoring, preventive fixes, security upkeep and performance reviews with a tailored scope.',
  keywords: ['website maintenance UK', 'website support', 'performance monitoring', 'ongoing website optimisation'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftflow' },
  openGraph: {
    title: 'Website Maintenance & Support UK | ShiftFlow',
    description: 'Ongoing website maintenance and technical support for UK businesses.',
    url: 'https://shiftdeploy.com/services/shiftflow',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ShiftFlow - Website Maintenance and Support',
  provider: { '@type': 'Organization', name: 'ShiftDeploy', url: 'https://shiftdeploy.com' },
  description: 'Ongoing website maintenance for UK businesses: monitoring, preventive fixes, security upkeep and performance checks.',
  url: 'https://shiftdeploy.com/services/shiftflow',
  serviceType: 'Website Maintenance and Support',
  areaServed: { '@type': 'Place', name: 'United Kingdom' },
};

export default function ShiftFlowPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ShiftFlow />
      {/* Links the service page into the blog. Without this the two were
          separate islands with no crawlable path between them. */}
      <RelatedInsights
        tags={['Core Web Vitals', 'JavaScript', 'Images', 'LCP']}
        categories={['Web Performance', 'Engineering']}
        heading={"Website performance and maintenance insights"}
        subheading={"Keeping websites usable and reliable after launch."}
      />
    </>
  );
}
