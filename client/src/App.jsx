import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PrimeReactProvider } from "primereact/api";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import Contact from "./pages/Contact";
import { Context } from "./context/Context";
import About from "./pages/About";

const App = () => {
  const { user } = useContext(Context);
  return (
    <>
      <PrimeReactProvider>
        <Router>
          <>
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route
                path="/register"
                element={user ? <Home /> : <Register />}
              />
              <Route path="/login" element={user ? <Home /> : <Login />} />
              <Route
                path="/settings"
                element={user ? <Settings /> : <Login />}
              />
              <Route path="/post/:postId" element={<Single />} />
              <Route path="/write" element={user ? <Write /> : <Login />} />
            </Routes>
          </>
        </Router>
        <ToastContainer />
      </PrimeReactProvider>
    </>
  );
};

export default App;
