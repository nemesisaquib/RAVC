import React from 'react';
import {
    FaChartLine,
    FaUserCog,
    FaUsers,
    FaGlobeAsia,
    FaHandshake,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhyChoose = () => {
    const features = [
        {
            icon: <FaChartLine className="text-[#D4A72C] text-2xl" />,
            description: 'In-house EPC management team',
        },
        {
            icon: <FaUserCog className="text-[#D4A72C] text-2xl" />,
            description: 'Local and global procurement partnerships',
        },
        {
            icon: <FaUsers className="text-[#D4A72C] text-2xl" />,
            description: 'Financial modelling and subsidy advisory',
        },
        {
            icon: <FaGlobeAsia className="text-[#D4A72C] text-2xl" />,
            description: 'Execution speed with milestone-based progress tracking',
        },
        {
            icon: <FaHandshake className="text-[#D4A72C] text-2xl" />,
            description: 'ISO-compliant QMS & safety protocols',
        },
    ];

    return (
        <div className="px-6 md:px-16 py-12 bg-white">
            {/* Heading Section */}
            <div className="max-w-7xl mx-auto mb-8">
                <h2 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#000000] mb-2">
                    Key Differentiators
                </h2>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {features.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="w-full rounded-[6px] p-4 flex items-start gap-4 bg-[#DAB36933]"
                    >
                        <div className="text-[#D4A72C] text-3xl">{item.icon}</div>
                        <div className="flex flex-col">
                            <p className="text-[#121212] text-[16px] font-normal">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyChoose;
