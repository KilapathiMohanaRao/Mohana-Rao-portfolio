import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaTools } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Mohana Rao Portfolio</div>

      {/* Desktop Menu */}
      <ul className="nav-links desktop-menu">
        <li><a href="#home"><FaHome /> Home</a></li>
        <li><a href="#about"><FaUser /> About</a></li>
        <li><a href="#skills"><FaTools /> Skills</a></li>
        <li><a href="#projects"><FaProjectDiagram /> Projects</a></li>
        <li><a href="#contact"><FaEnvelope /> Contact</a></li>
        <li>
          <button onClick={() => setDarkMode(!darkMode)} className="dark-toggle">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </li>
      </ul>

      {/* Hamburger */}
      <div className={`hamburger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#home" onClick={() => setOpen(false)}>
              <FaHome size={20} /> Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpen(false)}>
              <FaUser size={20} /> About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setOpen(false)}>
              <FaTools size={20} /> Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              <FaProjectDiagram size={20} /> Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpen(false)}>
              <FaEnvelope size={20} /> Contact
            </a>
          </li>
          <li>
            <button onClick={() => setDarkMode(!darkMode)} className="dark-toggle">
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
