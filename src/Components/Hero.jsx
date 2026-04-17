import React from "react";
import { FaPlus } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex flex-col min-h-[50vh] justify-center items-center px-5 space-y-[16px] md:min-h-[20vh] pb-10  mt-20 md:mt-30">
      <h2 className="text-[#1F2937] text-2xl font-bold  text-center md:text-[48px]  ">
        Friends to keep close in your life
      </h2>
      <p className="text-center text-[#64748b] md:w-[30%]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="bg-[#244D3F] text-white flex items-center py-3 px-4 rounded-[4px] space-x-2 cursor-pointer transition-all duration-300 hover:bg-[#1b3a30] hover:scale-105">
        <FaPlus />
        <span>Add a Friend</span>
      </button>
    </div>
  );
};

export default Hero;
