import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "React", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "HTML/CSS", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Tailwind", category: "Frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Java", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", category: "Backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "MySQL", category: "Database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const Skills = () => {
  return (
    <div className="container" id="skills-container">
      <h2 className="section-title">Technical Expertise</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="glass-panel skill-box"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <span className="skill-name">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
