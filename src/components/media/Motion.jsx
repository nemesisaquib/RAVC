import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Star } from "lucide-react";

const imageData = [
  {
    id: 1,
    image: "/media/c.png",
    title: "UP Energy Icons 2025 : Solar Leadership Icon: Excellence in Solar Project Delivery",
    category: "Leadership Award",
    year: "2025"
  },
  {
    id: 2,
    image: "/media/IMG_6384 (1).png",
    title: "Solar EPC Week 2024 India : Company Choice Awards",
    category: "Industry Recognition",
    year: "2024"
  },
  {
    id: 3,
    image: "/media/IMG_6386 copy_00000.png",
    title: "UTL Solar : High Sales Performance",
    category: "Performance Award",
    year: "2024"
  },
  {
    id: 4,
    image: "/media/IMG_6396.png",
    title: "C&I India Energy Leadership Awards 2022 : Best Service Provider - Contractor",
    category: "Service Excellence",
    year: "2022"
  },
  {
    id: 5,
    image: "/media/IMG_6402_00000.png",
    title: "UTL Solar : UTL Top Performer 2024-25",
    category: "Top Performer",
    year: "2024-25"
  },
  {
    id: 6,
    image: "/media/IMG_6406.png",
    title: "EPS Energy Award – UP 2025 : Solar EPC Company of the Year - Utilities",
    category: "Company of the Year",
    year: "2025"
  },
  {
    id: 7,
    image: "/media/IMG_6409.png",
    title: "State Leadership Awards Uttar Pradesh 2023 : Solar System Integrator of the Year (Rooftop) - Platinum",
    category: "Platinum Award",
    year: "2023"
  },
  {
    id: 8,
    image: "/media/IMG_6412.png",
    title: "State Leadership Awards Uttar Pradesh 2024 : Solar EPC Company of the Year (Ground Mount) - Diamond",
    category: "Diamond Award",
    year: "2024"
  },
  {
    id: 10,
    image: "/media/IMG_6419 copy (1).png",
    title: "Indian Achievers' Award 2021 – 22 : Young Entrepreneur",
    category: "Entrepreneur Award",
    year: "2021-22"
  },
  {
    id: 11,
    image: "/media/IMG_6423 copy.png",
    title: "Uttar Pradesh Annual Solar Awards 2024 : Solar EPC Company of the Year",
    category: "Annual Award",
    year: "2024"
  },
  {
    id: 12,
    image: "/media/IMG_6425 copy.png",
    title: "Industry Outlook Top Solar Industry Startups 2022",
    category: "Startup Recognition",
    year: "2022"
  },
  {
    id: 14,
    image: "/media/IMG_6429_00000.png",
    title: "Solar Trail Blazers Conference and Awards",
    category: "Conference Award",
    year: "2024"
  },
  {
    id: 16,
    image: "/media/IMG_6439.png",
    title: "Green Energy Business Conclave 2024",
    category: "Business Excellence",
    year: "2024"
  },
  {
    id: 19,
    image: "/media/IMG_6451_00000.png",
    title: "Uttar Pradesh Green Future Leadership Awards 2022",
    category: "Green Leadership",
    year: "2022"
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Motion = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-44">
        {/* Enhanced Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Trophy className="w-8 h-8 text-[#D4A72C] mr-3" />
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#D4A72C]">
              Celebrating Our Achievements
            </h2>
            <Trophy className="w-8 h-8 text-[#D4A72C] ml-3" />
          </div>
          <p className="text-gray-700 text-[18px] md:text-[20px] max-w-4xl mx-auto leading-relaxed">
            Recognized by industry leaders and awarded for excellence in solar energy solutions, 
            innovation, and sustainable development across India.
          </p>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <Star className="w-5 h-5 text-[#D4A72C] fill-current" />
            <span className="text-[#D4A72C] font-semibold text-lg">{imageData.length} Prestigious Awards</span>
            <Star className="w-5 h-5 text-[#D4A72C] fill-current" />
          </div>
        </motion.div>

        {/* Enhanced Image Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {imageData.map((item) => (
            <motion.div 
              key={item.id} 
              className="group"
              variants={itemVariants}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#D4A72C]/30">
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#D4A72C] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/90 text-[#D4A72C] text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-[15px] font-semibold text-[#121212] leading-tight group-hover:text-[#D4A72C] transition-colors duration-300 line-clamp-3">
                    {item.title}
                  </h3>
                  
                  {/* Award Icon */}
                  <div className="flex items-center justify-center mt-4">
                    <Award className="w-5 h-5 text-[#D4A72C] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-[#D4A72C]/10 to-[#D4A72C]/5 rounded-2xl p-8 border border-[#D4A72C]/20">
            <h3 className="text-[24px] font-bold text-[#D4A72C] mb-4">
              Excellence Recognized Nationwide
            </h3>
            <p className="text-gray-700 text-[16px] max-w-3xl mx-auto">
              From state-level recognition to national industry awards, our commitment to 
              solar innovation and sustainable energy solutions continues to be acknowledged 
              by leading organizations across India.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Motion;
