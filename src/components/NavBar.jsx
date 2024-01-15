import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    { name: "Photography", link: "/photography" },
    { name: "Resume", link: require("../assets/resume.pdf"), target: "_blank" },
  ];

  return (
    <div className="  shadow-md py-8  font-semibold font-Lato flex justify-between items-center w-full h-14 text-gray-800 px-5 border-b-2 border-b-blue-500 relative z-1 ">
      <div>
        <div className=" flex justify-left md:justify-evenly mx-auto my-auto px-4 gap-6  ">
          <motion.a
            className="bg-white text-black  rounded-xl"
            href="https://www.linkedin.com/in/brandofong/"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <AiOutlineLinkedin size={28} />
          </motion.a>
          <motion.a
            className=" bg-white text-black rounded-xl "
            href="https://github.com/brandofong"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <AiOutlineGithub size={28} />
          </motion.a>
          <motion.a
            className="bg-white text-black rounded-xl "
            href="mailto:brandofong02@gmail.com"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <AiOutlineMail size={28} />
          </motion.a>
        </div>
      </div>
      <ul className="hidden md:flex ">
        {links.map((link) => (
          <li
            key={link.name}
            className="px-4 cursor-pointer  font-semibold  text-black hover:scale-105 duration-200"
          >
            <Link
              to={link.link}
              target={link.target}
              className="md:hover:text-primary ease-in duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-3 z-20 md:hidden"
      >
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>
      <AnimatePresence>
        {nav && (
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className=" font-Lato flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-50 text-black  z-10 "
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="px-4 cursor-pointer capitalize py-6 text-4xl "
              >
                <Link
                  to={link.link}
                  target={link.target}
                  className="md:hover:text-primary ease-in duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
