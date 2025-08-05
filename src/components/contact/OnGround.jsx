import React, { useRef } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function OnGround() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const locations = [
    { state: 'Uttar Pradesh (HQ)', cities: 'Lucknow, Kanpur' },
    { state: 'Rajasthan', cities: 'Jaipur, Bikaner' },
    { state: 'Bihar', cities: 'Patna' },
    { state: 'Madhya Pradesh', cities: 'Bhopal (coming soon)' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center" ref={ref}>
        {/* Title */}
        <motion.h2
          className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-semibold text-gray-900 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          On-Ground Support Where You Need It
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center mb-10">
          {locations.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-center flex flex-col items-center"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <MapPin className="text-[#DAB369] mb-2" size={24} />
              <h3 className="text-[17px] font-semibold text-[#DAB369]">{item.state}</h3>
              <p className="text-gray-600 text-[14px] mt-1">{item.cities}</p>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#contact">
            <button className="bg-[#DAB369] hover:bg-[#c59c47] text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition cursor-pointer">
              <Calendar size={18} />
              Schedule a Site Visit
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
