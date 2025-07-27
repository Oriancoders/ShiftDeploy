import React from 'react';

import Landing from './Pages/LandingPage/Landing';
import InSide_Landing from './Pages/InsideShiftDeploy/InSide_Landing';
import { Routes , Route} from 'react-router-dom';
import Toolkit_Landing from './Pages/DeployToolkit/Toolkit_Landing';
import Landing_Protocol from './Pages/ShiftProtocol/Landing_Protocol';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/insideShiftDeploy' element={<InSide_Landing/>}/>
        <Route path='/deploy-toolkit' element={<Toolkit_Landing/>}/>
        <Route path='/shift-protocol' element={<Landing_Protocol/>}/>



      </Routes>
    </div>
  );
}

export default App;