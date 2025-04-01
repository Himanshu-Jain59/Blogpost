import React, { useContext, useRef } from "react";
import { Context } from "../context/Context";
import axios from "axios";
import { toast } from "react-toastify";

const EnterPass = ({ cancel, confirm }) => {
  // console.log(cancel, confirm);

  const passwordRef = useRef();
  const { user } = useContext(Context);
  const notify = () =>
    toast.error("Invalid Credentials", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });

  const checkPass = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/login/", {
        username: user.username,
        password: passwordRef.current.value,
      });
      confirm();
    } catch (err) {
      if (err.response.data) {
        notify();
      }
    }
  };
  return (
    <div className=" absolute  z-10 flex  flex-col justify-center items-center w-screen h-[92vh] backdrop-brightness-50 ">
      <div className="bg-white flex  flex-col justify-center items-center w-90 h-80 border-3 border-gray-300 rounded-xl">
        <i className=" m-4 fa-solid fa-lock text-6xl text-gray-700 "></i>
        <p className="mb-2 font-semibold text-2xl">
          Enter Password to continue
        </p>
        <form onSubmit={checkPass}>
          <input
            type="password"
            className="my-2 p-2 rounded-lg outline-0 w-full border-2 text-xl border-gray-400"
            ref={passwordRef}
          />
          <div>
            <button
              className="px-4 py-1 border-2 font-semibold text-gray-600 border-gray-400 cursor-pointer rounded-lg m-6"
              onClick={cancel}
            >
              Cancel
            </button>

            <button
              className="px-4 py-1 border-2 font-semibold  border-emerald-700 text-white cursor-pointer rounded-lg m-6 bg-emerald-500"
              // onClick={checkPass}
              type="submit"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnterPass;
