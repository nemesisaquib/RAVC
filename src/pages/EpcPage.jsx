import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Herosection from '../components/epc/Herosection'
import SolarEpc from '../components/epc/SolarEpc'
// import Technical from '../components/epc/Technical'
import WhyChoose from '../components/epc/WhyChoose'
import ProjectTypes from '../components/epc/ProjectTypes'
import Documentation from '../components/epc/Documentation'
import ExecutionBanner from '../components/home/ExecutionBanner'
import Table from '../components/epc/Table'
import ScopeofServices from '../components/epc/ScopeofServices'

const EpcPage = () => {
    return (
        <>
            <Header />
            <Herosection />
            <SolarEpc />
            <ScopeofServices/>
            {/* <Technical /> */}
            <div className="w-full flex justify-center my-10">
                <div className="flex items-center w-full max-w-7xl">
                    <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
                    <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className="h-10 w-auto mx-4"
                        style={{ width: 40 }}
                    />
                    <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                    <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
                </div>
            </div>
            <WhyChoose />
            <div className="w-full flex justify-center my-10">
                <div className="flex items-center w-full max-w-7xl">
                    <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
                    <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className="h-10 w-auto mx-4"
                        style={{ width: 40 }}
                    />
                    <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                    <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
                </div>
            </div>
            <ProjectTypes />
            <div className="w-full flex justify-center my-10">
                <div className="flex items-center w-full max-w-7xl">
                    <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
                    <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className="h-10 w-auto mx-4"
                        style={{ width: 40 }}
                    />
                    <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                    <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
                </div>
            </div>
            <Documentation />
            <Table />
            <ExecutionBanner />
            <Footer />
        </>
    )
}

export default EpcPage
