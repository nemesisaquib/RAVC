import React from 'react';
import { ChevronRight } from 'lucide-react';
import '../scrollbar.css';
import { Link } from 'react-router-dom';

export default function WhatWeBuild() {
    return (
        <div className="relative bg-cover bg-center bg-no-repeat min-h-[762px] py-20"
            style={{
                backgroundImage: "url('/home/bg.jpg')"
            }}>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/70 bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 min-h-[762px] flex flex-col justify-center items-center px-4">

                {/* Hero Section */}
                <div className="text-center pb-6 max-w-[95%] mx-auto">
                    <h1 className="text-[#DAB369] mb-4 font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-tight capitalize">
                        What We Build. Who We Empower.
                    </h1>
                    <p className="text-white text-base text-[16px] sm:text-[18px] md:text-[20px] mx-auto leading-[30px] max-w-5xl capitalize">
                        We Engineer Scalable, Clean Energy Systems That Support Families, Businesses, And Communities — All While Preserving The Planet.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="w-full mt-6">
                    <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-custom">
                        {[
                                    {
                                title: "EPC DEVELOPMENT",
                                desc: "Ensuring Performance Optimization and reduce operational cost for better ROI.",
                                bg: "/home/freepik__retouch__69119 1.png",
                                link: "/epc-development"
                            },
                                {
                                title: "IIP",
                                desc: "Identify energy-saving opportunities and improve efficiency across systems.",
                                bg: "/home/bg-card.jpg",
                                link: "/coming-soon"
                            },
                            {
                                title: "SOLAR ROOFTOP",
                                desc: "Empowering Buildings To Become Energy Producers, Not Just Consumers.",
                                bg: "/home/freepik__the-style-is-candid-image-photography-with-natural__69116.png",
                                link: "/solar-rooftop"
                            },
                    
                            {
                                title: "Operation & Maintenance",
                                desc: "Focusing on precision, quality, and performance using cutting edge technologies.",
                                bg: "/home/freepik__the-style-is-candid-image-photography-with-natural__69120 1.png",
                                link: "/operation-and-maintenance"
                            },
                        
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 rounded-xl border border-yellow-400 border-opacity-30 relative overflow-hidden w-[90%] sm:w-[600px] md:w-[700px] lg:w-[800px] h-[350px]"
                                style={{
                                    // backgroundImage: "url('/home/bg-card.jpg')",
                                    backgroundImage: `url('${item.bg}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="absolute inset-0 bg-black/30 bg-opacity-40"></div>

                                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 md:p-8">
                                    <h3 className="text-white mb-4 text-lg md:text-xl uppercase font-semibold"
                                        style={{ fontFamily: "'Open Sans', sans-serif" }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-white opacity-90 mb-6 max-w-md text-sm md:text-base capitalize leading-[24px]"
                                        style={{ fontFamily: "'Open Sans', sans-serif" }}>
                                        {item.desc}
                                    </p>
                                    {/* <button className="flex items-center space-x-2 bg-transparent border border-white text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base">
                                        <span>Learn More</span>
                                        <ChevronRight size={18} />
                                    </button> */}
                                    <Link to={item.link}>
                                        <button className="flex items-center space-x-2 bg-transparent cursor-pointer border border-white text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base">
                                            <span>Learn More</span>
                                            <ChevronRight size={18} />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="text-center mt-10">
                    <Link to={'/services'}>
                        <button className="flex items-center space-x-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black cursor-pointer px-6 md:px-8 py-3 md:py-4 rounded-2xl transition-all duration-300 mx-auto font-semibold text-sm md:text-base">
                            <span>Explore All Services</span>
                            <ChevronRight size={20} />
                        </button>
                    </Link>
                </div>

            </div>
        </div>

    );
}










// import React from 'react';
// import { ChevronRight } from 'lucide-react';
// import '../scrollbar.css';
// import { Link } from 'react-router-dom';

// export default function WhatWeBuild() {
//     const cards = [
//         {
//             title: "SOLAR ROOFTOP",
//             desc: "Empowering Buildings To Become Energy Producers, Not Just Consumers.",
//             bg: "/home/bg-card1.jpg",
//             link: "/services/solar-rooftop"
//         },
//         {
//             title: "EPC DEVELOPMENT",
//             desc: "Ensuring Performance Optimization and reduce operational cost for better ROI.",
//             bg: "/home/bg-card2.jpg",
//             link: "/services/epc-development"
//         },
//         {
//             title: "Operation & Maintenance",
//             desc: "Focusing on precision, quality, and performance using cutting edge technologies.",
//             bg: "/home/bg-card3.jpg",
//             link: "/services/operation-maintenance"
//         },
//         {
//             title: "ENERGY AUDIT",
//             desc: "Identify energy-saving opportunities and improve efficiency across systems.",
//             bg: "/home/bg-card4.jpg",
//             link: "/services/energy-audit"
//         }
//     ];

//     return (
//         <div
//             className="relative bg-cover bg-center bg-no-repeat min-h-[762px] py-6"
//             style={{ backgroundImage: "url('/home/bg.jpg')" }}
//         >
//             {/* Dark overlay */}
//             <div className="absolute inset-0 bg-black/70 bg-opacity-50"></div>

//             {/* Content */}
//             <div className="relative z-10 min-h-[762px] flex flex-col justify-center items-center px-4">
//                 {/* Hero Section */}
//                 <div className="text-center pb-6 max-w-[95%] mx-auto">
//                     <h1 className="text-[#DAB369] mb-4 font-bold text-[24px] md:text-[30px] lg:text-[34px] leading-tight capitalize">
//                         What We Build. Who We Empower.
//                     </h1>
//                     <p className="text-white text-base sm:text-lg md:text-xl mx-auto leading-[30px] max-w-5xl capitalize">
//                         We Engineer Scalable, Clean Energy Systems That Support Families, Businesses, And Communities — All While Preserving The Planet.
//                     </p>
//                 </div>

//                 {/* Cards Section */}
//                 <div className="w-full mt-6">
//                     <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-custom">
//                         {cards.map((item, idx) => (
//                             <div
//                                 key={idx}
//                                 className="flex-shrink-0 rounded-xl border border-yellow-400 border-opacity-30 relative overflow-hidden w-[90%] sm:w-[600px] md:w-[700px] lg:w-[800px] h-[350px]"
//                                 style={{
//                                     backgroundImage: `url('${item.bg}')`,
//                                     backgroundSize: 'cover',
//                                     backgroundPosition: 'center',
//                                 }}
//                             >
//                                 <div className="absolute inset-0 bg-black/30 bg-opacity-40"></div>

//                                 <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6 md:p-8">
//                                     <h3
//                                         className="text-white mb-4 text-lg md:text-xl uppercase font-semibold"
//                                         style={{ fontFamily: "'Open Sans', sans-serif" }}
//                                     >
//                                         {item.title}
//                                     </h3>
//                                     <p
//                                         className="text-white opacity-90 mb-6 max-w-md text-sm md:text-base capitalize leading-[24px]"
//                                         style={{ fontFamily: "'Open Sans', sans-serif" }}
//                                     >
//                                         {item.desc}
//                                     </p>
//                                     <Link to={item.link}>
//                                         <button className="flex items-center space-x-2 bg-transparent border border-white text-white px-4 md:px-6 py-2 md:py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-sm md:text-base">
//                                             <span>Learn More</span>
//                                             <ChevronRight size={18} />
//                                         </button>
//                                     </Link>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Bottom Section */}
//                 <div className="text-center mt-10">
//                     <Link to={'/services'}>
//                         <button className="flex items-center space-x-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black cursor-pointer px-6 md:px-8 py-3 md:py-4 rounded-2xl transition-all duration-300 mx-auto font-semibold text-sm md:text-base">
//                             <span>Explore All Services</span>
//                             <ChevronRight size={20} />
//                         </button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }









