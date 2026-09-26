// Was force-dynamic, which shipped 24KB of shell with zero headings and none
// of the case study copy in the server HTML - invisible to crawlers and AI
// engines. Static with hourly revalidation renders the whole page.
export const revalidate = 3600;
import SlackerIOT from '../../../src/Pages/CaseStudies/SlackerIOT';

export const metadata = {
  title: 'Slacker IoT Case Study: EV Charging Platform',
  description:
    'How we built Slacker IoT a complete EV charging platform with a customer dashboard, admin controls and automatic billing.',
  alternates: { canonical: 'https://shiftdeploy.com/CaseStudies/SlackerIOT' },
  openGraph: {
    title: 'Slacker IoT Case Study: EV Charging Platform | ShiftDeploy',
    description:
      'How we built Slacker IoT a complete EV charging platform with a customer dashboard, admin controls and automatic billing.',
    url: 'https://shiftdeploy.com/CaseStudies/SlackerIOT',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }],
  },
};

export default function SlackerIOTPage() {
  return <SlackerIOT />;
}
