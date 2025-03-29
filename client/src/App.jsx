import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Single from "./pages/Single";

const App = () => {
  return (
    <Router>
      <>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
