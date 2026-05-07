export const dynamic = 'force-dynamic';
import ThankYouPage from '../../src/Pages/ContactUsPage/ThankYouPage';

export const metadata = {
  title: 'Thank You | ShiftDeploy',
  description: 'Thank you for reaching out to ShiftDeploy. We\'ll be in touch shortly.',
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return <ThankYouPage />;
}
