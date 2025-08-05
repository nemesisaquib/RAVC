import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ComingSoon() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-white via-[#fff8f0] to-[#fcebd3] flex items-center justify-center px-4">
                <div className="max-w-2xl text-center">
                    <img
                        src="/come.png"
                        alt="Coming Soon Illustration"
                        className="w-full max-w-md mx-auto mb-8 "
                    />

                    <p className="text-lg text-gray-600 mb-6">
                        We're working hard to launch this page very soon. Stay tuned!
                    </p>
                    <Link
                        to="/"
                        className="inline-block bg-[#DAB369] text-white px-6 py-3 rounded-full shadow-md hover:bg-[#c59e4f] transition duration-300"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
