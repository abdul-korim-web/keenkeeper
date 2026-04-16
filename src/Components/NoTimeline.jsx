import React from "react";
import { useNavigate } from "react-router-dom";

const NoTimeline = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">

        <div className="w-16 h-16 flex items-center justify-center bg-[#f1f5f9] rounded-full mb-4">
          <span className="text-3xl">📭</span>
        </div>


        <h2 className="text-xl font-semibold text-[#1F2937]">
          No Timeline Found
        </h2>

        <p className="text-[#64748b] text-sm mt-2 max-w-[300px]">
          You don’t have any activities yet. Start connecting with your friends
          to see your timeline here.
        </p>

        <button onClick={()=>navigate(`/`)} className="btn mt-4 px-4 py-2 bg-[#244d3f] text-white rounded hover:bg-[#1e3f33] transition">
          Add Activity
        </button>
      </div>
    </div>
  );
};

export default NoTimeline;
