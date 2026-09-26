import Navigation from '../../components/Navigation';

import ProtocolManifestoSection from './sections/ProtocolManifestoSection';

import PhasesSection from './sections/PhasesSection';
import GuaranteesSection from './sections/GuaranteesSection';
import CommunicationRitualsSection from './sections/CommunicationRitualsSection';
import FinalCTASection from './sections/FinalCTASection';
import ClientControlSection from './sections/ClientControlSection';
import Footer from '../../components/Footer';

const Landing_Protocol = () => {


  return (
    <>
      

      <div className="w-full">

        <Navigation />

        <ProtocolManifestoSection />

          <PhasesSection />
          <GuaranteesSection />
          <CommunicationRitualsSection />
          <FinalCTASection />
          <ClientControlSection />
          <Footer />

      </div>
    </>
  );
};

export default Landing_Protocol;
