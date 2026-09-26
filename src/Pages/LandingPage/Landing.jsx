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
import HomeFaq from './landingComps/HomeFaq';

export default function Landing() {
  return (
    <div className="w-full">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-primaryBlue focus:shadow-lg">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <DigitalReceptionist />
        <WebsiteEnquiries />
        <AdminAutomation />
        <ReviewYourDoctor />
        <MissionsCompleted />
        <VideoTestimonial />
        <InsideShiftDeploy />
        <DeployToolkit />
        <HomeFaq />
        <ShiftProtocol />
      </main>
      <Footer />
    </div>
  );
}
