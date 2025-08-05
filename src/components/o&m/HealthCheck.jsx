import React from 'react';
import { TrendingUp, AlertTriangle, Wrench, Search, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
        },
    }),
};

export default function HealthCheckDeliverables() {
    const deliverables = [
        {
            id: 1,
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Generation Trends",
            description: "Analysis of actual vs. expected power output over time.",
        },
        {
            id: 2,
            icon: <AlertTriangle className="w-6 h-6" />,
            title: "Fault Logs",
            description: "Detailed error tracking and resolution timelines.",
        },
        {
            id: 3,
            icon: <Wrench className="w-6 h-6" />,
            title: "Maintenance Cycles",
            description: "Scheduled cleaning and preventive checks with reports.",
        },
        {
            id: 4,
            icon: <Search className="w-6 h-6" />,
            title: "Loss Diagnostics",
            description: "Identify inefficiencies with root cause analysis.",
        },
        {
            id: 5,
            icon: <Zap className="w-6 h-6" />,
            title: "Component Degradation",
            description: "Monitor wear on panels and inverters over time.",
        }
    ];

    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16 px-2 sm:px-0"
                >
                    <h1 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-extrabold text-[#DAB369] mb-4 tracking-wide">
                        Health Check Deliverables
                    </h1>

                    <p className="text-[#121212] font-semibold text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Each <span className="text-[#DAB369] font-normal">O&M contract</span> includes monthly, quarterly, and annual technical reports to ensure peak performance and system longevity.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {deliverables.map((item, index) => (
                        <motion.div
                            key={item.id}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            className="w-full h-auto sm:h-[144px] flex justify-between rounded-2xl px-6 py-4 bg-white shadow-lg"
                        >
                            <div className="flex flex-col justify-start gap-2 w-full">
                                {/* Icon + Heading */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#FADE8B] flex items-center justify-center flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-lg sm:text-[18.28px] leading-7 text-[#DAB369]">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-[#121212] text-sm sm:text-[18px] font-semibold leading-snug mt-1">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
