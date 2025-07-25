import React from 'react'
import Navigation from '../../components/Navigation'
import Hero from './landingComps/Hero'
import InsideShiftDeploy from './landingComps/InsideShiftDeploy'
import DeployToolkit from './landingComps/DeployToolkit'
import ShiftProtocol from './landingComps/ShiftProtocol'
import MissionsCompleted from './landingComps/MissionsCompleted'
import FlightLogs from './landingComps/FlightLogs'
import Footer from '../../components/Footer'

const Landing = () => {
    return (
        <div className='w-full '>
            <Navigation />
            <Hero />
            <InsideShiftDeploy />
            <DeployToolkit />
            <ShiftProtocol />
            <MissionsCompleted />
            <FlightLogs />
            <Footer />
        </div>
    )
}

export default Landing
