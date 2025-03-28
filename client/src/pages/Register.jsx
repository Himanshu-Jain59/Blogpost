import React from "react";

const Register = () => {
  return (
    <div className="bg-[url('https://a-z-animals.com/media/2022/10/iStock-1298291139-1024x680.jpg')] bg-cover bg-no-repeat font-lora">
      <div className="  backdrop-blur-xs  w-full h-[92vh] flex flex-col justify-center items-center  ">
        <div className="w-2/5 border-3 p-10 flex flex-col justify-center items-center rounded-2xl">
          <form className=" w-full m-5 flex flex-col ">
            <span className="text-5xl text-center mb-2">Register</span>
            <label className="my-2 text-xl ml-2">Username</label>
            <input
              className="p-2 px-4 bg-white rounded-md outline-0 "
              type="text"
              placeholder="Naruto Uzumaki"
            />
            <label className="my-2 text-xl ml-2">Email</label>
            <input
              className="p-2 px-4 bg-white rounded-md outline-0 "
              type="email"
              placeholder="Naruto@Uzumaki.com"
            />
            <label className="my-2 text-xl ml-2 ">Password</label>
            <input
              className="p-2 px-4 bg-white rounded-md outline-0 "
              type="password"
              placeholder="Enter password"
            />
            <button className="mt-5 p-2 bg-blue-400 rounded-full text-white font-semibold text-xl tracking-wider cursor-pointer">
              Register
            </button>
          </form>
          <div>
            <span className="text-lg text-white">Already have an account?</span>

            <button className="ml-2  text-lg cursor-pointer  ">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
