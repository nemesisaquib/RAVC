import React, { useRef } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';

export default function HiringComponent() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const jobOpenings = [
        { title: "Solar Project Engineer", location: "Lucknow", type: "Full-Time" },
        { title: "O&M Technician (Rooftop)", location: "Kanpur", type: "Full-Time" },
        { title: "Business Development Executive", location: "Remote", type: "Contract" },
        { title: "Site Supervisor (I&C)", location: "Rajasthan", type: "Project Basis" },
        { title: "Solar Design Engineer", location: "Lucknow", type: "Full-Time" },
    ];

    const rowVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2 + i * 0.15,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <div
            ref={ref}
            id='option'
            className="bg-gradient-to-b from-orange-50 to-orange-100 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 py-16"
        >
            <div className="w-full max-w-8xl lg:px-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-[28px] sm:text-[30px] md:text-[34px] font-semibold text-[#DAB369] mb-4">
                        We're Hiring Across Roles and Regions
                    </h1>
                    <p className="text-[#121212] text-[16px] sm:text-[17px] md:text-[18px] font-normal leading-relaxed max-w-5xl mx-auto">
                        Whether you're a field technician or a project manager, if you're driven by problem-solving and passionate about solar, we'd love to hear from you.
                    </p>
                </motion.div>

                {/* Job Openings Section */}
                <div className="mb-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="text-[17px] sm:text-[18px] font-bold text-[#333333] mb-8 flex items-center"
                    >
                        <FaBriefcase className="text-orange-400 mr-2" />
                        Current Openings
                    </motion.h2>

                    {/* Responsive Table */}
                    <div className="overflow-x-auto w-full">
                        <div className="min-w-[600px]">
                            {/* Table Header */}
                            <div className="bg-[#DAB369] text-white grid grid-cols-4 gap-4 px-6 py-4 font-semibold text-[14px] sm:text-[15px]">
                                <div>Job Title</div>
                                <div>Location</div>
                                <div>Type</div>
                                <div>Apply</div>
                            </div>

                            {/* Table Rows with Animation */}
                            <div className="divide-y divide-gray-200">
                                {jobOpenings.map((job, index) => (
                                    <motion.div
                                        key={index}
                                        custom={index}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        variants={rowVariants}
                                        className="text-[13px] sm:text-[14px] grid grid-cols-4 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="text-black font-medium">{job.title}</div>
                                        <div className="text-black">{job.location}</div>
                                        <div className="text-black">{job.type}</div>
                                        <div>
                                            <button className="bg-[#DAB369] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                                Apply Now
                                            </button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Application Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <button className="bg-[#DAB369] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-colors flex items-center mx-auto">
                        Submit a General Application
                        <span className="ml-2">→</span>
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
