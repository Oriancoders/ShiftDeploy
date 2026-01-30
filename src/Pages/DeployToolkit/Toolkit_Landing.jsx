import React, { Suspense, lazy, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        {/* Basic SEO */}
        <title>Services | ShiftDeploy</title>
        <meta
          name="description"
          content="Explore ShiftDeploy’s 4 service tracks: performance speed fixes, CRO & UX improvements, high-performance builds, and ongoing optimization. Clear outcomes, fast execution, and full ownership."
        />
        <meta
          name="keywords"
          content="website performance optimization, core web vitals, CRO, UX optimization, web development agency, ecommerce development, website maintenance, ShiftDeploy services, Fast website solutions, conversion rate optimization, growth-ready web builds"
        />
        <link rel="canonical" href="https://www.shiftdeploy.com/services" />

        {/* Open Graph / Social */}
        <meta
          property="og:title"
          content="Services | ShiftDeploy"
        />
        <meta
          property="og:description"
          content="4 service tracks to help you grow: Speed (performance), Convert (CRO & UX), Build (new websites), and Flow (ongoing optimization)."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com/deploy-toolkit" />
        {/* Optional: add if you have a real banner */}
        {/* <meta property="og:image" content="https://www.shiftdeploy.com/og-services.jpg" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Services | ShiftDeploy"
        />
        <meta
          name="twitter:description"
          content="Speed, CRO & UX, new builds, and ongoing optimization. outcomes-first work for businesses that want growth without complexity."
        />

      </Helmet>


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