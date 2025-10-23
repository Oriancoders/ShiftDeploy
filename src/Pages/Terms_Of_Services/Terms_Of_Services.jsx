import React, { useEffect } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import HeroTerms from './sections/HeroTerms'
import DetailedTerms from './sections/DetailedTerms'

const Terms_Of_Services = () => {
    // ✅ Scroll to top on mount
      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className='w-full'>
            <Navigation />
            <HeroTerms/>
            <DetailedTerms />
            <Footer />

        </div>
    )
}

export default Terms_Of_Services
