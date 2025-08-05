import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <span className="loader"></span>
    </div>
  );
};

export default Loader;