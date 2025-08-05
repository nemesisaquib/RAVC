import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Herosection from '../components/contact/Herosection'
import StayConnected from '../components/contact/StayConnected'
import OnGround from '../components/contact/OnGround'
import Department from '../components/contact/Department'
import ContactForm from '../components/contact/ContactForm'
import Card from '../components/contact/Card'
import Map from '../components/contact/Map'

const ContactPage = () => {
    return (
        <>
            <Header />
            <Herosection />
            <Card/>
            <div className="w-full flex justify-center my-10">
                <div className="flex items-center w-full max-w-8xl">
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
            <ContactForm />
            <div className="w-full flex justify-center my-10">
                <div className="flex items-center w-full max-w-8xl">
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
            <Department />
            <div className="w-full flex justify-center my-10">
                <div className="flex items-center w-full max-w-8xl">
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
            <OnGround />
            <Map/>
            <StayConnected />
            <Footer />
        </>
    )
}

export default ContactPage