import React from 'react';
import {
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaYoutubeSquare,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function StayConnected() {
  return (
    <div
      className="relative bg-cover bg-center text-white"
      style={{
        height: '431px',
        backgroundImage: `url('/contact/Section (4).png')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 gap-6">
        {/* Heading */}
        <motion.h2
          className="text-[34px] font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Stay Connected
        </motion.h2>

        {/* Icons */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="https://www.linkedin.com/company/ravcsolutions/" className="bg-white rounded-full p-2 hover:scale-110 transition">
            <FaLinkedinIn className="text-[#0A66C2]" size={24} />
          </a>

          <a href="https://www.instagram.com/ravcsolutions/?hl=en" className="bg-white rounded-full p-2 hover:scale-110 transition">
            <FaInstagram className="text-[#833AB4]" size={24} />
          </a>
          <a href="#" className="bg-white rounded-full p-2 hover:scale-110 transition">
            <FaYoutube className="text-[#FF0000]" size={24} />
          </a>
          <a href="#" className="bg-white rounded-full p-2 hover:scale-110 transition">
            <FaWhatsapp className="text-[#25D366]" size={24} />
          </a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="https://www.linkedin.com/company/ravcsolutions/"
            className="flex items-center text-[16px] gap-2 bg-black text-white px-6 py-4 rounded-full font-medium hover:scale-105 transition"
          >
            <FaLinkedin />
            Follow RAVC on LinkedIn
          </a>
          <a
            href="https://www.linkedin.com/company/ravcsolutions/"
            className="flex items-center text-[16px] gap-2 bg-[#DAB369] text-white px-6 py-4 rounded-full font-medium hover:scale-105 transition"
          >
            <FaYoutubeSquare />
            Subscribe on YouTube
          </a>
        </motion.div>
      </div>
    </div>
  );
}
