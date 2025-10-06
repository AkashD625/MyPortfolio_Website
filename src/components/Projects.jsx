// import React from "react";
// import "./Projects.css";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// // Import images properly
// import project1 from "../assets/images/pro1.jpg";
// import project2 from "../assets/images/pro2.jpg";
// import project3 from "../assets/images/pro3.jpg";

// // Project data
// const projects = [
//   {
//     title: "Social Issues Tracker (Upcoming)",
//     description: "A location-based issue reporting platform.",
//     img: project1,
//     link: "https://github.com/AkashD625/LocalIssues-tracker-Web-appliication-",
//     github: "https://github.com/AkashD625/LocalIssues-tracker-Web-appliication-",
//   },
//   {
//     title: "Food Ordering App",
//     description: "A user-friendly food ordering platform.To enhance my skills in mern stack i built this project that also has payment gatway.",
//     img: project2,
//     link: "https://vegy-food-delivery-app-1.onrender.com/",
//     github: "https://github.com/AkashD625/Vegy---food-delivery-app",
//   },
//   {
//     title: "Placement Portal",
//     description: "A platform to help students get placed in top companies.",
//     img: project3,
//     link: "https://github.com/AkashD625/DBMS-project-Placementor-",
//     github: "https://github.com/AkashD625/DBMS-project-Placementor-",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="projects-container">
//       <h2 className="projects-title">My Projects</h2>
//       <p className="projects-description">
//         Here are some of the projects I have worked on. Click to explore more!
//       </p>
//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <img src={project.img} alt={project.title} className="project-image" />
//             <div className="project-info">
//               <h3 className="project-name">{project.title}</h3>
//               <p className="project-description">{project.description}</p>
//               <div className="project-links">
//                 <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-btn">
//                   <FaExternalLinkAlt /> Live Demo
//                 </a>
//                 <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
//                   <FaGithub className="github-icon" /> Code
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import project1 from "../assets/images/airpulse.jpg";
import project2 from "../assets/images/vegy.png";
import project3 from "../assets/images/drowsiness.png";

const projects = [
  {
    title: "AirPulse – Healthcare Platform (Govt. Funded ₹5L)",
    description:
      "A cross-platform healthcare solution for lung and heart sound monitoring using AI/ML. Built with React Native, Node.js, Express, and MongoDB. Implemented secure REST APIs with JWT authentication and optimized database queries, reducing response time by 40%.",
    img: project1,
    link: "https://github.com/AkashD625/AirPulse-Healthcare-Platform",
    github: "https://github.com/AkashD625/AirPulse-Healthcare-Platform",
  },
  {
    title: "Vegy – Food Delivery Platform",
    description:
      "A full-stack food delivery app built with React.js, Node.js, Express, and MySQL. Integrated Stripe API for payments and developed multi-role dashboards for Admin, Vendor, and Customer, handling 500+ weekly orders and 10K+ transactions efficiently.",
    img: project2,
    link: "https://vegy-food-delivery-app-1.onrender.com/",
    github: "https://github.com/AkashD625/Vegy---food-delivery-app",
  },
  {
    title: "Drowsiness Detection System",
    description:
      "A real-time driver monitoring system using Python, OpenCV, TensorFlow, and scikit-learn. Achieved 92% accuracy with a CNN model and reduced false positives by 30%. Alerts trigger within <1 second during live tests.",
    img: project3,
    link: "https://github.com/AkashD625/Drowsiness-Detection-System",
    github: "https://github.com/AkashD625/Drowsiness-Detection-System",
  },
];

const Projects = () => {
  return (
    <section className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-description">
        A showcase of my most impactful projects — blending full-stack
        development, AI, and real-world problem-solving.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.img}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  <FaGithub className="github-icon" /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
