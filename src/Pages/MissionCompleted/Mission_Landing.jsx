import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import HeroSection from './sections/HeroSection'
import CaseStudyCardsSection from './sections/CaseStudyCardsSection'
import FeaturedMissionSection from './sections/FeaturedMissionSection'
import ClientQuoteWallSection from './sections/ClientQuoteWallSection'
import ImpactAnalyticsSection from './sections/ImpactAnalyticsSection'
import CallToActionSection from './sections/CallToActionSection'

const Mission_Landing = () => {
  return (
    <div>
        <Navigation/>
            <HeroSection/>
            <CaseStudyCardsSection/>
            <FeaturedMissionSection/>
            <ClientQuoteWallSection/>
            <ImpactAnalyticsSection/>
            <CallToActionSection/>
        <Footer/>
    </div>
  )
}

export default Mission_Landing
