'use client';
import React, { Suspense, lazy, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';

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