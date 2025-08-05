import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StayConnected from '../components/contact/StayConnected'
import TransmissionLineArticle from '../components/text/TransmissionLineArticle'
import Herosection from '../components/text/Headersection'

const MediaHiglight = () => {
    return (
        <>
            <Header />
            <Herosection/>
             <TransmissionLineArticle/>
            <StayConnected />
           
            <Footer />
        </>
    )
}

export default MediaHiglight