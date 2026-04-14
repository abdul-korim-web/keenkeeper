import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="py-10 px-5 flex flex-col justify-center items-center space-y-[30px] bg-[#244d3f]">
      <div className="flex flex-col justify-center items-center space-y-[24px]">
        <h2 className="text-[40px] text-white font-bold">KeenKeeper</h2>
        <p className="text-white/70 text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div>
          <div className="flex flex-col items-center space-y-5">
            <h2 className="text-[20px] text-white">Social Links</h2>
            <ul className=" flex space-x-4  items-center ">
              <li className="p-2 bg-white rounded-full">
                <a
                  href="https://www.facebook.com/abdulkorimweb"
                  target="_blank"
                >
                  {" "}
                  <FaFacebookF />
                </a>
              </li>
              <li className="p-2 bg-white rounded-full">
                <a href="https://github.com/abdul-korim-web" target="_blank">
                  {" "}
                  <FaGithub />
                </a>
              </li>
              <li className="p-2 bg-white rounded-full">
                <a
                  href="https://www.linkedin.com/in/abdul-korim-webdeveloper"
                  target="_blank"
                >
                  {" "}
                  <CiLinkedin />
                </a>
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
      {/* footer copyright  */}
      <div className="flex mt-2 flex-col md:flex-row md:justify-between md:items-center md:w-[1200px] space-y-3  items-center">
        <p className="text-[#fafafa]/70">
          © 2026 KeenKeeper. All rights reserved.
        </p>
        <ul className="flex space-x-3">
          <li className="text-white/70 text-sm">
            <a href="#">Privacy Policy </a>
          </li>
          <li className="text-white/70 text-sm">
            {" "}
            <a href="#"> Cookies</a>
          </li>
          <li className="text-white/70 text-sm">
            {" "}
            <a href="#"> Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
