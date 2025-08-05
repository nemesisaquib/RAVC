import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MediaInquiry from '../components/media/MediaInquiry'
import Herosection from '../components/Headlines/Herosection'
import Headlines from '../components/Headlines/Headlines'


const HeadlinesPage = () => {
    return (
        <>
            <Header />
            <Herosection />
            <Headlines/>
      
            <MediaInquiry />
            <Footer />
        </>
    )
}


export default HeadlinesPage