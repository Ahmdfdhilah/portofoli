import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Developer",
          "Frontend Engineer",
          "Backend Developer", 
          "AI Engineering Enthusiast",
          "Data Analyst",
          "Informatics Engineering Student",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
