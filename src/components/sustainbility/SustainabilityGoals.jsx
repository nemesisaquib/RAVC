import React from 'react';
import { Target, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SustainabilityGoals() {
  const goals = [
    "Reach 200+ MW in clean energy deployment",
    "Enable 500+ solar pump installations by 2026",
    "Launch green skilling centers in 3 Tier-3 towns",
    "Achieve 50% reduction in site-level plastic usage",
    "Publish RAVC's first full-fledged Sustainability Report (2026)"
  ];

  return (
    <div className="w-full h-[800px] relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Section (3).svg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center">
        {/* Header */}
        <motion.h2
          className="text-[40px] font-bold text-white mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Sustainability Goals: 2025 & Beyond
        </motion.h2>

        {/* Goals List */}
        <div className="space-y-6 mb-12 max-w-[800px]">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-[#DAB369] rounded-full flex items-center justify-center group-hover:bg-[#DAB369] transition-colors duration-200">
                  <Target className="text-white" style={{ width: 20, height: 20, fontWeight: 900 }} />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-left">
                <p className="text-[#FFFFFF] text-[16px] font-[400] leading-relaxed group-hover:text-orange-100 transition-colors duration-200">
                  {goal}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className="flex items-center gap-3 px-8 py-4 bg-transparent text-[#DAB369] rounded-[50px] border-2 border-[#DAB369] hover:bg-[#DAB369] hover:text-white transition-all duration-300 font-medium text-lg group"
          style={{ width: '378.69px', height: '59.59px' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Handshake className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          Partner With Us on Impact Initiatives
        </motion.button>
      </div>
    </div>
  );
}
