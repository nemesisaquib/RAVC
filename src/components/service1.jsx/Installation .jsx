import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Installation = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const staggerContainer = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const processSteps = [
        {
            step: '01',
            title: 'Site Assessment',
            description: 'Physical inspection, shadow analysis, and rooftop viability study.',
        },
        {
            step: '02',
            title: 'System Design',
            description: 'Tailored panel layout, inverter configuration, and load balancing.',
        },
        {
            step: '03',
            title: 'Installation',
            description: 'Fast-track execution with safety and quality benchmarks.',
        },
        {
            step: '04',
            title: 'Commissioning',
            description: 'System testing, grid synchronization, and handover.',
        },
        {
            step: '05',
            title: 'Support',
            description: 'Ongoing maintenance and performance monitoring.',
        },
    ];

    return (
        <div className="relative px-4 md:px-8 py-12 bg-white" ref={ref}>
            <motion.div
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#DAB369] w-full max-w-[1230px] mx-auto"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Decorative Logo */}
                <div className="hidden lg:block absolute right-8 bottom-8 z-30">
                    <img
                        src="/logo/WhatsApp Image 2025-05-27 at 2.06.00 PM 2 (4).png"
                        alt="Decorative Icon"
                        className="object-cover h-[90px] w-[90px] md:h-[124px] md:w-[130px]"
                    />
                </div>

                {/* Layout Wrapper */}
                <div className="flex flex-col lg:flex-row h-full items-stretch">
                    {/* Left - Background Image Panel */}
                    <div
                        className="relative flex flex-col justify-center items-center text-center p-6 md:p-12 w-full lg:w-[510px]"
                        style={{
                            backgroundImage: 'url("/service/Background (1).svg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-opacity-50 z-0"></div>
                        <div className="relative z-10 flex flex-col justify-center items-start text-left">
                            <h1 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#DAB369] mb-4 leading-tight">
                                Our Installation<br />Process
                            </h1>
                            <p className="text-gray-300 text-[16px] sm:text-[20px] lg:text-[22px] leading-snug">
                                From assessment to activation –<br />our streamlined workflow
                            </p>
                        </div>
                    </div>

                    {/* Right - Steps */}
                    <div className="flex p-6 md:p-12 justify-center relative h-full gap-6">
                        {/* Divider Image */}
                        <div className="hidden lg:flex items-stretch">
                            <img
                                src="/line.svg"
                                alt="Divider"
                                className="h-full"
                                style={{ width: '28px' }}
                            />
                        </div>

                        {/* Steps List */}
                        <div className="flex flex-col justify-between space-y-4 flex-1">
                            {processSteps.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4 p-4 bg-white rounded-lg"
                                    variants={fadeInUp}
                                >
                                    <div
                                        className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                                        style={{ backgroundColor: '#DAB369' }}
                                    >
                                        {item.step}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-[16px] text-[#121212] mb-1">{item.title}</h3>
                                        <p className="text-[15px] text-[#121212] leading-[24px]">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Installation;
