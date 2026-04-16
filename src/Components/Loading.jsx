import React from "react";
import { TailSpin } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">

      <div className="flex flex-col items-center gap-3">

        <TailSpin
          height="60"
          width="60"
          color="#244d3f"
          ariaLabel="loading"
        />

        <p className="text-[#64748b] text-sm">
          Loading...
        </p>

      </div>

    </div>
  );
};

export default Loading;