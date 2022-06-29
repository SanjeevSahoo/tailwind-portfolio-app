import React from "react";

function About() {
  return (
    <div className="w-full h-screen bg-[#0a192f] flex flex-col justify-center">
      <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl   w-full px-6 sm:px-10 md:pl-16 md:pr-10 lg:pl-6 lg:pr-10 mx-auto grid lg:grid-cols-2 gap-4 lg:gap-8 text-white ">
        <div className="lg:text-right">
          <p className="text-3xl sm:text-4xl  inline font-bold border-b-4 border-pink-600">
            About
          </p>
        </div>
        <div></div>
        <div className="lg:text-right">
          <p className="text-3xl sm:text-4xl">
            Hi, I'm Clint, nice to meet you, Please take a look around.
          </p>
        </div>
        <div>
          <p className="text-md sm:text-lg text-gray-300">
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
