import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

const NavBar = () => {
    const navItems = [
        {
            icon: <GrHomeRounded/>,
            name:"Home",
            path:"/"
        },
        {
            icon: <IoTimeOutline/>,
            name:"Timeline",
            path:"/timeline"
        },
        {
            icon: <TfiStatsUp/>,
            name:"Stats",
            path:"/stats"
        },
    ]
  return (
    <div>
      <div className="max-lg:collapse bg-white  shadow-sm w-full rounded-md">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start md:px-[40px] lg:px-[80px] md:py-[16px]">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <a className=" text-2xl font-bold text-[#1F2937]">Keen<span className="text-[#244d3f]">Keeper</span></a>
          </div>
          <div className="navbar-end hidden lg:flex px-[80px]">
            <ul className="menu menu-horizontal px-1">
             {
                navItems?.map(item=>(
                    <li key={item?.name} className="text-[#64748B] font-semibold">
                     <span>  {item?.icon} {item?.name}</span>
                        </li>
                ))
             }
            </ul>
          </div>
          
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu flex flex-col space-y-3  w-full">
            {
                navItems?.map(item=>(
                    <li key={item?.name} className="text-[#64748B] font-semibold">
                     <span>  {item?.icon} {item?.name}</span>
                        </li>
                ))
             }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
