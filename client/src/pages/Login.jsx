import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { toast } from "react-toastify";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const notify = () =>
    toast.error("Invalid Credentials", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  const successfull = () =>
    toast.success("Login Successfull", {
      position: "top-center",
      autoClose: 1500,
      theme: "colored",
    });
  const { user, dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/api/auth/login/", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      successfull();
      // console.log(res);

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      if (err.response.data) {
        notify();
      }
      // console.error(err);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  // console.log(user);
  return (
    <div className="bg-[url('https://a-z-animals.com/media/2022/10/iStock-1298291139-1024x680.jpg')] bg-cover bg-no-repeat font-lora">
      <div className="  backdrop-blur-xs  w-full h-[92vh] flex flex-col justify-center items-center  ">
        <div className="w-2/5 border-3 p-10 flex flex-col justify-center items-center rounded-2xl">
          <form className=" w-full m-5 flex flex-col " onSubmit={handleSubmit}>
            <span className="text-5xl text-center">Login</span>
            <label className="my-2 text-2xl ml-2">Username</label>
            <input
              className="p-2 px-4 bg-white rounded-md outline-0 "
              type="text"
              placeholder="Naruto"
              ref={userRef}
            />
            <label className="my-2 text-2xl ml-2 ">Password</label>
            <input
              className="p-2 px-4 bg-white rounded-md outline-0  "
              type="password"
              placeholder="Enter password"
              ref={passwordRef}
            />

            <button className="mt-5 p-3 bg-blue-400 rounded-full text-white font-semibold text-xl tracking-wider cursor-pointer">
              Login
            </button>
          </form>

          <div>
            <span className="text-lg text-white">Don't have an account?</span>

            <Link to="/register">
              <button className="ml-2  text-lg cursor-pointer " type="submit">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
