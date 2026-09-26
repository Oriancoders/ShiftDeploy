export const revalidate = 3600;
import ReceptionistPage from '../../src/Pages/ReceptionistPage';

const title = 'AI Receptionist: 24/7 Call Answering & WhatsApp';
const description =
  'An AI receptionist and 24/7 answering service for your phone, website chat and WhatsApp. It books appointments. Keep your number.';

export const metadata = {
  title,
  description,
  keywords: ['AI receptionist', 'AI receptionist UK', 'AI receptionist cost', 'AI receptionist for dentists', 'AI receptionist for small business', 'answering service', 'call answering service', 'out of hours call answering', 'AI phone answering', 'AI chatbot for business', 'WhatsApp auto reply'],
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
