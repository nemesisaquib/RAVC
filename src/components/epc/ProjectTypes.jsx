import React from 'react';
import { TrendingUp, AlertTriangle, Wrench, Search, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectTypes() {
    const deliverables = [
        {
            id: 1,
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Generation Trends",
            description: "Utility-scale solar farms",
        },
        {
            id: 2,
            icon: <AlertTriangle className="w-6 h-6" />,
            title: "Fault Logs",
            description: "Captive solar for manufacturing zones",
        },
        {
            id: 3,
            icon: <Wrench className="w-6 h-6" />,
            title: "Maintenance Cycles",
            description: "Institutional solar parks (schools, hospitals, campuses)",
        },
        {
            id: 4,
            icon: <Search className="w-6 h-6" />,
            title: "Loss Diagnostics",
            description: "Solar parks with future EV station or microgrid integration",
        },
        {
            id: 5,
            icon: <Zap className="w-6 h-6" />,
            title: "Component Degradation",
            description: "DISCOM-tendered projects",
        }
    ];

    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#DAB369] mb-4 tracking-wide">
                        Project Types We Deliver
                    </h1>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {deliverables.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: item.id * 0.1 }}
                            className="w-full max-w-[327px] h-auto md:h-[144px] flex flex-col md:flex-row justify-between rounded-[16px] px-[22px] py-[12px] bg-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] mx-auto"
                        >
                            <div className="flex flex-col justify-center gap-2 w-full">
                                <div className="flex items-center gap-4">
                                    <div className="min-w-[50px] min-h-[50px] rounded-full bg-[#FADE8B] flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-[18px] text-[#DAB369]">
                                        {item.title}
                                    </h3>
                                </div>
                                <p className="text-[#121212] text-[16px] md:text-[18px] font-semibold mt-2 leading-snug">
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
