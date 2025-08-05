import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Table = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const rows = [
    {
      project: "Solar Farm",
      location: "Rajasthan",
      capacity: "25MW",
      status: "Commissioned 2023",
    },
    {
      project: "Industrial Captive Plant",
      location: "Noida",
      capacity: "2.5MW",
      status: "Live",
    },
    {
      project: "Govt Tender",
      location: "Jharkhand",
      capacity: "10MW",
      status: "In Progress",
    },
  ];

  return (
    <div
      className="bg-white w-full flex flex-col justify-center items-start px-4 md:px-14 py-10"
      ref={ref}
    >
      {/* Heading Section */}
      <motion.div
        className="text-left mb-6 w-full"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#000000] mb-1">
          EPC Project Showcase
        </h2>
        <p className="text-gray-500 text-[16px] sm:text-[18px] md:text-[19px]">
          Real-world results from our rooftop installations
        </p>
      </motion.div>

      {/* Responsive Table */}
      <motion.div
        className="w-full overflow-x-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="min-w-[600px]">
          {/* Table Head */}
          <motion.div
            className="grid grid-cols-4 bg-[#DAB369] text-black font-semibold text-[15px] sm:text-[16px] py-4 px-4 sm:px-6"
            variants={fadeInUp}
          >
            <div>Project</div>
            <div>Location</div>
            <div>Capacity</div>
            <div>Status</div>
          </motion.div>

          {/* Table Rows */}
          {rows.map((row, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                className="grid grid-cols-4 gap-y-2 bg-white text-[#000000] text-[15px] sm:text-[16px] py-4 px-4 sm:px-6"
                variants={fadeInUp}
              >
                <div className="flex items-center">{row.project}</div>
                <div className="flex items-center">{row.location}</div>
                <div className="flex items-center">{row.capacity}</div>
                <div className="flex items-center">{row.status}</div>
              </motion.div>
              <motion.div
                className="bg-gray-400 w-full h-[1px]"
                variants={fadeInUp}
              />
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* Divider with logo */}
      <motion.div
        className="flex items-center w-full my-8"
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
};

export default Table;
