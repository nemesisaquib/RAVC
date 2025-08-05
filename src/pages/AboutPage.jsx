import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SolarEnergyComponent from '../components/about/Solarsystem'
import VisionMission from '../components/about/Vision'
import Purpose from '../components/about/Purpose'
import GrowthImpactSection from '../components/about/Growth'
import Herosection from '../components/about/Herosection'
import Journey from '../components/about/Journey'
import ExecutionBanner from '../components/home/ExecutionBanner'
import Why from '../components/about/Why'
// import Herosection from '../components/about/Herosection'
// import SolarEnergyComponent from '../components/about/Solarsystem'
// import Purpose from '../components/about/Purpose'
// import VisionMission from '../components/about/vission'
// import GrowthImpactSection from '../components/about/Growth'



function About() {
    return (
        <>
            <Header />
            <Herosection />
            <Journey/>
            <SolarEnergyComponent />
            <VisionMission />
            <Purpose />
            <GrowthImpactSection />
             <Why/>
  <ExecutionBanner/>
 

            <Footer />
        </>
    )
}

export default About
