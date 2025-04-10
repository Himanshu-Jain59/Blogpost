import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "http://localhost:4000/public/";

  return (
    <div className=" w-95 mx-6 mb-10 transition-transform duration-600 transform hover:scale-105 ">
      <Link to={`/post/${post._id}`}>
        <img
          className="w-full h-70 object-cover rounded-t-lg  "
          src={PF + post.photo}
          alt=""
        />
      </Link>
      <div className=" bg-yellow-100 pb-5 flex flex-col items-center justify-center rounded-b-lg">
        <div className="mt-2">
          {post.categories.map((ct) => (
            <span className=" font-varela text-base  p-1 text-[#be9656]">
              {/* {console.log(ct)} */}
              {ct}
            </span>
          ))}
        </div>
        <div className="self-center text-center p-2">
          <Link
            to={`/post/${post._id}`}
            className="font-Varela font-bold  text-2xl"
          >
            {post.title}
          </Link>
        </div>

        <div className="px-5 py-1">
          <p className="font-varela text-base/6 text-[#444] text-ellipsis line-clamp-4  ">
            {post.desc}
          </p>
        </div>
        <div className="flex justify-between w-full px-5 my-2">
          <span className="  font-varela text-base text-[#be9656]">
            <Link to={`/?user=${post.username}`}>{post.username}</Link>
          </span>
          <span className="text-[#999] italic font-varela text-base ">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
