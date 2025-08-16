import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaMoneyBillWave,
  FaLeaf,
  FaBolt,
  FaBatteryFull,
  FaTools,
} from "react-icons/fa";

const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const row1 = [
    {
      icon: <FaMoneyBillWave className="text-3xl text-black" />,
      title: "Cost Saving",
      desc: "Reduce electricity bills with grid-tied or hybrid systems",
    },
    {
      icon: <FaLeaf className="text-3xl text-black" />,
      title: "Eco-Friendly",
      desc: "Cut your carbon footprint by up to 70% annually",
    },
    {
      icon: <FaBolt className="text-3xl text-black" />,
      title: "Quick ROI",
      desc: "Payback periods as low as 3–5 years",
    },
  ];

  const row2 = [
    {
      icon: <FaBatteryFull className="text-3xl text-black" />,
      title: "Grid Independence",
      desc: "Optional battery storage for energy security",
    },
    {
      icon: <FaTools className="text-3xl text-black" />,
      title: "Custom Engineering",
      desc: "Solutions tailored to your rooftop size and usage",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/your-background-image.png')",
        minHeight: "565px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 4px 0px #CACACA40",
      }}
      ref={ref}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Decorative Images */}
      <div className="hidden md:block absolute right-0 bottom-0 z-30">
        <img
          src="/logo3.svg"
          alt="Decorative Icon"
          className="object-cover bg-transparent h-[144px] w-[130px]"
        />
      </div>
      <div className="hidden md:block absolute h-full w-full z-30">
        <img
          src="/bg (2).png"
          alt="Decorative Icon"
          className="object-cover bg-transparent h-full w-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto px-6 sm:px-12 lg:px-16 py-10 text-center max-w-screen-3xl">
        <motion.h2
          className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#333333] mb-10"
          style={{ fontFamily: "'Open Sans', sans-serif", lineHeight: "1.3" }}
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Key Benefits
        </motion.h2>

        {/* Row 1 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center mb-10 mx-auto w-full max-w-[1800px]"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {row1.map(({ icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              className="w-full max-w-[500px] h-[178px] bg-[#DAB369B2] rounded-lg pt-6 px-6 shadow-md text-left flex flex-col"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="w-[56px] h-[56px] rounded-md flex items-center justify-center"
                  style={{ background: "#F9D982E5" }}
                >
                  {icon}
                </div>
                <h3
                  className="font-semibold text-xl sm:text-2xl leading-snug"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {title}
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-900">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center mx-auto max-w-[1100px]"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {row2.map(({ icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              className="w-full max-w-[520px] h-[178px] bg-[#DAB369B2] rounded-lg pt-6 px-6 shadow-md text-left flex flex-col"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="w-[56px] h-[56px] rounded-md flex items-center justify-center"
                  style={{ background: "#F9D982E5" }}
                >
                  {icon}
                </div>
                <h3
                  className="font-semibold text-xl sm:text-2xl leading-snug"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {title}
                </h3>
              </div>
              <p className="text-base sm:text-lg text-gray-900">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
