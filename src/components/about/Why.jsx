import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Why() {
  const features = [
    "Technocrat-led execution",
    "Ecological sensitivity",
    "Client-centric culture",
    "Long-term partnerships",
  ];

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16 px-4 sm:px-8 text-[#121212]"
      style={{
        backgroundImage: `url('/about/Frame 91.png')`,
      }}
    >
      {/* Content Overlay */}
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-4 backdrop-blur-sm rounded-lg p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Highlight Box */}
        <motion.div
          className="bg-[#DAB369] text-left rounded-lg p-4 text-[#121212]"
          variants={fadeInUp}
          custom={0}
        >
          <h2 className="font-bold text-[21px]">
            Why RAVC? <br />
            A Culture of Doing Things Differently
          </h2>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          className="text-[18px] leading-[28px] font-[400] mx-auto text-justify"
          variants={fadeInUp}
          custom={1}
        >
          At RAVC, we don't just follow industry standards — we set them. We
          combine technical knowledge with a distinct work ethic with the
          belief that:
        </motion.p>

        {/* Quote Box */}
        <motion.div
          className="bg-[#F9D982] px-2 py-4 rounded-md text-[22px] mx-auto"
          variants={fadeInUp}
          custom={2}
        >
          "Even the smallest act done differently can lead to exceptional outcomes."
        </motion.div>

        {/* Subheading */}
        <motion.h4
          className="font-semibold text-[16px] text-[#121212]"
          variants={fadeInUp}
          custom={3}
        >
          We’re proud to be known for:
        </motion.h4>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="border-2 border-[#DAB369] rounded-md px-4 py-3 flex items-center gap-2 bg-white text-left"
              variants={fadeInUp}
              custom={4 + idx}
            >
              <img
                src="/logo.svg"
                alt="Logo"
                className="h-10 w-auto"
                style={{ width: 40 }}
              />
              <span className="text-[18px] font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative bottom bar */}
      <motion.div
        className="flex items-center mt-8 p-8"
        style={{ height: 10 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
        <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
        <img
          src="/logo.svg"
          alt="Logo"
          className="h-10 w-auto"
          style={{ width: 40 }}
        />
        <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
        <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
      </motion.div>
    </div>
  );
}
