import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="container footer-grid">
        <motion.div
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="nav-logo">MR<span className="gradient-text">.</span></h2>
          <p className="footer-bio">
            Crafting premium digital experiences through robust backend microservices and stunning, 3D interactive frontend interfaces.
          </p>
        </motion.div>

        <motion.div
          className="footer-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h3>Explore</h3>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">My Expertise</a></li>
            <li><a href="#projects">Selected Works</a></li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3>Connect</h3>
          <p><FaMapMarkerAlt className="f-icon" /> Hyderabad, India</p>
          <p><FaPhoneAlt className="f-icon" /> +91 9949237674</p>
          <p><FaEnvelope className="f-icon" /> kilaparthimohan93@gmail.com</p>
        </motion.div>

        <motion.div
          className="footer-socials"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3>Follow</h3>
          <div className="social-icon-box">
            <a href="https://www.linkedin.com/in/mohana-rao-kilaparthi-0b616a350/" target="_blank" rel="noopener noreferrer" className="social-btn"><FaLinkedin /></a>
            <a href="https://github.com/KilapathiMohanaRao" target="_blank" rel="noopener noreferrer" className="social-btn"><FaGithub /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-btn"><FaTwitter /></a>
            <a href="mailto:kilaparthimohan93@gmail.com" className="social-btn"><FaEnvelope /></a>
          </div>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mohana Rao Kilaparthi. Built with <span className="gradient-text">React & Framer Motion</span>.</p>
      </div>
    </footer>
  );
};

export default Footer;
