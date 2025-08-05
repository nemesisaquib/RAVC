import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExecutionBanner from '../components/home/ExecutionBanner'
import Herosection from '../components/o&m/Herosection'
import Comprehensive from '../components/o&m/Comprehensive'
import ScopeofServices from '../components/o&m/ScopeofServices'
import Example from '../components/o&m/Example'
import Optional from '../components/o&m/Optional'
import ApplicablePlantTypes from '../components/o&m/ApplicablePlantTypes'
import HealthCheck from '../components/o&m/HealthCheck'
import WhyChoose from '../components/o&m/WhyChoose'
import TechnicalFeatures from '../components/o&m/TechnicalFeatures'

const OM = () => {
  return (
    <>
      <Header />
      <Herosection />
      <Comprehensive />
      <ScopeofServices />
      <TechnicalFeatures />
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
      <HealthCheck />
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

      <ApplicablePlantTypes />
      <Optional />
      {/* <Example /> */}
      <ExecutionBanner />
      <Footer />
    </>
  )
}

export default OM

// import React from 'react'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import ExecutionBanner from '../components/home/ExecutionBanner'
// import Herosection from '../components/o&m/Herosection'
// import Comprehensive from '../components/o&m/Comprehensive'
// import ScopeofServices from '../components/o&m/ScopeofServices'
// import Example from '../components/o&m/Example'
// import Optional from '../components/o&m/Optional'
// import ApplicablePlantTypes from '../components/o&m/ApplicablePlantTypes'
// import HealthCheck from '../components/o&m/HealthCheck'
// import WhyChoose from '../components/o&m/WhyChoose'
// import TechnicalFeatures from '../components/o&m/TechnicalFeatures'

// const OM = () => {
//   return (
//     <>
//       <Header />
//       <Herosection />
//       <Comprehensive />
//       <ScopeofServices />
//       <TechnicalFeatures />

//       {/* --- Divider Line with Logo --- */}
//       <div className="flex items-center w-full mt-10 mb-10">
//         {/* Left circle */}
//         <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>

//         {/* Left line */}
//         <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>

//         {/* Logo */}
//         <img
//           src="/logo.svg"
//           alt="Logo"
//           className="h-10 w-auto"
//           style={{ width: 40 }}
//         />

//         {/* Right line */}
//         <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>

//         {/* Right circle */}
//         <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
//       </div>
//       {/* --- End Divider --- */}

//       <ApplicablePlantTypes />
//       <div className="flex items-center w-full mt-10 mb-10">
//         {/* Left circle */}
//         <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>

//         {/* Left line */}
//         <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>

//         {/* Logo */}
//         <img
//           src="/logo.svg"
//           alt="Logo"
//           className="h-10 w-auto"
//           style={{ width: 40 }}
//         />

//         {/* Right line */}
//         <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>

//         {/* Right circle */}
//         <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
//       </div>
//       <HealthCheck />
//       <div className="flex items-center w-full mt-10 mb-10">
//         {/* Left circle */}
//         <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>

//         {/* Left line */}
//         <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>

//         {/* Logo */}
//         <img
//           src="/logo.svg"
//           alt="Logo"
//           className="h-10 w-auto"
//           style={{ width: 40 }}
//         />

//         {/* Right line */}
//         <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>

//         {/* Right circle */}
//         <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
//       </div>
//       <Optional />
//       <Example />
//       <ExecutionBanner />
//       <Footer />
//     </>
//   )
// }

// export default OM
