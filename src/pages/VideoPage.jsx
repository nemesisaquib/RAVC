import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MediaInquiry from '../components/media/MediaInquiry'
import Herosection from '../components/Headlines/Herosection'
import VideoSection from '../components/video/VideoSection'
import SolarImageGrid from '../components/media/SolarImageGrid'



const VideoPage = () => {
    return (
        <>
            <Header />
            <Herosection />

            <VideoSection />
            <SolarImageGrid/>
            
            <MediaInquiry />
            <Footer />
        </>
    )
}


export default VideoPage