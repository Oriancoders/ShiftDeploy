import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ConvertHero from './sections/ConvertHero';
import ConvertProblem from './sections/ConvertProblem';
import ConvertSolution from './sections/ConvertSolution';
import ConvertComparison from './sections/ConvertComparison';
import ConvertFaqs from './sections/ConvertFaqs';
import { IndustriesSection } from './sections/IndustriesSection';

export default function ShiftConvert() {
  return (
    <div className="w-full">
      <Navigation />
      <main>
        <ConvertHero />
        <ConvertProblem />
        <IndustriesSection />
        <ConvertSolution />
        <ConvertComparison />
        <ConvertFaqs />
      </main>
      <Footer />
    </div>
  );
}
