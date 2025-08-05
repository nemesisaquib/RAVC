import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaHome,
  FaIndustry,
  FaSolarPanel,
  FaUniversity,
  FaLandmark,
} from 'react-icons/fa';

const plantTypes = [
  {
    icon: <FaHome className="text-2xl text-black" />,
    title: 'Project technical dossiers',
  },
  {
    icon: <FaIndustry className="text-2xl text-black" />,
    title: 'Grid synchronization approvals',
  },
  {
    icon: <FaSolarPanel className="text-2xl text-black" />,
    title: 'CEIG & DISCOM liaisoning',
  },
  {
    icon: <FaUniversity className="text-2xl text-black" />,
    title: 'Subsidy claim documentation (central/state)',
  },
  {
    icon: <FaLandmark className="text-2xl text-black" />,
    title: 'AMC & performance warranty structuring',
  },
];

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

const Documentation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat py-8 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/Section BG.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      ref={ref}
    >
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Heading */}
        <motion.h2
          className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#000000] mb-2 lg:mb-4"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Documentation & Compliance <br /> Support
        </motion.h2>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-3 md:gap-4 lg:gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {plantTypes.map((item, index) => (
            <motion.div
              key={index}
              className="w-full max-w-[280px] sm:max-w-[230px] h-auto rounded-lg bg-white border border-[#DAB369] flex items-center gap-3 px-4 py-3"
              variants={fadeInUp}
            >
              <div className="text-[24px] flex-shrink-0">{item.icon}</div>
              <p className="text-[#000000] text-sm sm:text-base font-semibold leading-tight">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Documentation;
