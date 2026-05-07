'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/AiChatbot/HeroSection';
import ProblemSolutionSection from '../components/AiChatbot/ProblemSolutionSection';
import FeaturesSection from '../components/AiChatbot/FeaturesSection';
import PricingSection from '../components/AiChatbot/PricingSection';
import CtaSection from '../components/AiChatbot/CtaSection';
import LeadCaptureModal from '../components/AiChatbot/LeadCaptureModal';

const AiChatbotLanding = () => {
  const router = useRouter();
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const openLeadModal = (pkg = '') => {
    const normalizedPackage = typeof pkg === 'string' ? pkg : '';
    setSelectedPackage(normalizedPackage);
    setIsLeadModalOpen(true);
  };

  const closeLeadModal = () => {
    setIsLeadModalOpen(false);
    setSelectedPackage('');
  };

  const openLiveDemo = () => {
    router.push('/digital-receptionist/demo');
  };

  return (
    <div className="bg-white min-h-screen font-sans text-textColor overflow-x-hidden">
      <Navigation isDarkBg={true} onAuditClick={openLeadModal} />
      <HeroSection onPrimaryAction={openLeadModal} onDemoAction={openLiveDemo} />
      <ProblemSolutionSection />
      <FeaturesSection />
      <PricingSection onSelectPackage={openLeadModal} />
      <CtaSection onPrimaryAction={openLeadModal} />
      <LeadCaptureModal isOpen={isLeadModalOpen} onClose={closeLeadModal} selectedPackage={selectedPackage} />
      <Footer />
    </div>
  );
};

export default AiChatbotLanding;
