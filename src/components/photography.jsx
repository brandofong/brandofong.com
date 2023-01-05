import React from "react";
import NavBar from "../components/NavBar";
import data from "../data";
import { motion } from "framer-motion";

const Photography = () => {
  return (
    <div className="h-screen w-full ">
      <NavBar />
      <h1 className="md:text-3xl flex justify-center pt-8 font-Lato mx-auto ">
        Looked better in person, but these will do...
      </h1>
      <ul className="h-screen w-full grid grid-cols-1 gap-5 mx-auto px-6 py-8 md:grid-cols-3">
        {data.Photo.map((data) => (
          <motion.li
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={data.order}
            className="opacity-80"
          >
            <img
              src={data.imageURL}
              alt={data.alt}
              className=" object-fit-cover"
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
export default Photography;
