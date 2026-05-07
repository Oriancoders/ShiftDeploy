'use client';
import React, { Suspense, lazy, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';

// ✅ EAGER IMPORT (Load this immediately for the user)
import OriginStorySection from './comps/OriginStorySection';

// ✅ LAZY IMPORTS (Load these in the background)
// const MindsetSection = lazy(() => import('./comps/MindsetSection'))
const StoryInFramesSection = lazy(() => import('./comps/StoryInFramesSection'));
const PhilosophySection = lazy(() => import('./comps/PhilosophySection'));
const HowWeWorkSection = lazy(() => import('./comps/HowWeWorkSection'));
const CTASection = lazy(() => import('./comps/CTASection'));
const WhatWeBelieveSection = lazy(() => import('./comps/WhatWeBelieveSection'));
const Footer = lazy(() => import('../../components/Footer')); // Lazy load footer too since it's at the bottom

const InSide_Landing = () => {

  // ✅ Simple Scroll to Top (No blocking logic)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      

      <div>
        {/* 1. Navigation loads instantly */}
        <Navigation />

        {/* 2. Hero Section loads instantly (Critical for LCP) */}
        <OriginStorySection />

        {/* 3. The rest loads in the background while user reads the Hero */}
        <Suspense fallback={<ShiftDeployLoader />}>
          {/* <MindsetSection/> */}
          <StoryInFramesSection />
          <PhilosophySection />
          <HowWeWorkSection />
          <CTASection />
          <WhatWeBelieveSection />
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default InSide_Landing;