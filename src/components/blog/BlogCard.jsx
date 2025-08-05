import { ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const newsData = [
  {
    tag: "Project Milestone",
    title: "The True ROI of Rooftop Solar for Commercial Buildings",
    date: "February 2025",
    description:
      "By RAVC Strategy Team A 5-year cashflow model, payback period insights, and government schemes decoded",
    image: "/media/The True ROI of Rooftop Solar for Commercial Buildings.png",
  },
  {
    tag: "Business Win",
    title: "Solar Pumps: The Engine Behind Rural Water Security",
    date: "December 2024",
    description:
      "Field Insight | CSR Impact Series Stories from Eastern UP where RAVC pumps are driving community irrigation",
    image: "/media/Solar Pumps_ The Engine Behind Rural Water Security India.png",
  },
  {
    tag: "Recognition",
    title: 'Understanding the New MNRE Guidelines for 2025',
    date: "November 2024",
    description:
      "Policy Watch What solar developers and institutional clients need to know",
    image: "/media/Understanding the New MNRE Guidelines.png",
  },
    {
    tag: "Project Milestone",
    title: "The True ROI of Rooftop Solar for Commercial Buildings",
    date: "February 2025",
    description:
      "By RAVC Strategy Team A 5-year cashflow model, payback period insights, and government schemes decoded",
    image: "/media/The True ROI of Rooftop Solar for Commercial Buildings.png",
  },
  {
    tag: "Business Win",
    title: "Solar Pumps: The Engine Behind Rural Water Security",
    date: "December 2024",
    description:
      "Field Insight | CSR Impact Series Stories from Eastern UP where RAVC pumps are driving community irrigation",
    image: "/media/Solar Pumps_ The Engine Behind Rural Water Security India.png",
  },
  {
    tag: "Recognition",
    title: 'Understanding the New MNRE Guidelines for 2025',
    date: "November 2024",
    description:
      "Policy Watch What solar developers and institutional clients need to know",
    image: "/media/Understanding the New MNRE Guidelines.png",
  },
    {
    tag: "Project Milestone",
    title: "The True ROI of Rooftop Solar for Commercial Buildings",
    date: "February 2025",
    description:
      "By RAVC Strategy Team A 5-year cashflow model, payback period insights, and government schemes decoded",
    image: "/media/The True ROI of Rooftop Solar for Commercial Buildings.png",
  },
  {
    tag: "Business Win",
    title: "Solar Pumps: The Engine Behind Rural Water Security",
    date: "December 2024",
    description:
      "Field Insight | CSR Impact Series Stories from Eastern UP where RAVC pumps are driving community irrigation",
    image: "/media/Solar Pumps_ The Engine Behind Rural Water Security India.png",
  },
  {
    tag: "Recognition",
    title: 'Understanding the New MNRE Guidelines for 2025',
    date: "November 2024",
    description:
      "Policy Watch What solar developers and institutional clients need to know",
    image: "/media/Understanding the New MNRE Guidelines.png",
  },
];

const BlogCard = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 sm:pl-4 lg:pl-12">
          <h2 className="text-[28px] md:text-[34px] font-bold text-[#D4A72C] mb-2">
            From the RAVC Knowledge Desk

          </h2>
          <p className="text-[#555] text-[16px] md:text-[18px] max-w-2xl">
            Our blog features curated insights, tech explainers, policy breakdowns, and on-ground learnings — so you stay ahead in solar.

          </p>
        </div>

        {/* Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsData.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-[437.33px] h-[500.8px] bg-white border rounded-lg shadow-sm flex flex-col overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <span className="bg-[#F7EFD9] text-[#D4A72C] text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3 w-fit">
                    {item.tag}
                  </span>
                  <h3 className="text-[18px] font-bold text-[#121212] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{item.date}</p>
                  <p className="text-[16px] text-[#333] mb-4 flex-grow">{item.description}</p>
                  <Link to={'/blog-insights'}>
                  <button
                    className="bg-[#DAB369] text-white cursor-pointer font-semibold rounded-md hover:opacity-90 transition flex justify-center items-center"
                    style={{
                      width: "144.16px",
                      height: "52.78px",
                      padding: "14.8px 28.466px",
                      fontFamily: '"Open Sans", sans-serif',
                      flexShrink: 0,
                    }}
                  >
                    Read More
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-8 flex justify-start sm:pl-4 lg:pl-12">
          <button className="flex items-center gap-2 border border-black text-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition-all font-semibold">
            Explore All Articles  <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};



export default BlogCard