import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className=" w-96 mx-6 mb-10">
      <img
        className="w-full h-70 object-cover rounded-lg "
        src="https://a-z-animals.com/media/2022/10/iStock-1298291139-1024x680.jpg"
        alt=""
      />
      <div className="mt-4 flex flex-col items-center justify-center">
        <div>
          {post.categories.map((ct) => (
            <span className=" mr-2 font-varela text-base/8 text-[#be9656]">
              {/* {console.log(ct)} */}
              {ct}
            </span>
          ))}
        </div>
        <Link to={`/post/${post._id}`}>
          <span className="font-josefin font-bold mt-4  text-2xl">
            {post.title}
          </span>
        </Link>
        <hr />
        <span className="text-[#999] italic font-lora text-sm mt-4">
          {new Date(post.createdAt).toDateString()}
        </span>
        <div>
          <p className="font-varela text-base/6 text-[#444] mt-4 text-ellipsis line-clamp-4">
            {post.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;
