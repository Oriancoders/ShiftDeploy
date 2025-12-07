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
        <title>Deploy Toolkit | ShiftDeploy</title>
        <meta
          name="description"
          content="Explore ShiftDeploy's Deploy Toolkit — solutions for CI/CD, cloud, and DevOps challenges. We help builders overcome deployment hurdles and launch faster."
        />
        <meta
          name="keywords"
          content="CI/CD solutions, DevOps deployment, cloud infrastructure, deployment toolkit, ShiftDeploy"
        />
        <link
          rel="canonical"
          href="https://www.shiftdeploy.com/deploy-toolkit"
        />

        {/* Open Graph / Social */}
        <meta property="og:title" content="Deploy Toolkit | ShiftDeploy" />
        <meta
          property="og:description"
          content="Solve your CI/CD, cloud, and DevOps deployment challenges with ShiftDeploy's expert toolkit."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com/deploy-toolkit" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deploy Toolkit | ShiftDeploy" />
        <meta
          name="twitter:description"
          content="Solve your CI/CD, cloud, and DevOps deployment challenges with ShiftDeploy's expert toolkit."
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
            <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Toolkit_Landing;