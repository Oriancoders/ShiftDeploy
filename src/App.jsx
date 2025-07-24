import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import InsideShiftDeploy from './components/InsideShiftDeploy';
import DeployToolkit from './components/DeployToolkit';
import ShiftProtocol from './components/ShiftProtocol';
import MissionsCompleted from './components/MissionsCompleted';
import FlightLogs from './components/FlightLogs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <Hero />
      <InsideShiftDeploy />
      <DeployToolkit />
      <ShiftProtocol />
      <MissionsCompleted />
      <FlightLogs />
      <Footer />
    </div>
  );
}

export default App;