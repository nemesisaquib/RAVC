import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Department() {
  const departments = [
    { title: 'Sales & Services', email: 'connect@ravc.in' },
    { title: 'Careers & Internships', email: 'careers@ravc.in' },
    { title: 'Media & Press', email: 'media@ravc.in' },
    { title: 'Vendor Onboarding', email: 'vendors@ravc.in' },
    { title: 'Sustainability & CSR', email: 'sustainability@ravc.in' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.15 },
    }),
  };

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-[34px] font-semibold text-gray-900 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Department-Specific Contacts
        </motion.h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
  {departments.map((dept, idx) => (
    <motion.div
      key={idx}
      custom={idx}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition"
    >
      <a
        href={`mailto:${dept.email}`}
        className="flex items-center gap-4 cursor-pointer group"
      >
        <div className="bg-[#DAB369] text-white p-3 rounded-full flex items-center justify-center group-hover:bg-[#cda257] transition">
          <Mail className="w-6 h-6" />
        </div>

        <div className="text-left">
          <h3 className="text-[17px] font-semibold text-gray-900">
            {dept.title}
          </h3>
          <div className="text-[#374151] text-[16px] mt-1 group-hover:underline">
            {dept.email}
          </div>
        </div>
      </a>
    </motion.div>
  ))}
</div>

      </div>
    </div>
  );
}
