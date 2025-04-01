import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { toast } from "react-toastify";

const Topbar = () => {
  const notify = () =>
    toast.success("Logged Out", { position: "top-center", autoClose: 1500 });
  const PF = "http://localhost:4000/public/";
  const { user, dispatch } = useContext(Context);
  // console.log(user);
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGOUT" });
      notify();
    } catch (error) {}
  };

  return (
    <div className="py-5 bg-white w-full h-[50px] top-0 sticky flex items-center justify-around font-josefin z-11 ">
      <div className=" flex items-center justify-center  gap-3">
        <i className="text-2xl color-[#444] cursor-pointer fa-brands fa-square-facebook"></i>
        <i className="text-2xl color-[#444] cursor-pointer fa-brands fa-square-twitter"></i>
        <i className="text-2xl color-[#444] cursor-pointer fa-brands fa-square-pinterest"></i>
        <i className="text-2xl color-[#444] cursor-pointer fa-brands fa-square-instagram"></i>
      </div>
      <div className="flex items-center justify-around w-70">
        <ul className="flex items-center justify-center gap-5 text-2xl font-light cursor-pointer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/write">Write</Link>
          </li>
        </ul>
      </div>

      <div className=" flex items-center justify-center gap-5">
        {user && (
          <Link to="/settings">
            <img
              className="h-[40px] w-[40px] rounded-[50%] object-cover"
              src={PF + user.profilePhoto}
            />
            {/* {console.log(user.profilePhoto)} */}
          </Link>
        )}

        {user ? (
          <>
            <div className="text-2xl font-josefin">{user.username}</div>
            <Link
              to="/"
              className="text-lg border-2 border-gray-400 text-gray-600 pt-1 px-2 rounded-xl font-josefin"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-lg border-2 border-gray-400 text-gray-600 pt-1 px-2 rounded-xl font-josefin"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-lg border-2 border-gray-400 text-gray-600 pt-1 px-2 rounded-xl font-josefin "
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Topbar;
