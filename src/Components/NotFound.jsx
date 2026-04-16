import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] px-4 text-center">

      <h1 className="text-[80px] font-bold text-[#244d3f]">404</h1>
      <h2 className="text-2xl font-semibold text-[#1F2937]">
        Page Not Found
      </h2>

      <p className="text-[#64748b] mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#244d3f] text-white rounded hover:opacity-90 transition"
      >
        Go Home
      </Link>

    </div>
  );
};

export default NotFound;