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
              onClick={() => setSelectImg(data)}
            >
              <img
                src={data.imageURL}
                alt={data.alt}
                className="h-auto w-auto object-fit-cover  drop-shadow-2xl"
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
