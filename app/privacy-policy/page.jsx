export const dynamic = 'force-dynamic';
import BreadcrumbSchema from '../../src/components/BreadcrumbSchema';
import PrivacyPolicy from '../../src/Pages/PrivacyPolicy/PrivacyPolicy';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Read ShiftDeploy\'s privacy policy to understand how we collect, use, and protect your personal information.',
  openGraph: { url: 'https://shiftdeploy.com/privacy-policy', title: 'Privacy Policy | ShiftDeploy', images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }] },
  alternates: { canonical: 'https://shiftdeploy.com/privacy-policy' },
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={[['Privacy policy', '/privacy-policy']]} />
      <PrivacyPolicy />
    </>
  );
}
