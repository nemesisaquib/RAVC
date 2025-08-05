import React, { useRef } from "react";
import { FaTools, FaLightbulb, FaChartBar, FaLeaf } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const CoreMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const cards = [
    {
      icon: <FaTools className="text-[#DAB369] text-3xl mb-4" />,
      title: "Engineering Precision",
      description: "We do things right, and we do them thoroughly.",
    },
    {
      icon: <FaLightbulb className="text-[#DAB369] text-3xl mb-4" />,
      title: "Collaborative Thinking",
      description: "We value every idea, from intern to director.",
    },
    {
      icon: <FaChartBar className="text-[#DAB369] text-3xl mb-4" />,
      title: "Growth with Ownership",
      description: "We invest in people who own their outcomes.",
    },
    {
      icon: <FaLeaf className="text-[#DAB369] text-3xl mb-4" />,
      title: "Sustainable Values",
      description: "Green isn’t just our business; it’s our mindset.",
    },
  ];

  return (
    <div
      ref={ref}
      className="bg-white px-4 sm:px-6 md:px-12 lg:px-16 py-14 flex flex-col justify-center items-center text-center"
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-[28px] sm:text-[30px] md:text-[34px] font-[700] text-[#DAB369] mb-4"
      >
        A Mission Bigger Than Megawatts
      </motion.h2>

      {/* Animated Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[#121212] max-w-6xl text-[16px] sm:text-[17px] md:text-[18px] font-[400] mb-10 leading-relaxed"
      >
        We believe energy has the power to uplift — and that every person at RAVC plays a role
        in shaping India’s sustainable transformation. Whether you’re on the ground commissioning
        a solar pump in a remote village or designing a megawatt-scale rooftop plant in the city,
        your work has purpose, visibility, and long-term impact.
      </motion.p>

      {/* Cards Grid with Animation */}
      <div className="w-full max-w-[1380px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="rounded-lg text-center shadow-sm flex flex-col items-center justify-center bg-[#F5F5F5]"
            style={{
              minHeight: "246px",
              gap: "17px",
              padding: "30px",
            }}
          >
            {card.icon}
            <h3 className="text-[#DAB369] font-[700] text-[18px] sm:text-[19px] leading-tight mb-1">
              {card.title}
            </h3>
            <p className="text-[15px] sm:text-[16px] font-[600] text-[#121212]">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoreMissionSection;
