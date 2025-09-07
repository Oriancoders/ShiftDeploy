import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import HeroSection from './sections/HeroSection'
import QuoteWallSection from './sections/QuoteWallSection'
import VideoWallSection from './sections/VideoWallSection'
import LeaderboardStripSection from './sections/LeaderboardStripSection'
import FinalPushCTASection from './sections/FinalPushCTASection'

const Flight_Landing = () => {
  return (
    <div className=''>
      <Navigation/>
        <HeroSection/>
        <QuoteWallSection/>
        {/* <VideoWallSection/> */}
        <FinalPushCTASection/>
        <LeaderboardStripSection/>
      <Footer/>
    </div>
  )
}

export default Flight_Landing
