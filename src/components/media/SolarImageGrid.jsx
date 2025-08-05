import React from "react";
import { FaYoutube } from "react-icons/fa";

const SolarImageGrid = () => {
    return (
        <div className="bg-white p-4">
            <div className="max-w-screen-3xl w-full mx-auto px-4 sm:px-4 md:px-14 lg:px-20 xl:px-44 flex flex-col gap-4">
                {/* Image Grid */}
                <div className="grid grid-rows-[280px_280px] gap-4 w-full">
                    {/* Top Grid with 2 Images */}
                    <div className="grid grid-cols-[25%_75%] gap-4 ">
                        <div className="relative rounded overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                                alt="Solar Panel 1"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 right-2">
                                <img
                                    src="logo.svg"
                                    alt="logo"
                                    className="w-16 h-16"
                                />
                            </div>
                        </div>
                        <div className="relative rounded overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80"
                                alt="Solar Panel 2"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 right-2">
                                <img
                                      src="logo.svg"
                                    alt="logo"
                                    className="w-16 h-16"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Grid with 3 Images */}
                    <div className="grid grid-cols-[25%_25%_50%] gap-2">
                        <div className="relative rounded overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                                alt="Solar Panel 3"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 right-2">
                                <img
                                     src="logo.svg"
                                    alt="logo"
                                    className="w-16 h-16"
                                />
                            </div>
                        </div>
                        <div className="relative rounded overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80"
                                alt="Solar Panel 4"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 right-2">
                                <img
                               src="logo.svg"
                                    alt="logo"
                                    className="w-16 h-16"
                                />
                            </div>
                        </div>
                        <div className="relative rounded overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80"
                                alt="Solar Panel 5"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-2 right-2">
                                <img
                                    src="logo.svg"
                                    alt="logo"
                                    className="w-16 h-16"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Button below the grid, centered */}
                <div className="flex mt-6">
                    <button
                        className="text-black font-semibold rounded shadow transition flex items-center justify-center gap-[19px]"
                        style={{
                            width: "243px",
                            height: "60px",
                            border: "1px solid #121212",
                        }}
                    >
                        Watch on YouTube
                        <FaYoutube size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SolarImageGrid;

