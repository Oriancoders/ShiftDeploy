export const revalidate = 3600;
import AdminPage from '../../../src/Pages/Services/AdminPage';
import RelatedInsights from '../../../src/components/RelatedInsights';

const title = 'Business Automation & AI Assistants';
const description =
  'Get your evenings back. Automate invoices, payment chasers and repetitive admin with AI assistants, custom apps and website maintenance.';

export const metadata = {
  title,
  description,
  keywords: ['business automation', 'automate admin', 'AI agent for small business', 'invoice automation', 'custom app development', 'website maintenance'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftflow' },
  openGraph: {
    title: `${title} | ShiftDeploy`,
    description,
    url: 'https://shiftdeploy.com/services/shiftflow',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }],
  },
};

export default function Page() {
  return (
    <AdminPage>
      <RelatedInsights
        tags={['Core Web Vitals', 'JavaScript', 'Images', 'LCP']}
        categories={['Web Performance', 'Engineering']}
        heading="Tips for saving time on admin"
        subheading="Practical ways to take repetitive work off your plate."
      />
    </AdminPage>
  );
}
