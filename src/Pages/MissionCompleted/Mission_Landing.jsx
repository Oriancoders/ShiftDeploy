import React, { Suspense, lazy, useEffect, useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ShiftDeployLoader from '../../components/ShiftDeployLoader'

// ✅ Lazy load all sections
const HeroSection = lazy(() => import('./sections/HeroSection'))
const CaseStudyCardsSection = lazy(() => import('./sections/CaseStudyCardsSection'))
const FeaturedMissionSection = lazy(() => import('./sections/FeaturedMissionSection'))
const ClientQuoteWallSection = lazy(() => import('./sections/ClientQuoteWallSection'))
const CallToActionSection = lazy(() => import('./sections/CallToActionSection'))
const ImpactAnalyticsSection = lazy(() => import('./sections/ImpactAnalyticsSection'))

const Mission_Landing = () => {
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
            <CaseStudyCardsSection />
            <FeaturedMissionSection />
            <ClientQuoteWallSection />
            <CallToActionSection />
            <ImpactAnalyticsSection />
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  )
}

export default Mission_Landing
