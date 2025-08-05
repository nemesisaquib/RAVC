import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Herosection from '../components/current/Herosection'
import CoreMissionSection from '../components/current/CoreMissionSection'
import HiringComponent from '../components/current/HiringComponent'
import GrowthGroundComponent from '../components/current/GrowthGroundComponent'
import InternshipHero from '../components/current/InternshipHero'
import CareerCard from '../components/current/CareerCard'

const CurrentPage = () => {
  return (
    <>
    <Header/>
    <Herosection/>
    <CoreMissionSection/>
    <HiringComponent/>
    <GrowthGroundComponent/>
    <InternshipHero/>
    <CareerCard/>
    <Footer/>
    </>
  )
}

export default CurrentPage