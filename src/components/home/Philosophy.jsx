import React from 'react';
import { ChevronRight, Leaf, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Philosophy() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 p-4 sm:p-6 lg:p-10">
      <motion.div
        className="bg-white rounded-3xl border border-[#DAB369] shadow-lg w-full max-w-[1200px] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row w-full h-full">
          
          {/* Left Section */}
          <motion.div
            className="bg-[#DAB369] p-6 sm:p-10 lg:p-12 flex flex-col justify-center relative w-full lg:max-w-[480px]"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute right-2 top-2 z-30">
              <img
                src="/logo3.svg"
                alt="Decorative Icon"
                className="h-[64px] sm:h-[84px] w-[80px] sm:w-[100px] object-contain"
              />
            </div>

            <div className="relative z-10">
              <p className="text-white text-sm font-medium uppercase tracking-wide mb-4 sm:mb-6 leading-snug">
                OUR <br /> PHILOSOPHY
              </p>

              <h1 className="text-white text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-bold leading-snug sm:leading-snug mb-4 sm:mb-6">
                Sustainability is Not <br />
                a Section. <br />
                It's Our Standard.
              </h1>

              <p className="text-white text-[16px] sm:text-[18px] lg:text-[22px] sm:text-base leading-relaxed opacity-90">
                Every RAVC project is designed to reduce emissions, enhance efficiency, and uplift lives. From PPC to IPP & Public to Government Sustainability is not just a Motto, we align our services with Indian sustainability goals .
              </p>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="p-6 sm:p-8 lg:p-12 w-full flex-1"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Stats */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ staggerChildren: 0.15 }}
            >
              {[
                { value: '250+', label: 'MV Solar \nPower Touched.' },
                { value: '4.5 Lcs', label: 'Equivalent to \nTrees Planted' },
                { value: '4500+', label: 'MT of Carbon\nEmission Saved' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="bg-[#FEF7E6] h-[110px] sm:h-[130px] flex flex-col justify-center items-center text-center rounded-xl w-full"
                  variants={fadeUp}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[#DAB369] mb-1">{stat.value}</div>
                  <div className="text-gray-600 text-xs sm:text-sm font-semibold whitespace-pre-line">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Sustainable Practices */}
            <motion.div
              className="mb-8"
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Our Sustainable Practices</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Leaf className="w-5 h-5 text-white" />,
                    title: 'Solar Infrastructure Impact',
                    text:
                      'Our projects have touched 250+ MW of solar power capacity, delivering clean energy across diverse sectors and regions.',
                  },
                  {
                    icon: <Users className="w-5 h-5 text-white" />,
                    title: 'Environmental Equivalence',
                    text:
                      'Generating renewable energy equivalent to planting 4.5 lakh trees, creating long-term ecological benefits for communities.',
                  },
                  {
                    icon: <Shield className="w-5 h-5 text-white" />,
                    title: 'Carbon Emissions Saved',
                    text:
                      'Over 4,500 MT of carbon emissions avoided through our sustainable energy solutions, reducing environmental impact at scale.',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start space-x-4"
                    variants={fadeUp}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                  >
                    <div className="w-10 h-10 min-w-[40px] bg-[#DAB369] rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="mt-4 sm:mt-6"
              variants={fadeUp}
              transition={{ delay: 0.7 }}
            >
              <Link to="/sustainbility">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center cursor-pointer space-x-2 bg-[#DAB369] text-white px-5 py-3 sm:px-6 sm:py-3 rounded-full transition-all duration-300 font-medium text-sm sm:text-base"
                >
                  <span>Explore Our Impact</span>
                  <ChevronRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
