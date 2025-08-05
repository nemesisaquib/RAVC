import { ArrowRight } from 'lucide-react';
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

const Herosection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[419px] text-white mt-[115px]"
      style={{
        backgroundImage: `url('/service/Ensuring Your Solar Assets Perform — Day After Day.svg')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-40"></div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center px-4 md:px-8 lg:px-0">
        <div className="ml-0 md:ml-10 lg:ml-[70px] max-w-full lg:w-[1000px] h-auto">

          <motion.h1
            className="text-[24px] md:text-[30px] lg:text-[34px] leading-tight font-bold text-white"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.1}
          >
            From Concept to Commissioning — We Build Solar That Performs
          </motion.h1>

          <motion.p
            className="mt-4 text-[16px] md:text-[20px] lg:text-[22px] leading-relaxed text-white w-full"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.3}
          >
            RAVC delivers turnkey EPC projects from 1MW to 100MW+ — blending precision engineering, optimized
            procurement, and seamless construction for maximum plant efficiency.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 my-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.5}
          >
            <Link to={'/contact'}>
              <button className="flex items-center gap-2 cursor-pointer border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link to={'/contact'}>
              <button className="flex items-center gap-2 cursor-pointer border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all">
                Get a Free Estimate <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>

          {/* Breadcrumb */}
          <motion.div
            className="mt-6 text-sm text-gray-300 flex items-center space-x-2"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.7}
          >
            <Link to={'/'}>
              <span className="hover:underline cursor-pointer">Home</span>
            </Link>
            <span>{'>'}</span>
            <Link to={'/epc-development'}>
              <span className="text-[#DAB369] hover:underline cursor-pointer">ECP-Development</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Herosection;
