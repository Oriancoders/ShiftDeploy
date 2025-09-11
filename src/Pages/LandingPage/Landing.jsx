import React, { lazy, Suspense, useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';

const Hero = lazy(() => import('./landingComps/Hero'));
const InsideShiftDeploy = lazy(() => import('./landingComps/InsideShiftDeploy'));
const DeployToolkit = lazy(() => import('./landingComps/DeployToolkit'));
const ShiftProtocol = lazy(() => import('./landingComps/ShiftProtocol'));
const MissionsCompleted = lazy(() => import('./landingComps/MissionsCompleted'));
const FlightLogs = lazy(() => import('./landingComps/FlightLogs'));
// const GroundControlTeam = lazy(() => import('./landingComps/GroundControlTeam'));
// const ProblemSolutionCards = lazy(() => import('./landingComps/ProblemsolCard'));

const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const checkScroll = () => {
      if (window.scrollY === 0) {
        setIsLoading(false);
        window.removeEventListener('scroll', checkScroll);
      }
    };

    // Listen until reaches top
    window.addEventListener('scroll', checkScroll);

    // Fallback in case already at top
    if (window.scrollY === 0) {
      setIsLoading(false);
    }

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  if (isLoading) {
    return <ShiftDeployLoader />; // full-screen loader
  }

  return (
    <div className="w-full">
      <Navigation />
      <Suspense fallback={<ShiftDeployLoader />}>
        <Hero />
        <InsideShiftDeploy />
        {/* <ProblemSolutionCards /> */}
        <DeployToolkit />
        <ShiftProtocol />
        <MissionsCompleted />
        {/* <GroundControlTeam /> */}
        <FlightLogs />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Landing;
