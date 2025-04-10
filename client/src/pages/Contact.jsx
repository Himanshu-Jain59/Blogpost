import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className=" mt-5 mx-10 bg-[url('https://img.freepik.com/premium-photo/top-view-office-desk-workspace_160097-448.jpg?w=996')] rounded-3xl bg-[#504e4e]  h-130 bg-cover bg-no-repeat flex flex-col justify-center items-center">
        {/* <div className=" mt-5 bg-[url('https://img.freepik.com/premium-photo/top-view-office-desk-workspace_160097-448.jpg?w=996')] w-full h-140 bg-cover bg-no-repeat flex flex-col justify-center items-center"> */}
        <span className=" text-8xl text-white font-lora ">Get in touch</span>
        <br />
        <span className="text-xl w-1/2 text-white font-lora text-center">
          Whether you have a question, feedback, or just want to say hello —
          we’re all ears! Reach out to us using the form below or through our
          social channels.
        </span>
      </div>

      {/* src="https://cdn.pixabay.com/photo/2023/09/29/14/58/road-8284023_960_720.jpg" */}
      <div className="flex justify-center items-center m-10">
        <span className="absolute left-30 text-7xl/[85px] text-white w-100 z-1  ">
          We’d love to hear from you
        </span>
        <div className="flex justify-center items-center w-300 h-120 m-10 rounded-3xl bg-gray-200">
          <img
            src="https://img.freepik.com/free-photo/scenic-view-trees-against-cloudy-sky_23-2147831006.jpg"
            className="rounded-3xl object-contain h-120 opacity-90"
            alt=""
          />

          <form className="flex flex-col p-10 py-15 w-full gap-2">
            <span className=" pb-1 text-4xl font-lora">Contact Form</span>
            <input
              type="text"
              className="border-neutral-400 outline-0 border-3 w-full rounded-xl p-2 px-5 font-lora text-base  "
              placeholder="Your name"
            />
            <input
              type="text"
              className="border-neutral-400 outline-0 border-3 w-full rounded-xl p-2 px-5 font-lora text-base "
              placeholder="E-mail"
            />
            <input
              type="text"
              className="border-neutral-400 outline-0 border-3 w-full rounded-xl p-2 px-5 font-lora text-base "
              placeholder="Phone"
            />
            <textarea
              className="border-neutral-400 outline-0 border-3 w-full rounded-xl p-2 px-5 font-lora text-base resize-none h-35  "
              placeholder="Message"
            ></textarea>
            <button className=" bg-emerald-600 text-white font-lora font-semibold text-lg px-5 p-2 w-max rounded-xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* bg-[#42676f]  */}
      <div className=" m-10 rounded-3xl flex flex-col justify-center items-center gap-4 p-20 bg-[url('/forest.jpeg')]  bg-cover bg-no-repeat  ">
        <span className="text-5xl text-white font-varela text-center">
          Your next favorite blog is just a click away.
        </span>
        <span className="text-xl text-white font-varela text-center">
          Start your journey with Blogpost.
        </span>
        <button className="text-white bg-[#42676f] text-lg font-semibold font-varela p-3 w-40 rounded-full cursor-pointer">
          Get Started
        </button>
      </div>
      <Footer color={"bg-[#42676f] text-white"} />
    </>
  );
};

export default Contact;
