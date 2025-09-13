import React, { Suspense, lazy, useEffect, useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ShiftDeployLoader from '../../components/ShiftDeployLoader';
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        {/* Basic SEO */}
        <title>Deploy Toolkit | ShiftDeploy</title>
        <meta
          name="description"
          content="Explore ShiftDeploy's Deploy Toolkit — solutions for CI/CD, cloud, and DevOps challenges. We help builders overcome deployment hurdles and launch faster."
        />
        <meta
          name="keywords"
          content="CI/CD solutions, DevOps deployment, cloud infrastructure, deployment toolkit, ShiftDeploy"
        />
        <link
          rel="canonical"
          href="https://www.shiftdeploy.com/deploy-toolkit"
        />

        {/* Open Graph / Social */}
        <meta property="og:title" content="Deploy Toolkit | ShiftDeploy" />
        <meta
          property="og:description"
          content="Solve your CI/CD, cloud, and DevOps deployment challenges with ShiftDeploy's expert toolkit."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shiftdeploy.com/deploy-toolkit" />
        {/* <meta property="og:image" content="https://www.shiftdeploy.com/og-banner.jpg" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deploy Toolkit | ShiftDeploy" />
        <meta
          name="twitter:description"
          content="Solve your CI/CD, cloud, and DevOps deployment challenges with ShiftDeploy's expert toolkit."
        />
        {/* <meta name="twitter:image" content="https://www.shiftdeploy.com/og-banner.jpg" /> */}
      </Helmet>
      {showLoader && <ShiftDeployLoader />}
      <Navigation />
      {!showLoader && (
        <div className="w-full overflow-x-hidden">
          <Suspense fallback={<ShiftDeployLoader />}>
            <HeroSection />
            <ServiceCategoriesSection />
            <WhatWeSolveSection />

            <TestimonialsSection />
            <FinalCTASection />
            <FAQSection />
          </Suspense>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Toolkit_Landing
