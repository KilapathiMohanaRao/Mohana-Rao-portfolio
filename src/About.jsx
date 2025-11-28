import React, { useEffect, useState } from "react";
import "./About.css";

const aboutTexts = [
  "I am an IT graduate (B.Tech 2025) with a passion for web development.",
  "I specialize in building scalable, responsive applications with React and SpringBoot.",
  "I love solving real-world problems and learning new technologies every day.",
];

const About = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < aboutTexts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + aboutTexts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50); // typing speed
      return () => clearTimeout(timeout);
    } else {
      // wait before switching to next text
      const timeout = setTimeout(() => {
        setDisplayedText(""); // clear for next text
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % aboutTexts.length);
      }, 2000); // pause after full text
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <div className="about-section">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <p className={`about-text fade-in`}>{displayedText}</p>
      </div>
    </div>
  );
};

export default About;
