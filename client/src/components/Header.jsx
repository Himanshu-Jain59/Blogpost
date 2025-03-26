import React from "react";

const Header = () => {
  return (
    <>
      <div className="mt-15">
        <div className="flex flex-col items-center font-lora color-[#444] italic">
          <span className="absolute top-[18%] text-xl">React & Node</span>
          <span className="absolute top-[20%] text-[100px]">Blog</span>
        </div>
        <img
          className=" w-full h-110  object-cover mt-23"
          src="https://royalcitynursery.com/wp-content/uploads/elementor/thumbs/royal-city-nursery-the-importance-of-sun-exposure-sunlight-qb41eglqn3f0vlk7z1lbtmprbj1fmi5i2j3t5lzafc.jpg "
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
