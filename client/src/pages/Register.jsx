import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(res);
      // alert("User Registered");
      window.location.replace("/login");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="bg-[url('https://a-z-animals.com/media/2022/10/iStock-1298291139-1024x680.jpg')] bg-cover bg-no-repeat font-lora">
      <div className="  backdrop-blur-xs  w-full h-[92vh] flex flex-col justify-center items-center  ">
        <div className="w-2/5 border-3 p-10 flex flex-col justify-center items-center rounded-2xl">
          <form className=" w-full m-5 flex flex-col " onSubmit={handleSubmit}>
            <span className="text-5xl text-center mb-2">Register</span>
            <label className="my-2 text-xl ml-2">Username</label>
            <input
              className="p-2 px-4 bg-white rounded-md outline-0 "
              type="text"
              value={username}
              placeholder="Naruto Uzumaki"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="my-2 text-xl ml-2">Email</label>
            <input
              className="p-2 px-4 bg-white rounded-md outline-0 "
              type="email"
              value={email}
              placeholder="Naruto@Uzumaki.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="my-2 text-xl ml-2 ">Password</label>
            <input
              className="p-2 px-4 bg-white rounded-md outline-0 "
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="mt-5 p-2 bg-blue-400 rounded-full text-white font-semibold text-xl tracking-wider cursor-pointer"
              type="submit"
            >
              Register
            </button>
          </form>
          <div>
            <span className="text-lg text-white">Already have an account?</span>

            <Link to="/login">
              <button className="ml-2  text-lg cursor-pointer  ">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
