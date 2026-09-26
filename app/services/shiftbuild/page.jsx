export const revalidate = 3600;
import WebDesignPage from '../../../src/Pages/Services/ShiftBuild/WebDesignPage';
import RelatedInsights from '../../../src/components/RelatedInsights';

const title = 'Web Design & Local SEO for Service Businesses';
const description =
  'A website that makes your phone ring. Web design and local SEO for trades, clinics and local services. Fast, found on Google, easy to call or book.';

export const metadata = {
  title,
  description,
  keywords: ['web design', 'website design for small business', 'local SEO', 'web design for trades', 'website for plumbers', 'small business website UK'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftbuild' },
  openGraph: {
    title: `${title} | ShiftDeploy`,
    description,
    url: 'https://shiftdeploy.com/services/shiftbuild',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy web design and local SEO' }],
  },
};

export default function ShiftBuildPage() {
  return (
    <WebDesignPage>
      <RelatedInsights
        tags={['CMS', 'Images', 'AVIF', 'WebP', 'JavaScript']}
        categories={['Engineering']}
        heading="Tips from our web projects"
        subheading="Practical lessons from websites we have built."
      />
    </WebDesignPage>
  );
}
