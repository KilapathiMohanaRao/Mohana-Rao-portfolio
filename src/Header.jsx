import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const fullText = "kilaparthi Mohana Rao | B.Tech (CSE) - 2025";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50); // typing speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <div className="header-content">
        <img src="public/Mohan.jpg" alt="Mohan" className="header-img" />
        <h1 className="header-title">{text}</h1>
        <p className="header-subtitle">
          I build modern and responsive web applications.
        </p>
        <div className="header-buttons">
  <a href="#projects" className="btn btn-primary">My Projects</a>
  <a href="#contact" className="btn btn-secondary">Contact Me</a>
</div>

      </div>
    </div>
  );
};

export default Header;
