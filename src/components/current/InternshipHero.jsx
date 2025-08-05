import React from 'react';
import { FaSolarPanel, FaHardHat, FaRegFileAlt, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const InternshipHero = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <div
            className="relative min-h-[800px] py-4 sm:py-4 lg:py-0 bg-cover bg-center flex items-center justify-center text-white"
            style={{
                backgroundImage: "url('/current/Frame 77.svg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Content */}
            <div className="relative z-10 text-center w-full max-w-7xl px-4">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-[28px] sm:text-[30px] md:text-[34px] font-[700] text-white mb-4"
                >
                    Fresh Minds. Future Leaders.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                    className="text-[16px] sm:text-[17px] md:text-[18px] font-[400] mb-6 max-w-2xl mx-auto text-white"
                >
                    RAVC partners with engineering colleges and energy institutes to onboard interns who are eager to gain real-world exposure.
                </motion.p>

                <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
                    className="text-[16px] sm:text-[17px] md:text-[18px] mb-6 font-[600] text-white"
                >
                    We offer internship opportunities in:
                </motion.h3>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mb-6">
                    {[
                        { icon: <FaSolarPanel />, label: 'Solar design and analytics' },
                        { icon: <FaHardHat />, label: 'Field execution & supervision' },
                        { icon: <FaRegFileAlt />, label: 'Policy research and strategy' },
                        { icon: <FaHandshake />, label: 'Sales & community outreach' },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-5 text-black min-w-[240px] h-[132.39px] mx-auto"
                        >
                            <div className="mb-3 text-[#DAB369] text-[28.8px] leading-[28.8px]">
                                {item.icon}
                            </div>
                            <p className="text-center font-[400] text-[16px] text-[#333333]">{item.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                >
                    <Link to={'/contact'}>
                        <button className="bg-[#DAB369] text-white cursor-pointer font-medium py-3 px-6 shadow-md transition h-[59px] w-[229px] rounded-[4px] mx-auto">
                            Apply for Internship
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default InternshipHero;
