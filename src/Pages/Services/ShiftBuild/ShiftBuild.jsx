import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import BuildHero from './sections/BuildHero';
import BuildProblem from './sections/BuildProblem';
import BuildSolution from './sections/BuildSolution';
import BuildComparison from './sections/BuildComparison';
import BuildFaqs from './sections/BuildFaqs';
import { IndustriesSection } from './sections/IndustriesSection';

export default function ShiftBuild() {
  return (
    <div className="w-full">
      <Navigation />
      <main>
        <BuildHero />
        <BuildProblem />
        <IndustriesSection />
        <BuildSolution />
        <BuildComparison />
        <BuildFaqs />
      </main>
      <Footer />
    </div>
  );
}
