import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  );
}
