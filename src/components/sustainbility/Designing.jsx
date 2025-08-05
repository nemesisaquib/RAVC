import React from 'react';
import { Download, Globe, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Designing() {
  const pillars = [
    {
      title: 'Planet',
      icon: <Globe className="w-6 h-6 text-[#DAB369]" />,
      description: 'Reducing emissions, conserving resources, and promoting green energy',
    },
    {
      title: 'People',
      icon: <Users className="w-6 h-6 text-[#DAB369]" />,
      description: 'Creating jobs, training rural talent, and supporting underserved communities',
    },
    {
      title: 'Performance',
      icon: <Zap className="w-6 h-6 text-[#DAB369]" />,
      description: 'Designing high-efficiency systems with minimum ecological disruption',
    },
  ];

  return (
    <div className="w-full bg-[#FDF2D1] px-8 py-16 flex flex-col items-center">
      {/* Header */}
      <motion.div
        className="text-center mb-12 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-[34px] font-bold text-[#121212] mb-6 leading-snug">
          Designing a Future That's Cleaner, Smarter, and Inclusive
        </h1>
        <p className="text-[18px] text-[#121212] leading-relaxed font-normal">
          As a solar EPC and infrastructure solutions provider, RAVC directly contributes to India's transition to clean energy. But we don't stop at generating power — we design systems that reduce carbon intensity, democratize access to energy, and deliver environmental and social impact across every megawatt we build.
        </p>
      </motion.div>

      {/* Sustainability Pillars Intro */}
      <motion.p
        className="text-[18px] font-normal text-[#121212] mb-8 w-full max-w-6xl text-left"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our sustainability pillars are built on:
      </motion.p>

      {/* Pillars Grid */}
      <div className="flex justify-center flex-wrap gap-[30px] max-w-[1170px]">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center w-[370px] h-[246.53px] bg-[#F5F5F5] rounded-[8px] gap-[17px] p-[30px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="w-[40px] h-[40px] bg-[#F0E1C2] rounded-full flex items-center justify-center">
              {pillar.icon}
            </div>
            <h3 className="text-[20px] font-bold text-[#DAB369]">{pillar.title}</h3>
            <p className="text-[#121212] text-[16px] font-semibold leading-relaxed">{pillar.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Download Button */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button
          className="flex items-center justify-center gap-[10px] font-semibold text-[#121212] rounded-[6px] transition hover:bg-gray-100"
          style={{
            width: '356px',
            height: '58px',
            padding: '16px 32px',
            border: '1px solid #121212',
            boxShadow: 'inset 0px 4px 4px 0px #8E8E8E40',
            background: 'transparent',
          }}
        >
          Download Sustainability Profile
          <Download className="w-5 h-5" />
        </button>
      </motion.div>
    </div>
  );
}
