import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function Herosection() {
  return (
    <div className="relative w-full h-[422px] px-6 md:px-12 py-10 text-white mt-[116px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/service/Turn Your Rooftop Into a Power Plan.svg')",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-40" />

      {/* Left-Aligned Text Content */}
      <div className="relative z-10 flex flex-col items-start text-left h-full justify-center px-4 sm:px-8 md:px-16">
        <motion.h2
          className="max-w-[950px] text-white font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-[41px] mb-2"
          style={{ fontFamily: '"Open Sans", sans-serif' }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.1}
        >
          Turn Your Rooftop Into a Power Plant
        </motion.h2>

        <motion.p
          className="text-white font-normal text-[18px] mb-2 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.3}
        >
          Harness the sun. Lower your bills. Elevate your energy independence
          <br className="hidden md:block" />
          — with RAVC’s trusted rooftop solar solutions
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mb-1"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.5}
        >
          <Link to={'/contact'}>
            <button className="flex items-center cursor-pointer gap-2 border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <Link to={'/contact'}>
            <button className="flex items-center cursor-pointer gap-2 border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all">
              Get a Free Estimate <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-1 text-sm text-gray-300 flex items-center gap-2"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.7}
        >
          <Link to={'/'}>
            <span className="hover:underline cursor-pointer">Home</span>
          </Link>
          <span>{'>'}</span>
          <Link to={'/solar-rooftop'}>
            <span className="text-[#DAB369] hover:underline cursor-pointer">
              Solar Rooftop
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
