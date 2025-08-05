import React from 'react';
import {
  FaHome,
  FaIndustry,
  FaSolarPanel,
  FaUniversity,
  FaLandmark,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// Animation variant for cards
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

const ApplicablePlantTypes = () => {
  const plantTypes = [
    {
      icon: <FaHome className="text-2xl text-black" />,
      title: 'Rooftop solar plants (5kW–1MW)',
    },
    {
      icon: <FaIndustry className="text-2xl text-black" />,
      title: 'Industrial captive solar systems',
    },
    {
      icon: <FaSolarPanel className="text-2xl text-black" />,
      title: 'Solar farms (1MW–100MW)',
    },
    {
      icon: <FaUniversity className="text-2xl text-black" />,
      title: 'Institutional multi-building clusters',
    },
    {
      icon: <FaLandmark className="text-2xl text-black" />,
      title: 'Government tendered projects',
    },
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat py-8 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/Section BG.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-semibold text-[#000000] mb-2 lg:mb-4">
            Applicable Plant Types
          </h2>
          <p className="text-[#121212] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal mb-6 max-w-3xl">
            We maintain all types and sizes of solar installations
          </p>
        </motion.div>

        {/* Grid with animated cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-3 md:gap-4 lg:gap-6">
          {plantTypes.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full max-w-[280px] sm:max-w-[230px] h-auto rounded-lg bg-white border border-[#DAB369] flex items-center gap-3 px-4 py-3"
            >
              <div className="text-[24px] flex-shrink-0">{item.icon}</div>
              <p className="text-[#000000] text-sm sm:text-base font-semibold leading-tight">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicablePlantTypes;
