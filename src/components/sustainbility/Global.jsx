import React, { useRef } from 'react';
import { Download } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Global() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.6,
                ease: 'easeOut',
            },
        }),
    };

    return (
        <div
            ref={ref}
            className="w-full relative overflow-hidden border-2 border-white"
            style={{
                height: '596px',
                background: '#FFFFFF',
                boxShadow: '0px 4px 4px 0px #C9C9C933',
            }}
        >
            {/* Background Lines */}
            <div className="absolute inset-0">
                <svg className="w-full h-full opacity-20" viewBox="0 0 800 600" fill="none">
                    <path d="M-100 400 Q200 200 500 400 T1000 400" stroke="#E5C878" strokeWidth="2" fill="none" />
                    <path d="M-100 450 Q250 250 550 450 T1000 450" stroke="#E5C878" strokeWidth="1.5" fill="none" />
                    <path d="M-100 350 Q150 150 450 350 T1000 350" stroke="#E5C878" strokeWidth="1" fill="none" />
                    <path d="M-100 500 Q300 300 600 500 T1000 500" stroke="#E5C878" strokeWidth="1" fill="none" />
                </svg>
            </div>

            {/* Content */}
            <div
                className="absolute left-1/2 top-1/2 px-8 py-12 flex flex-col justify-center items-center z-10"
                style={{
                    width: '1200px',
                    height: '534.83px',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-8 max-w-4xl"
                >
                    <h2 className="text-[40px] font-[700] text-[#263238] mb-6">
                        Built to Align with Global Standards
                    </h2>
                    <p className="text-[16px] font-[400] text-[#121212] leading-relaxed">
                        We embed Environmental, Social, and Governance (ESG) practices across our operations — not just for compliance, but for conscious growth.
                    </p>
                </motion.div>

                {/* Cards Section */}
                <div className="flex justify-center items-stretch gap-6 max-w-5xl mb-10">
                    {['Environmental', 'Social', 'Governance'].map((title, i) => {
                        const descriptions = [
                            "Focus on renewable energy deployment, sustainable sourcing, low-carbon engineering",
                            "Community hiring, women in solar, employee safety & development",
                            "Transparent contracts, ethical vendor partnerships, and zero-tolerance integrity policy",
                        ];
                        return (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                variants={cardVariants}
                                className="p-6"
                                style={{
                                    width: '366.66px',
                                    height: '205.05px',
                                    background: '#FFFFFF',
                                    border: '2px solid #DAB369',
                                    borderRadius: '12px',
                                    boxShadow: '0px 10px 30px 0px #00000014',
                                }}
                            >
                                <h3 className="text-[20px] font-[600] text-[#2E7D32] mb-4">{title}</h3>
                                <p className="text-[#333333] text-[16px] font-[400] leading-relaxed">
                                    {descriptions[i]}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="text-center"
                >
                    <button
                        className="flex items-center justify-center gap-3 text-white font-medium shadow-lg transition-colors duration-200"
                        style={{
                            width: '361.22px',
                            height: '55.59px',
                            borderRadius: '50px',
                            background: '#DAB369',
                        }}
                    >
                        <Download className="w-5 h-5" />
                        Download RAVC ESG Highlights 2024
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
