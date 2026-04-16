import React, { useContext, useEffect, useState } from "react";
import { inVoicecontext } from "../Context/InvoiceContext";
import NoTimeline from "./NoTimeline";

const TimeLines = () => {
  const { inVoice } = useContext(inVoicecontext);
  const [selectValue, setSelectValue] = useState("All");
  const [filterInVoice, setFilterInVoice] = useState([]);



  // when no Timeline  data exit
  if (!inVoice || inVoice.length==0 ) {
    return <NoTimeline/>
}

  useEffect(() => {
    if (!selectValue || selectValue=="All") {
      setFilterInVoice(inVoice);
      return;
    }

    const filtered = inVoice.filter((item) => item?.comType === selectValue);

    setFilterInVoice(filtered);
  }, [selectValue, inVoice]);

  return (
    <div className="max-w-[1200px] mx-auto my-[80px] px-5 ">
      <h2 className="text-[40px] font-bold text-[#1F2937]">Timeline</h2>
      <select
        onChange={(e) => setSelectValue(e.target.value)}
        defaultValue="Filter timeline"
        className="select border outline-none border-[#9696A2]/30 mt-3 bg-[#F8FAFC] cursor-pointer "
      >
        <option  className="text-[#64748b]">
          All
        </option>
        <option>Video</option>
        <option>Text</option>
        <option>Call</option>
      </select>
      <div className="mt-6 flex flex-col space-y-[24px]  ">
        {filterInVoice?.map(((item,index)=>(
            <div key={index} className="flex space-x-4 bg-white p-4 rounded-2xl shadow-sm ">
                <div className="flex justify-center items-center">
                    <img className="w-[40px] h-[40px]" src={item?.image} alt={item?.comType} />

                </div>
                
                   <div className="flex flex-col space-y-1">
                     <h2 className="text-[18px] font-medium text-[#244d3f]">{item?.comType} <span className="font-normal text-[#64748b]">with</span> <span className="font-normal text-[#64748b]">{item?.name}</span></h2>
                     <p className="text-[#64748b] font-medium">{item?.time}</p>
                   </div>
            </div>
        )))}
      </div>
    </div>
  );
};

export default TimeLines;
