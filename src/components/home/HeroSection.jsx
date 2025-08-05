import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 1,
      ease: "easeInOut",
    },
  }),
};

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen md:h-[1057px] flex-shrink-0">
      {/* Background Image */}
      <img
        src="/home/Rectangle.svg"
        alt="Solar Panels"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-20 lg:px-32 text-white bg-black/30">
        <motion.h1
          className="uppercase font-open-sans font-bold text-[clamp(18px,5vw,64px)] leading-tight text-[#F9D982] max-w-[1037px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          HARNESSING INNOVATIVE <br />
          SOLUTIONS POWERING VIKSIT <br />
          BHARAT ENERGY NEEDS
        </motion.h1>

        <motion.p
          className="mt-4 text-[clamp(16px,2vw,22px)] leading-[1.6] max-w-[831px] text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          We are not just enabling Renewable Energy infrastructure, but enabling
          energy security and sustainable models for communities across India.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          {/* Explore Our Vision Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.75,
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
          >
            <Link
              to={{ pathname: "/about", hash: "#vision-mission" }}
              className="inline-flex px-6 py-3 justify-center items-center gap-2 border border-[#DAB369] text-white font-medium rounded-xl bg-[#DAB369] hover:text-black transition text-sm md:text-base"
            >
              Explore Our Vision <FaArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Discover Our Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
          >
            <Link to={"/services"}>
              <button className="inline-flex px-6 py-3 cursor-pointer justify-center items-center gap-2 border border-white text-white font-medium rounded-xl hover:bg-white hover:text-black transition text-sm md:text-base">
                Discover Our Services <FaArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
