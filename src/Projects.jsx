import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Web App",
    description: "Full-stack MERN application with Scanner Payment, product filters,  Voice Assistence , searching .",
    tech: ["React", "JavaScript","Html","Css"],
    link: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React and Tailwind CSS with animations and dark mode toggle.",
    tech: ["React", "TailwindCSS",],
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Products Application",
    description: "Real-time Product app with WebSocket integration and online user tracking.",
    tech: ["Spring Boot", "WebSocket", "MySQL"],
    link: "https://github.com/yourusername/chat-app",
  },
];

const Projects = () => (
  <div className="projects-container container">
    <h2>🚀 Featured Projects</h2>
    <div className="projects-grid">
      {projects.map((p, i) => (
        <div className="project-card" key={i}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <div className="tech-stack">
            {p.tech.map((t, j) => <span className="tech" key={j}>{t}</span>)}
          </div>
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-btn">
            View Code
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
