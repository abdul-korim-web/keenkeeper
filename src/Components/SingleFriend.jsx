import React, { use, useContext } from "react";
import { useParams } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";   
import { LuMessageSquareMore } from "react-icons/lu"; 
import { FaVideo } from "react-icons/fa";
import { inVoicecontext } from "../Context/InvoiceContext";
const fetchFriensdData = fetch("/data/friends.json").then((res) => res.json());
const SingleFriend = () => {
  const friends = use(fetchFriensdData);
  const { id } = useParams();
  const friend = friends.find((data) => data?.id == id);
// invoice 
const {setInVoice,inVoice} = useContext(inVoicecontext)
const handaleCommunication = (comType,name)=>{
    let image = ""
    if (comType =="Text") {
        image= "./images/text.png"
    } else if (comType=="Video"){
        image ="./images/video.png"
    } else{
        image="./images/call.png"
    }
    const date = new Date()
    const formateDate = date.toLocaleString("en-US",{
        month:"long",
        day:"numeric",
        year:"numeric"
    })
    setInVoice([...inVoice,{comType,name,image,time:formateDate}])
    console.log(inVoice);
}
  return (
    <div className="px-5 grid grid-cols-1 lg:grid-cols-12 grid-rows-12 max-w-[1200px] mx-auto  my-20 gap-[24px]">
      <div className=" col-span-12 row-span-12 lg:col-span-4 lg:row-span-12 ">
        <div className="bg-white p-6 rounded-[8px] shadow-sm flex flex-col items-center space-y-[8px] w-full ">
          <div className="w-[80px] h-[80px] ">
            <img
              className="w-full h-full rounded-full object-cover"
              src={friend?.picture}
              alt={friend?.name}
              srcset=""
            />
          </div>
          <h2 className="text-[20px] text-[#1F2937] font-semibold">
            {friend?.name}
          </h2>
          <p
            className={`p-2 ${friend?.status == "on-track" ? "bg-[#244d3f] font-medium text-[#244D3F]" : friend?.status == "almost due" ? "bg-[#EFAD44]" : "bg-[#ef4444]"} rounded-[100px] text-[12px] text-white font-medium`}
          >
            {friend?.status}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-1">
            {friend?.tags.map((tag, index) => (
              <p
                key={index}
                className="p-2 bg-[#cbfadb] rounded-[100px] text-[12px]"
              >
                {tag}
              </p>
            ))}
          </div>
          <p className="text-[#64748b] font-medium text-center">
            "{friend?.bio}"
          </p>
          <p className="text-[#64748b] font-medium text-center">
            Preferred: email
          </p>
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          {/* button on profile  */}
          <button className="btn p-4 rounded-[4px] bg-white text-[#1F2937] font-medium">
            <RiNotificationSnoozeLine />
            Snooze 2 weeks
          </button>
          <button className="btn p-4 rounded-[4px] bg-white text-[#1F2937] font-medium">
            <FaArchive />
            Archive
          </button>
          <button className="btn p-4 rounded-[4px] bg-white text-[#EF4444] font-medium">
            <RiDeleteBin6Line />
            Delete
          </button>
        </div>
      </div>
      <div className="col-span-12  lg:col-span-8 lg:row-span-4 flex space-x-[24px] ">
        <div className="bg-white w-full py-[20px] px-[5px] border border-white flex flex-col items-center justify-center shadow-sm rounded-[8px] space-y-1">
          <h2 className="text-[#244d3f] text-[30px] font-semibold ">
            {friend?.days_since_contact}
          </h2>
          <p className=" lg:text-[18px] text-[#64748b]">Days Since Contact</p>
        </div>
        <div className="bg-white w-full py-[32px] px-[16px] border border-white flex flex-col items-center justify-center shadow-sm rounded-[8px] space-y-1">
          <h2 className="text-[#244d3f] text-[30px] font-semibold ">
            {friend?.goal}
          </h2>
          <p className="lg:text-[18px] text-[#64748b]">Goal (Days)</p>
        </div>
        <div className="bg-white w-full py-[32px] px-[16px] border border-white flex flex-col items-center justify-center shadow-sm rounded-[8px] space-y-1">
          <h2 className="text-[#244d3f] text-[30px] font-semibold ">
            {friend?.next_due_date}
          </h2>
          <p className="lg:text-[18px] text-[#64748b]">Next Due</p>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8 lg:row-span-3 bg-white p-6 rounded-lg shadow flex flex-col space-y-4">
        <div className="flex justify-between ">
          <h2 className="text-[#244d3f] font-medium text-[20px]">
            Relationship Goal
          </h2>
          <button className="btn p-3 rounded-[4px] bg-[#f8fafc] text-[#1F2937] font-medium">
            Edit
          </button>
        </div>
        <p className="text-[18px] text-[#64748b]">
          Connect every{" "}
          <span className="text-[#1F2937] font-bold">30 days</span>
        </p>
      </div>
      <div className="col-span-12 lg:col-span-8 lg:row-span-5 flex flex-col space-y-4 bg-white p-6">
        <h2 className="text-[#244d3f] text-[20px] font-medium ">
          Quick Check-In
        </h2>
        <div className="flex space-x-4  h-full  ">
          <div className="w-full">
            <button onClick={()=>handaleCommunication("Call",friend?.name)} className="btn p-4 rounded-[8px] bg-[#f8fafc] text-[#1F2937] font-medium w-full  h-full flex flex-col space-y-2  ">
           <IoCallOutline /> <p>Call</p>
          </button>
          </div>
        <div className="w-full">
             <button onClick={()=>handaleCommunication("Text",friend?.name)} className="btn p-4 rounded-[8px] bg-[#f8fafc] text-[#1F2937] font-medium w-full  h-full flex flex-col space-y-2  ">
            <LuMessageSquareMore  /> <p>Text</p>
          </button>
        </div>
          <div className="w-full">
            <button onClick={()=>handaleCommunication("Video",friend?.name)} className="btn p-4 rounded-[8px] bg-[#f8fafc] text-[#1F2937] font-medium w-full  h-full flex flex-col space-y-2 ">
            <FaVideo  /> <p>Video</p>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFriend;
