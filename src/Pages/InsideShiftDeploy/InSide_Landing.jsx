import React, { Suspense, lazy, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Inside ShiftDeploy | Our Mission, Values & Mindset</title>
        <meta
          name="description"
          content="Discover the story behind ShiftDeploy — how our team helps innovators overcome deployment roadblocks with CI/CD, Cloud, and DevOps solutions."
        />
        <meta name="keywords" content="ShiftDeploy, CI/CD, Cloud, DevOps, deployment experts, team, mindset, mission" />
        <meta property="og:title" content="Inside ShiftDeploy" />
        <meta property="og:description" content="Learn about ShiftDeploy's mission, values and approach to solving deployment challenges for builders." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com/insideShiftDeploy" />
        {/* <meta property="og:image" content="https://www.shiftdeploy.com/og-banner.jpg" /> */}
      </Helmet>

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