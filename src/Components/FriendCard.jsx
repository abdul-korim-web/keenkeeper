import React from 'react';
import { useNavigate } from 'react-router-dom';

const FriendCard = ({friend}) => {
    const navigate = useNavigate()

    return (
        <div onClick={()=>navigate(`/friend/${friend?.id}`)} className='bg-white p-6 rounded-[8px] shadow-sm flex flex-col items-center space-y-[8px] w-full max-w-[260px]' >
            <div className='w-[80px] h-[80px] '>
                <img className='w-full h-full rounded-full object-cover' src={friend?.picture} alt={friend?.name} srcset="" />
            </div>
            <h2 className='text-[20px] text-[#1F2937] font-semibold'>{friend?.name}</h2>
            <p className='text-[#64748B] text-[14px] '>{friend?.days_since_contact} d ago</p>
            <div className='flex flex-wrap justify-center items-center gap-1'>
                {friend?.tags.map((tag,index)=>(
                    <p key={index} className='p-2 bg-[#cbfadb] rounded-[100px] text-[12px]'>{tag}</p>
                ))}
            </div>
            <p className={ `p-2 ${friend?.status=="on-track" ? "bg-[#244d3f] font-medium text-[#244D3F]" : friend?.status=="almost due" ? "bg-[#EFAD44]":"bg-[#ef4444]"} rounded-[100px] text-[12px] text-white font-medium`}>{friend?.status}</p>
            
            
        </div>
    );
}

export default FriendCard;
