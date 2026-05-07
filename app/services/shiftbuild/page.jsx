export const revalidate = 3600;
import ShiftBuild from '../../../src/Pages/Services/ShiftBuild/ShiftBuild';

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ShiftBuild />
    </>
  );
}
