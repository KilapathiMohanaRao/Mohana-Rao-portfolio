import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Web App",
    description: "A full-scale MERN application integrating scanner payments, advanced product filters, and Voice Assistance.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/KilapathiMohanaRao/ReactProjectCart",
    liveLink: "https://main.d312pm68h0ast7.amplifyapp.com/",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
  },
  {
    title: "Real-time Product App",
    description: "High-performance tracking app featuring WebSocket integration for live data and user tracking.",
    tech: ["Spring Boot", "React", "WebSocket", "MySQL"],
    githubLink: "https://github.com/KilapathiMohanaRao/product-Store",
    liveLink: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Currency Conversion Microservice",
    description: "A highly resilient backend microservice architecture to convert multiple global currencies in real-time.",
    tech: ["Java", "Spring Boot", "REST API", "Microservices"],
    githubLink: "https://github.com/KilapathiMohanaRao/SpringRepository",
    liveLink: "#",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
  },
];

const Projects = () => {
  const [fallbackModalOpen, setFallbackModalOpen] = useState(false);
  const [fallbackMessage, setFallbackMessage] = useState("");

  const handleLinkClick = (e, link, type) => {
    if (link === "#" || !link) {
      e.preventDefault();
      setFallbackMessage(
        type === "source"
          ? "The source code for this project is currently private or unavailable."
          : "The live preview for this project is currently unavailable."
      );
      setFallbackModalOpen(true);
    }
  };

  return (
    <div className="container" id="projects-container">
      <h2 className="section-title">Selected Works</h2>

      <div className="projects-list">
        {projects.map((p, i) => (
          <motion.div
            className="pro-project-card glass-panel"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="project-image-container">
              <div className="project-overlay"></div>
              <img src={p.image} alt={p.title} className="project-img" />
            </div>

            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="project-tech">
                {p.tech.map((t, j) => <span key={j}>{t}</span>)}
              </div>

              <div className="project-actions">
                <a
                  href={p.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  onClick={(e) => handleLinkClick(e, p.githubLink, "source")}
                >
                  Source Code
                </a>
                <a
                  href={p.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  onClick={(e) => handleLinkClick(e, p.liveLink, "live")}
                >
                  Live Preview
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fallback Modal */}
      <AnimatePresence>
        {fallbackModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFallbackModalOpen(false)}
            style={{ zIndex: 9999 }}
          >
            <motion.div
              className="modal-content glass-panel"
              initial={{ y: -50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              style={{ textAlign: "center", maxWidth: "400px", padding: "40px" }}
            >
              <button
                className="close-btn"
                onClick={() => setFallbackModalOpen(false)}
                style={{ top: "15px", right: "15px" }}
              >
                ×
              </button>

              <motion.div
                className="fallback-icon"
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.1 }}
                style={{ fontSize: "4rem", marginBottom: "20px" }}
              >
                🚧
              </motion.div>

              <h3 style={{
                color: "#fff",
                fontSize: "1.5rem",
                marginBottom: "15px",
                background: "linear-gradient(90deg, #fff, #ff5e62)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Coming Soon!
              </h3>

              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: "1.6" }}>
                {fallbackMessage}
              </p>

              <button
                className="btn btn-primary"
                onClick={() => setFallbackModalOpen(false)}
                style={{ marginTop: "25px", width: "100%" }}
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
