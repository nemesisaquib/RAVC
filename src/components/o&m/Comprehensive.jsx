import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.5, duration: 0.6 },
  },
};

const Comprehensive = () => {
  const points = [
    'Industrial solar installations (1MW–100MW)',
    'Institutional campuses',
    'Rooftop plants (commercial & residential)',
    'Solar farms and microgrids',
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`,
        minHeight: '654px',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FDF2D1] bg-opacity-75 z-0"></div>

      {/* Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="hidden lg:block absolute left-0 top-0 z-30"
      >
        <img
          src="/logo/WhatsApp Image 2025-05-27 at 2.06.00 PM 3.png"
          alt="Decorative Icon"
          className="object-cover bg-transparent h-[144px] w-[130px]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="hidden lg:block absolute right-0 bottom-0 z-30"
      >
        <img
        src="/logo3.svg"
          alt="Decorative Icon"
          className="object-cover bg-transparent h-[144px] w-[130px]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] w-full px-4 py-12 flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Left Content */}
        <div className="w-full md:w-[55%] space-y-4">
          <motion.h1
            className="text-gray-900 font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-[40px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            Comprehensive Solar Plant O&M for <br />Maximum Yield
          </motion.h1>

          <motion.p
            className="text-gray-700 text-[16px] leading-[31.68px] text-justify"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            Operation and Maintenance (O&M) is the backbone of long-term solar performance. At RAVC, we offer tailored, proactive, and responsive O&M services for rooftop and ground-mounted solar projects across India — ensuring maximum uptime, performance stability, and cost control.
          </motion.p>

          <motion.div
            className="space-y-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            {points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 mt-1 flex items-center justify-center rounded-full bg-[#F9D982] text-white">
                  <Check className="w-3 h-3" />
                </div>
                <span
                  className="text-gray-700 text-sm sm:text-base leading-[27.2px]"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {point}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="bg-gray-400 h-[1px]"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-[45%] rounded-lg shadow-lg overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInRight}
        >
          <img
            src="/service/Comprehensive Solar Plant O&M for Maximum Yield.png"
            alt="Solar installation workers on rooftop"
            className="w-full h-auto object-cover rounded-lg"
            style={{ minHeight: '200px', maxHeight: '418px' }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Comprehensive;
