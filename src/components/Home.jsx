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

      <div className="max-w-screen-md mx-auto  flex flex-col items-center justify-center px-4 md:flex-col">
        <div>
          <img
            src={headshot}
            alt="headshot"
            className="rounded-full mx-auto  w-2/3 md:w-full pt-20 pb-8 "
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
          <div className="flex justify-center md:justify-evenly  mt-10 mb-8 md:text-5xl gap-16 ">
            <a
              className="bg-gradient-to-l from-purple-500 to-blue-500 text-white rounded-2xl px-0.5 py-0.5  "
              href="https://github.com/brandofong"
              target="_blank"
            >
              <AiOutlineGithub />
            </a>
            <a
              className="bg-gradient-to-l from-purple-500 to-blue-500 text-white  rounded-xl my-0.5 "
              href="https://www.linkedin.com/in/brandofong/"
              target="_blank"
            >
              <AiOutlineLinkedin />
            </a>
            <a
              className="bg-gradient-to-l from-purple-500 to-blue-500 text-white rounded-2xl px-0.5 py-0.5 "
              href="mailto:brandofong02@gmail.com"
              target="_blank"
            >
              <AiOutlineMail className="px-1 py-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
