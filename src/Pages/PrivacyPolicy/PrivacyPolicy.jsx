import React from 'react'
import HeroPolicy from './sections/HeroPolicy'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Detailed from './sections/Detailed'

const PrivacyPolicy = () => {
    return (
        <div className='w-full'>
            <Navigation />
            <HeroPolicy />
            <Detailed />
            <Footer />

        </div>
    )
}

export default PrivacyPolicy
