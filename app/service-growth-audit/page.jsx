export const revalidate = 3600;
import BreadcrumbSchema from '../../src/components/BreadcrumbSchema';

import ServiceGrowthAudit from '../../src/Pages/ServiceGrowthAudit/ServiceGrowthAudit';
import JsonLd from '../../src/components/JsonLd';

export const metadata = {
  title: 'Free Growth Audit: Find Your Lost Enquiries',
  description:
    'A free growth audit for service businesses. We show you where interested customers give up on your website.',
  keywords: [
    'service growth audit',
    'free website audit',
    'landing page audit',
    'campaign flow audit',
    'conversion audit',
    'ShiftDeploy',
  ],
  alternates: { canonical: 'https://shiftdeploy.com/service-growth-audit' },
  openGraph: {
    title: 'Service Growth Audit | ShiftDeploy',
    description:
      'Find where attention is being lost before it becomes a customer enquiry.',
    url: 'https://shiftdeploy.com/service-growth-audit',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ShiftDeploy Service Growth Audit',
  provider: { '@type': 'Organization', name: 'ShiftDeploy', url: 'https://shiftdeploy.com' },
  description:
    'Audit-first growth review for service businesses to identify enquiry leakage across websites, landing pages, campaigns, tracking, and follow-up systems.',
  url: 'https://shiftdeploy.com/service-growth-audit',
  serviceType: 'Digital Growth Audit',
};

export default function ServiceGrowthAuditPage() {
  return (
    <>
      <BreadcrumbSchema items={[['Free growth audit', '/service-growth-audit']]} />
      <JsonLd data={schema} />
      <ServiceGrowthAudit />
    </>
  );
}
