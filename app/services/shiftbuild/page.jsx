export const revalidate = 3600;
import ShiftBuild from '../../../src/Pages/Services/ShiftBuild/ShiftBuild';
import JsonLd from '../../../src/components/JsonLd';
import RelatedInsights from '../../../src/components/RelatedInsights';

export const metadata = {
  title: 'ShiftBuild | Custom Web Development & Design',
  description: 'ShiftBuild delivers custom-built websites and web apps engineered for speed, SEO, and conversions - from design to deployment.',
  keywords: ['custom web development', 'web design agency', 'Next.js development', 'React development', 'bespoke website design', 'web app development UK'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftbuild' },
  openGraph: {
    title: 'ShiftBuild | Custom Web Development & Design',
    description: 'ShiftBuild delivers custom-built websites and web apps engineered for speed, SEO, and conversions.',
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
