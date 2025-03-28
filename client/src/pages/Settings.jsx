import React from "react";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  return (
    <div className="flex font-lora ml-10 mt-5">
      <div className="flex-9 p-5">
        <div className="flex items-center justify-between">
          <span className="text-3xl text-amber-500">Update Your Account</span>
          <span className=" mb-1 text-base font-medium text-red-500 cursor-pointer">
            Delete Your Account
          </span>
        </div>
        <form className="flex flex-col mt-7 text-lg gap-1.5">
          <label htmlFor="setProfileImg">Profile Picture</label>
          <div className="flex items-center my-3">
            <img
              className="w-17 h-17 rounded-full"
              src="https://i.scdn.co/image/ab6761610000e5ebe4bae1cd1803402a906b61ba"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="relative top-6 right-6 p-1 text-white text-xl rounded-full bg-amber-500 fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" className="hidden" />
          </div>
          <label>Username</label>
          <input
            className="my-2 text-gray-700 h-8 border-b-2 border-gray-300 outline-0"
            type="text"
            placeholder="Naruto Uzumaki"
          />
          <label>Email</label>
          <input
            className="my-2 text-gray-700 h-8 border-b-2 border-gray-300 outline-0"
            type="email"
            placeholder="Naruto@Uzumaki.com"
          />
          <label>Password</label>
          <input
            className="my-2 text-gray-700 h-8 border-b-2 border-gray-300 outline-0"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-4 p-3 bg-emerald-500 rounded-full text-white font-semibold text-xl tracking-wider">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
