import React, { Suspense, lazy, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';
import { Helmet } from 'react-helmet-async';

// ✅ EAGER IMPORT (Load immediately for LCP)
import ProtocolManifestoSection from './sections/ProtocolManifestoSection';

// ✅ LAZY IMPORTS (Load in background)
const PhasesSection = lazy(() => import('./sections/PhasesSection'));
const GuaranteesSection = lazy(() => import('./sections/GuaranteesSection'));
const CommunicationRitualsSection = lazy(() => import('./sections/CommunicationRitualsSection'));
const FinalCTASection = lazy(() => import('./sections/FinalCTASection'));
const ClientControlSection = lazy(() => import('./sections/ClientControlSection'));
const Footer = lazy(() => import('../../components/Footer'));

const Landing_Protocol = () => {

  // ✅ Simple Scroll to Top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>Shift Protocol | ShiftDeploy</title>
        <meta 
          name="description" 
          content="Discover the Shift Protocol, our phased approach to solving CI/CD, cloud, and DevOps challenges with clarity, structure, and guaranteed outcomes." 
        />
        <meta 
          name="keywords" 
          content="Shift Protocol, deployment process, CI/CD strategy, DevOps framework, cloud infrastructure, ShiftDeploy" 
        />
        <link 
          rel="canonical" 
          href="https://www.shiftdeploy.com/shift-protocol" 
        />

        {/* Open Graph / Social */}
        <meta property="og:title" content="Shift Protocol | ShiftDeploy" />
        <meta 
          property="og:description" 
          content="Explore the Shift Protocol — a proven phased method to guide builders through deployment challenges with guaranteed success." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com/shift-protocol" />
        <meta property="og:image" content="https://www.shiftdeploy.com/og-banner.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shift Protocol | ShiftDeploy" />
        <meta 
          name="twitter:description" 
          content="Explore the Shift Protocol — a proven phased method to guide builders through deployment challenges with guaranteed success." 
        />
        <meta name="twitter:image" content="https://www.shiftdeploy.com/og-banner.jpg" />
      </Helmet>

      <div className="w-full">
        {/* 1. Navigation loads instantly */}
        <Navigation />

        {/* 2. Hero loads instantly (Critical for Speed) */}
        <ProtocolManifestoSection />

        {/* 3. The rest loads in background via Suspense */}
        <Suspense fallback={<ShiftDeployLoader />}>
          <PhasesSection />
          <GuaranteesSection />
          <CommunicationRitualsSection />
          <FinalCTASection />
          <ClientControlSection />
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Landing_Protocol;