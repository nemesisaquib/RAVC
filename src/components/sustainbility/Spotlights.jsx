import React, { useRef } from 'react';
import { List, CheckCircle, Zap, Users, Droplets, Leaf } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Spotlights() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: 'easeOut',
            },
        }),
    };

    const projects = [
        {
            id: 1,
            title: "Rural Irrigation Through Solar Pumps (Eastern U.P.)",
            description: "CSR-backed installation of 30+ pumps for marginal farmers.",
            image:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center",
            stats: [
                { icon: <Droplets className="w-4 h-4" />, text: "140 hectares irrigated" },
                { icon: <Leaf className="w-4 h-4" />, text: "Diesel usage cut by 90%" },
            ],
        },
        {
            id: 2,
            title: "Green Roofs for Schools Initiative",
            description: "Installation of 10 rooftop plants in government schools.",
            image:
                "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=250&fit=crop&crop=center",
            stats: [
                { icon: <Zap className="w-4 h-4" />, text: "40% reduction in monthly power bills" },
                { icon: <Users className="w-4 h-4" />, text: "Student awareness programs launched" },
            ],
        },
        {
            id: 3,
            title: "Carbon-Efficient EPC Practices",
            description:
                "All EPC sites now follow optimized material transport, water reuse, and zero-paper protocols during execution.",
            image:
                "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop&crop=center",
            stats: [],
        },
    ];

    return (
        <div
            ref={ref}
            className="w-full min-h-screen flex justify-center items-center relative overflow-hidden px-4 py-16 md:py-24"
            style={{
                backgroundImage:
                    "url('/Section (5).png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0  bg-opacity-50"></div>

            <div className="relative z-10 bg-opacity-90 rounded-lg shadow-lg max-w-[1200px] w-full flex flex-col items-center px-6 py-12 md:py-16">
                {/* Animated Header */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-extrabold text-[#DAB369] mb-12 text-center"
                >
                    Project Spotlights
                </motion.h2>

                {/* Animated Project Cards */}
                <div className="flex flex-wrap justify-center gap-6 mb-12 w-full">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            custom={i}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                            variants={cardVariants}
                            className="bg-white rounded-lg border border-[#DAB369] shadow-[0_10px_30px_0_rgba(0,0,0,0.08)] hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden"
                            style={{ width: '100%', maxWidth: '366px', minHeight: '487px' }}
                        >
                            {/* Project Image */}
                            <div className="h-[200px] w-full overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-start gap-3 mb-3">
                                    <div
                                        className="rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                                        style={{ background: "#DAB369", width: 24, height: 24 }}
                                    >
                                        <CheckCircle className="text-white" style={{ width: 20, height: 20 }} />
                                    </div>
                                    <h3 className="text-[19px] font-extrabold text-[#121212] leading-tight">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-[#333333] text-base font-normal mb-4 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                {project.stats.length > 0 && (
                                    <div className="space-y-2">
                                        {project.stats.map((stat, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-2 text-gray-700"
                                            >
                                                <div
                                                    style={{
                                                        color: "#DAB369",
                                                        fontSize: 16,
                                                        fontWeight: 900,
                                                    }}
                                                >
                                                    {stat.icon}
                                                </div>
                                                <span className="text-[16px] font-normal text-[#333333]">
                                                    {stat.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Animated Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center"
                >
                    <button
                        className="flex items-center gap-3 font-medium bg-gray-700 hover:bg-gray-600 text-white rounded-full border-2 border-white px-8 py-3 w-[275px] h-[60px] transition-colors duration-200"
                    >
                        <List className="w-5 h-5" />
                        View All Impact Projects
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
