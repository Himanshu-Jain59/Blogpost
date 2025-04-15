import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { Context } from "../context/Context";
import Category from "../components/Category";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const { user } = useContext(Context);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/api/post/" + search, {
        withCredentials: true,
      });
      // console.log(res.data);
      setPosts(res.data);
    };

    fetchPost();
    // console.log(posts);
  }, [search]);

  return (
    <div>
      <Header />
      <Category />
      <div className="flex mx-[3%] my-15 justify-center ">
        {posts.length == 0 ? (
          <p className="text-xl text-center h-100 ">
            <span className="text-5xl font-semibold"> 404 Not Found </span>
            <br />
            no post of this category
          </p>
        ) : (
          <Posts posts={posts} />
        )}
        {/* <Sidebar /> */}
      </div>
      <Footer color={"bg-amber-400"} />
    </div>
  );
};

export default Home;
