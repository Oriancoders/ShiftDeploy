'use client';
import React, { Suspense, lazy, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';

// ✅ EAGER IMPORT (Load immediately for LCP)
import HeroSection from './sections/HeroSection';

// ✅ LAZY IMPORTS (Load in background)
const ServiceCategoriesSection = lazy(() => import('./sections/ServiceCategoriesSection'));
const WhatWeSolveSection = lazy(() => import('./sections/WhatWeSolveSection'));
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'));
const FinalCTASection = lazy(() => import('./sections/CTA'));
const FAQSection = lazy(() => import('./sections/FAQSection'));
const Footer = lazy(() => import('../../components/Footer')); // Lazy loading footer saves initial bytes

const Toolkit_Landing = () => {

  // ✅ Simple Scroll to Top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      


      <div className="w-full overflow-x-hidden">
        {/* 1. Navigation loads instantly */}
        <Navigation />

        {/* 2. Hero loads instantly (No Spinner) */}
        <HeroSection />

        {/* 3. The rest loads in background */}
        <Suspense fallback={<ShiftDeployLoader />}>
          <ServiceCategoriesSection />
          <WhatWeSolveSection />
          <TestimonialsSection />
          <FinalCTASection />
          <FAQSection />
        </Suspense>


      </div>
      <Footer />
    </>
  );
};

export default Toolkit_Landing;