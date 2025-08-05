import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Zap, Droplets, Home, User, Droplet, Users, BarChart3 } from 'lucide-react';

export default function ImpactNumbers() {
  const impactData = [
    {
      icon: <Sprout className="w-8 h-8 text-[#10B981]" />,
      title: "Carbon Offset",
      number: "180,000+",
      description: "tonnes/year through RAVC-enabled systems"
    },
    {
      icon: <Zap className="w-8 h-8 text-[#F59E0B]" />,
      title: "Clean Energy Delivered",
      number: "100MW+",
      description: "of solar infrastructure executed"
    },
    {
      icon: <Droplets className="w-8 h-8 text-[#3B82F6]" />,
      title: "Rural Solar Pumps",
      number: "250+",
      description: "powering agriculture & livelihoods"
    },
    {
      icon: <Home className="w-8 h-8 text-green-700" />,
      title: "Villages Energized",
      number: "85+",
      description: "remote areas supported via solar systems"
    },
    {
      icon: <User className="w-8 h-8 text-orange-500" />,
      title: "Women Trained via CSR",
      number: "100+",
      description: "solar safety, basic assembly, and monitoring"
    },
    {
      icon: <Droplet className="w-8 h-8 text-blue-400" />,
      title: "Water Saved",
      number: "1.2M+",
      description: "litres/year via solar-powered irrigation"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-600" />,
      title: "Jobs Created",
      number: "400+",
      description: "skilled roles through execution projects"
    }
  ];

  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-screen-3xl mx-auto px-4 sm:px-6 md:px-28 lg:px-32 xl:px-32">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[34px] font-[700] text-[#121212] mb-8">
            Our Impact in Numbers
          </h2>
        </motion.div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 text-center w-full h-[282px]"
              style={{
                borderRadius: "10px",
                background: "#FFFFFF",
                border: "2px solid var(--Color-101, #DAB369)",
                boxShadow: "0px 4px 6px 0px #0000000D"
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-[19px] font-[700] text-[#1E293B] mb-3">
                {item.title}
              </h3>
              <div className="text-[28px] font-[700] text-[#DAB369] mb-3">
                {item.number}
              </div>
              <p className="text-[16px] md:text-[12px] font-[600] text-[#121212] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-600 px-4 py-3 mx-auto max-w-full"
            style={{
              borderRadius: "10px",
              background: "#F9D98233"
            }}
          >
            <BarChart3 className="w-5 h-5 text-green-600" />
            <span className="text-[18px] font-[600] text-[#121212] text-center sm:text-left">
              Metrics updated annually through our internal sustainability audits
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
