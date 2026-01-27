import React, { lazy, Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ShiftDeployLoader from '../../../components/ShiftDeployLoader';
import TrustStrip from '../../../components/TrustStrip';
import Hero from '../../LandingPage/landingComps/Hero';
import SpeedHero from './sections/SpeedHero';
import SpeedProblem from './sections/SpeedProblem';
import SpeedSolution from './sections/SpeedSolution';
import SpeedAudience from './sections/SpeedAudience';
import SpeedComparison from './sections/SpeedComparison';
import SpeedPricing from './sections/SpeedPricing';
import SpeedFaqs from './sections/SpeedFaqs';
import ProblemSection from './sections/ProblemSection';
import ComparisonSection from './sections/ComparisionSection';
import { IndustriesSection } from './sections/IndustriesSection';
import PricingSection from './sections/PricingSection';





const ShiftSpeed = () => {

  // ✅ FIX 2: Remove the "isLoading" state blocker. 
  // Just scroll to top as a side effect. It happens so fast user won't notice.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' }); // Use 'instant' for initial load, 'smooth' feels laggy on mount
  }, []);

  return (
    <>
      <Helmet>
        <title>ShiftDeploy - Transform Your Vision Into High-Performance Reality</title>
        <meta
          name="description"
          content="ShiftDeploy provides cutting-edge web development..."
        />
        {/* ... other meta tags ... */}
      </Helmet>

      <div className="w-full">
        <Navigation />
        
        {/* ✅ FIX 3: Hero renders IMMEDIATELY. No Suspense fallback blocking it. */}
        <SpeedHero />
        
        {/* ✅ FIX 4: Only wrap the heavy, lower-down stuff in Suspense */}
        <Suspense fallback={<ShiftDeployLoader />}>
          {/* <TrustStrip/> */}
          <SpeedProblem />  
          {/* <ProblemSection /> */}
          {/* <ComparisonSection/> */}
          <IndustriesSection/>
          <SpeedSolution />
          <SpeedAudience />
          {/* <SpeedProtocol /> */}
          <SpeedComparison/>
          {/* <SpeedPricing /> */}
          <PricingSection/>
          <SpeedFaqs/>
          
        </Suspense>
        
        <Footer />
      </div>
    </>
  );
};

export default ShiftSpeed;