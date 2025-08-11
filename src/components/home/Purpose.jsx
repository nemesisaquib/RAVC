import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Purpose() {
  return (
    <div className="relative overflow-hidden bg-[#FADE8B]/40 min-h-[457px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Floating Logos */}
      <div className="hidden md:block absolute top-[25%] left-0 z-30 w-[60px] sm:w-[80px]">
        <img src="/logo2.svg" alt="Logo" className="w-full h-auto" />
      </div>
      <div className="hidden md:block absolute top-4 right-0 z-30 w-[60px] sm:w-[80px]">
        <img src="/logo2.1.svg" alt="Heart Icon" className="w-full h-auto" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center max-w-[1333px] mx-auto py-12 sm:py-16 lg:py-20">

        {/* Heading and Paragraph */}
        <motion.div
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-medium capitalize leading-tight text-gray-800">
            Built With Purpose. Driven By Impact.
          </h1>

          <p className="text-[16px] sm:text-[18px] lg:text-[22px] font-normal leading-[28px] sm:leading-[32px] lg:leading-[34px] text-gray-700 capitalize px-2 sm:px-6 lg:px-10">
            Every Solution we provide is a step towards a Self-Sufficient Vikasit Bharat. <br /> We are commited towards the World powered by Clean, Sustainable and Renewable Energy.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          className="relative flex items-center justify-center mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="/home/Quote Symbol.svg"
            alt="Opening Quote"
            className="absolute left-0 sm:left-[-35px] top-[-5px] w-[30px] sm:w-[44px] h-auto"
          />
          <p
            className="text-transparent mr-2 w-full bg-clip-text text-center font-bold italic uppercase leading-tight tracking-tight"
            style={{
              backgroundImage: 'linear-gradient(105deg, #F9D982 -28.81%, #C4AA5C 21.74%, #ECBC6D 109.67%)',
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '34.105px',
              fontStyle: 'italic',
            }}
          >
            OUR WORK IS TRANSITIONING INDIA TO INNOVATIVE AND CLEAN ENERGY
          </p>
          <img
            src="/home/Quote Symbol.svg"
            alt="Closing Quote"
            className="absolute right-0 sm:right-[-30px] bottom-[-5px] w-[30px] sm:w-[44px] h-auto"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to={'/about'}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 border-2 border-black text-black px-6 sm:px-8 py-2 rounded-2xl text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer

"
            >
              Learn More About Us
              <svg
                className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1  duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
