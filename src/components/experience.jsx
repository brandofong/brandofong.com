import React from "react";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import ais from "../assets/photos/aislogo.jpg";
import ctc from "../assets/photos/ctclogo.jpg";
import solar from "../assets/photos/solarcar.png";
import uc from "../assets/photos/uc.png";
import relectric from "../assets/photos/relectric.jpg";

const Experience = () => {
  const workExperiences = [
    {
      company: "Code the Change YYC ",
      jobDescription: "Events Commissioner",
      length: "May 2023 - Present",
      imageUrl: ctc,
    },
    {
      company: "Relectric Car Team",
      jobDescription: "Electrical Team Member",
      length: "Sep. 2023 - Present",
      imageUrl: relectric,
    },
    {
      company: "Asia Infrastructure Solutions",
      jobDescription: "Electrical Engineering Intern",
      length: "May 2023 - Aug. 2023",
      imageUrl: ais,
    },
    {
      company: "University of Calgary",
      jobDescription: "Web Developer",
      length: "Nov. 2022 - Apr. 2023",
      imageUrl: uc,
    },
    {
      company: "University of Calgary Solar Car Team",
      jobDescription: "Electrical Team Member",
      length: "Oct. 2022 - Apr. 2023",
      imageUrl: solar,
    },
  ];
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" font-Lato justify-between">
        <NavBar />
        <div>
          <h1 className="md:text-4xl flex justify-center pt-8 font-Lato mx-auto text-2xl ">
            Experience
          </h1>

          <div className="  lg:px-[18px] lg:mx-auto ml-[70px] ">
            {workExperiences.map((experience, index) => (
              <div
                key={index}
                className="flex items-center text-right justify-between w-3/4 my-8 md:w-full lg:w-full text-xs sm:text-sm md:text-md"
              >
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 200, opacity: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <div className="justify-between">
                    <img
                      src={experience.imageUrl}
                      alt={experience.company}
                      className="w-20 h-20 lg:w-32 lg:h-32 object-contain"
                    />
                  </div>
                </motion.div>

                <div className="sm:ml-4 w-full lg:pr-8 justify-between">
                  <h2 className="text-lg font-bold ">{experience.company}</h2>
                  <p className="text-gray-800">{experience.jobDescription}</p>
                  <p className="text-gray-500">{experience.length}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Experience;
