import React from 'react';
import { DollarSign, Leaf, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Innovation() {
    const features = [
        {
            Icon: DollarSign,
            title: 'Cost-Effective',
            text: 'Our solutions provide the best value with high ROI, reducing your energy bills by up to 90%.',
        },
        {
            Icon: Leaf,
            title: 'Ecological',
            text: '100% clean energy solutions that reduce carbon footprint and support sustainability.',
        },
        {
            Icon: Shield,
            title: 'Trusted Quality',
            text: 'A team culture rooted in trust, quality, and transformation.',
        },
    ];

    return (
        <div className="relative bg-black/50 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/home/innovation.jpg')`,
                }}
            />

            {/* Abstract Geometric Lines */}
            <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" className="absolute inset-0">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                    <path d="M0,200 Q400,100 800,150 T1600,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
                    <path d="M200,0 Q600,300 1000,200 T1800,100" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
                    <path d="M-100,400 Q300,300 700,350 T1500,400" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Heading + Description */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-white text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-semibold leading-tight mb-6">
                        Innovation Beyond Convention
                    </h1>
                    <div className="text-gray-300 text-base sm:text-[16px] lg:text-[22px] leading-relaxed space-y-2  mx-auto">
                        <p>
                            What sets RAVC apart isn't just our expertise — it's how we apply it. Our technocrat-led teams are encouraged to challenge
                        </p>
                        <p>
                            convention, explore new methods, and find solutions that go beyond the blueprint.
                        </p>
                        <p>
                            Even the smallest actions done differently can lead to exceptional outcomes.
                        </p>
                    </div>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-10">
                    {features.map(({ Icon, title, text }, index) => (
                        <motion.div
                            key={index}
                            className="border border-white p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:bg-[#DAB369] text-white flex flex-col items-center text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                                <Icon className="w-8 h-8 text-black" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-3">{title}</h3>
                            <p className="text-sm sm:text-base leading-relaxed">{text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 border border-white text-white px-6 py-3 rounded-xl font-medium text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer
"
                    >
                        Discover Why Clients Choose RAVC
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}
