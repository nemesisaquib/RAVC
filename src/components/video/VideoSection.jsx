import React from "react";
import { PlayCircle } from "lucide-react";

const videoData = [
  { id: 1, thumbnail: "/videos/thumb1.jpg", video: "/videos/video1.mp4" },
  { id: 2, thumbnail: "/videos/thumb2.jpg", video: "/videos/video2.mp4" },
  { id: 3, thumbnail: "/videos/thumb3.jpg", video: "/videos/video3.mp4" },
  { id: 4, thumbnail: "/videos/thumb4.jpg", video: "/videos/video4.mp4" },
  { id: 5, thumbnail: "/videos/thumb5.jpg", video: "/videos/video5.mp4" },
  { id: 6, thumbnail: "/videos/thumb6.jpg", video: "/videos/video6.mp4" },
];

const VideoSection = () => {
  return (
    <section className="py-6 px-4 md:px-8 ml-14">
      <h2 className="text-[34px] font-semibold text-[#D4A72C] mb-2">
        Watch Our Work in Motion
      </h2>
      <p className="text-gray-700 mb-8 text-[18px]">
        Embed short-form content like:
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {videoData.map((item) => (
          <div
            key={item.id}
            className="relative  rounded-lg overflow-hidden shadow-lg"
            style={{ width: "400px", height: "500px" }}
          >
            {/* Video Thumbnail */}
            <img
              src={item.thumbnail}
              alt={`Video ${item.id}`}
              className="w-full h-full object-cover"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex justify-center items-center  bg-opacity-30">
              <PlayCircle size={48} className="text-white hover:scale-110 transition" />
            </div>

            {/* Logo in Bottom-Right */}
            <img
              src="/logo.svg" // replace with your actual logo path
              alt="Logo"
              className="absolute bottom-4 right-4 w-40 h-40 object-contain"
            />
          </div>
        ))}
      </div>
     <div className="w-full flex justify-center my-10">
                <div className="flex items-center w-full max-w-8xl">
                    <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
                    <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                    <img
                        src="/logo.svg"
                        alt="Logo"
                        className="h-10 w-auto mx-4"
                        style={{ width: 40 }}
                    />
                    <div className="flex-grow h-[1px] bg-[#CDCDCD]"></div>
                    <div className="w-2 h-2 bg-[#CDCDCD] rounded-full"></div>
                </div>
            </div>

    </section>
  );
};


export default VideoSection