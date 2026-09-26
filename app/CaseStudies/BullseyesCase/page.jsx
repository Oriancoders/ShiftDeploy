// Was force-dynamic, which shipped 24KB of shell with zero headings and none
// of the case study copy in the server HTML - invisible to crawlers and AI
// engines. Static with hourly revalidation renders the whole page.
export const revalidate = 3600;
import BullsEyesCase from '../../../src/Pages/CaseStudies/BullseyePage';

export const metadata = {
  title: 'Bullseye Investments Case Study: Website Redesign',
  description:
    'How we redesigned Bullseye Investments’ website so visitors understand the offer quickly and reach the client portal easily.',
  alternates: { canonical: 'https://shiftdeploy.com/CaseStudies/BullseyesCase' },
  openGraph: {
    title: 'Bullseye Investments Case Study: Website Redesign | ShiftDeploy',
    description:
      'How we redesigned Bullseye Investments’ website so visitors understand the offer quickly and reach the client portal easily.',
    url: 'https://shiftdeploy.com/CaseStudies/BullseyesCase',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }],
  },
};

export default function BullsEyesCasePage() {
  return <BullsEyesCase />;
}
