import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalProvider from './GlobalProvider/GlobalProvider';

// Non-Lazy Imports (Things needed immediately)
import ShiftDeployLoader from './components/ShiftDeployLoader'; // Ensure this path is correct based on your folder structure
import ScrollToTop from './components/ScrollToTop'; // The new path you mentioned
import ShiftSpeed from './Pages/Services/ShiftSpeed/ShiftSpeed';
import Insights from './components/Insights';
// import { Chatbot } from './components/Chatbot';

// ✅ LAZY LOADED PAGES (Paths kept exactly as provided)
const Landing = lazy(() => import('./Pages/LandingPage/Landing'));
const InSide_Landing = lazy(() => import('./Pages/InsideShiftDeploy/InSide_Landing'));
const Toolkit_Landing = lazy(() => import('./Pages/DeployToolkit/Toolkit_Landing'));
// const Landing_Protocol = lazy(() => import('./Pages/ShiftProtocol/Landing_Protocol'));
const Mission_Landing = lazy(() => import('./Pages/MissionCompleted/Mission_Landing'));
const Flight_Landing = lazy(() => import('./Pages/FlighLogs/Flight_Landing'));
const ContactUs = lazy(() => import('./Pages/ContactUsPage/ContactUs'));

// Case Studies
const SlackerIOT = lazy(() => import('./Pages/CaseStudies/SlackerIOT'));
const BullsEyesCase = lazy(() => import('./Pages/CaseStudies/BullsEyesCase'));
const K2TradersCase = lazy(() => import('./Pages/CaseStudies/K2Traders'));

// Misc Pages
const ThankYouPage = lazy(() => import('./Pages/ContactUsPage/ThankYouPage'));
const PrivacyPolicy = lazy(() => import('./Pages/PrivacyPolicy/PrivacyPolicy'));
const Terms_Of_Services = lazy(() => import('./Pages/Terms_Of_Services/Terms_Of_Services'));
const Shiftify_Landing = lazy(() => import('./Shiftify_Landing/Shiftify_Landing'));

function App() {
  return (
    <GlobalProvider>
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
            <Route path='/flight-logs' element={<Flight_Landing />} />
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

            {/* {Insight pages routes to be added here} */}
            <Route path='/insights' element={<Insights/>} />
            
          </Routes>
        </Suspense>
        {/* <Chatbot /> */}
      </div>
    </GlobalProvider>
  );
}

export default App;