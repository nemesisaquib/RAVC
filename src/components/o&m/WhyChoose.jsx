import React from 'react';
import {
    FaChartLine,
    FaUserCog,
    FaUsers,
    FaGlobeAsia,
    FaHandshake,
} from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const WhyChoose = () => {
    const features = [
        {
            icon: <FaChartLine className="text-[#D4A72C] text-2xl" />,
            title: '98%+',
            description: 'uptime track record across portfolio',
        },
        {
            icon: <FaUserCog className="text-[#D4A72C] text-2xl" />,
            title: 'Trained in-house',
            description: 'engineers and solar electricians',
        },
        {
            icon: <FaUsers className="text-[#D4A72C] text-2xl" />,
            title: 'Regional deployment',
            description: 'hubs for faster response',
        },
        {
            icon: <FaGlobeAsia className="text-[#D4A72C] text-2xl" />,
            title: 'PAN-India Delivery',
            description: 'Projects executed across 15+ states with local teams',
        },
        {
            icon: <FaHandshake className="text-[#D4A72C] text-2xl" />,
            title: 'Performance-linked',
            description: 'service contracts (SLA-based)',
        },
    ];

    return (
        <div className="px-6 md:px-16 py-12 bg-white">
            {/* Animated Heading Section */}
            <motion.div
                className="max-w-7xl mx-auto mb-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#000000] mb-2">
                    Why Choose RAVC for O&M
                </h2>
                <p className="text-[#121212] text-[18px] font-normal">
                    Our competitive advantages in rooftop solar implementation
                </p>
            </motion.div>

            {/* Animated Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {features.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-full rounded-[6px] p-4 flex items-start gap-4 bg-[#DAB36933]"
                    >
                        <div className="text-[#D4A72C] text-3xl">{item.icon}</div>
                        <div className="flex flex-col">
                            <h3 className="text-[#121212] text-[20px] font-bold">
                                {item.title}
                            </h3>
                            <p className="text-[#121212] text-[16px] font-normal">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

    );
}

export default WhyChoose;
