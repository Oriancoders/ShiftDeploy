import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import HeroSection from './sections/HeroSection'
import ServiceCategoriesSection from './sections/ServiceCategoriesSection'
import WhatWeSolveSection from './sections/WhatWeSolveSection'
import ProcessSection from './sections/ProcessSection'
import CaseSnapshotsSection from './sections/CaseSnapshotsSection'
import PricingSection from './sections/PricingSection'
import TestimonialsSection from './sections/TestimonialsSection'
import FAQSection from './sections/FAQSection'
import FinalCTASection from './sections/CTA'

const Toolkit_Landing = () => {
  return (
    <div className='w-full overflow-x-hidden'>
      <Navigation/>
        <HeroSection/>
        <ServiceCategoriesSection/>
        <WhatWeSolveSection/>
        <ProcessSection/>
        <CaseSnapshotsSection/>
        {/* <PricingSection/> */}
        <TestimonialsSection/>
        <FAQSection/>
        <FinalCTASection/>
        
      <Footer/>
    </div>
  )
}

export default Toolkit_Landing
