import React from 'react';
import { FaMapMarkedAlt, FaTools, FaBolt, FaThumbsUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardData = [
    {
        icon: FaMapMarkedAlt,
        title: 'PAN-India Delivery',
        description: 'Project Executed across multiple States in India',
    },
    {
        icon: FaTools,
        title: 'In-House Execution',
        description: 'Direct control with our own engineers and technicians',
    },
    {
        icon: FaBolt,
        title: 'DISCOM-Compliant',
        description: 'Seamless net metering approvals across states',
    },
    {
        icon: FaThumbsUp,
        title: 'KW to MW',
        description: 'Proven expertise across rooftops from KW to MW',
    },
];

const Installation2 = () => {
    return (
        <div className="mt-4 bg-white overflow-hidden">
            <div className="px-4 sm:px-6 lg:px-8 xl:px-44 py-6">
                <div className="max-w-screen-3xl mx-auto">
                    
                    {/* Animated Heading */}
                    <motion.div
                        className="text-center sm:text-left mb-10"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-gray-900 text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold leading-[41px]">
                            Why choose RAVC for your Rooftop Solar?
                        </h2>
                        <p className="text-gray-600 text-[16px] sm:text-[20px] lg:text-[22px] leading-[34px] mt-2 max-w-[686px]">
                            Our competitive advantages in rooftop solar implementation
                        </p>
                    </motion.div>

                    {/* Animated Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cardData.map((card, index) => {
                            const Icon = card.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-2 flex items-center"
                                    style={{
                                        borderRadius: '6px',
                                        background: '#DAB36933',
                                        height: '131px',
                                    }}
                                >
                                    <div className="w-[30px] h-[30px] rounded-[4px] flex items-center justify-center mr-4 flex-shrink-0">
                                        <Icon size={22} className="text-[#DAB369]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-600 text-[16px] leading-tight">
                                            {card.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Installation2;
