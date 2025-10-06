import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Animated Background */}
      <div className="background">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>

      <div className="content">
        {/* Title */}
        <h1 className="title slide-in">
          Welcome to <span className="highlight">Akash Divate's</span> Portfolio
        </h1>

        {/* Social Links */}
        <div className="social-links fade-in">
          <a
            href="https://www.linkedin.com/in/akashdivate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon linkedin" />
          </a>
          <a
            href="https://github.com/AkashD625"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon github" />
          </a>
          <a href="mailto:akashdivate@gmail.com">
            <FaEnvelope className="icon email" />
          </a>
        </div>

        {/* Connect Button */}
        <a href="#contact" className="connect-btn fade-in">
          Connect
        </a>

        {/* About Me Section */}
        <div className="about-me fade-in">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I’m a passionate{" "}
            <span className="highlight">Engineering Student</span> skilled in
            <span className="highlight"> MERN Stack</span>,{" "}
            <span className="highlight">DSA</span>, and{" "}
            <span className="highlight">AI</span>. I love turning ideas into
            scalable applications that solve real-world problems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
