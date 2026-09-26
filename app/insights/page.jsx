export const revalidate = 1800;
import BreadcrumbSchema from '../../src/components/BreadcrumbSchema';
import Insights from '../../src/Insights/Insights';
import { getInsightList } from '../../src/lib/insightsData';
import JsonLd from '../../src/components/JsonLd';

export const metadata = {
  title: 'Blog: Tips to Get More Customers and Save Time',
  description:
    'Plain-English tips for service businesses on getting found, answering every enquiry, winning jobs and cutting admin.',
  keywords: [
    'small business tips UK', 'how to get more customers for my business', 'how to get more Google reviews for my business',
    'how much are missed calls costing your business', 'AI automation for small business', 'local SEO tips', 'how to get found on Google', 'ShiftDeploy blog',
  ],
  alternates: { canonical: 'https://shiftdeploy.com/insights' },
  openGraph: {
    title: 'Blog: Tips to Get More Customers and Save Time | ShiftDeploy',
    description:
      'Plain-English guides for service businesses on getting found, answering every enquiry, winning more jobs and cutting admin.',
    url: 'https://shiftdeploy.com/insights',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'ShiftDeploy Blog',
  url: 'https://shiftdeploy.com/insights',
  description: 'Plain-English guides for service businesses on getting found, answering every enquiry, winning more jobs and cutting admin.',
  publisher: {
    '@type': 'Organization',
    name: 'ShiftDeploy',
    url: 'https://shiftdeploy.com',
    logo: { '@type': 'ImageObject', url: 'https://shiftdeploy.com/og-image.png' },
  },
};

export default async function InsightsPage() {
  const posts = await getInsightList();

  return (
    <>
      <BreadcrumbSchema items={[['Blog', '/insights']]} />
      <JsonLd data={blogSchema} />
      <Insights initialPosts={posts} />
    </>
  );
}
