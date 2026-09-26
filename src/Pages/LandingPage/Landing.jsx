import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Hero from './landingComps/Hero';
import DigitalReceptionist from './landingComps/DigitalReceptionist';
import ReviewYourDoctor from './landingComps/ReviewYourDoctor';
import InsideShiftDeploy from './landingComps/InsideShiftDeploy';
import DeployToolkit from './landingComps/DeployToolkit';
import ShiftProtocol from './landingComps/ShiftProtocol';
import MissionsCompleted from './landingComps/MissionsCompleted';
import VideoTestimonial from './landingComps/VideoTestimonial';
import TrustStrip from '../../components/TrustStrip';

export default function Landing() {
  return (
    <div className="w-full">
      <Navigation />
      <main>
        <Hero />
        <DigitalReceptionist />
        <ReviewYourDoctor />
        <InsideShiftDeploy />
        <VideoTestimonial />
        <DeployToolkit />
        <TrustStrip />
        <ShiftProtocol />
        <MissionsCompleted />
      </main>
      <Footer />
    </div>
  );
}
