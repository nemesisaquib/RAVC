import React from "react";
import { motion } from "framer-motion";

export default function Journey() {
  return (
    <div className="relative bg-[#FDF2D1] py-10 px-4 sm:px-8 md:px-16 lg:px-28 min-h-[328px]">
      {/* Left Decorative Logo */}
      <motion.div
        className="absolute -left-4 sm:-left-6 top-2 z-30"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/logo3.svg"
          alt="Decorative Icon"
          className="object-cover h-[100px] sm:h-[120px] md:h-[144px] w-auto"
        />
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-[#1A1A1A] font-bold mb-4 leading-snug mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: '"Open Sans", sans-serif',
          }}
        >
          <span className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-[1.3] block max-w-3xl mx-auto">
            Complete Solar Infrastructure Solutions
          </span>
        </motion.h2>

        <motion.p
          className="text-[#121212] font-normal mx-auto leading-relaxed text-[clamp(16px,2vw,18px)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontFamily: '"Open Sans", sans-serif',
            maxWidth: "978px",
          }}
        >
          At RAVC, we don’t just install systems — we engineer outcomes. Our integrated services
          span every stage of the solar project lifecycle, from consultation and design to
          commissioning and long-term maintenance. Each service is
          <br className="hidden sm:block" />
          designed to maximize energy output, optimize cost, and uphold environmental responsibility.
          <br className="hidden sm:block" />
          Whether you're planning a megawatt-scale solar farm or a rooftop project for your
          facility, we provide execution
          <br className="hidden sm:block" />
          that is technical, timely, and trusted.
        </motion.p>
      </div>
    </div>
  );
}
