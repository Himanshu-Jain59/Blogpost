import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import { Context } from "../context/Context";

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
      // console.log(posts);
    };

    fetchPost();
  }, [search]);

  return (
    <div>
      <Header />
      <div className="flex m-10">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
