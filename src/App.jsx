import React from 'react';

import Landing from './Pages/LandingPage/Landing';
import InSide_Landing from './Pages/InsideShiftDeploy/InSide_Landing';
import { Routes , Route} from 'react-router-dom';
import Toolkit_Landing from './Pages/DeployToolkit/Toolkit_Landing';
import Landing_Protocol from './Pages/ShiftProtocol/Landing_Protocol';
import Mission_Landing from './Pages/MissionCompleted/Mission_Landing';
import Flight_Landing from './Pages/FlighLogs/Flight_Landing';
import GlobalProvider from './GlobalProvider/GlobalProvider';
import ContactUs from './Pages/ContactUsPage/ContactUs';

function App() {
  return (
    <GlobalProvider>
      <div className="bg-white min-h-screen">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/insideShiftDeploy' element={<InSide_Landing/>}/>
        <Route path='/deploy-toolkit' element={<Toolkit_Landing/>}/>
        <Route path='/shift-protocol' element={<Landing_Protocol/>}/>
        <Route path='/missions' element= { <Mission_Landing/>}/>
        <Route path='/flight-logs' element= { <Flight_Landing/>}/>
        <Route path='/ContactUs' element= { <ContactUs/>}/>



      </Routes>
    </div>
    </GlobalProvider>
  );
}

export default App;