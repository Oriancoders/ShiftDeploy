import React, { useMemo, useState, lazy, Suspense, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import HeroSection from '../components/AiChatbot/HeroSection';
import { ContextAPI } from '../GlobalProvider/ContextAPI';
import { Helmet } from 'react-helmet-async';
import { m } from 'framer-motion';

// Lazy load non-critical sections
const ProblemSolutionSection = lazy(() => import('../components/AiChatbot/ProblemSolutionSection'));
const RevenueLossCalculatorSection = lazy(() => import('../components/AiChatbot/RevenueLossCalculatorSection'));
const DemoVideoSection = lazy(() => import('../components/AiChatbot/DemoVideoSection'));
const FeaturesSection = lazy(() => import('../components/AiChatbot/FeaturesSection'));
const ServiceModelSection = lazy(() => import('../components/AiChatbot/ServiceModelSection'));
const TestimonialsSection = lazy(() => import('../components/AiChatbot/TestimonialsSection'));
const FAQSection = lazy(() => import('../components/AiChatbot/FAQSection'));
const CtaSection = lazy(() => import('../components/AiChatbot/CtaSection'));
const LeadCaptureModal = lazy(() => import('../components/AiChatbot/LeadCaptureModal'));
const SectionCapsuleNav = lazy(() => import('../components/AiChatbot/SectionCapsuleNav'));
const Footer = lazy(() => import('../components/Footer'));

const AiChatbotLanding = () => {
  const navigate = useNavigate();
  const { isLeadModel, setIsLeadModel } = React.useContext(ContextAPI);
  const [selectedPackage, setSelectedPackage] = useState('');
  const [shouldLoadRest, setShouldLoadRest] = useState(false);

  // Trigger lazy loading on any user interaction
  useEffect(() => {
    const handleInteraction = () => {
      setShouldLoadRest(true);
      // Remove listeners once triggered
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('mousemove', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });
    window.addEventListener('keydown', handleInteraction, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  const sections = useMemo(
    () => [
      { id: 'dr-problem', label: 'Why' },
      { id: 'dr-calculator', label: 'Calculator' },
      { id: 'dr-preview', label: 'Preview' },
      { id: 'dr-features', label: 'Features' },
      { id: 'dr-process', label: 'Process' },
      { id: 'dr-faq', label: 'FAQs' },
      { id: 'dr-cta', label: 'Next Step' },
      { id: 'dr-proof', label: 'Proof' },
    ],
    []
  );

  const darkSectionIds = useMemo(() => ['dr-hero', 'dr-process', 'dr-cta', 'dr-footer'], []);

  const openLeadModal = (pkg = '') => {
    setSelectedPackage(pkg);
    setIsLeadModel(true);
  };

  const closeLeadModal = () => {
    setIsLeadModel(false);
    setSelectedPackage('');
  };

  const openLiveDemo = () => {
    navigate('/digital-receptionist/demo');
  };

  return (
    <>
      <Helmet>
        <title>Digital Receptionist for Clinics & Service Businesses | ShiftDeploy</title>

        <meta
          name="description"
          content="Digital receptionist AI for clinics and service businesses in the UK. Capture missed enquiries, recover more bookings, answer FAQs, and streamline enquiry handling with ShiftDeploy."
        />

        <meta
          name="keywords"
          content="digital receptionist, AI receptionist, UK digital receptionist, clinic booking assistant, missed enquiry recovery, after-hours booking, enquiry automation, reception automation, ShiftDeploy"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Digital Receptionist AI for Clinics & Service Businesses | ShiftDeploy"
        />
        <meta
          property="og:description"
          content="See how ShiftDeploy's digital receptionist helps clinics and service businesses capture missed enquiries, recover bookings, and handle customer questions around the clock."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.shiftdeploy.com/digital-receptionist"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dbazbq7u9/image/upload/f_auto,q_auto/v1773750161/ChatGPT_Image_Mar_17_2026_05_22_24_PM_goshas.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Digital Receptionist for Clinics & Service Businesses | ShiftDeploy"
        />
        <meta
          name="twitter:description"
          content="Capture more bookings, reduce missed enquiries, and streamline how your business handles customer requests."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dbazbq7u9/image/upload/v1774738181/digital-booking-receptionist-shiftdeploy_g2ophn.png"
        />

        {/* Canonical (important for SEO) */}
        <link
          rel="canonical"
          href="https://www.shiftdeploy.com/digital-receptionist"
        />
      </Helmet>
      <div className="bg-white font-sans text-textColor overflow-x-hidden">
        <Navigation isDarkBg={true} isReceptionist={true} />
        <Suspense fallback={null}>
          {shouldLoadRest && (
            <SectionCapsuleNav sections={sections} heroId="dr-hero" darkSectionIds={darkSectionIds} />
          )}
        </Suspense>
        
        <div id="dr-hero" className="scroll-mt-32">
          <HeroSection onPrimaryAction={openLeadModal} onDemoAction={openLiveDemo} />
        </div>

        {/* Static Survey Strip for this page */}
        <div className="bg-primaryBlue border-y border-white/10 relative z-10">
          <Link 
            to="/help-us-solve-dental-burnout" 
            className="block py-3 sm:py-4 px-4 text-center cursor-pointer hover:bg-[#162a4a] transition-all duration-300 group"
          >
            <p className="text-white text-xs sm:text-sm md:text-base font-medium tracking-wide flex items-center justify-center gap-2">
              <span className="opacity-90">Help us solve dental burnout by</span> 
              <span className="text-primaryOrange font-bold group-hover:scale-105 transition-transform inline-block">sharing your opinion</span>
              <m.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="inline-block"
              >
                →
              </m.span>
            </p>
          </Link>
        </div>
        
        <Suspense fallback={<div className="h-20 bg-white" />}>
          {shouldLoadRest && (
            <>
              <div id="dr-problem" className="scroll-mt-32">
                <ProblemSolutionSection />
              </div>
              <div id="dr-calculator" className="scroll-mt-32">
                <RevenueLossCalculatorSection onPrimaryAction={openLeadModal} />
              </div>
              <div id="dr-preview" className="scroll-mt-32">
                <DemoVideoSection />
              </div>
              <div id="dr-features" className="scroll-mt-32">
                <FeaturesSection />
              </div>
              <div id="dr-process" className="scroll-mt-32">
                <ServiceModelSection onPrimaryAction={openLeadModal} />
              </div>
              <div id="dr-faq" className="scroll-mt-32">
                <FAQSection onPrimaryAction={openLeadModal} />
              </div>
              <div id="dr-cta" className="scroll-mt-32">
                <CtaSection onPrimaryAction={openLeadModal} onDemoAction={openLiveDemo} />
              </div>
              <div id="dr-proof" className="scroll-mt-32">
                <TestimonialsSection onPrimaryAction={openLeadModal} />
              </div>
              <LeadCaptureModal isOpen={isLeadModel} onClose={closeLeadModal} selectedPackage={selectedPackage} />
            </>
          )}
        </Suspense>
      </div>
      <div id="dr-footer">
        <Suspense fallback={<div className="h-40 bg-primaryBlue" />}>
          {shouldLoadRest && <Footer />}
        </Suspense>
      </div>
    </>
  );
};

export default AiChatbotLanding;
