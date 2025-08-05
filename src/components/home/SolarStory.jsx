import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function SolarStory() {
  return (
    <div className="relative flex items-center justify-center h-[400px] bg-[#FADE8B]/40 overflow-hidden">

      {/* Left Icon */}
      <div className="hidden md:block absolute left-[-120px] top-40 z-30">
        <motion.img
          src="/logo3.svg"
          alt="Heart Icon"
          className="object-cover bg-transparent w-[291px] h-[256px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Right Icon */}
      <div className="absolute right-0 top-0 z-30">
        <motion.img
          src="/logo/logo3.1.svg"
          alt="Decorative Icon"
          className="object-cover bg-transparent"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>

      {/* Main Content */}
      <div className="text-center px-8">
        <motion.h2
          className="text-gray-800 font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-tight mb-8"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            lineHeight: '1.2',
          }}
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={0}
          viewport={{ once: true }}
        >
          The Government of India is aiming to achieve net-zero emissions by 2070 and generate 50% of its electricity from non-fossil fuels by 2030.
        </motion.h2>

        <motion.a
          href="https://mnre.gov.in/en/solar-overview/"
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          custom={1}
          viewport={{ once: true }}
        >
          <button
            className="flex items-center sm:text-[14px] md:text-[16px] lg:text-[16px] cursor-pointer justify-center gap-[1px] border border-[#DAB369] transition-all duration-300 transform shadow-lg hover:shadow-xl mx-auto"
            style={{
              height: '50px',
              padding: '6px 12px',
              background: '#DAB369',
              borderRadius: '16px',
              borderWidth: '1px',
              color: '#fff',
              fontWeight: 600,
            }}
          >
            <span>Explore India's Solar Story</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.a>
      </div>
    </div>
  );
}
