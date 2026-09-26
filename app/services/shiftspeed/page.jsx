export const revalidate = 3600;
import NeverMissPage from '../../../src/Pages/Services/NeverMissPage';
import RelatedInsights from '../../../src/components/RelatedInsights';

const title = 'Never Miss a Call or Enquiry: AI Receptionist';
const description =
  'Stop losing customers to missed calls. AI receptionist, missed call text back, instant WhatsApp replies and 24/7 booking, so every enquiry is answered.';

export const metadata = {
  title,
  description,
  keywords: ['AI receptionist', 'missed call text back', 'call answering service', 'virtual receptionist', 'WhatsApp automation for business', 'never miss a call'],
  alternates: { canonical: 'https://shiftdeploy.com/services/shiftspeed' },
  openGraph: {
    title: `${title} | ShiftDeploy`,
    description,
    url: 'https://shiftdeploy.com/services/shiftspeed',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }],
  },
};

export default function Page() {
  return (
    <NeverMissPage>
      <RelatedInsights
        tags={['Core Web Vitals', 'LCP', 'INP', 'CLS', 'Mobile', 'TTFB']}
        categories={['Web Performance']}
        heading="Tips for answering every enquiry"
        subheading="How fast replies win more work."
      />
    </NeverMissPage>
  );
}
