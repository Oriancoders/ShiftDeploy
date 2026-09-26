import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import SpeedHero from './sections/SpeedHero';
import SpeedProblem from './sections/SpeedProblem';
import SpeedSolution from './sections/SpeedSolution';
import SpeedComparison from './sections/SpeedComparison';
import SpeedFaqs from './sections/SpeedFaqs';
import { IndustriesSection } from './sections/IndustriesSection';

export default function ShiftSpeed() {
  return (
    <div className="w-full">
      <Navigation />
      <main>
        <SpeedHero />
        <SpeedProblem />
        <IndustriesSection />
        <SpeedSolution />
        <SpeedComparison />
        <SpeedFaqs />
      </main>
      <Footer />
    </div>
  );
}
