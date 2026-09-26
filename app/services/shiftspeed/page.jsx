export const revalidate = 3600;
import SpeedPage from '../../../src/Pages/Services/ShiftSpeed/SpeedPage';
import RelatedInsights from '../../../src/components/RelatedInsights';

const title = 'Website Speed Optimisation: Fix a Slow Website';
const description =
  'Slow website losing you customers? We find what’s slowing it down on phones, fix it without a redesign or downtime, and show you the difference.';

export const metadata = {
  title,
  description,
  keywords: ['website speed optimisation', 'slow website', 'page speed', 'speed up website', 'Core Web Vitals', 'website speed UK'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftspeed' },
  openGraph: {
    title: `${title} | ShiftDeploy`,
    description,
    url: 'https://shiftdeploy.com/services/shiftspeed',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy website speed optimisation' }],
  },
};

export default function ShiftSpeedPage() {
  return (
    <SpeedPage>
      <RelatedInsights
        tags={['Core Web Vitals', 'LCP', 'INP', 'CLS', 'Mobile', 'TTFB']}
        categories={['Web Performance']}
        heading="Speed tips from real audits"
        subheading="What we found slowing business websites down, and how we fixed it."
      />
    </SpeedPage>
  );
}
