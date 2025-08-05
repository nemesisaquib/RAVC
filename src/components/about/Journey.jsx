import React from 'react';
import { motion } from 'framer-motion';

export default function Journey() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#FADE8B]/40 py-10 lg:py-0 xl:py-12 px-4 md:px-8 lg:px-0">
      <div className="max-w-screen-3xl mx-auto ml-0 md:ml-10 lg:ml-[70px] flex flex-col gap-10 relative">

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="hidden md:block absolute right-4 bottom-4 sm:right-6 sm:bottom-6 lg:right-0 lg:bottom-0 z-30"
        >
          <img
            src="/about/WhatsApp Image 2025-05-27 at 2.06.00 PM 1.svg"
            alt="Heart Icon"
            className="object-cover bg-transparent w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] lg:w-[184px] lg:h-[180px]"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="relative z-10 w-full text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <h2
            className="text-gray-800 font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] mb-4 sm:mb-6"
            style={{ lineHeight: '1.2' }}
          >
            From Grit to Growth: The RAVC Journey
          </h2>

          <motion.p
            className="text-[#121212] font-[400] text-[16px] sm:text-[17px] lg:text-[18px] leading-[28px] sm:leading-[32px] lg:leading-[34px] mb-4"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            RAVC Solutions Pvt Ltd began its journey in 2019 with a bold ambition — to lead India’s renewable energy transformation through reliable, intelligent, and scalable solar solutions. Officially incorporated in 2021 and headquartered in Lucknow, we’ve grown from a small-scale service provider into a nationally active force in solar EPC, rooftop solutions, O&M, and consulting.
          </motion.p>

          <motion.p
            className="text-[#121212] font-[400] text-[16px] sm:text-[17px] lg:text-[18px] leading-[28px] sm:leading-[32px] lg:leading-[34px]"
            variants={fadeInUp}
            transition={{ delay: 0.4 }}
          >
            We entered the industry when the world was transitioning, and RAVC embraced that change — not just as a business opportunity, but as a national responsibility. Our foundation was built during tough times, making us more resilient, agile, and focused on long-term impact.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
