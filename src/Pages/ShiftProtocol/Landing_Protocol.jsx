import React, { Suspense, lazy, useEffect, useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import ShiftDeployLoader from '../../components/ShiftDeployLoader'

// ✅ Lazy load all sections
const ProtocolManifestoSection = lazy(() => import('./sections/ProtocolManifestoSection'))
const PhasesSection = lazy(() => import('./sections/PhasesSection'))
const GuaranteesSection = lazy(() => import('./sections/GuaranteesSection'))
const CommunicationRitualsSection = lazy(() => import('./sections/CommunicationRitualsSection'))
// const TransparencySystemsSection = lazy(() => import('./sections/TransparencySystemsSection'))
const FinalCTASection = lazy(() => import('./sections/FinalCTASection'))
const ClientControlSection = lazy(() => import('./sections/ClientControlSection'))

const Landing_Protocol = () => {
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
        <div className="w-full">
          <Navigation />
          <Suspense fallback={<ShiftDeployLoader />}>
            <ProtocolManifestoSection />
            <PhasesSection />
            <GuaranteesSection />
            <CommunicationRitualsSection />
            {/* <TransparencySystemsSection /> */}
            <FinalCTASection />
            <ClientControlSection />
            <Footer />
          </Suspense>
        </div>
      )}
    </>
  )
}

export default Landing_Protocol
