import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/AiChatbot/HeroSection';
import ProblemSolutionSection from '../components/AiChatbot/ProblemSolutionSection';
import FeaturesSection from '../components/AiChatbot/FeaturesSection';
import PricingSection from '../components/AiChatbot/PricingSection';
import CtaSection from '../components/AiChatbot/CtaSection';

const AiChatbotLanding = () => {
  const [activeTab, setActiveTab] = useState('problem');
  return (
    <div className="bg-white min-h-screen font-sans text-textColor overflow-x-hidden">
      <Navigation isDarkBg={true} />
      <HeroSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <ProblemSolutionSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <FeaturesSection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default AiChatbotLanding;
