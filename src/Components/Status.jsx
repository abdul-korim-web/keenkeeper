import React, { useContext } from "react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { inVoicecontext } from "../Context/InvoiceContext";

const Status = ({ isAnimationActive = true }) => {
    const {chartData} = useContext(inVoicecontext)

  return (
    <div className="w-full max-w-[1200px] mx-auto min-h-screen p-6 mt-[80px] flex flex-col space-y-6">
      
      <h2 className=" font-bold  text-[#1F2937] text-5xl">
        Friendship Analytics
      </h2>

      <div className="p-[32px] rounded-[8px] bg-white">
        <h2 className="text-[20px] font-medium text-[#244d3f]">By Interaction Type</h2>
        <ResponsiveContainer width="100%" height="400">
        <PieChart>
          
          <Pie
            data={chartData}
            dataKey="value"
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            cornerRadius={8}
            isAnimationActive={isAnimationActive}
          >
            {chartData.map((item, index) => (
              <Cell key={index} fill={item.color} />
            ))}
          </Pie>
          <Tooltip />
          

        </PieChart>
      </ResponsiveContainer>
      <div className="flex space-x-5 justify-center items-center">
            <div className="flex space-x-2 items-center ">
                <span className="w-[8px] h-[8px] bg-[#7e35e1] rounded-[100000px]"></span>
                <p  className="text-[#64748B] ">Text</p>
            </div>
            <div className="flex space-x-2 items-center ">
                <span className="w-[8px] h-[8px] bg-[#244d3f] rounded-[100000px]"></span>
                <p className="text-[#64748B] ">Call</p>
            </div>
            <div className="flex space-x-2 items-center ">
                <span className="w-[8px] h-[8px] bg-[#37a163] rounded-[100000px]"></span>
                <p className="text-[#64748B] ">Video</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Status;