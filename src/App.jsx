import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalProvider from './GlobalProvider/GlobalProvider';

// Non-Lazy Imports (Things needed immediately)
import ShiftDeployLoader from './components/ShiftDeployLoader'; // Ensure this path is correct based on your folder structure
import ScrollToTop from './components/ScrollToTop'; // The new path you mentioned
const ShiftSpeed = lazy(() => import('./Pages/Services/ShiftSpeed/ShiftSpeed'));
const ShiftConvert = lazy(() => import('./Pages/Services/ShiftConvert/ShiftConvert'));
const ShiftBuild = lazy(() => import('./Pages/Services/ShiftBuild/ShiftBuild'));
const ShiftFlow = lazy(() => import('./Pages/Services/ShiftFlow/ShiftFlow'));
const Insights = lazy(() => import('./Insights/Insights'));
const InsightDetail = lazy(() => import('./Insights/InsightDetail'));
// import { Chatbot } from './components/Chatbot';

// ✅ LAZY LOADED PAGES (Paths kept exactly as provided)
import Landing from './Pages/LandingPage/Landing';
import LazyGTM from './utils/LazyGTM';
const InSide_Landing = lazy(() => import('./Pages/InsideShiftDeploy/InSide_Landing'));
const Toolkit_Landing = lazy(() => import('./Pages/DeployToolkit/Toolkit_Landing'));
const DigitalReceptionist = lazy(() => import('./Pages/LandingPage/landingComps/DigitalReceptionist'));
// const Landing_Protocol = lazy(() => import('./Pages/ShiftProtocol/Landing_Protocol'));
const Mission_Landing = lazy(() => import('./Pages/MissionCompleted/Mission_Landing'));
const ContactUs = lazy(() => import('./Pages/ContactUsPage/ContactUs'));

// Case Studies
const SlackerIOT = lazy(() => import('./Pages/CaseStudies/SlackerIOT'));
const BullsEyesCase = lazy(() => import('./Pages/CaseStudies/BullsEyesCase'));
const K2TradersCase = lazy(() => import('./Pages/CaseStudies/K2Traders'));
const AiChatbotLanding = lazy(() => import('./Pages/AiChatbotLanding'));
const AiChatbotDemo = lazy(() => import('./Pages/AiChatbotDemo'));
const DentalSurvey = lazy(() => import('./Pages/DentalSurvey/SurveyLanding'));

// Misc Pages
const ThankYouPage = lazy(() => import('./Pages/ContactUsPage/ThankYouPage'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy/PrivacyPolicy'));
const Terms_Of_Services = lazy(() => import('./Pages/Terms_Of_Services/Terms_Of_Services'));

function App() {
  return (
    <GlobalProvider>
      <LazyGTM/>
      <div className="bg-white min-h-screen">
        
        {/* Helper to scroll to top on route change */}
        <ScrollToTop />

        {/* Suspense handles the loading state while the lazy file is fetched */}
        <Suspense fallback={<ShiftDeployLoader />}>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/insideShiftDeploy' element={<InSide_Landing />} />
            <Route path='/services' element={<Toolkit_Landing />} />
            <Route path='/missions' element={<Mission_Landing />} />
            <Route path='/ContactUs' element={<ContactUs />} />

            {/* case studies */}
            <Route path='/CaseStudies/SlackerIOT' element={<SlackerIOT />} />
            <Route path='/CaseStudies/BullseyesCase' element={<BullsEyesCase />} />
            <Route path='/CaseStudies/K2TradersCase' element={<K2TradersCase />} />

            {/* thank you page */}
            <Route path='/thankyou' element={<ThankYouPage/>} />

            {/* policy pages */}
            <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
            <Route path='/terms-of-services' element={<Terms_Of_Services/>} />

    
            
            {/* {services pages routes to be added here} */}
            <Route path='/services/shiftspeed' element={<ShiftSpeed/>} />
            <Route path='/services/shiftconvert' element={<ShiftConvert/>} />
            <Route path='/services/shiftbuild' element={<ShiftBuild/>} />
            <Route path='/services/shiftflow' element={<ShiftFlow/>} />

            {/* {Insight pages routes to be added here} */}
            <Route path='/insights' element={<Insights/>} />
            <Route path='/insights/:slug' element={<InsightDetail/>} />

            {/* Digital Receptionist */}
            <Route path='/digital-receptionist' element={<AiChatbotLanding/>} />
            <Route path='/digital-receptionist/demo' element={<AiChatbotDemo/>} />
            <Route path='/help-us-solve-dental-burnout' element={<DentalSurvey/>} />
            
          </Routes>
        </Suspense>
        {/* <Chatbot /> */}
      </div>
    </GlobalProvider>
  );
}

export default App;
