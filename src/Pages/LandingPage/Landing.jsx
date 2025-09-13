import React, { lazy, Suspense, useEffect, useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ShiftDeployLoader from '../../components/ShiftDeployLoader';
import { Helmet } from 'react-helmet-async';

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
    <>

      <Helmet>
        <title>ShiftDeploy - Transform Your Digital Vision Into Reality</title>
        <meta
          name="description"
          content="ShiftDeploy provides cutting-edge web development, cloud services, DevOps excellence, and deployment solutions to help businesses grow their digital presence."
        />

        <meta
          name="keywords"
          content="ShiftDeploy, DevOps, CI/CD pipelines, cloud deployment, infrastructure automation"
        />
        <meta property="og:title" content="ShiftDeploy - Transform Your Digital Vision Into Reality" />
        <meta property="og:description" content="ShiftDeploy provides cutting-edge web development, cloud services, DevOps excellence, and deployment solutions to help businesses grow their digital presence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com" />
        {/* <meta property="og:image" content="https://www.shiftdeploy.com/og-banner.jpg" /> */}
      </Helmet>

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
    </>
  );
};

export default Landing;
