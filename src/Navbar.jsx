import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import "./Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const { scrollY } = useScroll();
  const rotateX = useTransform(scrollY, [0, 100], [0, 15]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      style={{ rotateX, scale, perspective: 1000 }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="nav-container">
        <ul className="nav-links">
          <motion.li whileHover={{ y: -3, scale: 1.1 }}><a href="#about" className="nav-item">About</a></motion.li>
          <motion.li whileHover={{ y: -3, scale: 1.1 }}><a href="#skills" className="nav-item">Skills</a></motion.li>
          <motion.li whileHover={{ y: -3, scale: 1.1 }}><a href="#projects" className="nav-item">Projects</a></motion.li>
          <motion.li whileHover={{ y: -3, scale: 1.1 }}><a href="#contact" className="nav-item">Contact</a></motion.li>
          <motion.li whileHover={{ y: -3, scale: 1.1 }}>
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle Theme"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
