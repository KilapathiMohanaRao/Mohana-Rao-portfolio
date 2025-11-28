// Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section about">
          <h3>About Me</h3>
          <p>
            Hello! I'm Mohan, a passionate professional creating modern web applications using React. 
            I love building interactive and user-friendly interfaces.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt /> Hyderabad, India</p>
          <p><FaPhoneAlt /> +91 9949237674</p>
          <p><FaEnvelope /> kilaparthimphan93@gmail.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="mailto:yourmail@example.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mohan | Crafted with 💙 by React</p>
      </div>
    </footer>
  );
};

export default Footer;
