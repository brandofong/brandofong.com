import React, { useState } from "react";
import { motion } from "framer-motion";

const Modal = ({ selectImg, setSelectImg }) => {
  // add a state variable to track if the modal box has been clicked
  const [clicked, setClicked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black ${
        clicked ? "opacity-100" : "bg-opacity-70"
      }`}
      onClick={() => {
        // close the modal when the background is clicked
        setSelectImg(null);
      }}
    >
      <div
        className=" w-auto md:border-[18px] border-8 "
        onClick={(event) => {
          // stop the event from propagating to the parent element
          event.stopPropagation();
          // toggle the clicked state variable
          setClicked((prev) => !prev);
        }}
      >
        {clicked ? (
          // render the company information if the modal box has been clicked
          <div className="relative ">
            <img
              src={selectImg.imageURL}
              alt={selectImg.alt}
              className=" md:max-w-7xl max-w-[350px] opacity-60 blur-md"
            />
            <div className=" mb-2 ml-2 absolute bottom-0 left-0 font-Lato md:text-2xl text-sm text-white ">
              {selectImg.info}
            </div>
          </div>
        ) : (
          <img
            src={selectImg.imageURL}
            alt={selectImg.alt}
            className="md:max-w-7xl max-w-[350px]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        )}
      </div>
    </motion.div>
  );
};
export default Modal;
