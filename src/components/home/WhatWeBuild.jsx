import React from "react";
import { ChevronRight } from "lucide-react";
import "../scrollbar.css";
import { Link } from "react-router-dom";

export default function WhatWeBuild() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat min-h-[762px] py-20"
      style={{
        backgroundImage: "url('/home/bg.webp')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 min-h-[762px] flex flex-col justify-center items-center px-4">
        {/* Hero Section */}
        <div className="text-center pb-6 max-w-[95%] mx-auto">
          <h1 className="text-[#DAB369] mb-4 font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-tight capitalize">
            What We Build. Who We Empower.
          </h1>
          <p className="text-white text-base text-[16px] sm:text-[18px] md:text-[20px] mx-auto leading-[30px] max-w-5xl capitalize">
            We Engineer Scalable, Clean Energy Systems That Support Families,
            Businesses, And Communities — All While Preserving The Planet.
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-full mt-6 px-[5%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            {[
              {
                title: "EPC DEVELOPMENT",
                desc: "Ensuring Performance Optimization and reduce operational cost for better ROI.",
                bg: "/home/freepik__retouch__69119 1.webp",
                link: "/epc-development",
              },
              {
                title: "IIP",
                desc: "Identify energy-saving opportunities and improve efficiency across systems.",
                bg: "/home/bg-card.webp",
                link: "/coming-soon",
              },
              {
                title: "SOLAR ROOFTOP",
                desc: "Empowering Buildings To Become Energy Producers, Not Just Consumers.",
                bg: "/home/freepik__the-style-is-candid-image-photography-with-natural__69116.webp",
                link: "/solar-rooftop",
              },
              {
                title: "Operation & Maintenance",
                desc: "Focusing on precision, quality, and performance using cutting edge technologies.",
                bg: "/home/freepik__the-style-is-candid-image-photography-with-natural__69120 1.webp",
                link: "/operation-and-maintenance",
              },
            ].map((item, idx) => (
              <ServiceCard
                key={idx}
                title={item.title}
                desc={item.desc}
                bg={item.bg}
                link={item.link}
              />
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-10">
          <Link to={"/services"}>
            <button className="flex items-center space-x-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black cursor-pointer px-6 md:px-8 py-3 md:py-4 rounded-2xl transition-all duration-300 mx-auto font-semibold text-sm md:text-base">
              <span>Explore All Services</span>
              <ChevronRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const ServiceCard = ({ title, desc, bg, link }) => {
  return (
    <div className="cursor-pointer group flex-shrink-0 rounded-xl bg-white shadow-lg overflow-hidden w-full max-w-[500px] h-[320px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Image Section - Fixed aspect ratio */}
      <div className="relative h-32 overflow-hidden">
        <img
          src={bg}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent"></div>
      </div>

      {/* Content Section - Better spacing */}
      <div className="p-6 flex flex-col h-[calc(100%-128px)]">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-gray-800 text-xl font-bold uppercase tracking-tight mb-2">
            {title}
          </h3>
          <div className="w-10 h-1 bg-amber-500 rounded-full"></div>
        </div>

        {/* Description - Better line height */}
        <div className="flex-grow mb-4">
          <p className="text-gray-600 text-base leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Learn More Link */}
        <div className="mt-auto">
          <Link
            to={link}
            className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group-hover:underline"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
