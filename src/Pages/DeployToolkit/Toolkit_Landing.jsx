import Navigation from '../../components/Navigation';

import HeroSection from './sections/HeroSection';

import ServiceCategoriesSection from './sections/ServiceCategoriesSection';
import WhatWeSolveSection from './sections/WhatWeSolveSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FinalCTASection from './sections/CTA';
import FAQSection from './sections/FAQSection';
import Footer from '../../components/Footer';

const Toolkit_Landing = () => {


  return (
    <>
      


      <div className="w-full overflow-x-hidden">

        <Navigation />

        <HeroSection />

          <ServiceCategoriesSection />
          <WhatWeSolveSection />
          <TestimonialsSection />
          <FinalCTASection />
          <FAQSection />



      </div>
      <Footer />
    </>
  );
};

export default Toolkit_Landing;
