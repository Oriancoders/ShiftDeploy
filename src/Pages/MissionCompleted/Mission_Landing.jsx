import React, { Suspense, lazy, useEffect, useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ShiftDeployLoader from '../../components/ShiftDeployLoader'
import { Helmet } from 'react-helmet-async'

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
        {/* <meta property="og:image" content="https://www.shiftdeploy.com/og-banner.jpg" /> */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Missions Completed | ShiftDeploy" />
        <meta 
          name="twitter:description" 
          content="Explore real-world missions completed by ShiftDeploy — delivering reliable CI/CD, cloud, and DevOps solutions to builders worldwide." 
        />
        {/* <meta name="twitter:image" content="https://www.shiftdeploy.com/og-banner.jpg" /> */}
      </Helmet>

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
