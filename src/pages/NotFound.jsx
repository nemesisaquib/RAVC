import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen  text-white flex flex-col justify-center items-center px-4 py-10 text-center">
      <img
        src="/images/404.png"
        alt="404 Not Found"
        className="max-w-md w-full mb-6 animate-fade-in"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">Page Not Found</h1>
      <p className="text-lg mb-6 text-gray-900">Oops! We couldn't find the page you're looking for.</p>
      <Link
        to="/"
        className="bg-[#DAB369] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#c19e56] transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
