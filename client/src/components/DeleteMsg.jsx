import React, { useContext } from "react";
// import { Context } from "../context/Context";
// import axios from "axios";

const DeleteMsg = ({ onCancel, onDelete }) => {
  return (
    <div className=" absolute  z-10 flex  flex-col justify-center items-center w-screen h-[92vh] backdrop-brightness-50 ">
      <div className="bg-white flex  flex-col justify-center items-center w-90 h-80 border-3 border-gray-300 rounded-xl">
        <i className=" m-4 fa-regular fa-circle-xmark text-6xl text-[#ec3c3c]"></i>

        <p className="mb-2 font-semibold text-2xl">Are you sure?</p>
        <p>You won't be able to revert this.</p>
        <div>
          <button
            className="px-4 py-1 border-2 font-semibold text-gray-600 border-gray-400 cursor-pointer rounded-lg m-6"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="px-4 py-1 border-2 font-semibold  border-red-700 text-white cursor-pointer rounded-lg m-6 bg-red-500"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteMsg;
