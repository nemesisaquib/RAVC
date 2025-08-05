import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StayConnected from '../components/contact/StayConnected'
import TransmissionLineArticle from '../components/text/TransmissionLineArticle'
import Herosectionn from '../components/text/Headersectionn'

const BlogTextPage = () => {
    return (
        <>
            <Header />
            <Herosectionn/>
               <TransmissionLineArticle/>
            <StayConnected />
            <Footer />
        </>
    )
}


export default BlogTextPage