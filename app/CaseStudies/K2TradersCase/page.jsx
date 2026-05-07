export const dynamic = 'force-dynamic';
import K2TradersCase from '../../../src/Pages/CaseStudies/K2Traders';

export const metadata = {
  title: 'K2 Traders Case Study | ShiftDeploy',
  description:
    'How ShiftDeploy helped K2 Traders build a faster, higher-converting website that drives real business results.',
  alternates: { canonical: 'https://shiftdeploy.com/CaseStudies/K2TradersCase' },
  openGraph: {
    title: 'K2 Traders Case Study | ShiftDeploy',
    description:
      'How ShiftDeploy helped K2 Traders build a faster, higher-converting website.',
    url: 'https://shiftdeploy.com/CaseStudies/K2TradersCase',
  },
};

export default function K2TradersCasePage() {
  return <K2TradersCase />;
}
