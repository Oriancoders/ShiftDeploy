export const dynamic = 'force-dynamic';
import PrivacyPolicy from '../../src/Pages/PrivacyPolicy/PrivacyPolicy';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Read ShiftDeploy\'s privacy policy to understand how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://shiftdeploy.com/privacy-policy' },
  robots: { index: true, follow: false },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
