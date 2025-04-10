import React, { useContext, useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import { Context } from "../context/Context";
import axios from "axios";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [selectedCats, setSelectedCats] = useState(null);
  const { user } = useContext(Context);
  const PF = "http://localhost:4000/public/";

  const cats = ["Life", "Social", "Music", "Sports", "Food", "Fashion"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedCats);
    const newPost = {
      username: user.username,
      title,
      desc,
      categories: selectedCats,
    };
    if (file) {
      const data = new FormData();
      const filename = `${new Date().toJSON().slice(0, 10)}-${file.name}`;
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/api/post", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  const autoResize = (event) => {
    event.target.style.height = "auto"; // Reset height
    event.target.style.height = `${event.target.scrollHeight}px`; // Set height to scrollHeight
  };
  return (
    <div className="mx-[17%] pt-10 ">
      <img
        className=" w-[70vw] h-auto rounded-xl object-cover"
        src={file ? URL.createObjectURL(file) : PF + "defaultPostImg.jpg"}
        alt=""
      />

      <form className=" flex flex-col" onSubmit={handleSubmit}>
        <div className=" flex items-center">
          <label htmlFor="fileInput">
            <i className="p-2 rounded-full  border-1 flex justify-center items-center text-xl text-[#70706a]  fa-solid fa-plus "></i>
          </label>
          <input
            className="hidden"
            type="file"
            id="fileInput"
            onChange={(e) => {
              console.log(e);
              setFile(e.target.files[0]);
            }}
          />
          <input
            className="text-3xl p-4 outline-0 w-[70vw] "
            type="text"
            placeholder="Title"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="card flex justify-content-center w-50 outline-0">
            <MultiSelect
              value={selectedCats}
              onChange={(e) => {
                console.log(e.value);
                setSelectedCats(e.value);
                console.log(selectedCats);
              }}
              options={cats}
              // optionLabel="name"
              display="chip"
              placeholder="Add Category"
              maxSelectedLabels={3}
              className="w-full md:w-20rem"
            />
          </div>
        </div>
        <div className="">
          <textarea
            className="text-xl p-4 outline-none w-[65vw] resize-none overflow-hidden "
            placeholder="Write your story..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            onInput={autoResize}
          ></textarea>
        </div>
        <button
          type="submit"
          className="ml-[88%] w-max text-white bg-cyan-400 p-2 rounded-lg cursor-pointer font-semibold px-4 text-base  mb-7"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
