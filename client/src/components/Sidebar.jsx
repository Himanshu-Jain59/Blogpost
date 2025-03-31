import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/api/categories/", {
        withCredentials: true,
      });
      // console.log(res);
      setCat(res.data);
      // console.log(posts);
    };

    getCats();
  }, []);

  return (
    <div className="m-5 flex flex-col items-center justify-center flex-3/12  py-10 bg-[#f1efef] rounded-xl h-min ">
      {/* <div className="flex flex-col items-center justify-center ">
        <span className=" p-2 w-4/5 border-t-1 border-b-1 border-[#a7a4a4] font-varela text-xl/[20px] color-[#222] font-semibold text-center ">
          About me
        </span>
        <img
          className="mt-4 w-4/5 pb-5"
          src="https://a-z-animals.com/media/2022/10/iStock-1298291139-1024x680.jpg"
          alt=""
        />
        <p className="w-4/5 text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          blanditiis illo quos iusto dolorem? Eaque architecto aspernatur alias
          tempora repudiandae laboriosam expedita fugiat necessitatibus fugit
          illo, corporis quasi. Inventore, doloremque!
        </p>
      </div> */}
      <div className="flex flex-col items-center justify-center ">
        <span className="m-3 p-2 w-4/5 border-t-1 border-b-1 border-[#a7a4a4] font-varela text-xl/[20px] color-[#222] font-semibold text-center ">
          Categories
        </span>
        <ul className="text-xl text-center">
          {cat.map((c) => (
            <li className="inline-block w-1/2 mt-4 cursor-pointer">
              {/* {console.log(c)} */}
              <Link to={`/?cat=${c.name}`}>{c.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center mt-5">
        <span className="m-3 p-2 w-4/5 border-t-1 border-b-1 border-[#a7a4a4] font-varela text-xl/[20px] color-[#222] font-semibold text-center ">
          Follow us
        </span>
        <div className=" flex items-center justify-center  gap-3 w-[250px] mt-4">
          <i className="text-2xl color-[#444] cursor-pointer fa-brands fa-square-facebook"></i>
          <i className="text-2xl color-[#444] cursor-pointer fa-brands fa-square-twitter"></i>
          <i className="text-2xl color-[#444] cursor-pointer fa-brands fa-square-pinterest"></i>
          <i className="text-2xl color-[#444] cursor-pointer fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
