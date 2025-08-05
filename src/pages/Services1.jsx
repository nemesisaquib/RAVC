import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExecutionBanner from '../components/home/ExecutionBanner'
import Herosection from '../components/service1.jsx/Herosection'
import SolarSystem from '../components/service1.jsx/SolarSystem'
import Benefits from '../components/service1.jsx/Benefits'
import IdealUseCases from '../components/service1.jsx/IdealUseCases'
import Installation from '../components/service1.jsx/Installation '
import Installation2 from '../components/service1.jsx/Installation2'

function Services1() {
    return (
        <>
            <Header />
            <Herosection />
            <SolarSystem/>
            <Benefits/>
            <IdealUseCases/>
            <Installation/>
            <Installation2/>
            <ExecutionBanner/>
            <Footer />
        </>
    )
}

export default Services1