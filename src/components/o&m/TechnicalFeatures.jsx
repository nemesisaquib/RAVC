import React, { useRef } from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

const TechnicalFeatures = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const features = [
        "Real-Time Monitoring via web/cloud dashboard",
        "Alarm-Based Response with escalation triggers",
        "Data Logging at inverter level and plant level",
        "PR Tracking: Performance Ratio comparison vs. modeled baseline",
        "Ticketing System for issue tracking and resolution logs",
        "Integration with SCADA and Remote Control Units (RCUs) for utility-scale clients"
    ];

    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat p-6 sm:p-10"
            style={{
                backgroundImage: "url('/service/Frame 90.svg')",
                minHeight: "508px",
            }}
            ref={ref}
        >
            {/* Heading */}
            <div className="max-w-[1300px] mx-auto px-4">
                <h2 className="h-[46px] font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-[100%] tracking-[0%] text-[#121212] flex items-center rounded">
                    Technical Features
                </h2>
            </div>

            {/* Feature List */}
            <motion.ul
                className="max-w-[1300px] mx-auto mt-8 px-4 sm:px-0 space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {features.map((feature, index) => (
                    <motion.li
                        key={index}
                        className="flex flex-col"
                        variants={fadeUp}
                    >
                        <div className="flex items-start gap-4">
                            <span className="mt-1 bg-[#F9D982] rounded-md p-1 inline-flex items-center justify-center">
                                <FaCheck className="text-white w-4 h-4" />
                            </span>
                            <p className="text-[18px] sm:text-[22px] font-semibold max-w-[calc(100%-36px)]">
                                {feature}
                            </p>
                        </div>
                        <div className="border-b border-[#EEEEEE] mt-2 w-full"></div>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default TechnicalFeatures;
