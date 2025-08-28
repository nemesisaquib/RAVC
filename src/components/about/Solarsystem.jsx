import React from 'react';
import { motion } from 'framer-motion';

const SolarEnergyComponent = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div
      className="relative w-full bg-center bg-no-repeat bg-cover flex justify-center items-center px-4 sm:px-6 lg:px-18 py-12"
      style={{
        backgroundImage: `url('/about/Section.png')`,
      }}
    >
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="hidden md:block absolute left-0 top-0 z-30 w-[100px] sm:w-[120px] md:w-[134px]"
      >
        <img
            src="/logo3.svg"
          alt="Heart Icon"
          className="object-contain w-full h-auto"
        />
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="w-full text-white text-left z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Header */}
        <motion.h1
          className="text-[#DAB369] font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-[40px] sm:leading-[50px] lg:leading-[64px] mb-4"
          variants={fadeInUp}
          custom={0}
        >
          Engineering Energy with Purpose
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-white leading-relaxed mb-10"
          variants={fadeInUp}
          custom={1}
        >
          Today, RAVC stands as a trusted solar infrastructure partner — delivering innovation-driven services
          to residential, industrial, institutional, and government clients. We specialize in
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {[
            { title: 'EPC Development', detail: 'Ensuring Performance Optimization and reduce operational cost for better ROI.' },
            { title: 'IPP', detail: 'Identify energy-saving opportunities and improve efficiency across systems.' },
            { title: 'Rooftop Solar Installations', detail: 'Empowering Buildings To Become Energy Producers, Not Just Consumers.' },
            { title: 'Operation & Maintenance\n(O&M)', detail: 'Focusing on precision, quality, and performance using cutting edge technologies.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white bg-opacity-90 rounded-lg p-6 text-gray-800 shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={idx + 2}
            >
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#DAB369] mb-2 whitespace-pre-line">
                {item.title}
              </h3>
              <p className="text-[15px] sm:text-[16px] text-gray-700 whitespace-pre-line">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          className="text-[15px] sm:text-[16px] md:text-[18px] text-gray-100 leading-relaxed"
          variants={fadeInUp}
          custom={7}
        >
          Every project we undertake is powered by engineering precision, policy alignment, and an unwavering
          focus on quality and performance.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SolarEnergyComponent;
