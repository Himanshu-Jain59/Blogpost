import React, { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const options = {
    method: "GET",
    url: "https://quotes-api12.p.rapidapi.com/quotes/random",
    params: { type: "happiness" },
    headers: {
      "x-rapidapi-key": "8b3ce5f100mshf1ba64f85626f53p1e6dcejsn57b838eaf172",
      "x-rapidapi-host": "quotes-api12.p.rapidapi.com",
    },
  };
  useEffect(() => {
    return async () => {
      try {
        const response = await axios.request(options);
        setQuote(response.data.quote);
        setAuthor(response.data.author);
      } catch (error) {
        console.error(error);
      }
    };
  }, []);

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

        {quote && (
          <span className="m-2 font-lora font-semibold text-4xl max-w-[1350px]  w-max absolute top-[60%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
            " {quote} "
          </span>
        )}
        {author && (
          <span className=" font-josefin font-semibold text-4xl absolute top-[75%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-white">
            -{author}
          </span>
        )}
      </div>
    </>
  );
};

export default Header;
