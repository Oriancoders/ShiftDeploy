import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import FlowHero from './sections/FlowHero';
import FlowProblem from './sections/FlowProblem';
import FlowSolution from './sections/FlowSolution';
import FlowComparison from './sections/FlowComparison';
import FlowFaqs from './sections/FlowFaqs';
import { IndustriesSection } from './sections/IndustriesSection';

export default function ShiftFlow() {
  return (
    <div className="w-full">
      <Navigation />
      <main>
        <FlowHero />
        <FlowProblem />
        <IndustriesSection />
        <FlowSolution />
        <FlowComparison />
        <FlowFaqs />
      </main>
      <Footer />
    </div>
  );
}
