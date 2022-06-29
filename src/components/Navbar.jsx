import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleMobileToggle = () => {
    setMobileToggle((oldState) => !oldState);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-100">
      <div>
        <img src={Logo} alt="Logo" className="w-16" />
      </div>
      <div className="hidden md:flex">
        <ul className="flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      <div
        className="md:hidden cursor-pointer z-10"
        onClick={handleMobileToggle}
      >
        {!mobileToggle ? <FaBars /> : <FaTimes />}
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center ${
          !mobileToggle ? " hidden" : ""
        }`}
      >
        <ul>
          <li className="py-6 text-4xl text-center">Home</li>
          <li className="py-6 text-4xl text-center">About</li>
          <li className="py-6 text-4xl text-center">Skills</li>
          <li className="py-6 text-4xl text-center">Work</li>
          <li className="py-6 text-4xl text-center">Contact</li>
        </ul>
      </div>
      <div className="hidden md:flex fixed flex-col top-[50%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[0px] duration-300 bg-blue-600 ">
            <a
              href="/"
              className="w-full flex justify-between items-center text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gray-800 ">
            <a
              href="/"
              className="w-full flex justify-between items-center text-gray-300"
            >
              GitHub <FaGithub size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[0px] duration-300 bg-teal-600 ">
            <a
              href="/"
              className="w-full flex justify-between items-center text-gray-300"
            >
              Email <HiOutlineMail size={30} />{" "}
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center ml-[-100px] hover:ml-[0px] duration-300 bg-gray-600 ">
            <a
              href="/"
              className="w-full flex justify-between items-center text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
