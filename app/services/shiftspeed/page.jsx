export const revalidate = 3600;
import NeverMissPage from '../../../src/Pages/Services/NeverMissPage';
import RelatedInsights from '../../../src/components/RelatedInsights';

const title = 'Never Miss a Call: 24/7 Answering Service';
const description =
  'Missed calls cost you work. Out-of-hours call answering and instant WhatsApp replies, so every enquiry gets an answer.';

export const metadata = {
  title,
  description,
  keywords: ['answering service', 'call answering service for small business', 'out of hours call answering service', 'telephone answering service UK', 'missed calls costing your business', 'missed call text back', 'WhatsApp auto reply for business', 'AI receptionist'],
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
