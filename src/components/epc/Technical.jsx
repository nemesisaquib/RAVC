import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Technical = () => {
    const features = [
        "Capacity range: 1MW to 100MW+",
        "Module options: Mono PERC, Bifacial, Glass-to-glass",
        "Inverter systems: Central, string-based, hybrid-ready",
        "Grid tie-in: 11kV/33kV/66kV with CEIG approvals",
        "SCADA: Optional for live monitoring and remote access",
        "Compliance: MNRE, BIS, CEIG, DISCOM, and IEC standards",
        "Civil: RCC foundations, ramming, or ballast as per site condition",
        "Plant PR: Engineered to deliver 82–85% performance ratio"
    ];

    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat p-6 sm:p-10"
            style={{
                backgroundImage: "url('/service/Frame 90.svg')",
                minHeight: "639px",
            }}
        >
            {/* Heading Container */}
            <div className="max-w-[1300px] mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    className="h-[46px] font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-[100%] tracking-[0%] text-[#121212] flex items-center rounded"
                >
                    Technical Features
                </motion.h2>
            </div>

            {/* List with bottom border */}
            <ul className="max-w-[1300px] mx-auto mt-8 px-4 sm:px-0 space-y-6">
                {features.map((feature, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col"
                    >
                        <div className="flex items-start gap-4">
                            <span className="mt-1 bg-[#F9D982] rounded-md p-1 inline-flex items-center justify-center">
                                <FaCheck className="text-white w-4 h-4" />
                            </span>
                            <p className="text-[16px] sm:text-[22px] font-semibold max-w-[calc(100%-36px)]">
                                {feature}
                            </p>
                        </div>
                        <div className="border-b border-[#EEEEEE] mt-2 w-full"></div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default Technical;
