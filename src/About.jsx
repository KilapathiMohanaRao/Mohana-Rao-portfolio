import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="container" id="about-container">
      <h2 className="section-title">About Me</h2>

      <div className="about-bento">
        {/* Main Bio Card */}
        <motion.div
          className="glass-panel bio-card bento-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h3>My Background</h3>
          <p>
            I am a B.Tech (CSE) graduate (Class of 2025) with a deep passion for building scalable,
            performant, and visually stunning web applications. I bridge the gap between robust
            backend architecture and engaging frontend user experiences.
          </p>
          <p>
            When I'm not coding, I am exploring new tech ecosystems, contributing to open-source,
            and constantly attempting to refine my problem-solving skills.
          </p>
        </motion.div>

        {/* Quick Facts Cards */}
        <motion.div
          className="glass-panel stat-card bento-item"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="stat-icon">🎓</div>
          <h4>Education</h4>
          <p>B.Tech Computer Science</p>
          <span>Expected 2025</span>
        </motion.div>

        <motion.div
          className="glass-panel stat-card bento-item"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="stat-icon">💡</div>
          <h4>Focus</h4>
          <p>Full-Stack Engineering</p>
          <span>React & Spring Boot</span>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
