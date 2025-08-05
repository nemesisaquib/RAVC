import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LuEye, LuTarget } from "react-icons/lu";
import { motion } from "framer-motion";

const VisionMission = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <div
      id="vision-mission"
      className="relative bg-cover bg-center bg-no-repeat py-12 px-4 md:px-10 lg:px-18"
      style={{
        backgroundImage: `url('/about/Frame 91.png')`,
        minHeight: "500px",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-80 z-0"></div>

      {/* Top Right Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="hidden md:block absolute right-4 top-4 md:right-10 md:top-10 z-10"
      >
        <img
          src="/about/WhatsApp Image 2025-05-27 at 2.06.00 PM 1.png"
          alt="Top Icon"
          className="w-[70px] h-[70px] md:w-[112.568px] md:h-[114px] object-contain"
        />
      </motion.div>

      {/* Bottom Left Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="hidden md:block absolute left-4 bottom-4 md:left-10 md:bottom-10 z-10"
      >
        <img
          src="/about/WhatsApp Image 2025-05-27 at 2.06.00 PM 2.png"
          alt="Bottom Icon"
          className="w-[60px] h-[70px] md:w-[95.568px] md:h-[114px] object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-black max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold mb-8 text-left"
          style={{ fontFamily: '"Open Sans", sans-serif' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Vision & Mission
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <motion.div
            className="bg-white border border-[#DAB369] rounded-lg shadow-md p-5 md:p-6 flex flex-col justify-between min-h-[288px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-[50px] h-[50px] rounded bg-[#F9D98233] flex items-center justify-center">
                  <LuEye className="text-[#DAB369]" size={24} />
                </div>
                <h3 className="text-[#DAB369] text-[22px] md:text-[24px] font-bold" style={{ fontFamily: '"Open Sans", sans-serif' }}>
                  Vision
                </h3>
              </div>
              <p className="text-[18px] md:text-[22px] leading-[30px] md:leading-[34px]">
                To power India’s sustainable future as one family, delivering unmatched quality and efficiency.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="bg-white border border-[#DAB369] rounded-lg shadow-md p-5 md:p-6 flex flex-col justify-between min-h-[288px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-[50px] h-[50px] rounded bg-[#F9D98233] flex items-center justify-center">
                  <LuTarget className="text-[#DAB369]" size={24} />
                </div>
                <h3 className="text-[#DAB369] text-[22px] md:text-[24px] font-bold" style={{ fontFamily: '"Open Sans", sans-serif' }}>
                  Mission
                </h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[18px] md:text-[22px] leading-[30px] md:leading-[34px]">
                <li>
                  To create Sustainable Development for all by providing professional services and remarkable efficiency across all sectors.
                </li>
                <li>
                  Care and growth for the environment, society, employees, and shareholders.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Divider Line with Logo */}
        <motion.div
          className="flex items-center w-full mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
        >
          <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
          <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-10 w-auto mx-4"
            style={{ width: 40 }}
          />
          <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
          <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionMission;
