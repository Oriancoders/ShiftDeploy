'use client';
import React, { Suspense, lazy, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';

// ✅ EAGER IMPORT (Load immediately for LCP)
import HeroSection from './sections/HeroSection';

// ✅ LAZY IMPORTS (Load in background)
const CaseStudyCardsSection = lazy(() => import('./sections/CaseStudyCardsSection'));
const FeaturedMissionSection = lazy(() => import('./sections/FeaturedMissionSection'));
const ClientQuoteWallSection = lazy(() => import('./sections/ClientQuoteWallSection'));
const CallToActionSection = lazy(() => import('./sections/CallToActionSection'));
const ImpactAnalyticsSection = lazy(() => import('./sections/ImpactAnalyticsSection'));
const Footer = lazy(() => import('../../components/Footer'));

const Mission_Landing = () => {

  // ✅ Simple Scroll to Top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      

      <div className="w-full">
        {/* 1. Navigation loads instantly */}
        <Navigation />

        {/* 2. Hero loads instantly */}
        <HeroSection />

        {/* 3. The rest loads in background via Suspense */}
        <Suspense fallback={<ShiftDeployLoader />}>
          <CaseStudyCardsSection />
          <FeaturedMissionSection />
          <ClientQuoteWallSection />
          <CallToActionSection />
          <ImpactAnalyticsSection />
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Mission_Landing;