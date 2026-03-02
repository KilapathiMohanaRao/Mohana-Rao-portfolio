import React, { useEffect, useState, useMemo } from "react";
import "./Stars.css";

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 150 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 4,
        opacity: Math.random() * 0.8 + 0.2,
      }));
    };
    setStars(generateStars());
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;
