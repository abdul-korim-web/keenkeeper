import React from 'react';

const CounterCard = () => {
    const counterData = [
        {
            name:"Total Friends",
            count:10
        },
        {
            name:"On Track",
            count:3
        },
        {
            name:"Need Attention",
            count:6
        },
        {
            name:"Interactions This Month",
            count:12
        },

    ]
    return (
        <div className='py-10 px-5 grid grid-cols-2 md:grid-cols-4  justify-center    px-5 gap-[10px] max-w-[1200px] mx-auto'>
           {counterData?.map((item,index)=>(
            <div key={index} className='bg-white p-[32px] flex flex-col justify-center items-center space-y-1 max-w-[260px]'>
                <h2 className='text-[25px] font-semibold text-[#244d3f]'>{item?.count}</h2>
                <p className='text-[18px] text-[#64748b] text-center'>{item?.name}</p>

            </div>
           ))} 
        </div>
    );
}

export default CounterCard;
