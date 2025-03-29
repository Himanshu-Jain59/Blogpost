import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Singlepost = () => {
  const loc = useLocation();
  const postId = loc.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/api/post/" + postId);
      // console.log(res.data);
      setPost(res.data);
    };

    getPost();
  }, [postId]);

  return (
    <div className="flex-9/12 ml-5">
      <div className="p-5 pr-0 ">
        <img
          className="w-auto h-auto rounded-xl object-cover"
          src="https://a-z-animals.com/media/2022/10/iStock-1298291139-1024x680.jpg"
          alt=""
        />
        <h1 className="text-center m-2.5 font-lora text-3xl font-semibold">
          {post.title}
          <div className="mt-2 flex items-center float-right text-xl gap-5 ">
            <i
              className="fa-solid fa-pen-to-square"
              style={{ color: "#74c0fc" }}
            ></i>
            <i className="fa-solid fa-trash" style={{ color: "#f53d3d" }}></i>
          </div>
        </h1>
        <div className="mb-5 flex justify-between text-base text-[#b39656] font-varela">
          <span>
            Author:{" "}
            <b>
              <Link to={`/?user=${post.username}`}>{post.username}</Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="text-[#666] text-justify font-lora text-lg first-letter:ml-5 first-letter:text-3xl first-letter:font-semibold">
          {post.desc}
        </p>
      </div>
    </div>
  );
};

export default Singlepost;
