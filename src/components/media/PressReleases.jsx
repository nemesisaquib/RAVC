import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const newsData = [
  {
    tag: "Project Milestone",
    title: "RAVC Commissions 220kV Transmission Line in Gujarat",
    date: "February 2025",
    description:
      "A key infrastructure boost for the region,enabling greater grid access for renewable projects.",
    image: "/news/RAVC Commissions 220kV Transmission_Line in Gujarat.png",
  },
  {
    tag: "Business Win",
    title: "RAVC Wins Govt Tender for 10MW Solar Farm in Jharkhand",
    date: "December 2024",
    description:
      "Strengthening our presence in eastern India's green energy corridor.",
    image: "/news/RAVC Wins Govt Tender for 10MW Solar_Farm in Jharkhand.png",
  },
  {
    tag: "Recognition",
    title: 'Featured: "Top 50 Emerging EPCs inIndia" – RenewIndia Magazine',
    date: "November 2024",
    description:
      "A proud industry acknowledgment of our execution excellence and growth trajectory.",
    image: "/news/Featured_ _Top 50 Emerging EPCs in_India_ – RenewIndia Magazine.png",
  },
];

// Card animation variant
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const PressReleases = () => {
  return (
    <section className="bg-white py-6">
      <div className="max-w-screen-3xl mx-auto px-4 sm:px-4 md:px-14 lg:px-20 xl:px-44">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold text-[#D4A72C] mb-2">
            RAVC in the Headlines
          </h2>
          <p className="text-[#555] text-[16px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
            From milestone installations to strategic partnerships and recognitions — here’s how RAVC is making news as India’s fast-rising solar force.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="w-full h-[500.8px] bg-white border rounded-lg shadow-sm flex flex-col overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <span className="bg-[#F7EFD9] text-[#D4A72C] text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3 w-fit">
                  {item.tag}
                </span>
                <h3 className="text-[16px] sm:text-[17px] md:text-[18px] font-bold text-[#121212] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{item.date}</p>
                <p className="text-[15px] sm:text-[16px] text-[#333] mb-4 flex-grow">
                  {item.description}
                </p>
                <Link to={"/media-higlight"}>
                  <button
                    className="bg-[#DAB369] text-white cursor-pointer font-semibold rounded-md hover:opacity-90 transition flex justify-center items-center"
                    style={{
                      width: "144.16px",
                      height: "52.78px",
                      padding: "14.8px 28.466px",
                      fontFamily: '"Open Sans", sans-serif',
                      flexShrink: 0,
                    }}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Link to={"/media-headlines"}>
            <button className="flex items-center gap-2 border border-black text-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition-all font-semibold">
              View All Press Releases <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PressReleases;
