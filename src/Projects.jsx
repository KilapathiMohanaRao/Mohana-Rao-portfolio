import React from "react";
import { motion } from "framer-motion";
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
    githubLink: "https://github.com/yourusername/chat-app",
    liveLink: "https://your-chatapp-live.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "Currency Conversion Microservice",
    description: "A highly resilient backend microservice architecture to convert multiple global currencies in real-time.",
    tech: ["Java", "Spring Boot", "REST API", "Microservices"],
    githubLink: "https://github.com/KilapathiMohanaRao/SpringRepository",
    liveLink: "https://your-currency-api.com",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop",
  },
];

const Projects = () => {
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
                <a href={p.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Source Code
                </a>
                <a href={p.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live Preview
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
