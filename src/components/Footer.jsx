import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: FaFacebookF, url: "https://www.facebook.com/ravcsolutions/" },
  { icon: FaWhatsapp, url: "https://wa.me/yourwhatsapplink" },
  { icon: FaInstagram, url: "https://www.instagram.com/ravcsolutions/?hl=en" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/company/ravcsolutions/" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <motion.div
      className="bg-[#FFFCF2] h-auto lg:h-[453px] px-6 md:px-16 py-8 text-black flex flex-col justify-between"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Top Row: Logo and Social Icons */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center mb-6"
        variants={fadeUp}
        custom={0}
      >
        <img
          src="/logo.svg"
          alt="Logo"
          className="w-[132px] h-[111px] object-contain mb-4 md:mb-0"
        />

        <div className="flex gap-4 text-white text-xl">
          {socialLinks.map(({ icon: Icon, url }, idx) => (
            <motion.a
              key={idx}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[36px] h-[36px] rounded-full bg-[#d6a84f] p-2 flex items-center justify-center cursor-pointer"
              variants={fadeUp}
              custom={idx + 1}
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <hr className="border-gray-300 mb-6" />

      {/* Grid Content */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm"
        variants={fadeUp}
        custom={1.2}
      >
        {/* Company */}
        <div>
          <h3 className="font-bold text-[18px] mb-2">Company</h3>
          <ul className="space-y-1">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "News & Media", path: "/news-media" },
              { name: "Careers", path: "/career" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-[18px] mb-2">Services</h3>
          <ul className="space-y-1">
            {[
              { name: "EPC DEVELOPMENT", path: "/epc-development" },
              { name: "IPP", path: "/coming-soon" },
              { name: "SOLAR ROOFTOP", path: "/solar-rooftop" },
              { name: "O&M", path: "/operation-and-maintenance" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link to={item.path} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-[18px] mb-2">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <a href="tel:+918874545556" className="flex items-center gap-2 hover:underline">
                <FaPhoneAlt className="w-[25px] h-[25px] bg-[#d6a84f] text-white p-1.5 rounded-full" />
                +91 8874545556
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="mailto:info@ravc.in" className="flex items-center gap-2 hover:underline">
                <FaEnvelope className="w-[25px] h-[25px] bg-[#d6a84f] text-white p-1.5 rounded-full" />
                info@ravc.in
              </a>
            </li>
            <li className="flex items-start gap-2">
              <a
                href="https://www.google.com/maps?q=Bhavya+Corporate+Tower,+Vibhuti+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:underline"
              >
                <FaMapMarkerAlt className="w-[25px] h-[25px] bg-[#d6a84f] text-white p-1.5 rounded-full mt-1" />
                <span>
                  4th floor, Bhavya Corporate Tower, Vibhuti Khand, Gomti Nagar,
                  Lucknow, Uttar Pradesh 226010
                </span>
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      <hr className="border-gray-300 mt-6 mb-3" />

      {/* Bottom Section */}
      <motion.div
        className="flex flex-col items-center text-center space-y-1"
        variants={fadeUp}
        custom={1.5}
      >
        <div className="flex gap-4 font-medium text-sm">
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
          <span className="hover:underline cursor-pointer">Terms and condition </span>
        </div>
        <div className="text-[#e5a844] font-medium text-sm">
          © 2025 RAVC Solutions Pvt Ltd. All Rights Reserved.
        </div>
        <div className="text-[#e5a844] font-medium text-sm">
       <a href="https://www.sakhsham.com" target="_blank" rel="noopener noreferrer">
    Made By Sakhsham
  </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
