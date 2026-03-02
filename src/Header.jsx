import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="container header-grid">
        <div className="header-content">
          <motion.p
            className="greeting"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I am
          </motion.p>
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Kilaparthi Mohana Rao <br />
            <span className="gradient-text">Full Stack Developer</span>
          </motion.h1>
          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I build exceptional and accessible digital experiences for the web.
            Currently deeply engaged in modern scalable applications.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="/Mohana_Rao.pdf"
              download="Mohana_Rao.pdf"
              className="btn btn-primary glowing-btn"
              onClick={(e) => {
                fetch('/Mohana_Rao.pdf', { method: 'HEAD' }).then(res => {
                  if (!res.ok) {
                    alert("Resume file not found! Please ensure Mohana_Rao.pdf is inside the /public folder.");
                  }
                }).catch(() => { });
              }}
            >
              Download Resume
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </a>
            <a href="#projects" className="btn btn-secondary">View Work</a>
          </motion.div>
        </div>

        <motion.div
          className="header-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-wrapper">
            <div className="image-backdrop"></div>
            <img src="/Mohan-Photo.jpeg" alt="Mohana Rao" className="profile-img" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
