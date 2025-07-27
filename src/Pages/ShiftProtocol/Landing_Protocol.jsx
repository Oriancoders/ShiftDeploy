import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ProtocolManifestoSection from './sections/ProtocolManifestoSection'
import PhasesSection from './sections/PhasesSection'
import GuaranteesSection from './sections/GuaranteesSection'
import CommunicationRitualsSection from './sections/CommunicationRitualsSection'
import TransparencySystemsSection from './sections/TransparencySystemsSection'
import ClientControlSection from './sections/ClientControlSection'
import FinalCTASection from './sections/FinalCTASection'

const Landing_Protocol = () => {
  return (
    <div className='w-full'>
        <Navigation/>
            <ProtocolManifestoSection/>
            <PhasesSection/>
            <GuaranteesSection/>
            <CommunicationRitualsSection/>
            <TransparencySystemsSection/>
            <ClientControlSection/>
            <FinalCTASection/>
        <Footer/>
    </div>
  )
}

export default Landing_Protocol
