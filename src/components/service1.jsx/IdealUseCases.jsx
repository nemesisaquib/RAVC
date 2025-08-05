import React from 'react';
import {
    FaBuilding,
    FaHome,
    FaIndustry,
    FaGraduationCap,
    FaShoppingBag,
    FaWarehouse,
    FaHotel,
    FaHeart,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const useCases = [
    { icon: FaBuilding, title: 'Commercial Buildings' },
    { icon: FaHome, title: 'Residential Societies' },
    { icon: FaIndustry, title: 'Industrial Facilities' },
    { icon: FaGraduationCap, title: 'Educational Institutions' },
    { icon: FaShoppingBag, title: 'Retail Complexes' },
    { icon: FaWarehouse, title: 'Warehouses' },
    { icon: FaHotel, title: 'Hospitality Sector' },
    { icon: FaHeart, title: 'Healthcare Centers' },
];

const IdealUseCases = () => {
    return (
        <div
            className="min-h-[497px] w-full relative bg-cover bg-center"
            style={{
                backgroundColor: '#FDF2D1A8',
                backgroundImage: `url("/Section (1).png")`,
            }}
        >
            <div className="hidden md:block absolute left-1/2 bottom-2 transform -translate-x-1/2 z-30">
                <img
                    src="/logo3.svg"
                    alt="Decorative Icon"
                    className="object-cover bg-transparent h-[80px] w-[80px]"
                />
            </div>

            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-3xl mx-auto px-4 sm:px-6 md:px-20 lg:px-20 xl:px-24 py-12 flex flex-col md:flex-col xl:flex-col justify-center gap-10">
                    
                    {/* Heading */}
                    <motion.div
                        className="text-left w-full mb-8 xl:mb-0"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-bold text-black text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-tight sm:leading-[48px]">
                            Ideal Use Cases
                        </h2>
                        <p
                            className="text-gray-800 text-base text-[16px] sm:text-[20px] lg:text-[22px] mt-2 leading-[32.64px]"
                            style={{ fontWeight: 400 }}
                        >
                            Our rooftop solar solutions are perfect for diverse applications
                        </p>
                    </motion.div>

                    {/* Use Case Grid */}
                    <div className="w-full flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full xl:max-w-[80%]">
                            {useCases.map((useCase, index) => {
                                const IconComponent = useCase.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center gap-4 bg-[#DAB36980] rounded-lg p-4 backdrop-blur-sm shadow-sm hover:shadow-md transition-transform transform hover:scale-105"
                                        style={{
                                            minHeight: '86.38px',
                                            width: '100%',
                                        }}
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full">
                                            <IconComponent
                                                className="text-[#333]"
                                                style={{ width: '20px' }}
                                            />
                                        </div>
                                        <h3
                                            className="text-[#121212]"
                                            style={{
                                                fontWeight: 400,
                                                fontSize: '16px',
                                            }}
                                        >
                                            {useCase.title}
                                        </h3>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdealUseCases;
