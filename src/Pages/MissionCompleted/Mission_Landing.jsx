import Navigation from '../../components/Navigation';

import HeroSection from './sections/HeroSection';

import CaseStudyCardsSection from './sections/CaseStudyCardsSection';
import FeaturedMissionSection from './sections/FeaturedMissionSection';
import ClientQuoteWallSection from './sections/ClientQuoteWallSection';
import CallToActionSection from './sections/CallToActionSection';
import ImpactAnalyticsSection from './sections/ImpactAnalyticsSection';
import Footer from '../../components/Footer';

const Mission_Landing = () => {


  return (
    <>
      

      <div className="w-full">

        <Navigation />

        <HeroSection />

          <CaseStudyCardsSection />
          <FeaturedMissionSection />
          <ClientQuoteWallSection />
          <CallToActionSection />
          <ImpactAnalyticsSection />
          <Footer />

      </div>
    </>
  );
};

export default Mission_Landing;
