import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./About.css";

const About = () => {
  const [isEduModalOpen, setIsEduModalOpen] = useState(false);
  const [isFocusModalOpen, setIsFocusModalOpen] = useState(false);

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
          onClick={() => setIsEduModalOpen(true)}
          style={{ cursor: "pointer", position: "relative" }}
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
          onClick={() => setIsFocusModalOpen(true)}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <div className="stat-icon">💡</div>
          <h4>Focus</h4>
          <p>Full-Stack Engineering</p>
          <span>React & Spring Boot</span>
        </motion.div>
      </div>

      {/* Education Modal */}
      <AnimatePresence>
        {isEduModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsEduModalOpen(false)}
          >
            <motion.div
              className="modal-content glass-panel"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setIsEduModalOpen(false)}>×</button>
              <h3 className="modal-title">Education Journey</h3>

              <div className="edu-timeline">
                <div className="edu-item">
                  <div className="edu-icon-bg">🎓</div>
                  <div className="edu-details">
                    <h4>B.Tech (Computer Science)</h4>
                    <p className="inst-name">Amrita Sai Institute of Science and Technology</p>
                    <p className="inst-loc">Paritala, Vijayawada</p>
                    <div className="score-badge">CGPA: <span>8.10</span></div>
                  </div>
                </div>

                <div className="edu-item">
                  <div className="edu-icon-bg">🏛️</div>
                  <div className="edu-details">
                    <h4>Intermediate</h4>
                    <p className="inst-name">Chaitanya Junior College</p>
                    <p className="inst-loc">Nandhigama, Vijayawada</p>
                    <div className="score-badge">Marks: <span>794</span></div>
                  </div>
                </div>

                <div className="edu-item">
                  <div className="edu-icon-bg">🏫</div>
                  <div className="edu-details">
                    <h4>Tenth (SSC)</h4>
                    <p className="inst-name">ZPH</p>
                    <p className="inst-loc">Rajahmundry</p>
                    <div className="score-badge">GPA: <span>9.2</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Professional Focus Modal */}
      <AnimatePresence>
        {isFocusModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFocusModalOpen(false)}
          >
            <motion.div
              className="modal-content glass-panel"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setIsFocusModalOpen(false)}>×</button>
              <h3 className="modal-title">Professional Focus</h3>

              <div className="edu-timeline">
                <div className="edu-item">
                  <div className="edu-icon-bg">⚛️</div>
                  <div className="edu-details">
                    <h4>Frontend Engineering</h4>
                    <p className="inst-name">React.js, JavaScript, HTML5, CSS3</p>
                    <p className="inst-loc">Building responsive, dynamic UIs with Framer Motion</p>
                    <div className="score-badge">Level: <span>Advanced</span></div>
                  </div>
                </div>

                <div className="edu-item">
                  <div className="edu-icon-bg">⚙️</div>
                  <div className="edu-details">
                    <h4>Backend Architecture</h4>
                    <p className="inst-name">Java, Spring Boot,Node.js,Express.js, RESTful APIs</p>
                    <p className="inst-loc">Developing scalable microservices and secure endpoints</p>
                    <div className="score-badge">Level: <span>Proficient</span></div>
                  </div>
                </div>

                <div className="edu-item">
                  <div className="edu-icon-bg">🛠️</div>
                  <div className="edu-details">
                    <h4>Database & Tools</h4>
                    <p className="inst-name">MySQL, MongoDB, Git, Postman</p>
                    <p className="inst-loc">Experienced with relational DBs and modern setups</p>
                    <div className="score-badge">Level: <span>Experienced</span></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
