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
        <title>How We Work | The ShiftDeploy Process</title>

        <meta
          name="description"
          content="Learn how ShiftDeploy approaches problems from first audit to final delivery. A clear, structured process designed to reduce risk, create clarity, and deliver measurable outcomes."
        />

        <link
          rel="canonical"
          href="https://www.shiftdeploy.com/shift-protocol"
        />

        {/* Open Graph */}
        <meta property="og:title" content="How We Work | The ShiftDeploy Process" />
        <meta
          property="og:description"
          content="A transparent look at how ShiftDeploy works, from understanding the problem to delivering reliable, outcome-focused solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com/shift-protocol" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How We Work | The ShiftDeploy Process" />
        <meta
          name="twitter:description"
          content="See how ShiftDeploy turns complex problems into clear plans and dependable delivery."
        />
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