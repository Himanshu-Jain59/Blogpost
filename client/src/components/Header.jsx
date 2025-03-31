import React from "react";

const Header = () => {
  return (
    <>
      <div className="mt-15">
        <div className="flex flex-col items-center font-lora color-[#444] italic">
          <span className="absolute top-[12%] text-2xl">React & Node</span>
          <span className="absolute top-[13%] text-[125px]">Blogpost</span>
        </div>
        <img
          className=" w-full h-120  object-cover mt-16"
          src="https://royalcitynursery.com/wp-content/uploads/elementor/thumbs/royal-city-nursery-the-importance-of-sun-exposure-sunlight-qb41eglqn3f0vlk7z1lbtmprbj1fmi5i2j3t5lzafc.jpg "
          alt=""
        />
      </div>
    </>
  );
};

export default Header;
