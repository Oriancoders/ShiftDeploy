export const revalidate = 3600;

import ServiceGrowthAudit from '../../src/Pages/ServiceGrowthAudit/ServiceGrowthAudit';

export const metadata = {
  title: 'Service Growth Audit | ShiftDeploy',
  description:
    'Request a Service Growth Audit to identify where website traffic, campaign attention, landing pages, and enquiry flow are leaking potential customer enquiries.',
  keywords: [
    'service growth audit',
    'enquiry leakage audit',
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServiceGrowthAudit />
    </>
  );
}
