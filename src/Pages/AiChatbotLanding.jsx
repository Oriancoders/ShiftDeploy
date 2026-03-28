import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/AiChatbot/HeroSection';
import ProblemSolutionSection from '../components/AiChatbot/ProblemSolutionSection';
import RevenueLossCalculatorSection from '../components/AiChatbot/RevenueLossCalculatorSection';
import DemoVideoSection from '../components/AiChatbot/DemoVideoSection';
import FeaturesSection from '../components/AiChatbot/FeaturesSection';
import ServiceModelSection from '../components/AiChatbot/ServiceModelSection';
import TestimonialsSection from '../components/AiChatbot/TestimonialsSection';
import FAQSection from '../components/AiChatbot/FAQSection';
import CtaSection from '../components/AiChatbot/CtaSection';
import LeadCaptureModal from '../components/AiChatbot/LeadCaptureModal';
import SectionCapsuleNav from '../components/AiChatbot/SectionCapsuleNav';
import { ContextAPI } from '../GlobalProvider/ContextAPI';

const AiChatbotLanding = () => {
  const navigate = useNavigate();
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const { isLeadModel, setIsLeadModel } = React.useContext(ContextAPI);
  const [selectedPackage, setSelectedPackage] = useState('');

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
      <div className="bg-white font-sans text-textColor overflow-x-hidden">
        <Navigation isDarkBg={true} isReceptionist={true} />
        <SectionCapsuleNav sections={sections} heroId="dr-hero" darkSectionIds={darkSectionIds} />
        <div id="dr-hero" className="scroll-mt-32">
          <HeroSection onPrimaryAction={openLeadModal} onDemoAction={openLiveDemo} />
        </div>
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
      </div>
      <div id="dr-footer">
        <Footer />
      </div>
    </>
  );
};

export default AiChatbotLanding;