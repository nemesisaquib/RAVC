import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExecutionBanner from '../components/home/ExecutionBanner'
import Herosection from '../components/sustainbility/Herosection'
import Designing from '../components/sustainbility/Designing'
import ImpactNumbers from '../components/sustainbility/ImpactNumbers'
import Spotlights from '../components/sustainbility/Spotlights'
import Global from '../components/sustainbility/Global'
import SustainabilityGoals from '../components/sustainbility/SustainabilityGoals'

const SustainbilityPage = () => {
  return (
    <>
    <Header/>
    <Herosection/>
    <Designing/>
    <ImpactNumbers/>
    <Spotlights/>
    <Global/>
    <SustainabilityGoals/>
    <ExecutionBanner/>
    <Footer/>
    </>
  )
}

export default SustainbilityPage