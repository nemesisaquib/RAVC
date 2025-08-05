import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Herosection from '../components/services/Herosection'
import Journey from '../components/services/Journey'
import SolarSolutions from '../components/services/SolarSolutions'
import ExecutionBanner from '../components/home/ExecutionBanner'

function ServicesPage() {
    return (
        <>
            <Header />
            <Herosection />
            <Journey/>
            <SolarSolutions/>
            <ExecutionBanner/>
            <Footer />
        </>
    )
}

export default ServicesPage