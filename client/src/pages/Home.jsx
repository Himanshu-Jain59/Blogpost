import React from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex m-10">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
