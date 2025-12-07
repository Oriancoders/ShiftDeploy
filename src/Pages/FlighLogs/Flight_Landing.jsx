import React, { Suspense, lazy, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';
import { Helmet } from 'react-helmet-async';

// ✅ EAGER IMPORT (Load immediately)
import HeroSection from './sections/HeroSection';

// ✅ LAZY IMPORTS (Load in background)
const QuoteWallSection = lazy(() => import('./sections/QuoteWallSection'));
// const VideoWallSection = lazy(() => import('./sections/VideoWallSection'))
const FinalPushCTASection = lazy(() => import('./sections/FinalPushCTASection'));
const LeaderboardStripSection = lazy(() => import('./sections/LeaderboardStripSection'));
const Footer = lazy(() => import('../../components/Footer'));

const Flight_Landing = () => {

  // ✅ Simple Scroll to Top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
    <Helmet>
        {/* Basic SEO */}
        <title>Flight Logs | Client Testimonials - ShiftDeploy</title>
        <meta 
          name="description" 
          content="Read what our clients have to say about ShiftDeploy. Honest feedback from builders we've helped with DevOps, CI/CD, and cloud deployment challenges." 
        />
        <meta 
          name="keywords" 
          content="ShiftDeploy testimonials, ShiftDeploy reviews, client feedback, DevOps client reviews, CI/CD deployment experience" 
        />
        <link 
          rel="canonical" 
          href="https://www.shiftdeploy.com/flightLogs" 
        />

        {/* Open Graph / Social */}
        <meta property="og:title" content="Flight Logs | Client Testimonials - ShiftDeploy" />
        <meta 
          property="og:description" 
          content="Discover how builders rate their journey with ShiftDeploy. Honest feedback from clients we've helped deploy their amazing creations." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com/flightLogs" />
        {/* <meta property="og:image" content="https://www.shiftdeploy.com/og-banner.jpg" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flight Logs | Client Testimonials - ShiftDeploy" />
        <meta 
          name="twitter:description" 
          content="Discover how builders rate their journey with ShiftDeploy. Honest feedback from clients we've helped deploy their amazing creations." 
        />
        {/* <meta name="twitter:image" content="https://www.shiftdeploy.com/og-banner.jpg" /> */}
      </Helmet>

      <div className="w-full">
        {/* 1. Navigation loads instantly */}
        <Navigation />

        {/* 2. Hero loads instantly */}
        <HeroSection />

        {/* 3. The rest loads in background via Suspense */}
        <Suspense fallback={<ShiftDeployLoader />}>
          <QuoteWallSection />
          {/* <VideoWallSection /> */}
          <FinalPushCTASection />
          <LeaderboardStripSection />
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Flight_Landing;