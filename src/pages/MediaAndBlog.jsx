// import React from 'react'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import PressReleases from '../components/media/PressReleases'
// import Herosection from '../components/media/Herosection'
// import KnowledgeDesk from '../components/media/KnowledgeDesk'
// import MediaInquiry from '../components/media/MediaInquiry'
// import Motion from '../components/media/Motion'

// const MediaAndBlog = () => {
//     return (
//         <>
//             <Header />
//             <Herosection />
//             <PressReleases />
//             <KnowledgeDesk />
//             <div className="w-full flex justify-center my-10">
//                 <div className="flex items-center w-full max-w-7xl">
//                     <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
//                     <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
//                     <img
//                         src="/logo.svg"
//                         alt="Logo"
//                         className="h-10 w-auto mx-4"
//                         style={{ width: 40 }}
//                     />
//                     <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
//                     <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
//                 </div>
//             </div>
//             {/* <Motion/>
//             <div className="w-full flex justify-center my-10">
//                 <div className="flex items-center w-full max-w-7xl">
//                     <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
//                     <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
//                     <img
//                         src="/logo.svg"
//                         alt="Logo"
//                         className="h-10 w-auto mx-4"
//                         style={{ width: 40 }}
//                     />
//                     <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
//                     <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
//                 </div>
//             </div> */}
//             <MediaInquiry />
//             <Footer />
//         </>
//     )
// }

// export default MediaAndBlog


import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PressReleases from '../components/media/PressReleases'
import Herosection from '../components/media/Herosection'
import KnowledgeDesk from '../components/media/KnowledgeDesk'
import MediaInquiry from '../components/media/MediaInquiry'
import Motion from '../components/media/Motion'
import { Link } from 'react-router-dom'

const MediaAndBlog = () => {
    return (
        <>
            <Header />
                 <div className="min-h-screen bg-gradient-to-br from-white via-[#fff8f0] to-[#fcebd3] flex items-center justify-center px-4">
                <div className="max-w-2xl text-center">
                    <img
                        src="/come.png"
                        alt="Coming Soon Illustration"
                        className="w-full max-w-md mx-auto mb-8 "
                    />

                    <p className="text-lg text-gray-600 mb-6">
                        We're working hard to launch this page very soon. Stay tuned!
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-[#DAB369] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#c59e4f] transition duration-300"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MediaAndBlog