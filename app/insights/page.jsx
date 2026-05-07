export const revalidate = 1800;
import Insights from '../../src/Insights/Insights';

export const metadata = {
  title: 'Insights | Web Performance, CRO & Growth Blog',
  description:
    'Expert articles on web performance, conversion rate optimisation, automation, and digital growth strategies from the ShiftDeploy team.',
  keywords: [
    'web performance blog', 'CRO articles', 'Core Web Vitals guide', 'website speed tips',
    'conversion optimisation tips', 'business automation insights', 'digital growth blog',
  ],
  alternates: { canonical: 'https://shiftdeploy.com/insights' },
  openGraph: {
    title: 'Insights | Web Performance, CRO & Growth Blog',
    description:
      'Expert articles on web performance, conversion rate optimisation, automation, and digital growth strategies.',
    url: 'https://shiftdeploy.com/insights',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'ShiftDeploy Insights',
  url: 'https://shiftdeploy.com/insights',
  description: 'Expert articles on web performance, CRO, automation, and digital growth from ShiftDeploy.',
  publisher: {
    '@type': 'Organization',
    name: 'ShiftDeploy',
    url: 'https://shiftdeploy.com',
    logo: { '@type': 'ImageObject', url: 'https://shiftdeploy.com/og-image.png' },
  },
};

export default function InsightsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <Insights />
    </>
  );
}
