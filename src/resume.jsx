import React from "react";
import "./resume.css";

const Hero = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span>Mohan</span> 👋</h1>
        <p className="hero-subtitle">An Aspiring IT Professional | Web Developer</p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => handleScroll("contact")}>
            Hire Me
          </button>
          <a href="/Mohan_Resume.pdf" download className="btn-outline">
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-bg-animation">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </section>
  );
};

export default Hero;
