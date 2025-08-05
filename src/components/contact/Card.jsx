import React, { useRef } from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaClock,
    FaDirections,
    FaCalendarAlt,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";

export default function ContactCards() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const cardClasses =
        "w-[320px] h-[270px] bg-white border border-yellow-300 rounded-lg shadow-md p-4 relative overflow-hidden flex flex-col justify-between";

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    const cards = [
        {
            icon: <FaMapMarkerAlt />,
            title: "Corporate Office",
            content: (
                <>
                    4th floor, Bhavya Corporate Tower, <br />
                    Vibhuti Khand, Gomti Nagar, <br />
                    Lucknow, Uttar Pradesh 226010
                </>
            ),
            actionText: "Get Directions",
            actionIcon: <FaDirections className="mr-1" />,
            actionHref: "https://www.google.com/maps?q=Bhavya+Corporate+Tower,+Vibhuti+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010",
        },
        {
            icon: <FaPhoneAlt />,
            title: "Phone",
            content: "+91 8874545556",
            actionText: "Call Now",
            actionIcon: <FaPhoneAlt className="mr-1" />,
            actionHref: "tel:+918874545556",
        },
        {
            icon: <FaEnvelope />,
            title: "Email",
            content: "info@ravc.in",
            actionText: "Send Email",
            actionIcon: <FaEnvelope className="mr-1" />,
            actionHref: "mailto:info@ravc.in",
        },
        {
            icon: <FaClock />,
            title: "Office Hours",
            content: (
                <>
                    Monday to Saturday<br />
                    10:00 AM to 7:00 PM<br />
                    Sunday – Closed
                </>
            ),
            actionText: "Add to Calendar",
            actionIcon: <FaCalendarAlt className="mr-1" />,
            actionHref: "#contact",
        },
    ];

    return (
        <div
            ref={ref}
            className="w-full flex flex-wrap justify-center gap-4 p-4"
        >
            {cards.map((card, index) => (
                <motion.div
                    key={index}
                    className={cardClasses}
                    custom={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div>
                        <div className="text-[32px] font-[900] text-[#DAB369] mb-2">
                            {card.icon}
                        </div>
                        <h3 className="text-[20px] font-[700] text-[#121212]">{card.title}</h3>
                        <p className="text-[16px] font-[600] text-[#000000] mt-1">
                            {card.content}
                        </p>
                    </div>
                    <a
                        href={card.actionHref}
                        className="inline-flex items-center text-sm text-black font-semibold"
                    >
                        {card.actionIcon}
                        <p className="text-[16px] font-[600] text-[#121212]">
                            {card.actionText}
                        </p>
                    </a>
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#F9D982D4] rounded-tl-full" />
                </motion.div>
            ))}
        </div>
    );
}
