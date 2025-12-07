import React, { Suspense, lazy, useEffect } from 'react';
import Navigation from '../../components/Navigation';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        {/* Basic SEO */}
        <title>Missions Completed | ShiftDeploy</title>
        <meta 
          name="description" 
          content="See how ShiftDeploy helped builders overcome CI/CD, cloud, and DevOps challenges through our completed missions and real case studies." 
        />
        <meta 
          name="keywords" 
          content="ShiftDeploy missions, DevOps case studies, deployment success stories, CI/CD solutions, cloud infrastructure projects" 
        />
        <link 
          rel="canonical" 
          href="https://www.shiftdeploy.com/missions" 
        />

        {/* Open Graph / Social */}
        <meta property="og:title" content="Missions Completed | ShiftDeploy" />
        <meta 
          property="og:description" 
          content="Explore real-world missions completed by ShiftDeploy — delivering reliable CI/CD, cloud, and DevOps solutions to builders worldwide." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com/missions" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Missions Completed | ShiftDeploy" />
        <meta 
          name="twitter:description" 
          content="Explore real-world missions completed by ShiftDeploy — delivering reliable CI/CD, cloud, and DevOps solutions to builders worldwide." 
        />
      </Helmet>

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