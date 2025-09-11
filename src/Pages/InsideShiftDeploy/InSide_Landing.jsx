import React, { Suspense, lazy, useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import ShiftDeployLoader from '../../components/ShiftDeployLoader';

// ✅ Lazy imports
const OriginStorySection = lazy(() => import('./comps/OriginStorySection'))
// const MindsetSection = lazy(() => import('./comps/MindsetSection'))
// const TeamSection = lazy(() => import('./comps/TeamSection'))
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
      {showLoader && <ShiftDeployLoader />}
      {!showLoader && (
        <div>
          <Navigation />
          <Suspense fallback={<ShiftDeployLoader />}>
            <OriginStorySection />
            {/* <MindsetSection/> */}
            {/* <TeamSection/> */}
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
