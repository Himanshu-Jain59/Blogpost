import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <div className=" mt-5 mx-10 bg-[url('/images/aboutIntro.jpg')] rounded-3xl bg-[#504e4e]  h-130 bg-cover bg-no-repeat ">
        <div className="h-full  rounded-3xl backdrop-brightness-60 flex flex-col justify-center items-center ">
          <span className=" text-8xl text-white font-lora p-2 ">About Us</span>
          <span className="text-xl w-1/2 text-white font-lora text-center">
            Welcome to blogpost, where stories come to life and curiosity leads
            the way. We’re more than just a blog — we’re a community of
            thinkers, dreamers, and doers who love sharing knowledge, insights,
            and inspiration.
          </span>
        </div>
      </div>

      <div className="flex justify-center  items-center mt-20">
        <div className="shadow-xl flex justify-center items-center  rounded-3xl bg-gray-200">
          <img
            src="/images/ourstory.jpeg"
            className="rounded-3xl object-contain  w-130 backdrop-brightness-5"
            alt=""
          />
          <div className="flex flex-col w-140 px-15">
            <span className="text-5xl py-2 ">Our Story</span>
            <div className="h-1 bg-red-500 w-47 mx-1 mb-3"></div>
            <span>
              Blogpost started as a simple idea: to create a space where real
              stories, thoughtful insights, and helpful resources could come
              together in one place. What began as a personal passion project
              has grown into a platform that reaches thousands of readers
              looking for honest content on [insert your niche/topics — e.g.,
              lifestyle, travel, tech, wellness, etc.]. Every post we publish is
              driven by purpose, passion, and a love for connection through
              words.
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center  items-center mt-20">
        <div className="flex justify-center items-center  rounded-3xl shadow-xl bg-gray-200">
          <div className="flex flex-col w-140 px-15">
            <span className="text-5xl py-2 ">Our Misson</span>
            <div className="h-1 bg-red-500 w-58 mx-1 mb-3"></div>
            <span>
              We believe that great ideas can spark change, and that knowledge,
              shared thoughtfully, has the power to transform. Whether it’s
              through practical tips, thought-provoking essays, or creative
              explorations — we aim to provide content that fuels curiosity,
              fosters personal growth, and builds a deeper connection with the
              world around us.
            </span>
          </div>
          <img
            src="/images/ourMission.jpg"
            className="rounded-3xl object-contain  w-130 backdrop-brightness-5"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-center  items-center my-20">
        <div className="rounded-3xl flex justify-center  items-center flex-col w-270 bg-[url('/images/wcu.png')] shadow-xl p-5">
          <span className="text-5xl text-white ">Why Choose Us?</span>
          <div className="w-full flex px-7 py-5 gap-10 ">
            <div className="flex flex-col  items-center gap-2 bg-gray-200 w-1/3 h-80 rounded-2xl">
              <div className="rounded-full p-4 mt-11 bg-white">
                <i className="text-sky-600 text-4xl fa-solid fa-globe"></i>
              </div>
              <span className="text-2xl font-medium p-2">
                Inclusive Perspective
              </span>
              <p className="px-7 text-sm ">
                We value diversity and make it a point to include voices from
                all backgrounds, experiences, and walks of life.
              </p>
            </div>

            <div className="flex flex-col  items-center gap-2 bg-gray-200 w-1/3 h-80 rounded-2xl">
              <div className="rounded-full p-4 mt-11 bg-white">
                <i className="text-sky-600 text-4xl fa-solid fa-handshake"></i>
              </div>
              <span className="text-2xl font-medium p-2">Engaging Content</span>
              <p className="px-7 text-sm ">
                We create more than just articles — we craft experiences that
                keep you coming back for more, from interactive posts to
                thoughtful storytelling.
              </p>
            </div>

            <div className="flex flex-col  items-center gap-2 bg-gray-200 w-1/3 h-80 rounded-2xl">
              <div className="rounded-full p-4 mt-11 bg-white">
                <i className="text-sky-600 text-4xl fa-solid fa-heart"></i>
              </div>
              <span className="text-2xl font-medium p-2">Passion-Driven</span>
              <p className="px-7 text-sm ">
                Every piece of content is written with passion and enthusiasm
                for the topic at hand, ensuring you always get something that
                matters.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" m-10 rounded-3xl flex flex-col justify-center items-center gap-4 p-20 bg-[url('/images/forest.jpeg')]  bg-cover bg-no-repeat shadow-xl ">
        <span className="text-5xl text-white font-varela text-center">
          Your next favorite blog is just a click away.
        </span>
        <span className="text-xl text-white font-varela text-center">
          Start your journey with Blogpost.
        </span>
        {/* bg-[#619471]  */}
        <button className="text-white bg-[#619471] text-lg font-semibold font-varela p-3 w-40 rounded-full cursor-pointer">
          Get Started
        </button>
      </div>
      <Footer color={"bg-[#619471] text-white"} />
    </>
  );
};

export default About;
