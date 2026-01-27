import React, { lazy, Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';
import TrustStrip from '../../components/TrustStrip';

// ✅ FIX 1: Import Hero DIRECTLY. No lazy loading for what the user sees first.
import Hero from './landingComps/Hero'; 

// Keep "Below the fold" components lazy to save bandwidth
const InsideShiftDeploy = lazy(() => import('./landingComps/InsideShiftDeploy'));
const DeployToolkit = lazy(() => import('./landingComps/DeployToolkit'));
const ShiftProtocol = lazy(() => import('./landingComps/ShiftProtocol'));
const MissionsCompleted = lazy(() => import('./landingComps/MissionsCompleted'));
const FlightLogs = lazy(() => import('./landingComps/FlightLogs'));

const Landing = () => {

  // ✅ FIX 2: Remove the "isLoading" state blocker. 
  // Just scroll to top as a side effect. It happens so fast user won't notice.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // Use 'instant' for initial load, 'smooth' feels laggy on mount
  }, []);

  return (
    <>
      <Helmet>
          <title>ShiftDeploy - Performance, Conversions, and Growth</title>
        <meta
          name="description"
          content="ShiftDeploy helps businesses improve website speed, increase conversions, and build sites that are easy to grow and maintain over time."
        />
        {/* ... other meta tags ... */}
      </Helmet>

      <div className="w-full">
        <Navigation />
        
        {/* ✅ FIX 3: Hero renders IMMEDIATELY. No Suspense fallback blocking it. */}
        <Hero />
        
        {/* ✅ FIX 4: Only wrap the heavy, lower-down stuff in Suspense */}
        <Suspense fallback={<ShiftDeployLoader />}>
          <TrustStrip/>
          <DeployToolkit />
          <InsideShiftDeploy />
          <ShiftProtocol />
          <MissionsCompleted />
          <FlightLogs />
        </Suspense>
        
        <Footer />
      </div>
    </>
  );
};

export default Landing;