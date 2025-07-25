import React from 'react'
import OriginStorySection from './comps/OriginStorySection'
import MindsetSection from './comps/MindsetSection'
import TeamSection from './comps/TeamSection'
import HowWeWorkSection from './comps/HowWeWorkSection'
import PhilosophySection from './comps/PhilosophySection'
import WhatWeBelieveSection from './comps/WhatWeBelieveSection'
import StoryInFramesSection from './comps/StoryInFramesSection'
import CTASection from './comps/CTASection'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'

const InSide_Landing = () => {
  return (
    <div className=''>
        <Navigation/>
        <OriginStorySection/>
        {/* <MindsetSection/> */}
        {/* <TeamSection/> */}
        <StoryInFramesSection/>
        <PhilosophySection/>

        <HowWeWorkSection/>
        <CTASection/>

        <WhatWeBelieveSection/>
        <Footer/>
    </div>
  )
}

export default InSide_Landing
