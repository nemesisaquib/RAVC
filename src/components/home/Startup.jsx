import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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

export default function Startup() {
  return (
    <div className="bg-[#DAB369] flex justify-center items-center py-10 px-4">
      <motion.div
        className="bg-white rounded-lg flex flex-col-reverse lg:flex-row overflow-hidden w-full max-w-[1333px] min-h-[720px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center p-4 sm:p-4 md:p-10">
          <motion.h1
            className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#DAB369] leading-tight mb-4"
            variants={fadeUp}
            custom={0}
          >
            From Start-Up Spirit to<br />
            National Scale
          </motion.h1>

          <motion.p
            className="text-[#121212] text-left text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] font-[400] mb-8 max-w-3xl"
            variants={fadeUp}
            custom={1}
          >
            Founded in 2019 and incorporated in 2021, RAVC has grown
            from an idea into an ecosystem. We've faced industry
            headwinds, evolved through learning, and emerged stronger — 
            with one goal: To scale solar adoption nationwide and make
            renewable energy universally accessible.
          </motion.p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8">
            {[
              {
                number: '250+',
                text: 'MW of Solar infrastructure touched',
              },
              {
                number: '26+',
                text: 'Pan-India execution\nfootprint',
              },
              {
                number: '2028',
                text: 'To develop 1GW IPP Project',
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex-1 border border-gray-300 rounded-[6px] flex flex-col justify-center items-center text-center p-4 min-w-[180px] h-[160px]"
                variants={fadeUp}
                custom={index + 2}
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#DAB369] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#DAB369] font-semibold text-sm sm:text-base whitespace-pre-line leading-relaxed">
                  {stat.text}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
           <Link to={'/Contact'}>         
          <motion.button
            className="flex items-center space-x-2 border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg hover:bg-black hover:text-white cursor-pointer transition-all duration-300 font-medium w-fit"
            variants={fadeUp}
            custom={5}
          >
            <span>Know More</span>
            <ChevronRight size={18} />
          </motion.button>
          </Link>
        </div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-[590px] p-4 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            src="/home/Image Container.png"
            alt="Solar Energy"
            className="w-full h-full object-cover rounded-lg max-h-[680px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
