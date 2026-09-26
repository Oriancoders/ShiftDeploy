export const revalidate = 3600;
import GetFoundPage from '../../../src/Pages/Services/GetFoundPage';
import RelatedInsights from '../../../src/components/RelatedInsights';

const title = 'Get Found on Google Maps & Win Local Customers';
const description =
  'Not showing on Google? We get you found on Google Maps and in AI search, with local SEO, more reviews and a website that brings calls.';

export const metadata = {
  title,
  description,
  keywords: ['how to get my business on Google Maps', 'why is my business not showing on Google', 'local SEO', 'local SEO for dentists', 'Google Business Profile', 'get more Google reviews', 'how to appear in AI search', 'website design for tradesmen', 'web design for small business'],
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
