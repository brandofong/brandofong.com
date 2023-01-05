import React from "react";
import headshot from "../assets/barndo.jpg";
import NavBar from "./NavBar";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
const Home = () => {
  return (
    <div name="home" className="h-screen w-full">
      <NavBar />

      <div className=" pt-12 max-w-screen-md flex flex-col mx-auto items-center justify-center px-4 md:flex-col">
        <div>
          <img
            src={headshot}
            alt="headshot"
            className="rounded-full mx-auto w-1/2 md:w-3/4 mt-20 mb-10 drop-shadow-2xl  shadow-gray-700 z-1"
          />
        </div>
        <div className="flex flex-col justify-center  font-Lato  ">
          <h1 className="text-center text-2xl pb-3  ">
            Hey 👋🏻! My name is Brandon Fong.
          </h1>
          <p className="text-center text-md text-gray-700  ">
            I am a second-year Electrical Engineering student at the University
            of Calgary. While not studying, you can find me doing photography or
            building mechanical keyboards. I am always open to meeting new
            people, so please feel free to connect with me!
          </p>
        </div>

        <div>
          <div className=" flex justify-center md:justify-evenly mt-10 mb-8 gap-14 ">
            <a
              className=" bg-gradient-to-l from-purple-500 to-blue-500 text-white rounded-xl "
              href="https://github.com/brandofong"
              target="_blank"
            >
              <AiOutlineGithub size={50} />
            </a>
            <a
              className="bg-gradient-to-l from-purple-500 to-blue-500 text-white  rounded-xl"
              href="https://www.linkedin.com/in/brandofong/"
              target="_blank"
            >
              <AiOutlineLinkedin size={50} />
            </a>
            <a
              className="bg-gradient-to-l from-purple-500 to-blue-500 text-white rounded-xl "
              href="mailto:brandofong02@gmail.com"
              target="_blank"
            >
              <AiOutlineMail size={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
