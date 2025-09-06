import React from "react";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import ais from "../assets/photos/aislogo.jpg";
import ctc from "../assets/photos/ctclogo.jpg";
import solar from "../assets/photos/solarcar.png";
import uc from "../assets/photos/uc.png";
import relectric from "../assets/photos/relectric.jpg";
import amd from "../assets/photos/amd.png";

const Experience = () => {
  const workExperiences = [
    {
      company: "AMD ",
      jobDescription: "Physical Design Intern",
      length: "May 2024 - Aug. 2025",
      imageUrl: amd,
      area: "Markham, ON",
    },
    {
      company: "Code the Change YYC ",
      jobDescription: "Events Commissioner",
      length: "May 2023 - Apr. 2024",
      imageUrl: ctc,
      area: "Calgary, AB",
    },
    {
      company: "Relectric Car Team",
      jobDescription: "Electrical Team Member",
      length: "Sep. 2023 - Apr. 2024",
      imageUrl: relectric,
      area: "Calgary, AB",
    },
    {
      company: "Asia Infrastructure Solutions",
      jobDescription: "Electrical Engineering Intern",
      length: "May 2023 - Aug. 2023",
      imageUrl: ais,
      area: "Hong Kong SAR",
    },
    {
      company: "University of Calgary",
      jobDescription: "Web Developer",
      length: "Nov. 2022 - Apr. 2023",
      imageUrl: uc,
      area: "Calgary, AB",
    },
    {
      company: "University of Calgary Solar Car Team",
      jobDescription: "Electrical Team Member",
      length: "Oct. 2022 - Apr. 2023",
      imageUrl: solar,
      area: "Calgary, AB",
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

          <div className="  lg:px-[80px] md:mr-[60px] lg:mx-auto ml-[70px] ">
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
                  <h3 className="text-gray-800">{experience.jobDescription}</h3>
                  <h4 className="text-gray-600">{experience.length}</h4>
                  <h6 className=" italic text-gray-400">{experience.area}</h6>
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
