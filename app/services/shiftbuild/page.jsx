export const revalidate = 3600;
import GetFoundPage from '../../../src/Pages/Services/GetFoundPage';
import RelatedInsights from '../../../src/components/RelatedInsights';

const title = 'Get More Local Customers From Google';
const description =
  'More customers finding you first. Google Maps, local SEO, more Google reviews and a website that brings in calls, for local service businesses.';

export const metadata = {
  title,
  description,
  keywords: ['how to get more customers', 'local SEO', 'get on Google Maps', 'more Google reviews', 'web design for small business', 'Google Business Profile help'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftbuild' },
  openGraph: {
    title: `${title} | ShiftDeploy`,
    description,
    url: 'https://shiftdeploy.com/services/shiftbuild',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }],
  },
};

export default function Page() {
  return (
    <GetFoundPage>
      <RelatedInsights
        tags={['CMS', 'Images', 'AVIF', 'WebP', 'JavaScript']}
        categories={['Engineering']}
        heading="Tips for getting found online"
        subheading="How local businesses get found and chosen."
      />
    </GetFoundPage>
  );
}
