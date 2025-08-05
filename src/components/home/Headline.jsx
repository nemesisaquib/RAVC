import React, { useState } from 'react'
import { ChevronRight, Trophy, Zap, Users, Video, FileText, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Headline() {
    const [activeTab, setActiveTab] = useState('Media Highlights');

    const tabs = [
        'Media Highlights',
        'Blog & Insights',
        // 'Featured Videos',
        'Press Coverage'
    ];

    const getTabContent = () => {
        switch (activeTab) {
            case 'Media Highlights':
                return [
                    {
                        image: "/news/RAVC Commissions 220kV Transmission_Line in Gujarat.png",
                        link: "/media-higlight",
                        icon: <Zap className="w-12 h-12 text-yellow-600" />,
                        category: "Project Milestone",
                        title: "RAVC Commissions 220kV Transmission Line for Gujarat",
                        date: "15 NOV 24",
                        description: "A key infrastructure boost for the region enabling strategic grid access for renewable projects."
                    },
                    {
                        image: "/news/RAVC Wins Govt Tender for 10MW Solar_Farm in Jharkhand.png",
                        icon: <Trophy className="w-12 h-12 text-yellow-600" />,
                        category: "Project Milestone",
                        title: "RAVC Wins Solar Tender for 100MW Solar Farm in Jharkhand",
                        date: "12 NOV 24",
                        link: "/media-higlight",
                        description: "Strengthening our presence in eastern India's green energy corridor."
                    },
                    {
                        image: "/news/Featured_ _Top 50 Emerging EPCs in_India_ – RenewIndia Magazine.png",
                        icon: <Users className="w-12 h-12 text-yellow-600" />,
                        category: "Project Milestone",
                        title: "Featured: \"Top 50 Emerging EPCs in India\" - Renewables Magazine",
                        date: "08 NOV 24",
                        link: "/media-higlight",
                        description: "A proud industry acknowledgement of our execution excellence and growth trajectory."
                    }
                ];
            case 'Blog & Insights':
                return [
                    {
                        image: "/media/The True ROI of Rooftop Solar for Commercial Buildings.png",
                        link: "/blog-insights",
                        icon: <FileText className="w-12 h-12 text-yellow-600" />,
                        category: "Industry Insight",
                        title: "The Future of Solar Energy in India: Market Trends and Opportunities",
                        date: "20 NOV 24",
                        description: "Deep dive into emerging trends shaping India's renewable energy landscape and RAVC's strategic positioning."
                    },
                    {
                        image: "/media/Solar Pumps_ The Engine Behind Rural Water Security India.png",
                        link: "/blog-insights",
                        icon: <Zap className="w-12 h-12 text-yellow-600" />,
                        category: "Technical Article",
                        title: "Optimizing Solar Farm Performance: Best Practices from RAVC",
                        date: "18 NOV 24",
                        description: "Technical insights on maximizing efficiency and ROI in large-scale solar installations."
                    },
                    {
                        image: "/media/Understanding the New MNRE Guidelines.png",
                        link: "/blog-insights",
                        icon: <Users className="w-12 h-12 text-yellow-600" />,
                        category: "Leadership Article",
                        title: "Building Sustainable Communities Through Clean Energy",
                        date: "15 NOV 24",
                        description: "How RAVC is contributing to India's sustainable development goals through innovative energy solutions."
                    }
                ];
            case 'Press Coverage':
                return [
                    {
                        icon: <Newspaper className="w-12 h-12 text-yellow-600" />,
                        category: "Press Release",
                        title: "RAVC Announces Strategic Partnership with Leading Technology Provider",
                        date: "25 NOV 24",
                        description: "New partnership aims to enhance solar technology capabilities and expand market reach."
                    },
                    {
                        icon: <Newspaper className="w-12 h-12 text-yellow-600" />,
                        category: "Media Coverage",
                        title: "Economic Times Features RAVC's Growth Story",
                        date: "23 NOV 24",
                        description: "National media highlights RAVC's rapid expansion and contribution to India's renewable energy sector."
                    },
                    {
                        icon: <Newspaper className="w-12 h-12 text-yellow-600" />,
                        category: "Industry Recognition",
                        title: "RAVC Receives Excellence Award at Solar India Conference",
                        date: "21 NOV 24",
                        description: "Recognition for outstanding contribution to India's solar energy development and innovation."
                    }
                ];
            default:
                return [];
        }
    };

    return (
        <div className="relative min-h-[948px] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/home/headline.png')"
            }}>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-opacity-60 bg-black/50"></div>
            <div className="hidden md:block absolute right-10 top-5 z-30">
                <img
                    src="/logo3.svg"
                    alt="Decorative Icon"
                    className="object-cover bg-transparent h-[144px] w-[171.243px]"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen px-4 sm:px-6 py-8 sm:py-12">
                {/* Header Section */}
                <div className="mb-8 px-2 sm:px-4 md:px-8 lg:px-16 text-left">
                    <h1
                        className="text-[#DAB369] mb-4 font-bold text-[24px] sm:text-[26px] md:text-[30px] lg:text-[34px] leading-tight capitalize"
                        style={{
                            fontFamily: "'Open Sans', sans-serif"
                        }}
                    >
                        RAVC in the Headlines
                    </h1>

                    <p
                        className="text-white text-[16px] sm:text-[18px] md:text-lg lg:text-xl leading-relaxed lg:leading-[30px] max-w-4xl capitalize"
                        style={{
                            fontFamily: "'Open Sans', sans-serif"
                        }}
                    >
                        From milestone installations to strategic partnerships and recognitions
                        — here's how RAVC is making news as India's fast-rising solar force
                    </p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-8 sm:mb-12 px-2">
                    <div
                        className="bg-white bg-opacity-90 rounded-full px-2 py-1 w-full max-w-7xl"
                        style={{
                            minHeight: "69px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <div className="flex flex-wrap justify-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 lg:gap-[10px]">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-medium text-[10px] xs:text-xs sm:text-sm transition-colors duration-200 ${activeTab === tab
                                        ? 'text-[#DAB369]'
                                        : 'text-gray-600 hover:bg-gray-100'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#DAB369] rounded-full"></span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* News Cards Grid */}
                <div className="flex justify-center px-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-[12px] mb-8 sm:mb-12 w-full max-w-7xl">
                        {getTabContent().map((card, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden shadow-xl w-full max-w-[437px] mx-auto"
                            >
                                <div className="h-full flex flex-col">
                                    <div
                                        className="flex items-center justify-center bg-[#F9D982]/20 rounded-t-lg mb-4"

                                    >
                                        <img
                                            src={card.image} // 👈 Make sure `card.image` contains image path like '/icons/solar.svg'
                                            alt="Card Icon"
                                            className="object-contain h-full"
                                        />
                                    </div>


                                    <div className="p-3 sm:p-4 flex flex-col space-y-3 sm:space-y-4 flex-grow">
                                        <div
                                            className="bg-[#FEF7E6] text-[#DAB369] text-xs sm:text-sm font-medium flex items-center justify-center px-3 py-2"
                                            style={{
                                                maxWidth: '135.27px',
                                                height: '31.34px',
                                                borderRadius: '50px',
                                            }}
                                        >
                                            {card.category}
                                        </div>

                                        <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                                            {card.title}
                                        </h3>

                                        <div className="text-xs text-gray-500 uppercase tracking-wide">
                                            {card.date}
                                        </div>

                                        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                            {card.description}
                                        </p>

                                        <div className="mt-auto">
                                            <Link to={card.link}>
                                                <button
                                                    className="text-white cursor-pointer p-3 sm:p-4 rounded-lg font-medium text-sm bg-[#DAB369] flex items-center transition-colors duration-200 hover:bg-[#c19d5a]"
                                                    type="button"
                                                >
                                                    Read More
                                                    <ChevronRight className="w-4 h-4 ml-1" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="flex px-4 sm:px-8 lg:px-24 ">
                    <Link to={'/news-media'}>
                    <button className="flex items-center cursor-pointer space-x-2 bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-semibold text-sm sm:text-base">
                        <span>View All Press Releases</span>
                        <ChevronRight size={18} />
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}