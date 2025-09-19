import React, { Suspense, lazy, useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import ShiftDeployLoader from '../../components/ShiftDeployLoader';
import { Helmet } from 'react-helmet-async';

// ✅ Lazy imports
const OriginStorySection = lazy(() => import('./comps/OriginStorySection'))
// const MindsetSection = lazy(() => import('./comps/MindsetSection'))
const StoryInFramesSection = lazy(() => import('./comps/StoryInFramesSection'))
const PhilosophySection = lazy(() => import('./comps/PhilosophySection'))
const HowWeWorkSection = lazy(() => import('./comps/HowWeWorkSection'))
const CTASection = lazy(() => import('./comps/CTASection'))
const WhatWeBelieveSection = lazy(() => import('./comps/WhatWeBelieveSection'))



const InSide_Landing = () => {
  const [showLoader, setShowLoader] = useState(true)

  // ✅ Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // ✅ Hide loader once scrollY == 0 and page is mounted
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY === 0) {
        setShowLoader(false)
        window.removeEventListener('scroll', checkScroll)
      }
    }
    window.addEventListener('scroll', checkScroll)
    // also check immediately in case already at top
    checkScroll()
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <>
      <Helmet>
        <title>Inside ShiftDeploy | Our Mission, Values & Mindset</title>
        <meta
          name="description"
          content="Discover the story behind ShiftDeploy — how our team helps innovators overcome deployment roadblocks with CI/CD, Cloud, and DevOps solutions."
        />
        <meta name="keywords" content="ShiftDeploy, CI/CD, Cloud, DevOps, deployment experts, team, mindset, mission" />
        <meta property="og:title" content="Inside ShiftDeploy" />
        <meta property="og:description" content="Learn about ShiftDeploy's mission, values and approach to solving deployment challenges for builders." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com/insideShiftDeploy" />
        <meta property="og:image" content="https://www.shiftdeploy.com/og-banner.jpg" />
      </Helmet>
      {showLoader && <ShiftDeployLoader />}
      {!showLoader && (
        <div>
          <Navigation />
          <Suspense fallback={<ShiftDeployLoader />}>
            <OriginStorySection />
            {/* <MindsetSection/> */}
            <StoryInFramesSection />
            <PhilosophySection />
            <HowWeWorkSection />
            <CTASection />
            <WhatWeBelieveSection />
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  )
}

export default InSide_Landing
