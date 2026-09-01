export const revalidate = 3600;
import ReviewYourDoctorLanding from '../../src/Pages/ReviewYourDoctorLanding';
import JsonLd from '../../src/components/JsonLd';

export const metadata = {
  title: 'Review Your Doctor | QR Patient Feedback',
  description:
    "A QR-powered patient feedback platform for UK private clinics. Earn more 5-star Google reviews, catch unhappy patients privately, stay GDPR compliant.",
  keywords: [
    'patient feedback software', 'dental clinic Google reviews', 'QR review system',
    'healthcare reputation management', 'GDPR patient feedback', 'clinic review platform',
    'get more Google reviews', 'private patient feedback',
  ],
  alternates: { canonical: 'https://shiftdeploy.com/review-your-doctor' },
  openGraph: {
    title: 'Review Your Doctor | QR Patient Feedback',
    description:
      'A QR-powered patient feedback platform that grows 5-star Google reviews and catches unhappy patients privately, fully GDPR compliant.',
    url: 'https://shiftdeploy.com/review-your-doctor',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Review Your Doctor',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  description:
    'QR-powered patient feedback platform for UK private clinics that grows 5-star Google reviews, captures negative feedback privately, and stays GDPR compliant.',
  url: 'https://reviewyourdoctor.shiftdeploy.com',
  offers: {
    '@type': 'Offer',
    price: '49',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    description: '30-day free trial, then £49/month.',
  },
  provider: { '@type': 'Organization', name: 'ShiftDeploy', url: 'https://shiftdeploy.com' },
};

export default function ReviewYourDoctorPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ReviewYourDoctorLanding />
    </>
  );
}
