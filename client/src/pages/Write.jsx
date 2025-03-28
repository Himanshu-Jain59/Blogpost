import React, { useState } from "react";

const Write = () => {
  const [content, setContent] = useState("");

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  const autoResize = (event) => {
    event.target.style.height = "auto"; // Reset height
    event.target.style.height = `${event.target.scrollHeight}px`; // Set height to scrollHeight
  };
  return (
    <div className="mx-[17%] pt-12 ">
      <img
        className=" w-[70vw] h-auto rounded-xl object-cover"
        src="https://a-z-animals.com/media/2022/10/iStock-1298291139-1024x680.jpg"
        alt=""
      />
      <form className=" flex flex-col">
        <div className=" flex items-center">
          <label htmlFor="fileInput">
            <i className="p-2 rounded-full  border-1 flex justify-center items-center text-xl text-[#70706a]  fa-solid fa-plus "></i>
          </label>
          <input className="hidden" type="file" id="fileInput" />
          <input
            className="text-3xl p-4 outline-0 w-[70vw] "
            type="text"
            placeholder="Title"
            autoFocus={true}
          />
        </div>
        <div className="">
          <textarea
            class="text-xl p-4 outline-none w-[65vw] resize-none overflow-hidden "
            placeholder="Write your story..."
            value={content}
            onChange={handleInputChange}
            onInput={autoResize}
          ></textarea>
        </div>
        <button className="ml-[88%] w-max text-white bg-teal-500 p-2 rounded-lg cursor-pointer font-semibold px-4 text-base  mb-7">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
