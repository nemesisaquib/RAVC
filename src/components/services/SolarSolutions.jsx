import React, { useRef } from "react";
import { FiSettings, FiHome, FiTool, FiTrendingUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const solutions = [
  {
    title: "EPC Development",
    description:
      "RAVC delivers turnkey Engineering, Procurement & Construction (EPC) services for large-scale solar projects ranging from 1MW to 100MW. We handle design, sourcing, installation, and grid integration with technical rigor.",
    useCase: ["Reduced execution timelines", "Lower lifecycle costs", "Higher system reliability"],
    image: "/service/EPC Development.svg",
    point: "Why It Matters:",
    path: "/epc-development",
    icon: <FiTool size={28} color="#fff" />,
  },
  {
    title: "Solar Rooftop",
    description:
      "We specialize in designing and installing rooftop photovoltaic systems for residential, commercial, and institutional clients. These systems reduce dependency on grid electricity, cut down costs, and support a cleaner grid.",
    useCase: ["Corporate offices", "Schools & hospitals", "Warehouses and factories"],
    image: "/service/Solar Rooftop.svg",
    point: "Use Case:",
    path: "/solar-rooftop",
    icon: <FiHome size={28} color="#fff" />,
  },
  {
    title: "Operation & Maintenance (O&M)",
    description:
      "We provide end-to-end O&M services to ensure solar systems function at peak efficiency. From preventive maintenance to performance audits, our team ensures uninterrupted power generation.",
    useCase: ["Module cleaning", "Inverter diagnostics", "Uptime monitoring", "Emergency response"],
    image: "/service/Solar Consultancy.svg",
    point: "O&M Features:",
    path: "/operation-and-maintenance",
    icon: <FiTrendingUp size={28} color="#fff" />,
  },
];

export default function SolarSolutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-screen-xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-10 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#121212] font-bold mx-auto mb-4 text-[28px] sm:text-[32px] md:text-[34px] leading-tight">
            Our Solar Solutions
          </h2>
          <p className="text-[#121212] font-normal mx-auto text-[16px] sm:text-[18px] leading-relaxed max-w-2xl">
            Comprehensive services designed for modern diverse energy needs
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="w-full max-w-md border border-[#D8D8D8] rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              {/* Image and Icon */}
              <div className="relative">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-[164px] object-cover"
                />
                <div className="absolute bottom-[-30px] right-4">
                  <div className="w-[60px] h-[60px] bg-[#DAB369] rounded-full shadow-xl flex items-center justify-center">
                    {solution.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 pt-10 pb-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-[#000] font-bold mb-3 text-[22px] sm:text-[24px] leading-snug text-left">
                    {solution.title}
                  </h3>

                  <p className="text-[#555] mb-4 text-[14px] leading-[24px] font-normal text-left">
                    {solution.description}
                  </p>

                  <p className="text-[#DAB369] font-semibold mb-2 text-[16px]">
                    {solution.point}
                  </p>

                  <ul className="list-disc list-inside text-[#121212] space-y-1 text-left text-[15px] font-medium">
                    {solution.useCase.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Link to={solution.path}>
                    <button className="bg-[#DAB369] cursor-pointer text-white font-semibold rounded-md hover:opacity-90 transition px-6 py-3 text-sm">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
