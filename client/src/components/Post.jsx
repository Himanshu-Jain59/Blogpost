import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "http://localhost:4000/public/";

  return (
    <div className=" w-96 mx-6 mb-10 transition-transform duration-600 transform hover:scale-105 ">
      <Link to={`/post/${post._id}`}>
        <img
          className="w-full h-70 object-cover rounded-t-lg  "
          src={PF + post.photo}
          alt=""
        />
      </Link>
      <div className=" bg-yellow-100 pb-5 flex flex-col items-center justify-center rounded-b-lg">
        <div>
          {/* {post.categories.map((ct) => (
            <span className=" mr-2 font-varela text-base/8 text-[#be9656]">
              {console.log(ct)}
              {ct}
            </span>
          ))} */}

          <span className=" mt-5 font-varela text-base/8 text-[#be9656]">
            <Link to={`/?user=${post.username}`}>by: {post.username}</Link>
          </span>
        </div>
        <div className="self-center text-center m-2">
          <Link
            to={`/post/${post._id}`}
            className="font-josefin font-bold  text-2xl"
          >
            {post.title}
          </Link>
        </div>

        <span className="text-[#999] italic font-lora text-sm ">
          {new Date(post.createdAt).toDateString()}
        </span>
        <div className="p-5">
          <p className="font-varela text-base/6 text-[#444] text-ellipsis line-clamp-4  ">
            {post.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
