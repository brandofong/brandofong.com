import React from "react";
import Experience from "./experience"; // Import your Experience component

const experience = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold my-4">My Work Experience</h1>

      <Experience
        company="Company A"
        jobDescription="Front-end Developer"
        imageUrl="./assets/photos/kowloon.JPG"
      />

      {/* Add more experience sections as needed */}
    </div>
  );
};

export default experience;
