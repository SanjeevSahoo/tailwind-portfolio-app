import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div className="w-full h-screen bg-[#0a192f] text-white flex flex-col justify-center">
      <div className="max-w-screen-md w-full mx-auto px-6 sm:px-10 md:pl-16 md:pr-10 lg:pl-6 lg:pr-6">
        <p className="text-pink-400">Hi, My name is </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-teal-200">
          Sanjeev Sahoo
        </h1>
        <h2 className="py-1 md:py-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400">
          I'm a Front End Developer
        </h2>
        <p className="py-2 md:py-4 text-md sm:text-lg  font-normal text-gray-500">
          I'm a Front End Developer, specializing in building web applictions
          using React JS and CSS framework like Tailwind and Material UI,
          occasionally i do work on mobile application development using React
          Native, Flutter.
        </p>
        <div className="mt-4">
          <button className="group flex items-center gap-2 py-3 px-4 rounded-md border hover:border-pink-500 font-medium text-sm md:text-md hover:bg-pink-500 ">
            View Work{" "}
            <HiArrowNarrowRight className="group-hover:rotate-90 duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
