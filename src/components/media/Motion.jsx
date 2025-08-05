import React from "react";
import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const videoData = [
  { id: 1, thumbnail: "/videos/thumb1.jpg", video: "/videos/video1.mp4" },
  { id: 2, thumbnail: "/videos/thumb2.jpg", video: "/videos/video2.mp4" },
  { id: 3, thumbnail: "/videos/thumb3.jpg", video: "/videos/video3.mp4" },
  { id: 4, thumbnail: "/videos/thumb4.jpg", video: "/videos/video4.mp4" },
  { id: 5, thumbnail: "/videos/thumb5.jpg", video: "/videos/video5.mp4" },
  { id: 6, thumbnail: "/videos/thumb6.jpg", video: "/videos/video6.mp4" },
];

const Motion = () => {
  return (
    <section className="py-10 px-4">
      <div className="max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-44 flex flex-col gap-10">
        {/* Heading */}
        <div className="w-full">
          <h2 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-semibold text-[#D4A72C] mb-2">
            Watch Our Work in Motion
          </h2>
          <p className="text-gray-700 text-[16px] md:text-[18px]">
            Embed short-form content like:
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {videoData.map((item) => (
            <div
              key={item.id}
              className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] rounded-lg overflow-hidden shadow-lg"
            >
              {/* Thumbnail */}
              <img
                src={item.thumbnail}
                alt={`Video ${item.id}`}
                className="w-full h-full object-cover"
              />

              {/* Play Icon Overlay */}
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-30">
                <PlayCircle size={48} className="text-white hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Logo Bottom-Right */}
              <img
                src="/logo.svg"
                alt="Logo"
                className="absolute bottom-4 right-4 w-16 h-16 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="w-full">
          <Link to="/video">
            <button className="inline-flex items-center gap-2 bg-white border border-black text-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition-all font-semibold">
              See Full Gallery
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Motion;

