import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectImg, setSelectImg }) => {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-70"
      onClick={() => setSelectImg(null)}
    >
      <div className="relative w-full max-w-6xl">
        <img
          src={selectImg.imageURL}
          alt={selectImg.alt}
          className="w-full h-full object-fit-cover"
          onClick={stopPropagation}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </div>
    </motion.div>
  );
};
export default Modal;
