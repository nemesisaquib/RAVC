import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Example = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } }
    };

    return (
        <div ref={ref} className="bg-white w-full py-10 px-4 md:px-14">
            {/* Heading Section */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="text-left mb-6 w-full"
            >
                <h2 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[40px] font-bold text-[#000000] mb-1">
                    O&M Case Example
                </h2>
                <p className="text-gray-500 text-[16px] md:text-[19px]">
                    Real-world results from our rooftop installations
                </p>
            </motion.div>

            {/* Table */}
            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="w-full overflow-x-auto"
            >
                <div className="min-w-[768px]">
                    {/* Header Row */}
                    <div className="grid grid-cols-5 bg-[#DAB369] text-black font-semibold text-[14px] md:text-[16px] py-4 px-4 md:py-6 md:px-6">
                        <div>Client</div>
                        <div>Capacity</div>
                        <div>Issue</div>
                        <div>Action</div>
                        <div>Result</div>
                    </div>

                    {/* Data Row */}
                    <div className="grid grid-cols-5 gap-y-2 bg-white text-[#000000] text-[14px] md:text-[16px] py-4 px-4 md:py-6 md:px-6">
                        <div className="flex flex-col">
                            <span>Commercial</span>
                            <span>Factory, Lucknow</span>
                        </div>
                        <div className="flex items-center">100kW</div>
                        <div className="flex items-center text-left">Frequent inverter shutdowns</div>
                        <div className="flex flex-col text-left">
                            <span>Thermal inspection</span>
                            <span>+ inverter firmware upgrade</span>
                        </div>
                        <div className="mt-2 font-medium text-left">
                            PR increased from 74% to 84% in 30 days
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Logo Line */}
            <motion.div
                variants={scaleIn}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex items-center justify-center w-full mt-6"
            >
                <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
                <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                <img
                    src="/logo.svg"
                    alt="Logo"
                    className="h-10 w-10 mx-2"
                />
                <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
            </motion.div>
        </div>
    );
};

export default Example;
