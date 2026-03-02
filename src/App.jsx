import React, { useState } from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Stars from "./Stars";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleToast = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark"
    });
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      {/* 3D Global Interactions */}
      {darkMode && <Stars />}

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section id="home" style={{ padding: 0 }}>
        <Header />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact handleToast={handleToast} />
      </section>

      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
