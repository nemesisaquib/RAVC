import React from "react";
import { ArrowRight } from "lucide-react";

export default function Herosection() {
  return (
    <div className="relative w-full h-[422px] px-6 md:px-12 py-10 text-white mt-[116px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/current/Section (2).svg')",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0" />

      {/* Left-Aligned Text Content */}
      <div className="relative z-10 flex flex-col items-start text-left h-full justify-center px-4 sm:px-8 md:px-16">
        <h2
          className="max-w-[950px] text-white font-bold text-[34px] leading-[41px] mb-4"
          style={{
            fontFamily: '"Open Sans", sans-serif',
          }}
        >
          RAVC Commissions 220kV Transmission Line in Gujarat

        </h2>

        <p className="text-white font-normal text-[18px] mb-6 ">
          A key infrastructure boost for the region, enabling greater grid access for renewable 

          <br />
          projects.
        </p>
        <div className="mt-4 text-sm text-gray-300 flex items-center gap-2">
          <span className="hover:underline cursor-pointer">Home</span>
          <span>{">"}</span>
          <span className="text-[#DAB369] hover:underline cursor-pointer">
            Media Headlines
          </span>
          <span>{">"}</span>
          <span className="text-[#DAB369] hover:underline cursor-pointer">
            Media Headlines
          </span>
        </div>
      </div>
    </div>
  );
}
