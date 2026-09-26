export const revalidate = 3600;
import ReceptionistPage from '../../src/Pages/ReceptionistPage';

const title = 'AI Receptionist for Calls, Chat & WhatsApp';
const description =
  'An AI receptionist that answers your phone, website chat and WhatsApp 24/7, books appointments and texts you every enquiry. Keep your number. Free demo.';

export const metadata = {
  title,
  description,
  keywords: ['AI receptionist', 'AI receptionist UK', 'virtual receptionist', 'AI phone answering', 'AI chatbot for business', 'WhatsApp automation', 'call answering service'],
  alternates: { canonical: 'https://shiftdeploy.com/digital-receptionist' },
  openGraph: {
    title: `${title} | ShiftDeploy`,
    description,
    url: 'https://shiftdeploy.com/digital-receptionist',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy AI receptionist' }],
  },
};

export default function Page() {
  return <ReceptionistPage />;
}
