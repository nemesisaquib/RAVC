import React, { useRef } from "react";
import { Mail, PhoneCall, MapPin, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";

const MediaInquiry = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const slideLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    const slideRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, delay: 0.4 } },
    };

    return (
        <section ref={ref} className="bg-white py-16">
            <div className="max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-48 flex flex-col gap-10">
                {/* Heading */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="w-full"
                >
                    <h2 className="text-[24px] sm:text-[30px] md:text-[32px] lg:text-[34px] font-semibold text-[#D4A72C] mb-3">
                        For Media Inquiries
                    </h2>
                    <p className="text-gray-700 text-[16px] sm:text-[17px] md:text-[18px] max-w-3xl">
                        We welcome media collaborations, interviews, and event invitations. Please contact our communications team:
                    </p>
                </motion.div>

                {/* Main Box */}
                <div
                    className="w-full bg-cover bg-center rounded-lg overflow-hidden flex flex-col md:flex-row gap-6 shadow-lg"
                    style={{ backgroundImage: "url('/news/Section Image.png')" }}
                >
                    {/* Left Form Section */}
                    <motion.div
                        variants={slideLeft}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="bg-opacity-60 p-6 md:p-10 flex-1"
                    >
                        <div className="bg-[#DAB369] text-white px-4 py-2 rounded-full inline-block font-semibold text-lg mb-6">
                            Media Request
                        </div>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email ID"
                                className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Organization Name"
                                className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
                            />

                            <button
                                type="submit"
                                className="inline-flex px-8 py-4 justify-center items-center gap-2 rounded-md border border-white bg-[#121212] text-white font-medium hover:bg-gray-900 transition"
                            >
                                Submit Request
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Info Section */}
                    <motion.div
                        variants={slideRight}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="bg-opacity-60 text-white p-6 md:p-10 flex-1 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center space-x-3 mb-3">
                                <PhoneCall size={24} className="bg-[#DAB369] p-1 rounded-full" />
                                <a href="tel:+918874545556" className="hover:underline text-white">
                                    +91-8874 54 55 56
                                </a>
                            </div>

                            <div className="flex items-center space-x-3 mb-3">
                                <Mail size={24} className="bg-[#DAB369] p-1 rounded-full" />
                                <a href="mailto:info@ravc.in" className="hover:underline text-white">
                                    info@ravc.in
                                </a>
                            </div>

                            <div className="flex items-start space-x-3 mb-6">
                                <MapPin size={24} className="bg-[#DAB369] p-1 rounded-full" />
                                <a
                                    href="https://www.google.com/maps?q=Bhavya+Corporate+Tower,+Vibhuti+Khand,+Lucknow"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline text-white"
                                >
                                    4th floor, Bhavya Corporate Tower, Vibhuti Khand,<br />
                                    Gomti Nagar, Lucknow, Uttar Pradesh 226010
                                </a>
                            </div>

                        </div>

                        {/* Divider and Features */}
                        <motion.div
                            variants={fadeIn}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className="flex items-center my-6">
                                <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
                                <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                                <img src="/logo.svg" alt="Logo" className="h-10 w-10 mx-2" />
                                <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                                <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
                            </div>

                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-[#F6C768]" />
                                    24/7 Monitoring available
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-[#F6C768]" />
                                    Customized service plans
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-[#F6C768]" />
                                    Pan-India Service Coverage
                                </li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MediaInquiry;
