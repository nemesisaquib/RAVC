import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: "easeOut",
    },
  }),
};

export default function SolarHero() {
  return (
    <div className="relative w-full h-[422px] px-6 md:px-12 py-10 text-white mt-[116px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/current/Section (2).svg')",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-40" />

      {/* Left-Aligned Text Content */}
      <div className="relative z-10 flex flex-col items-start text-left h-full justify-center px-4 sm:px-8 md:px-16">

        <motion.h2
          className="max-w-[950px] text-white font-bold text-[24px] sm:text-[28px] md:text-[30px] lg:text-[34px] leading-[41px] mb-4"
          style={{
            fontFamily: '"Open Sans", sans-serif',
          }}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.1}
        >
          Join Us in Powering India’s Clean Energy Future
        </motion.h2>

        <motion.p
          className="text-white font-normal text-[14px] sm:text-[14px] md:text-[16px] lg:text-[18px] mb-6 max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.3}
        >
          At RAVC, your work doesn’t just build solar infrastructure — it builds a better world.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.5}
        >
          <a href="#option">
            <button className="flex items-center cursor-pointer gap-2 border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all">
              View Open Positions <ArrowRight className="w-4 h-4" />
            </button>
          </a>
        </motion.div>

        <motion.div
          className="mt-4 text-sm text-gray-300 flex items-center gap-2"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0.7}
        >
          <Link to={"/"}>
            <span className="hover:underline cursor-pointer">Home</span>
          </Link>
          <span>{">"}</span>
          <Link to={"/career"}>
            <span className="text-[#DAB369] hover:underline cursor-pointer">Career</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
