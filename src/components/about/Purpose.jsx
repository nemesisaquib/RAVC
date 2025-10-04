import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const fadeFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

export default function Purpose() {
  return (
    <div className="relative overflow-hidden bg-[#FADE8B]/40 h-auto">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      {/* Left Image */}
      <motion.div
        className="hidden md:block absolute top-[20%] left-1 z-30 w-[100px] sm:w-[140px] lg:w-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeFromLeft}
      >
        <img src="/logo3.svg" className="object-cover bg-transparent" alt="" />
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="hidden md:block absolute right-0 top-0 z-30 w-[100px] sm:w-[140px] lg:w-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeFromRight}
      >
        <img
          src="/logo3.svg"
          alt="Heart Icon"
          className="object-cover bg-transparent"
        />
      </motion.div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center py-10 lg:py-12 h-auto">
        <div className="w-full max-w-[1440px] flex flex-col items-center justify-center gap-6 px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#1f2937] leading-[1.4] max-w-[816px] text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Led by Technocrats. Driven by Innovation.
          </motion.h1>

          <motion.p
            className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[28px] sm:leading-[32px] lg:leading-[34px] text-[#374151] font-[400] font-['Open_Sans'] max-w-[1333px] text-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            At RAVC, Leadership isn't about titles — it's about values. Our Team
            comprises technocrats with deep industry experience, hands-on
            problem-solving ability, and an unshakeable belief in India's energy
            potential.
          </motion.p>
        </div>

        {/* Quote Section */}
        <motion.div
          className="relative flex flex-col items-center justify-center mt-8 px-4 sm:px-6 lg:px-8 w-full max-w-[1121px]"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Opening Quote Icon */}
          <img
            src="/home/Quote Symbol.svg"
            alt="Opening Quote"
            className="hidden md:block absolute -left-4 sm:-left-6 top-[-10px] w-[24px] sm:w-[34px] lg:w-[44px]"
          />

          <p
            className="text-transparent w-full bg-clip-text text-center font-bold italic uppercase leading-tight tracking-tight text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[34px] px-4"
            style={{
              backgroundImage:
                "linear-gradient(105deg, #F9D982 -28.81%, #C4AA5C 21.74%, #ECBC6D 109.67%)",
              fontFamily: '"Open Sans", sans-serif',
              fontStyle: "italic",
            }}
          >
            We inspire our people to work towards a greater purpose of serving
            our country and the world, ensuring that even the smallest
            innovation can deliver extraordinary outcomes for our clients.
          </p>

          {/* Closing Quote Icon */}
          <img
            src="/home/Quote Symbol.svg"
            alt="Closing Quote"
            className="hidden md:block absolute -right-4 sm:-right-6 bottom-0 w-[24px] sm:w-[34px] lg:w-[44px]"
          />
        </motion.div>

        {/* Team Image - Fixed with proper sizing */}
        <motion.div 
          className="mt-8 lg:mt-12 w-full max-w-[1200px] px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img 
            src="/about/team.webp" 
            alt="RAVC Team"
            className="w-full h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[600px] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}