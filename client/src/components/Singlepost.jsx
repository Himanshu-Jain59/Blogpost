import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Context } from "../context/Context";
import DeleteMsg from "./DeleteMsg";

const Singlepost = () => {
  const PF = "http://localhost:4000/public/";
  const [showDeleteMsg, setShowDeleteMsg] = useState(false);

  const loc = useLocation();
  const postId = loc.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState(post.desc);
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/api/post/" + postId);
      // console.log(res.data);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };

    getPost();
  }, [postId]);

  const handleCancel = () => {
    setShowDeleteMsg(false); // Hide the delete confirmation message
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatePost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = `${new Date().toJSON().slice(0, 10)}-${file.name}`;
      data.append("file", file);
      updatePost.photo = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    try {
      await axios.put(`/api/post/${post._id}`, updatePost);
      setUpdateMode(false);
    } catch (err) {}
  };
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/post/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const autoResize = (event) => {
    event.target.style.height = "auto"; // Reset height
    event.target.style.height = `${event.target.scrollHeight}px`; // Set height to scrollHeight
  };

  return (
    <>
      {showDeleteMsg && (
        <DeleteMsg onCancel={handleCancel} onDelete={handleDelete} />
      )}

      <div className=" flex flex-col p-10 pb-50 bg-yellow-50  ">
        <img
          className=" min-w-150  h-auto rounded-xl object-cover self-center mb-5"
          src={file ? URL.createObjectURL(file) : PF + post.photo}
          alt=""
        />
        {updateMode ? (
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
              type="text"
              value={title}
              className="text-center border-b-gray-300 border-b-2 m-3 pb-1 font-lora text-3xl font-semibold outline-0 w-full"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        ) : (
          <h1 className="text-center m-2.5 font-lora text-3xl font-semibold">
            {title}
            {post.username === user?.username && (
              <div className="mt-2 flex items-center float-right text-xl gap-5 ">
                <i
                  className="fa-solid fa-pen-to-square"
                  style={{ color: "#74c0fc" }}
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="fa-solid fa-trash"
                  style={{ color: "#f53d3d" }}
                  onClick={() => setShowDeleteMsg(true)}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="mb-5 px-10 flex justify-between text-base text-[#b39656] font-varela ">
          <span>
            Author:&nbsp;
            <b>
              <Link to={`/?user=${post.username}`}>{post.username}</Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <>
            <textarea
              className="text-[#666] text-justify font-lora text-lg w-full h-fit resize-none outline-0"
              value={desc}
              autoFocus
              onFocus={autoResize}
              onInput={autoResize}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button
              className="self-end w-max text-white bg-teal-500 p-2 rounded-lg cursor-pointer font-semibold px-4 text-base  my-5"
              onClick={handleUpdate}
            >
              Update
            </button>
          </>
        ) : (
          <p className=" px-10 whitespace-pre-line text-[#666] text-justify font-lora text-lg first-letter:ml-5 first-letter:text-3xl first-letter:font-semibold">
            {desc}
          </p>
        )}
      </div>
    </>
  );
};

export default Singlepost;
