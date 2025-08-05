import React from 'react';
import { motion } from 'framer-motion';

const GrowthGroundComponent = () => {
  const features = [
    {
      title: 'Internal Technical Training & Certifications',
      icon: (
        <path
          fillRule="evenodd"
          d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 2a1 1 0 100 2h2a1 1 0 100-2h-2z"
          clipRule="evenodd"
        />
      )
    },
    {
      title: 'Annual Upskilling Bootcamps',
      icon: (
        <path
          fillRule="evenodd"
          d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
          clipRule="evenodd"
        />
      )
    },
    {
      title: 'Worksite Leadership Pathways',
      icon: (
        <path
          fillRule="evenodd"
          d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"
          clipRule="evenodd"
        />
      )
    },
    {
      title: 'Bonus & Reward Program Linked to Execution Milestones',
      icon: (
        <path
          fillRule="evenodd"
          d="M10 2a4 4 0 100 8 4 4 0 000-8zM2 14s2-2 8-2 8 2 8 2v2H2v-2z"
          clipRule="evenodd"
        />
      )
    },
    {
      title: 'Women in Solar Initiative',
      icon: (
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745A3.066 3.066 0 016.267 3.455z"
          clipRule="evenodd"
        />
      )
    },
  ];

  return (
    <div className="relative bg-gray-50 px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Side Logos */}
      <img src="/logo3.svg" alt="Left" className="absolute left-6 top-1/2 -translate-y-1/2 w-[120px] hidden sm:block" />
      <img src="/logo3.svg" alt="Right" className="absolute right-6 top-1/2 -translate-y-1/2 w-[120px] hidden sm:block" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center mb-12 px-2"
      >
        <h1 className="text-[28px] sm:text-[30px] md:text-[34px] font-semibold text-[#333333] mb-6">
          More Than a Workplace — A Growth Ground
        </h1>
        <p className="text-[16px] sm:text-[17px] md:text-[18px] font-normal text-[#121212] max-w-2xl mx-auto">
          We believe in building careers, not just fulfilling roles. Our internal programs support
          continuous upskilling, leadership exposure, and on-ground learning.
        </p>
      </motion.div>

      {/* Feature Cards with Stagger */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg border border-[#EEEEEE] shadow-md flex flex-col items-center text-center p-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-12 h-12 text-[#DAB369]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {item.icon}
              </svg>
            </div>
            <h3 className="text-[16px] text-[#333333]">{item.title}</h3>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="mt-8 px-6 sm:px-8 py-3 sm:py-4 cursor-pointer rounded-md border-2 border-[#121212] text-center text-sm sm:text-base"
      >
        Meet Our People – Employee Stories Coming Soon
      </motion.button>
    </div>
  );
};

export default GrowthGroundComponent;
