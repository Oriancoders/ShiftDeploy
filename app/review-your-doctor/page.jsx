export const revalidate = 3600;
import ReviewYourDoctorLanding from '../../src/Pages/ReviewYourDoctorLanding';

export const metadata = {
  title: 'Get More Google Reviews for Your Clinic',
  description:
    'Get more 5-star Google reviews for your clinic and hear about problems privately first. Free for 30 days.',
  keywords: [
    'QR code for Google reviews', 'patient feedback form', 'patient feedback software', 'dental practice reviews', 'dental clinic Google reviews', 'QR review system',
    'healthcare reputation management', 'GDPR patient feedback', 'clinic review platform',
    'get more Google reviews', 'how to get more Google reviews for my business', 'private patient feedback',
  ],
  alternates: { canonical: 'https://shiftdeploy.com/review-your-doctor' },
  openGraph: {
    title: 'Get More Google Reviews for Your Clinic | Review Your Doctor',
    description:
      'Get more 5-star Google reviews for your clinic, and hear about problems privately first. Free for 30 days.',
    url: 'https://shiftdeploy.com/review-your-doctor',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function ReviewYourDoctorPage() {
  return (
    <>
      <ReviewYourDoctorLanding />
    </>
  );
}
