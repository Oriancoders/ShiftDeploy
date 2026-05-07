export const dynamic = 'force-dynamic';
import BullsEyesCase from '../../../src/Pages/CaseStudies/BullsEyesCase';

export const metadata = {
  title: 'BullsEyes Investments Case Study | ShiftDeploy',
  description:
    'How ShiftDeploy helped BullsEyes Investments improve their web performance, conversions, and online presence.',
  alternates: { canonical: 'https://shiftdeploy.com/CaseStudies/BullseyesCase' },
  openGraph: {
    title: 'BullsEyes Investments Case Study | ShiftDeploy',
    description:
      'How ShiftDeploy helped BullsEyes Investments improve their web performance and conversions.',
    url: 'https://shiftdeploy.com/CaseStudies/BullseyesCase',
  },
};

export default function BullsEyesCasePage() {
  return <BullsEyesCase />;
}
