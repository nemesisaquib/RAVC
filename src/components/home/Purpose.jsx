import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Modern animation variants
const fadeUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const HeroSection = () => {
  return (
    <motion.div 
      className="relative w-full md:h-auto flex-shrink-0 mt-22 mb-10 pt-[40px] md:pt-[60px] min-h-[70vh] md:min-h-[85vh] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {/* Modern Background with subtle gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #fdf2d2 0%, #fef8e8 80%, white 100%)"
        }}
      />
      
      {/* Subtle grain texture for modern look */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[length:200px_200px] bg-[image:repeating-linear-gradient(45deg,#000000_0px,#000000_1px,transparent_1px,transparent_11px)]" />

      {/* Content */}
      <div className="flex items-center flex-col relative gap-8 md:gap-12 w-full z-10 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-32">
        {/* Main Content */}
        <motion.div 
          className="flex flex-col justify-center items-center w-full gap-8 md:gap-12 max-w-7xl"
          variants={staggerContainer}
        >
          {/* Heading with modern typography */}
          <motion.div 
            className="text-center space-y-4 md:space-y-6"
            variants={scaleIn}
          >
            <motion.h1
              className="font-bold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.1] md:leading-[1.05] tracking-tight text-[#2a2a2a]"
              variants={fadeUp}
              custom={0}
            >
              <span className="block">HARNESSING INNOVATIVE</span>
              <span className="block">SOLUTIONS, POWERING</span>
              <motion.span 
                className="block bg-gradient-to-r from-[#DAB369] to-[#F9D982] bg-clip-text text-transparent"
                variants={fadeUp}
                custom={1}
              >
                VIKSIT BHARAT ENERGY NEEDS
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Text and CTA Section */}
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 w-full"
            variants={fadeUp}
            custom={2}
          >
            {/* Modern paragraph with better typography */}
            <motion.p
              className="text-[17px] sm:text-[18px] md:text-[20px] lg:text-[21px] text-center lg:text-left leading-[1.7] md:leading-[1.8] text-gray-700 flex-1 max-w-3xl font-light"
              variants={fadeUp}
              custom={2}
            >
              We are not just enabling Renewable Energy infrastructure, but 
              enabling <strong className="font-semibold text-gray-900">energy security</strong> and 
              <strong className="font-semibold text-gray-900"> sustainable models</strong> for communities across India.
            </motion.p>
            
            {/* Modern CTA Button */}
            <motion.div 
              className="flex justify-center lg:justify-end w-full lg:w-auto"
              variants={fadeUp}
              custom={3}
            >
              <Link
                to={{ pathname: "/about", hash: "#vision-mission" }}
                className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-4 md:px-12 md:py-5 gap-3 font-semibold text-white rounded-2xl bg-gradient-to-r from-[#DAB369] to-[#F9D982] hover:from-[#c9a257] hover:to-[#e8c870] transition-all duration-500 text-[16px] sm:text-[17px] md:text-[18px] whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                <span className="relative">Explore Our Vision</span>
                <FaArrowRight className="w-4 h-4 relative transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Modern Image Container */}
        <motion.div 
          className="w-full flex justify-center mt-8 md:mt-12"
          variants={fadeUp}
          custom={4}
        >
          <div className="relative w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%]">
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent rounded-3xl z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
            <motion.img
              src="/home/Rectangle.svg"
              alt="Solar Panels"
              className="w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl relative z-0"
              initial={{ 
                opacity: 0,
                y: 40,
                scale: 1.05 
              }}
              whileInView={{ 
                opacity: 1,
                y: 0,
                scale: 1 
              }}
              transition={{ 
                delay: 1,
                duration: 1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;