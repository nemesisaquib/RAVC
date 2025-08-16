import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHardHat,
  FaClipboardCheck,
  FaCogs,
} from "react-icons/fa";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

import { MdOutlineEngineering } from "react-icons/md";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { GiElectric } from "react-icons/gi";

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const services = [
    {
    icon: <HiOutlineClipboardDocumentList className="text-xl text-gray-700" />,
    title: "Site Assessment",
    description:
      "Site feasibility check, solar potential mapping, and compliance planning",
  },
    {
    icon: <FaClipboardCheck className="text-xl text-yellow-700" />,
    title: "Pre-Engineering",
    description:
      "Site survey, solar resource assessment, DPR preparation",
  },
    {
    icon: <MdOutlineEngineering className="text-xl text-yellow-700" />,
    title: "Design & Engineering",
    description:
      "Electrical, structural & civil design, shadow & PR simulations",
  },
    {
    icon: <FaCogs className="text-xl text-yellow-700" />,
    title: "Procurement",
    description:
      "Tier-1 module sourcing, inverters, BOS, cables, and SCADA components",
  },
  {
    icon: (
      <FaHardHat className="text-xl text-green-700 bg-black rounded px-1 py-0.5" />
    ),
    title: "Construction",
    description:
      "Civil works, ramming/piling, mounting structure, cable laying",
  },


  {
    icon: <GiElectric className="text-xl text-gray-700" />,
    title: "Commissioning",
    description:
      "Grid-tie setup, synchronization, testing & safety compliance",
  },

  {
    icon: (
      <HiOutlineClipboardDocumentCheck className="text-xl text-yellow-700" />
    ),
    title: "Handover",
    description: "Training, documentation, and SLA-based O&M offer",
  },
];

const ScopeofServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/your-background-image.png')",
        minHeight: "628px",
        background: "#FFFFFF",
        boxShadow: "0px 4px 4px 0px #CACACA40",
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

      {/* Right bottom icon */}
      <div className="absolute right-0 bottom-[140px] sm:bottom-[100px] md:bottom-[35px] z-30">
        <img
         src="/logo3.svg"
          alt="Decorative Icon"
          className="object-cover bg-transparent h-[144px] w-[130px] sm:h-[110px] sm:w-[100px] md:h-[144px] md:w-[130px]"
        />
      </div>

      {/* Background Image Decoration */}
      {/* <div className="absolute h-full w-full z-30">
        <img
          src="/bg (2).png"
          alt="Decorative Icon"
          className="object-cover bg-transparent h-full w-full "
        />
      </div> */}

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 py-10 text-center max-w-[1400px] mx-auto">
        <h2
          className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#333333] mb-10"
          style={{
            fontFamily: "'Open Sans', sans-serif",
            lineHeight: "1.4",
          }}
        >
          Scope of Services
        </h2>

        {/* Animated Grid */}
        <motion.div
          ref={ref}
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map(({ icon, title, description }, i) => (
            <motion.div
              key={i}
              className="w-full bg-[#DAB369B2] rounded-lg pt-8 pb-8 px-6 sm:px-10 shadow-md text-left flex flex-col justify-between"
              variants={cardVariants}
            >
              <div className="flex items-center gap-4 mb-2 max-w-[276px]">
                <div
                  style={{
                    width: "56px",
                    height: "50px",
                    borderRadius: "4px",
                    background: "#F9D982E5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <h3
                  className="font-medium text-[18px] leading-[27.2px] max-w-[200px]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {title}
                </h3>
              </div>
              <p className="text-[18px]">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ScopeofServices;
