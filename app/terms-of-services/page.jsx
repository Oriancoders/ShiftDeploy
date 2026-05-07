export const dynamic = 'force-dynamic';
import Terms_Of_Services from '../../src/Pages/Terms_Of_Services/Terms_Of_Services';

export const metadata = {
  title: 'Terms of Service | ShiftDeploy',
  description:
    'Read ShiftDeploy\'s terms of service to understand the rules and guidelines governing use of our services.',
  alternates: { canonical: 'https://shiftdeploy.com/terms-of-services' },
  robots: { index: true, follow: false },
};

export default function TermsOfServicesPage() {
  return <Terms_Of_Services />;
}
