export const revalidate = 3600;
import CarePage from '../../../src/Pages/Services/ShiftFlow/CarePage';
import RelatedInsights from '../../../src/components/RelatedInsights';

const title = 'Website Maintenance & Support for Businesses';
const description =
  'Website maintenance and support with a fixed monthly price. Updates, security checks, monitoring and small changes, handled by one team you can call.';

export const metadata = {
  title,
  description,
  keywords: ['website maintenance', 'website support', 'website maintenance UK', 'website management', 'website security checks', 'website updates'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftflow' },
  openGraph: {
    title: `${title} | ShiftDeploy`,
    description,
    url: 'https://shiftdeploy.com/services/shiftflow',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy website maintenance and support' }],
  },
};

export default function ShiftFlowPage() {
  return (
    <CarePage>
      <RelatedInsights
        tags={['Core Web Vitals', 'JavaScript', 'Images', 'LCP']}
        categories={['Web Performance', 'Engineering']}
        heading="Tips for keeping your website healthy"
        subheading="How to keep a business website fast, safe and working after launch."
      />
    </CarePage>
  );
}
