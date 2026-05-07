export const revalidate = 3600;
import ShiftFlow from '../../../src/Pages/Services/ShiftFlow/ShiftFlow';

export const metadata = {
  title: 'ShiftFlow | Business Automation & AI Workflows',
  description: 'ShiftFlow automates your business operations with AI-powered workflows, saving time and reducing errors so your team can focus on growth.',
  keywords: ['business automation', 'AI workflows', 'n8n automation', 'workflow automation UK', 'AI chatbot integration', 'process automation'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftflow' },
  openGraph: {
    title: 'ShiftFlow | Business Automation & AI Workflows',
    description: 'ShiftFlow automates your business operations with AI-powered workflows, saving time and reducing errors.',
    url: 'https://shiftdeploy.com/services/shiftflow',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ShiftFlow - Business Automation and AI Workflows',
  provider: { '@type': 'Organization', name: 'ShiftDeploy', url: 'https://shiftdeploy.com' },
  description: 'AI-powered workflow automation that eliminates manual tasks, integrates your tools, and lets your team focus on growth.',
  url: 'https://shiftdeploy.com/services/shiftflow',
  serviceType: 'Business Process Automation',
  areaServed: { '@type': 'Place', name: 'United Kingdom' },
};

export default function ShiftFlowPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ShiftFlow />
    </>
  );
}
