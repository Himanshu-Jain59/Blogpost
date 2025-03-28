import React from "react";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Single from "./pages/Single";

const App = () => {
  return (
    <>
      <Topbar />
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Single /> */}
      <Write />
      {/* <Settings /> */}
    </>
  );
};

export default App;
