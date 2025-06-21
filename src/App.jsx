import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Coding from "./components/Coding";
import Achievements from "./components/Achievements"; // ✅ Import
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="projects"><Projects /></section>
      <section id="coding"><Coding /></section>
      <section id="achievements"><Achievements /></section> {/* ✅ Added */}
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default App;
