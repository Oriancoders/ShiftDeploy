import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/AiChatbot/HeroSection';
import ProblemSolutionSection from '../components/AiChatbot/ProblemSolutionSection';
import FeaturesSection from '../components/AiChatbot/FeaturesSection';
import PricingSection from '../components/AiChatbot/PricingSection';
import CtaSection from '../components/AiChatbot/CtaSection';
import LeadCaptureModal from '../components/AiChatbot/LeadCaptureModal';

const AiChatbotLanding = () => {
  const navigate = useNavigate();
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const openLeadModal = (pkg = '') => {
    setSelectedPackage(pkg);
    setIsLeadModalOpen(true);
  };

  const closeLeadModal = () => {
    setIsLeadModalOpen(false);
    setSelectedPackage('');
  };

  const openLiveDemo = () => {
    navigate('/digital-receptionist/demo');
  };

  return (
    <div className="bg-white min-h-screen font-sans text-textColor overflow-x-hidden">
      <Navigation isDarkBg={true} onAuditClick={openLeadModal} />
      <HeroSection onPrimaryAction={openLeadModal} onDemoAction={openLiveDemo} />
      <ProblemSolutionSection />
      <FeaturesSection />
      <PricingSection onSelectPackage={openLeadModal} />
      <CtaSection />
      <LeadCaptureModal isOpen={isLeadModalOpen} onClose={closeLeadModal} selectedPackage={selectedPackage} />
      <Footer />
    </div>
  );
};

export default AiChatbotLanding;
