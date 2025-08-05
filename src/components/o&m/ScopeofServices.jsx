import React from "react";
import {
    Wrench,
    AlertTriangle,
    BarChart2,
    Thermometer,
    ShieldCheck,
    Package,
    Activity,
    DollarSign,
} from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.1,
        },
    }),
};

const ScopeofServices = () => {
    const services = [
        {
            icon: <DollarSign className="text-xl text-gray-700" />,
            title: "Routine Preventive Maintenance",
            description: "Regular inspections, panel cleaning, and system diagnostics",
        },
        {
            icon: <Wrench className="text-xl text-gray-700" />,
            title: "Corrective Maintenance",
            description: "Rapid response to inverter failures, cable issues, or system breakdowns",
        },
        {
            icon: <BarChart2 className="text-xl text-blue-700" />,
            title: "Monitoring & Reporting",
            description: "24/7 remote monitoring, performance ratio analysis, and reporting dashboard",
        },
        {
            icon: <Thermometer className="text-xl text-red-600" />,
            title: "Thermal Scanning",
            description: "Identifying hotspot issues using infrared cameras",
        },
        {
            icon: <ShieldCheck className="text-xl text-green-600" />,
            title: "Warranty Management",
            description: "Handling OEM warranties and replacements",
        },
        {
            icon: <Package className="text-xl text-purple-700" />,
            title: "Spares & Inventory",
            description: "On-site critical spare management and stock planning",
        },
        {
            icon: <Activity className="text-xl text-orange-600" />,
            title: "Performance Optimization",
            description: "Loss analysis and system fine-tuning to recover generation dips",
        },
    ];

    return (
        <div className="relative bg-cover bg-center bg-no-repeat">
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

            {/* Logo */}
            <div className="hidden lg:block absolute right-0 bottom-[140px] sm:bottom-[100px] md:bottom-[35px] z-30">
                <img
                    src="/logo/WhatsApp Image 2025-05-27 at 2.06.00 PM 2 (5).png"
                    alt="Decorative Icon"
                    className="object-cover bg-transparent h-[144px] w-[130px] sm:h-[110px] sm:w-[100px] md:h-[144px] md:w-[130px]"
                />
            </div>
            <div className="hidden lg:block absolute h-full w-full z-30">
                <img
                    src="/bg (2).png"
                    alt="Decorative Icon"
                    className="object-cover bg-transparent h-full w-full"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 sm:px-6 md:px-12 py-10 text-center max-w-[1400px] mx-auto">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#333333] mb-10"
                    style={{
                        fontFamily: "'Open Sans', sans-serif",
                        lineHeight: "1.4",
                        letterSpacing: "0%",
                    }}
                >
                    Scope of Services
                </motion.h2>

                {/* Grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
                    {services.map(({ icon, title, description }, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            className="w-full bg-[#DAB369B2] rounded-lg pt-8 pb-8 px-6 sm:px-10 shadow-md text-left flex flex-col justify-between"
                        >
                            <div className="flex items-center gap-4 mb-2 max-w-[276px]">
                                <div
                                    style={{
                                        width: "56px",
                                        height: "50px",
                                        borderRadius: "4px",
                                        background: "#F9D982E5",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                    }}
                                >
                                    {icon}
                                </div>
                                <h3
                                    className="font-medium text-[18px] leading-[27.2px] max-w-[200px]"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                >
                                    {title}
                                </h3>
                            </div>
                            <p className="text-[18px]">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScopeofServices;
