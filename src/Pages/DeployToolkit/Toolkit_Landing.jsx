import React, { Suspense, lazy, useEffect, useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ShiftDeployLoader from '../../components/ShiftDeployLoader';

// ✅ Lazy load all major sections
const HeroSection = lazy(() => import('./sections/HeroSection'))
const ServiceCategoriesSection = lazy(() => import('./sections/ServiceCategoriesSection'))
const WhatWeSolveSection = lazy(() => import('./sections/WhatWeSolveSection'))
// const ProcessSection = lazy(() => import('./sections/ProcessSection'))
// const CaseSnapshotsSection = lazy(() => import('./sections/CaseSnapshotsSection'))
// const PricingSection = lazy(() => import('./sections/PricingSection'))
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection'))
const FinalCTASection = lazy(() => import('./sections/CTA'))
const FAQSection = lazy(() => import('./sections/FAQSection'))



const Toolkit_Landing = () => {
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
        <div className="w-full overflow-x-hidden">
          <Navigation />
          <Suspense fallback={<ShiftDeployLoader />}>
            <HeroSection />
            <ServiceCategoriesSection />
            <WhatWeSolveSection />
            {/* <ProcessSection /> */}
            {/* <CaseSnapshotsSection /> */}
            {/* <PricingSection /> */}
            <TestimonialsSection />
            <FinalCTASection />
            <FAQSection />
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  )
}

export default Toolkit_Landing
