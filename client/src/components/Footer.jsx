import React from "react";

const Footer = ({ color }) => {
  return (
    <div
      className={` flex items-center justify-between h-[200px] ${color} p-2 px-15`}
    >
      <div className="flex flex-col gap-15 ">
        <span className="font-santaLove text-6xl ">blogpost</span>
        <span className="font-varela text-sm ">
          &copy; 2025 Blogpost | Inspire, Connect, Share
        </span>
      </div>
      <div className="flex mt-3 justify-around w-1/2">
        <div className="">
          <span className=" p-2  mt-2 font-varela text-xl/[20px] color-[#222] font-semibold text-center ">
            Company
          </span>
          <ul className="mt-1 p-2 font-varela text-base color-[#222] cursor-pointer  ">
            <li className="hover:underline">About us</li>
            <li className="hover:underline">Contact</li>
            <li className="hover:underline">Help</li>
          </ul>
        </div>
        <div className="">
          <span className=" p-2  mt-2 font-varela text-xl/[20px] color-[#222] font-semibold text-center ">
            Community
          </span>
          <ul className="mt-1 p-2 font-varela text-base color-[#222] cursor-pointer  ">
            <li className="hover:underline">Discord</li>
            <li className="hover:underline">Twitch</li>
          </ul>
        </div>
        <div className=" ">
          <span className=" p-2 font-varela text-xl/[20px] color-[#222] font-semibold text-center ">
            Follow us
          </span>
          <ul className="mt-1 p-2 font-varela text-base color-[#222] cursor-pointer ">
            <li className="hover:underline">Facebook</li>
            <li className="hover:underline">Instagram</li>
            <li className="hover:underline">Twitter</li>
          </ul>
        </div>
        <div className=" ">
          <span className=" p-2  font-varela text-xl/[20px] color-[#222] font-semibold text-center ">
            Legal
          </span>
          <ul className="mt-1 p-2 font-varela text-base color-[#222] cursor-pointer ">
            <li className="hover:underline">Terms and Conditions</li>
            <li className="hover:underline">Privacy policy</li>
            <li className="hover:underline">Cookie policy </li>
            <li className="hover:underline">Disclaimer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
