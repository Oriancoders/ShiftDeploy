'use client';
import React, { lazy, Suspense, useEffect } from 'react';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ShiftDeployLoader from '../../../components/ShiftDeployLoader';
import SpeedHero from './sections/SpeedHero';
const SpeedProblem = lazy(() => import('./sections/SpeedProblem'));
const SpeedSolution = lazy(() => import('./sections/SpeedSolution'));
const SpeedComparison = lazy(() => import('./sections/SpeedComparison'));
const SpeedFaqs = lazy(() => import('./sections/SpeedFaqs'));
const IndustriesSection = lazy(() => import('./sections/IndustriesSection').then(m => ({ default: m.IndustriesSection })));





const ShiftSpeed = () => {

  // ✅ FIX 2: Remove the "isLoading" state blocker. 
  // Just scroll to top as a side effect. It happens so fast user won't notice.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // Use 'instant' for initial load, 'smooth' feels laggy on mount
  }, []);

  return (
    <>
      

      <div className="w-full">
        <Navigation />

        {/* ✅ FIX 3: Hero renders IMMEDIATELY. No Suspense fallback blocking it. */}

        {/* ✅ FIX 4: Only wrap the heavy, lower-down stuff in Suspense */}
        <Suspense fallback={<ShiftDeployLoader />}>
         <SpeedHero />
          <SpeedProblem />
          <IndustriesSection />
          <SpeedSolution />
          <SpeedComparison />
          <SpeedFaqs />

        </Suspense>

        <Footer />
      </div>
    </>
  );
};

export default ShiftSpeed;