// Was force-dynamic, which shipped 24KB of shell with zero headings and none
// of the case study copy in the server HTML - invisible to crawlers and AI
// engines. Static with hourly revalidation renders the whole page.
export const revalidate = 3600;
import K2TradersCase from '../../../src/Pages/CaseStudies/K2Traders';

export const metadata = {
  title: 'K2 Traders Case Study: Online Shop',
  description:
    'How we built K2 Traders an online shop that is quick to buy from on a phone, with no monthly hosting bill.',
  alternates: { canonical: 'https://shiftdeploy.com/CaseStudies/K2TradersCase' },
  openGraph: {
    title: 'K2 Traders Case Study: Online Shop | ShiftDeploy',
    description:
      'How we built K2 Traders an online shop that is quick to buy from on a phone, with no monthly hosting bill.',
    url: 'https://shiftdeploy.com/CaseStudies/K2TradersCase',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'ShiftDeploy' }],
  },
};

export default function K2TradersCasePage() {
  return <K2TradersCase />;
}
