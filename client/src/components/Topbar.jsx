import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Topbar = () => {
  const PF = "http://localhost:4000/public/";
  const { user, dispatch } = useContext(Context);
  // console.log(user);
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGOUT" });
    } catch (error) {}
  };

  return (
    <div className="bg-white w-full h-[50px] top-0 sticky flex items-center justify-center font-josefin z-10">
      <div className="flex-3 flex items-center justify-center  gap-3">
        <i className="text-2xl color-[#444] cursor-pointer fa-brands fa-square-facebook"></i>
        <i className="text-2xl color-[#444] cursor-pointer fa-brands fa-square-twitter"></i>
        <i className="text-2xl color-[#444] cursor-pointer fa-brands fa-square-pinterest"></i>
        <i className="text-2xl color-[#444] cursor-pointer fa-brands fa-square-instagram"></i>
      </div>
      <div className="flex-6 flex items-center justify-center">
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
          <li onClick={handleLogout}>
            {user ? (
              <Link to="/">Log out</Link>
            ) : (
              <Link to="/login">Log in</Link>
            )}
          </li>
        </ul>
      </div>

      <div className="flex-3 flex items-center justify-center gap-5">
        {user && (
          <Link to="/settings">
            <img
              className="h-[40px] w-[40px] rounded-[50%] object-cover"
              src={PF + user.profilePhoto}
            />
            {/* {console.log(user.profilePhoto)} */}
          </Link>
        )}
        <i className="text-2xl color-[#666] cursor-pointer fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
