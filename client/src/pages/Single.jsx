import React from "react";
import Sidebar from "../components/Sidebar";
import Singlepost from "../components/Singlepost";

const Single = () => {
  return (
    <div className="flex gap-5">
      <Singlepost />
      <Sidebar />
    </div>
  );
};

export default Single;
