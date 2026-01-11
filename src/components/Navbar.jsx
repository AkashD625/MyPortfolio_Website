import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#projects" onClick={toggleMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#coding" onClick={toggleMenu}>
            Coding-Profiles
          </a>
        </li>
        <li>
          <a href="#achievements" onClick={toggleMenu}>
            Achievements
          </a>
        </li>{" "}
        {/* ✅ New */}
        <li>
          <a href="#skills" onClick={toggleMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </li>
      </ul>

      {/* Resume Button */}
      <a
        href="https://drive.google.com/uc?export=download&id=1c03NGW-bVu3yLGKaxCuJftsjbQ0x7pMH"
        download="Akash_Divate_Resume.pdf"
        className="resume-button"
      >
        Resume 📄
      </a>
    </nav>
  );
};

export default Navbar;
