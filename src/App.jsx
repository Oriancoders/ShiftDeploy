import React from 'react';

import Landing from './Pages/LandingPage/Landing';
import InSide_Landing from './Pages/InsideShiftDeploy/InSide_Landing';
import { Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/insideShiftDeploy' element={<InSide_Landing/>}/>

      </Routes>
    </div>
  );
}

export default App;