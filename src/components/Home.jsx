import React from "react";
// import headshot from "../assets/barndo.jpg";
import headshot from "../assets/barndo.JPG";

import NavBar from "./NavBar";
import { motion } from "framer-motion";

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

        <div className="  mt-6 max-w-screen-md flex flex-col mx-auto items-center justify-center px-4 md:flex-col">
          <div>
            <img
              src={headshot}
              alt="headshot"
              className="rounded-full mx-auto w-1/2 md:w-3/4 mt-20 mb-10 drop-shadow-md shadow-gray-700 z-10 "
            />
          </div>
          <div className="flex flex-col justify-center  font-Lato  ">
            <h1 className="text-center text-2xl pb-3  ">
              Hey 👋🏻! My name's Brandon.
            </h1>
            <p className="text-center text-md  text-gray-700  ">
              I am a final year Electrical Engineering student with a minor in
              Computer Engineering at the University of Calgary. During my
              internship at AMD, I gained proficiency in clock tree synthesis,
              static timing analysis, scripting, and building practical skills
              that I’m excited to carry forward into my career. In my free time,
              you can find me doing photography 📸 , or outside looking at
              planes ✈️ . I am always open to meeting new people, so please feel
              free to connect with me!
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
