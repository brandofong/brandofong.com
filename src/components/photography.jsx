import React, { useState } from "react";
import NavBar from "../components/NavBar";
import data from "../data";
import { motion } from "framer-motion";
import Modal from "./modal";

const Photography = () => {
  const [selectImg, setSelectImg] = useState(null);
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-screen w-full ">
        <NavBar />

        <h1 className=" text-center  md:text-3xl text-lg flex justify-center pt-8 pb-2 font-Lato mx-auto ">
          Looked better in person, but these will do
        </h1>
        <h2 className="text-center  text-sm md:text-[16px] flex justify-center font-Lato mx-auto text-gray-600 pb-2">
          Some of my favourite shots that I've taken throughout the years...
        </h2>

        <ul className="h-screen w-full grid grid-cols-1 gap-8 mx-auto pt-6 px-10 md:grid-cols-3">
          {data.Photo.map((data) => (
            <motion.li
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              key={data.order}
              className="opacity-80"
              onClick={() => setSelectImg(data)}
            >
              <img
                src={data.imageURL}
                alt={data.alt}
                className="h-auto w-auto object-fit-cover pb-3 drop-shadow-2xl"
              />
            </motion.li>
          ))}
        </ul>
        {selectImg && (
          <Modal selectImg={selectImg} setSelectImg={setSelectImg} />
        )}
      </div>
    </motion.div>
  );
};
export default Photography;
