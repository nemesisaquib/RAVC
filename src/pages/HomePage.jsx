import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Header from '../components/Header'
import Footer from '../components/Footer'

import WhatWeBuild from '../components/home/WhatWeBuild'
import Headline from '../components/home/Headline'
import Philosophy from '../components/home/Philosophy'
import Startup from '../components/home/Startup'
import Innovation from '../components/home/Innovation'
import ExecutionBanner from '../components/home/ExecutionBanner'
import Purpose from '../components/home/Purpose'
import SolarStory from '../components/home/SolarStory'

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Purpose/>
      <WhatWeBuild />
      <SolarStory/>
      <Startup />
      <Innovation />
      {/* <Headline /> */}
      <Philosophy />
      <ExecutionBanner/>

      <Footer />
    </>
  )
}

export default HomePage