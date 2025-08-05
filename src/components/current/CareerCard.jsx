import React from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import { BsFillTelephoneFill, BsInfoCircle } from 'react-icons/bs';
import { FaLinkedinIn, FaDownload } from 'react-icons/fa';

export default function CareerCard() {
  return (
    <div className="px-4 sm:px-8 md:px-12 py-8">
      <div
        className="relative rounded-lg overflow-hidden text-white text-center bg-cover bg-center"
        style={{
          minHeight: '582px',
          backgroundImage: `url('/current/Section (3).png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-8">
          {/* Logo */}
          <motion.div
            className="w-[122px] h-[103px] mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/logo.svg"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* Headings */}
          <motion.div
            className="max-w-[820px] text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-[28px] sm:text-[32px] md:text-[34px] font-[600] mb-4">
              Ready to Make Your Move?
            </h1>

            <p className="text-[16px] sm:text-[17px] md:text-[18px] font-[400] mb-6">
              Have questions about eligibility, interview process, or working hours?
            </p>

            {/* FAQ and Contact Info */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-8 w-full max-w-[820px] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <BsInfoCircle className="text-gray-900 text-sm" />
                </div>
                <span className="underline text-[16px] font-[600] cursor-pointer whitespace-nowrap">
                  Visit Our Career FAQs
                </span>
              </div>

              <span className="text-gray-400 hidden sm:inline">|</span>

              <p className="text-[16px] font-[400] text-wrap text-center">
                Or drop your CV to {' '}
  <a href="mailto:careers@ravc.in" className="text-[#DAB369] hover:underline hover:opacity-80 transition-opacity">
    careers@ravc.in
  </a>{' '} and we'll reach out if it's a match
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="w-full max-w-[532px] mx-auto text-center space-y-4 px-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <h2 className="text-[22px] sm:text-[24px] font-[500]">
              RAVC Solutions Pvt Ltd – HR Department
            </h2>

            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <FiMail className="text-[#DAB369]" />
                <a
                  href="mailto:careers@ravc.in"
                  className="text-[#DAB369] text-[16px] sm:text-[17px] font-[600] break-all hover:underline"
                >
                  careers@ravc.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <BsFillTelephoneFill className="text-[#DAB369]" />
                <a
                  href="tel:+918874545556"
                  className="text-[#DAB369] text-[16px] sm:text-[17px] font-semibold hover:underline"
                >
                  +91 8874545556
                </a>
              </div>
            </div>

            <p className="text-[13px] sm:text-[14px] font-[400]">
              ℹ Please use subject: 'Application for [Role Name]'
            </p>

            {/* Download Button */}
            <motion.button
              className="flex items-center justify-center gap-2 mx-auto border-2 border-[#DAB369] text-[#DAB369] font-semibold text-base rounded-md transition w-full max-w-[285px] py-4 sm:py-3 hover:bg-[#dab369] hover:text-white"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaDownload />
              Download Company Profile
            </motion.button>

            {/* LinkedIn */}
            <motion.div
              className="mx-auto flex flex-col sm:flex-row justify-center items-center gap-2 max-w-[208px] h-auto mt-2 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <span className="text-[14px] font-[400]">Follow Us on LinkedIn</span>
              <a
                href="https://www.linkedin.com/company/ravcsolutions/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50px',
                    background: '#DAB369',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FaLinkedinIn style={{ color: '#fff', fontSize: '16px' }} />
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
