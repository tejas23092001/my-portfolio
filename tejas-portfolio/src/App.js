import React from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import { motion, useScroll } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
