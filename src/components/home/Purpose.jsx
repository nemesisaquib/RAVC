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
      className="relative w-full flex-shrink-0 mt-22 mb-10 pt-[80px] md:pt-[100px] min-h-[85vh] md:min-h-[95vh] overflow-hidden bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerContainer}
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50/30" />
        
        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[length:100px_100px] bg-[image:repeating-linear-gradient(45deg,#1a1a1a_0px,#1a1a1a_1px,transparent_1px,transparent_11px)]" />
        
        {/* Light accent */}
        <div className="absolute top-1/4 -right-10 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-10 w-80 h-80 bg-blue-200/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="flex items-center flex-col relative gap-12 md:gap-4 w-full z-10 px-6 sm:px-8 md:px-12 lg:px-24 xl:px-32">
        {/* Main Content */}
        <motion.div 
          className="flex flex-col justify-center items-center w-full gap-12 md:gap-20 max-w-7xl"
          variants={staggerContainer}
        >
          {/* Elegant Heading */}
          <motion.div 
            className="text-center space-y-8 md:space-y-12"
            variants={scaleIn}
          >
            <motion.h1
              className="font-light text-5xl sm:text-6xl md:text-7xl lg:text-7xl leading-[1.05] tracking-tight text-slate-900"
              variants={fadeUp}
              custom={0}
            >
              <span className="block font-medium">HARNESSING INNOVATIVE SOLUTIONS</span>
              <motion.span 
                className="block font-semibold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 bg-clip-text text-transparent mt-4"
                variants={fadeUp}
                custom={1}
              >
                POWERING VIKSIT BHARAT
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Refined Text and CTA Section */}
          <motion.div 
            className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 w-full"
            variants={fadeUp}
            custom={2}
          >
            {/* Sophisticated Paragraph */}
            <motion.div
              className="text-center lg:text-left flex-1 max-w-2xl"
              variants={fadeUp}
              custom={2}
            >
              <p className="text-xl md:text-2xl leading-[1.8] text-slate-700 font-light mb-6">
               We are not just enabling Renewable Energy infrastructure, but enabling energy security and sustainable models for communities across India.
              </p>
             
            </motion.div>
            
            {/* Premium CTA Button */}
            <motion.div 
              className="flex justify-center lg:justify-end w-full lg:w-auto"
              variants={fadeUp}
              custom={3}
            >
              <Link
                to={{ pathname: "/about", hash: "#vision-mission" }}
                className="group relative inline-flex items-center justify-center px-10 py-5 md:px-12 md:py-6 gap-4 font-medium text-white rounded-2xl bg-slate-900 hover:bg-slate-800 transition-all duration-500 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 border border-slate-700 overflow-hidden"
              >
                {/* Elegant hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="relative z-10">Discover Our Vision</span>
                <FaArrowRight className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Premium Image Container */}
        <motion.div 
          className="w-full flex justify-center mt-16 md:mt-20"
          variants={fadeUp}
          custom={4}
        >
          <div className="relative w-full max-w-6xl">
            {/* Image Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50">
              <motion.img
                src="/home/Rectangle.webp"
                alt="Advanced Renewable Energy Infrastructure"
                className="w-full h-[350px] sm:h-[420px] md:h-[520px] lg:h-[600px] object-cover"
                initial={{ 
                  opacity: 0,
                  scale: 1.05,
                }}
                whileInView={{ 
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ 
                  delay: 0.4,
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true }}
              />
              
              {/* Professional Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/10" />
              
              {/* Subtle Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-white/20 pointer-events-none" />
            </div>
            
            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-slate-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">50+</div>
                <div className="text-sm text-slate-600 font-medium">Projects</div>
                <div className="text-xs text-slate-500 mt-1">Nationwide</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="flex flex-col items-center text-slate-400">
          <span className="text-sm font-light mb-3 tracking-wide">SCROLL TO EXPLORE</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-amber-500 to-transparent"
            animate={{ 
              height: ["0%", "100%", "0%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
export default HeroSection;