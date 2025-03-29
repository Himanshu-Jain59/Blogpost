import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

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
