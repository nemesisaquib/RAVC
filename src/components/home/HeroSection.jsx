import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const HeroSection = () => {
  return (
    <div className="flex items-center flex-col relative gap-4 w-full md:h-auto flex-shrink-0 mt-22 pt-[50px] bg-[#fdf2d2] min-h-[80vh] pb-[200px] md:pb-0">
      {/* Background Image */}

      {/* Overlay Content */}
      <div className="gap-4 flex flex-col justify-center items-start px-4 sm:px-8 md:px-20 lg:px-32 text-white w-full z-10 relative">
        <motion.h1
          className="uppercase font-open-sans font-bold text-[24px] sm:text-[30px] text-center leading-tight text-[#F9D982] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          HARNESSING INNOVATIVE SOLUTIONS POWERING VIKSIT BHARAT ENERGY NEEDS
        </motion.h1>
        
        {/* Changed to flex-col for mobile, flex-row for larger screens */}
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-4 w-full">
          <motion.p
            className="mt-4 text-[16px] sm:text-[18px] text-center  leading-[1.6] text-black flex-1 font-semibold "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            We are not just enabling Renewable Energy infrastructure, but
            enabling energy security and sustainable models for communities
            across India.
          </motion.p>
          <Link
            to={{ pathname: "/about", hash: "#vision-mission" }}
            className="inline-flex px-6 py-3 justify-center items-center gap-2 border border-[#DAB369] text-white font-medium rounded-xl bg-[#DAB369] hover:text-black transition text-sm md:text-base mt-4 lg:mt-0 z-20 relative"
          >
            Explore Our Vision <FaArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
      
      {/* Image at the bottom with proper z-index */}
      <img
        src="/home/Rectangle.webp"
        alt="Solar Panels"
        className="w-[85%] h-[300px] sm:h-[400px] bottom-0 object-cover rounded-3xl absolute z-0"
      />
    </div>
  );
};

export default HeroSection;