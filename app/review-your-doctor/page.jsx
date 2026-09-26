export const revalidate = 3600;
import ReviewYourDoctorLanding from '../../src/Pages/ReviewYourDoctorLanding';
import JsonLd from '../../src/components/JsonLd';

export const metadata = {
  title: 'Get More Google Reviews for Your Clinic',
  description:
    'Review Your Doctor helps UK private clinics get more 5-star Google reviews and hear about problems privately first. Free for 30 days, then from £49 a month.',
  keywords: [
    'patient feedback software', 'dental clinic Google reviews', 'QR review system',
    'healthcare reputation management', 'GDPR patient feedback', 'clinic review platform',
    'get more Google reviews', 'private patient feedback',
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

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Review Your Doctor',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  description:
    'Patient review software for UK private clinics that grows 5-star Google reviews and captures negative feedback privately, built with UK GDPR in mind.',
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
