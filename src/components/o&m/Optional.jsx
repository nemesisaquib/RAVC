import React, { useRef } from 'react';
import { 
  MdComputer, 
  MdDashboard, 
  MdAutoGraph, 
  MdWaterDrop 
} from 'react-icons/md';
import { motion, useInView } from 'framer-motion';

const Optional = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const addOns = [
    {
      icon: <MdComputer className="w-8 h-8 text-[#DAB369]" />,
      title: "Drone-Based Inspection",
      description: "Aerial thermal imaging for large plants"
    },
    {
      icon: <MdDashboard className="w-8 h-8 text-[#DAB369]" />,
      title: "Live Energy Dashboard",
      description: "Custom display for facility managers"
    },
    {
      icon: <MdAutoGraph className="w-8 h-8 text-[#DAB369]" />,
      title: "AI Yield Forecasting",
      description: "Predictive analytics for energy production"
    },
    {
      icon: <MdWaterDrop className="w-8 h-8 text-[#DAB369]" />,
      title: "Waterless Cleaning",
      description: "For water-scarce regions (ground-mount)"
    }
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[435px] py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/service/Section (1).svg')",
        boxShadow: "0px 4px 4px 0px #CACACA40",
      }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-left">
          <h2 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-white mb-4">
            Optional Add-Ons
          </h2>
          <p className="text-white text-[18px]">
            Enhance your O&M package with these premium services
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {addOns.map((addon, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-left"
              variants={fadeUp}
            >
              <div className="mb-4">{addon.icon}</div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-3">
                {addon.title}
              </h3>
              <p className="text-gray-600 text-[16px] leading-relaxed">
                {addon.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Optional;
