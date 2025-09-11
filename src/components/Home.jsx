import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Background Animation */}
      <div className="background"></div>
      <div className="content">
        <h1 className="title">
          Welcome to <span className="highlight">Akash Divate's</span> Portfolio
        </h1>

        {/* Social Links */}
        <div className="social-links">
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
        <a href="#contact" className="connect-btn">
          Connect
        </a>

        {/* About Me Section */}
        <div className="about-me">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I’m a passionate{" "}
            <span className="highlight">Engineering Student</span> with
            expertise in <span className="highlight">MERN Stack</span>,{" "}
            <span className="highlight">Data Structures & Algorithms</span>, and{" "}
            <span className="highlight">AI</span>. I enjoy solving real-world
            problems through technology and building scalable applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
