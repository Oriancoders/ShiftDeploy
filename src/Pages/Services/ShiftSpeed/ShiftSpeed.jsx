import React, { lazy, Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>ShiftSpeed™ | Website Performance Optimization That Protects Growth | ShiftDeploy</title>

        <meta
          name="description"
          content="ShiftSpeed™ fixes slow, fragile websites before they cost you trust, rankings, and conversions. Engineering-led performance optimization for businesses that need speed to work, not just look good."
        />
        <meta
          name="keywords"
          content="ShiftSpeed, website speed optimization, Core Web Vitals, performance optimization service, website performance engineering, slow website fix, technical SEO speed"
        />


        <meta
          property="og:title"
          content="ShiftSpeed™ – Website Performance Optimization That Comes First"
        />

        <meta
          property="og:description"
          content="ShiftSpeed™ fixes slow, fragile websites before they cost you trust, rankings, and conversions. Engineering-led performance optimization built for businesses that depend on speed."
        />

        <meta property="og:type" content="website" />


        <meta
          property="og:url"
          content="https://www.shiftdeploy.com/services/shiftspeed"
        />



        {/* ... other meta tags ... */}
      </Helmet>

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