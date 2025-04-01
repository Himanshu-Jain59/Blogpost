import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Context } from "../context/Context";
import axios from "axios";
import DeleteMsg from "../components/DeleteMsg";
import EnterPass from "../components/EnterPass";
import { toast } from "react-toastify";

const Settings = () => {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const [showDeleteMsg, setShowDeleteMsg] = useState(false);

  const notify = () =>
    toast.success("User details updated", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  const handleCancel = () => {
    setShowDeleteMsg(false); // Hide the delete confirmation message
  };
  const cancelPass = () => {
    setSuccess(false);
  };

  const PF = "http://localhost:4000/public/";

  const handleUpdate = async (e) => {
    if (e) e.preventDefault();
    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      userId: user._id,
      username,
      email,
    };
    if (password) {
      updatedUser.password = password;
    }
    if (file) {
      const data = new FormData();

      data.append("file", file);
      const filename = `${new Date().toJSON().slice(0, 10)}-${file.name}`;
      console.log(data, file);
      updatedUser.profilePhoto = filename;
      try {
        await axios.post("/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/api/user/" + user._id, updatedUser);
      // setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      setSuccess(false);
      notify();
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/user/${user._id}`, {
        data: { userId: user._id },
      });
      dispatch({ type: "LOGOUT" });
      window.location.replace("/");
    } catch (error) {
      console.error(err);
    }
  };

  return (
    <>
      {success && <EnterPass cancel={cancelPass} confirm={handleUpdate} />}
      {showDeleteMsg && (
        <DeleteMsg onCancel={handleCancel} onDelete={handleDelete} />
      )}
      <div className="flex font-lora ml-10 mt-5">
        <div className="flex-9 p-5">
          <div className="flex items-center justify-between">
            <span className="text-3xl text-amber-500">Update Your Account</span>
            <span
              className=" mb-1 text-base font-medium text-red-500 cursor-pointer"
              onClick={() => setShowDeleteMsg(true)}
            >
              Delete Your Account
            </span>
          </div>
          <form
            className="flex flex-col mt-7 text-lg gap-1.5"
            encType="multipart/form-data"
          >
            <label htmlFor="setProfileImg">Profile Picture</label>
            <div className="flex items-center my-3">
              <img
                className="w-17 h-17 rounded-full"
                src={file ? URL.createObjectURL(file) : PF + user.profilePhoto}
                alt=""
              />
              <label htmlFor="fileInput">
                <i className="relative top-6 right-6 p-1 text-white text-xl rounded-full bg-amber-500 cursor-pointer fa-solid fa-plus"></i>
              </label>
              <input
                type="file"
                id="fileInput"
                className="hidden"
                onChange={(e) => {
                  console.log(e);
                  setFile(e.target.files[0]);
                }}
              />
            </div>
            <label>Username</label>
            <input
              className="my-2 text-gray-700 h-8 border-b-2 border-gray-300 outline-0"
              type="text"
              placeholder={user.username}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input
              className="my-2 text-gray-700 h-8 border-b-2 border-gray-300 outline-0"
              type="email"
              placeholder={user.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              className="my-2 text-gray-700 h-8 border-b-2 border-gray-300 outline-0"
              type="password"
              placeholder="Change Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="mt-4 p-3 bg-emerald-500 rounded-full text-white font-semibold text-xl tracking-wider cursor-pointer"
              // type="submit"
              onClick={(e) => {
                e.preventDefault();
                setSuccess(true);
              }}
            >
              Update
            </button>
          </form>
        </div>
        {/* <Sidebar /> */}
      </div>
    </>
  );
};

export default Settings;
