export const revalidate = 3600;
import ShiftBuild from '../../../src/Pages/Services/ShiftBuild/ShiftBuild';
import JsonLd from '../../../src/components/JsonLd';
import RelatedInsights from '../../../src/components/RelatedInsights';

export const metadata = {
  title: 'Web Development for UK Businesses | ShiftBuild',
  description: 'Bespoke websites and web apps for UK businesses, built with technical SEO, performance and clear enquiry journeys. Request a tailored project quote.',
  keywords: ['custom web development', 'web design agency', 'Next.js development', 'React development', 'bespoke website design', 'web app development UK'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftbuild' },
  openGraph: {
    title: 'Web Development for UK Businesses | ShiftBuild',
    description: 'Bespoke web development for UK businesses, from website redesigns to custom web apps.',
    url: 'https://shiftdeploy.com/services/shiftbuild',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ShiftBuild - Custom Web Development',
  provider: { '@type': 'Organization', name: 'ShiftDeploy', url: 'https://shiftdeploy.com' },
  description: 'Custom website and web application development using Next.js and React, engineered for speed, SEO, and high conversions.',
  url: 'https://shiftdeploy.com/services/shiftbuild',
  serviceType: 'Web Development',
  areaServed: { '@type': 'Place', name: 'United Kingdom' },
};

export default function ShiftBuildPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ShiftBuild />
      {/* Links the service page into the blog. Without this the two were
          separate islands with no crawlable path between them. */}
      <RelatedInsights
        tags={['CMS', 'Images', 'AVIF', 'WebP', 'JavaScript']}
        categories={['Engineering']}
        heading={"How we build"}
        subheading={"Engineering decisions from projects we have shipped."}
      />
    </>
  );
}
