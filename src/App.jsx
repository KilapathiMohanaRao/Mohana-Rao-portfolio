import React, { useState, useEffect } from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Section fade animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-in");
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("section").forEach((el) => observer.observe(el));
  }, []);

  const handleToast = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className={darkMode ? "App dark" : "App"}>
      {/* NAVBAR */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* SECTIONS */}
      <section id="home">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects handleToast={handleToast} />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
