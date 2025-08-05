import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: 'easeOut',
    },
  }),
};

const SolarHero = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[419px] text-white mt-[115px]"
      style={{
        backgroundImage: `url('/about/bgg.svg')`,
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
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.1}
          >
            Powering Progress.
            <br />
            Engineering Sustainability.
          </motion.h1>

          <motion.p
            className="mt-4 text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed text-white max-w-full lg:w-[713px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.3}
          >
            We are not just building solar infrastructure — we are designing a better tomorrow
            for communities, industries, and the planet.
          </motion.p>

          {/* Breadcrumb */}
          <motion.div
            className="mt-6 text-sm text-gray-300 flex items-center space-x-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0.5}
          >
            <Link to={'/'}>
              <span className="hover:underline cursor-pointer">Home</span>
            </Link>
            <span>{'>'}</span>
            <Link to={'/about'}>
              <span className="text-[#DAB369] hover:underline cursor-pointer">About Us</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolarHero;
