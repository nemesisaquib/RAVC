import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const GrowthImpactSection = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-8 py-12 text-black"
      style={{
        backgroundImage: `url('/your-background-image.jpg')`,
        minHeight: '508px',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      {/* Top-right Icon */}
      <div className="hidden md:block absolute right-4 sm:right-6 lg:right-10 top-5 z-30">
        <img
          src="/logo3.svg"
          alt="Decorative Icon"
          className="object-cover bg-transparent h-[100px] sm:h-[120px] md:h-[144px] w-auto"
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto flex flex-col justify-center h-full space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Heading */}
        <motion.h2
          className="font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-snug lg:leading-tight text-[#DAB369] tracking-normal  max-w-full sm:max-w-[753px]"
          variants={fadeUp}
          custom={0}
        >
          Our Next Chapter: Growth with Impact.
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-[16px] sm:text-[20px] lg:text-[22px] leading-relaxed font-normal  max-w-full sm:max-w-[826px]"
          variants={fadeUp}
          custom={1}
        >
          In the next phase of our journey, RAVC is preparing to scale services into:
        </motion.p>

        {/* List */}
        <motion.ul
          className="space-y-3 my-6 max-w-full sm:max-w-[1300px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            'To develop 1GW IPP project by 2028',
            'Decentralized power access in Tier II & III towns',
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3 text-[16px] sm:text-[18px] border-b border-gray-300 pb-2"
              variants={fadeUp}
              custom={index + 2}
            >
              <span className="inline-block w-5 h-5 bg-[#F9D982] text-white rounded-sm text-center text-sm font-bold">
                ✓
              </span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Quote Section */}
        <motion.div
          className="relative flex flex-col items-center justify-center mt-10 px-2 sm:px-6"
          variants={fadeUp}
          custom={4}
        >
          {/* Opening Quote Icon */}
          <img
            src="/home/Quote Symbol.svg"
            alt="Opening Quote"
            className="absolute left-[-20px] top-[-10px] w-10 h-6"
          />

          {/* Quote Text */}
          <p
            className="text-transparent mr-2 w-full bg-clip-text text-center font-bold italic uppercase leading-tight tracking-tight"
            style={{
              backgroundImage:
                'linear-gradient(105deg, #F9D982 -28.81%, #C4AA5C 21.74%, #ECBC6D 109.67%)',
              fontFamily: '"Open Sans", sans-serif',
              fontSize: '34.105px',
              fontStyle: 'italic',
            }}
          >
           Powering India’s sustainable future through unmatched quality, efficiency, and care for the environment, society, employees, and shareholders.
          </p>

          {/* Closing Quote Icon */}
          <img
            src="/home/Quote Symbol.svg"
            alt="Closing Quote"
            className="absolute right-[-10px] bottom-0 w-10 h-6"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GrowthImpactSection;
