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
    <div className="py-7 bg-white w-full h-[50px] top-0 sticky flex items-center justify-around font-josefin z-11 ">
      <div className=" flex items-center justify-center  gap-3 ">
        <span className="font-santaLove text-3xl">blogpost</span>
      </div>
      <div className="flex items-center justify-center w-[30%]">
        <ul className="flex items-center justify-end gap-3 text-2xl font-light cursor-pointer w-full">
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

      <div className=" flex items-center justify-end  gap-5">
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
              className="text-lg border-2 border-red-500 text-white bg-red-500 pt-1 px-2 rounded-xl font-josefin  hover:bg-white hover:border-red-500 hover:text-red-500"
              onClick={handleLogout}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-lg border-2 bg-amber-400 border-amber-400 text-white pt-1 px-3 rounded-xl font-josefin hover:bg-white hover:border-amber-400 hover:text-amber-400"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-lg border-2 border-[#379237] text-white bg-[#379237] pt-1 px-3 rounded-xl font-josefin  hover:bg-white hover:border-[#379237] hover:text-[#379237] "
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
