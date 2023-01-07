import React from "react";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" h-screen font-Lato">
        <NavBar />
        <div>
          <h1 className="md:text-3xl flex justify-center pt-8 font-Lato mx-auto  ">
            Coming soon...
          </h1>
        </div>
      </div>
    </motion.div>
  );
};
export default Experience;
