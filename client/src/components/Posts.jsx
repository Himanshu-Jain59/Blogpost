import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className=" m-5 flex-9/12 flex flex-wrap">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
};

export default Posts;
