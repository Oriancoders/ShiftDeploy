import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Hero from './landingComps/Hero';
import DigitalReceptionist from './landingComps/DigitalReceptionist';
import WebsiteEnquiries from './landingComps/WebsiteEnquiries';
import AdminAutomation from './landingComps/AdminAutomation';
import ReviewYourDoctor from './landingComps/ReviewYourDoctor';
import InsideShiftDeploy from './landingComps/InsideShiftDeploy';
import DeployToolkit from './landingComps/DeployToolkit';
import ShiftProtocol from './landingComps/ShiftProtocol';
import MissionsCompleted from './landingComps/MissionsCompleted';
import VideoTestimonial from './landingComps/VideoTestimonial';

export default function Landing() {
  return (
    <div className="w-full">
      <Navigation />
      <main>
        <Hero />
        <DigitalReceptionist />
        <WebsiteEnquiries />
        <AdminAutomation />
        <ReviewYourDoctor />
        <MissionsCompleted />
        <VideoTestimonial />
        <InsideShiftDeploy />
        <DeployToolkit />
        <ShiftProtocol />
      </main>
      <Footer />
    </div>
  );
}
