// Was force-dynamic, which shipped 24KB of shell with zero headings and none
// of the case study copy in the server HTML - invisible to crawlers and AI
// engines. Static with hourly revalidation renders the whole page.
export const revalidate = 3600;
import K2TradersCase from '../../../src/Pages/CaseStudies/K2Traders';

export const metadata = {
  title: 'K2 Traders Case Study',
  description:
    'How ShiftDeploy helped K2 Traders build a faster, higher-converting website that drives real business results.',
  alternates: { canonical: 'https://shiftdeploy.com/CaseStudies/K2TradersCase' },
  openGraph: {
    title: 'K2 Traders Case Study | ShiftDeploy',
    description:
      'How ShiftDeploy helped K2 Traders build a faster, higher-converting website.',
    url: 'https://shiftdeploy.com/CaseStudies/K2TradersCase',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }],
  },
};

export default function K2TradersCasePage() {
  return <K2TradersCase />;
}
