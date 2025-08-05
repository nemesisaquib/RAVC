import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const SolarHero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[419px] text-white mt-[115px]"
      style={{
        backgroundImage: `url('/service/Turn Your Rooftop Into a Power Plan.svg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-40"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center px-4 md:px-8 lg:px-0">
        <div className="ml-0 md:ml-10 lg:ml-[70px] max-w-full lg:w-[800px] h-auto">
          <motion.h1
            className="text-[24px] md:text-[30px] lg:text-[34px] leading-tight font-bold text-white"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.1}
          >
            Sustainability Is Not a Commitment. It’s Our Core Operating Principle.
          </motion.h1>

          <motion.p
            className="mt-4 text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed text-white max-w-full lg:w-[713px]"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.3}
          >
            At RAVC, sustainability isn’t an initiative we run — it’s the foundation we build on. Every project we execute helps reduce emissions, uplift
            <br className="hidden md:block" />
            communities, and power change.
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            className="mt-6 text-sm text-gray-300 flex items-center space-x-2"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.5}
          >
            <Link to={'/'}>
              <span className="hover:underline cursor-pointer">Home</span>
            </Link>
            <span>{'>'}</span>
            <Link to={'/sustainbility'}>
              <span className="text-[#DAB369] hover:underline cursor-pointer">Sustainbility</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolarHero;
