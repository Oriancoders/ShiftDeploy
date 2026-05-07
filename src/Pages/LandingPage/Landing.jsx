'use client';
import React, { lazy, Suspense, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';
// TrustStrip will be lazy-loaded below to keep initial bundle small

// ✅ FIX 1: Import Hero DIRECTLY. No lazy loading for what the user sees first.
import Hero from './landingComps/Hero';

// Everything below the fold is lazy — only Hero renders on first paint
const DigitalReceptionist = lazy(() => import('./landingComps/DigitalReceptionist'));
const InsideShiftDeploy = lazy(() => import('./landingComps/InsideShiftDeploy'));
const DeployToolkit = lazy(() => import('./landingComps/DeployToolkit'));
const ShiftProtocol = lazy(() => import('./landingComps/ShiftProtocol'));
const MissionsCompleted = lazy(() => import('./landingComps/MissionsCompleted'));
const VideoTestimonial = lazy(() => import('./landingComps/VideoTestimonial'));
const TrustStrip = lazy(() => import('../../components/TrustStrip'));
const Footer = lazy(() => import('../../components/Footer'));

const Landing = () => {

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
        <Hero />
        
        {/* ✅ FIX 4: Only wrap the heavy, lower-down stuff in Suspense */}
        <Suspense fallback={<ShiftDeployLoader />}>
          <DigitalReceptionist />
          <InsideShiftDeploy />
          <VideoTestimonial videoSrc='https://res.cloudinary.com/dbazbq7u9/video/upload/v1771101197/Web_Video_1_handbraked_xii5jz.mp4'  posterSrc='https://res.cloudinary.com/dbazbq7u9/image/upload/v1771111040/poster_drnahj.webp'/>
          <DeployToolkit />
          <TrustStrip/>

          <ShiftProtocol />
          <MissionsCompleted />
        </Suspense>
        
        <Footer />
      </div>
    </>
  );
};

export default Landing;