import React from "react";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ExecutionBanner = () => {
    return (
        <div className="relative w-full h-auto px-6 md:px-20 py-10 flex items-center text-white overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/home/Execution.jpg')",
                }}
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Content */}
            <div className="relative flex flex-col lg:flex-row justify-between w-full gap-10">
                {/* Left Text */}
                <motion.div
                    className="max-w-full lg:max-w-[55%]"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-open-sans font-extrabold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-[100%] tracking-[0] align-middle mb-4">
                        Pan-India Execution. Local Impact.
                    </h2>

                    <p className="font-open-sans font-normal text-[16px] sm:text-[22px] leading-[32px] sm:leading-[34px] tracking-[0] mb-6">
                        RAVC operates across India, executing projects in urban metros,
                        industrial corridors, and rural villages alike. Our teams are trained
                        to adapt, respond, and deliver consistently — whether on high-rise
                        rooftops or remote farmland.
                    </p>

                    <Link to={"/contact"}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer border border-white px-4 py-2 rounded flex items-center gap-2 hover:bg-white hover:text-black transition"
                        >
                            Contact Our Team <span>→</span>
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Right Contact Info */}
                <motion.div
                    className="space-y-5 text-sm max-w-full lg:max-w-[45%]"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col gap-4">
                        <a href="tel:+918874545556" className="flex items-center gap-3 hover:underline">
                            <FaPhoneAlt className="w-[25px] h-[25px] bg-[#d6a84f] text-white p-1.5 rounded-full" />
                            <span>+91 8874 54 55 56</span>
                        </a>

                        <a href="mailto:info@ravc.in" className="flex items-center gap-3 hover:underline">
                            <FaEnvelope className="w-[25px] h-[25px] bg-[#d6a84f] text-white p-1.5 rounded-full" />
                            <span>info@ravc.in</span>
                        </a>

                        <a
                            href="https://www.google.com/maps?q=4th+floor,+Bhavya+Corporate+Tower,+Vibhuti+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3 hover:underline"
                        >
                            <FaMapMarkerAlt className="w-[25px] h-[25px] bg-[#d6a84f] text-white p-1.5 rounded-full" />
                            <span>
                                4th floor, Bhavya Corporate Tower, Vibhuti Khand, Gomti Nagar,
                                <br className="hidden sm:block" />
                                Lucknow, Uttar Pradesh 226010
                            </span>
                        </a>
                    </div>

                    {/* Divider with logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
                        <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                        <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
                        <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                        <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
                    </div>

                    {/* Services List */}
                    <div className="flex flex-col gap-2 mt-4">
                        {[
                            "24/7 Monitoring available",
                            "Customized service plans",
                            "Pan-India Service Coverage",
                        ].map((text, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-center gap-2"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.3 + idx * 0.15 }}
                                viewport={{ once: true }}
                            >
                                <FaCheck className="text-[#e5a844]" />
                                <span>{text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ExecutionBanner;
