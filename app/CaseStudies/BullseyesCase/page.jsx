// Was force-dynamic, which shipped 24KB of shell with zero headings and none
// of the case study copy in the server HTML - invisible to crawlers and AI
// engines. Static with hourly revalidation renders the whole page.
export const revalidate = 3600;
import BullsEyesCase from '../../../src/Pages/CaseStudies/BullsEyesCase';

export const metadata = {
  title: 'BullsEyes Investments Case Study',
  description:
    'How ShiftDeploy helped BullsEyes Investments improve their web performance, conversions, and online presence.',
  alternates: { canonical: 'https://shiftdeploy.com/CaseStudies/BullseyesCase' },
  openGraph: {
    title: 'BullsEyes Investments Case Study | ShiftDeploy',
    description:
      'How ShiftDeploy helped BullsEyes Investments improve their web performance and conversions.',
    url: 'https://shiftdeploy.com/CaseStudies/BullseyesCase',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }],
  },
};

export default function BullsEyesCasePage() {
  return <BullsEyesCase />;
}
