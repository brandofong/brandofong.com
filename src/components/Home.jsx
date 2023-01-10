import React from "react";
import headshot from "../assets/barndo.jpg";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
const Home = () => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div name="home" className="h-screen w-full ">
        <NavBar />

        <div className="  mt-8 max-w-screen-md flex flex-col mx-auto items-center justify-center px-4 md:flex-col">
          <div>
            <img
              src={headshot}
              alt="headshot"
              className="rounded-full mx-auto w-1/2 md:w-3/4 mt-20 mb-10 drop-shadow-md shadow-gray-700 z-10 "
            />
          </div>
          <div className="flex flex-col justify-center  font-Lato  ">
            <h1 className="text-center text-2xl pb-3  ">
              Hey 👋🏻! My name is Brandon Fong.
            </h1>
            <p className="text-center text-md text-gray-700  ">
              I am a second-year Electrical Engineering student at the
              University of Calgary. While not studying, you can find me doing
              photography or building mechanical keyboards. I am always open to
              meeting new people, so please feel free to connect with me!
            </p>
          </div>

          <div>
            <div className=" flex justify-center md:justify-evenly mt-10 mb-8 gap-14  ">
              <motion.a
                className=" bg-blue-600 text-white rounded-xl "
                href="https://github.com/brandofong"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <AiOutlineGithub size={50} />
              </motion.a>
              <motion.a
                className="bg-blue-600 text-white  rounded-xl"
                href="https://www.linkedin.com/in/brandofong/"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <AiOutlineLinkedin size={50} />
              </motion.a>
              <motion.a
                className="bg-blue-600 text-white rounded-xl "
                href="mailto:brandofong02@gmail.com"
                target="_blank"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <AiOutlineMail size={50} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
