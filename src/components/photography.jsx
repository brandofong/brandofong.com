import React from "react";
import NavBar from "../components/NavBar";
import data from "../data";
import { motion } from "framer-motion";

const Photography = () => {
  return (
    <div className="h-screen w-full ">
      <NavBar />
      <ul className="h-screen w-full grid grid-cols-3 gap-5 mx-6 py-6">
        {data.Photo.map((data) => (
          <motion.li
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={data.order}
            className="opacity-80"
          >
            <img src={data.imageURL} alt={data.alt} className=" object-cover" />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
export default Photography;
