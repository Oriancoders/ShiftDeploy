import React, { Suspense, lazy, useEffect, useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ShiftDeployLoader from '../../components/ShiftDeployLoader'

// ✅ Lazy load all sections
const HeroSection = lazy(() => import('./sections/HeroSection'))
const QuoteWallSection = lazy(() => import('./sections/QuoteWallSection'))
// const VideoWallSection = lazy(() => import('./sections/VideoWallSection'))
const FinalPushCTASection = lazy(() => import('./sections/FinalPushCTASection'))
const LeaderboardStripSection = lazy(() => import('./sections/LeaderboardStripSection'))

const Flight_Landing = () => {
  const [showLoader, setShowLoader] = useState(true)

  // ✅ Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // ✅ Hide loader when scrollY === 0
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY === 0) {
        setShowLoader(false)
        window.removeEventListener('scroll', checkScroll)
      }
    }
    window.addEventListener('scroll', checkScroll)
    checkScroll()
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <>
      {showLoader && <ShiftDeployLoader />}
      {!showLoader && (
        <div className="w-full">
          <Navigation />
          <Suspense fallback={<ShiftDeployLoader />}>
            <HeroSection />
            <QuoteWallSection />
            {/* <VideoWallSection /> */}
            <FinalPushCTASection />
            <LeaderboardStripSection />
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  )
}

export default Flight_Landing
