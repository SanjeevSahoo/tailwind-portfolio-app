import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-white flex flex-col justify-center">
      <div className="max-w-screen-md w-full mx-auto px-6 sm:px-10 md:pl-16 md:pr-10 lg:pl-6 lg:pr-6">
        <p className="text-pink-600">Hi, My name is </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100">
          Clint Briley
        </h1>
        <h2 className="py-1 md:py-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400">
          I'm a Full Stack Developer
        </h2>
        <p className="py-2 md:py-4 text-md sm:text-lg  font-normal text-gray-500">
          I'm a full-stack developer, specializing in building (and occasionally
          designing) exceptional digital experiences. Currently , i'm focused on
          building responsive full-stack web applications
        </p>
        <div className="mt-4">
          <button className="group flex items-center gap-2 py-3 px-4 rounded-md border hover:border-pink-600 font-medium text-sm md:text-md hover:bg-pink-600 ">
            View Work{" "}
            <HiArrowNarrowRight className="group-hover:rotate-90 duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
