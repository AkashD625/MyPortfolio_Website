import React from "react";
import "./Skills.css";
import { FaCode, FaLaptopCode, FaDatabase, FaBrain, FaCloud, FaGithub } from "react-icons/fa";

const skills = [
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
    icon: "💻",
  },
  {
    title: "Backend Development",
    description: "Building scalable and efficient backend services using modern technologies.",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "GraphQL"],
    icon: "⚙️",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Solving real-world problems using optimized DSA techniques.",
    skills: ["C++", "Algorithms", "Dynamic Programming", "Graphs", "Trees"],
    icon: "📊",
  },
  {
    title: "AI & Machine Learning",
    description: "Implementing AI solutions using advanced ML models.",
    skills: ["TensorFlow", "OpenCV", "NLP (spacy, NLTK)", "Deep Learning"],
    icon: "🤖",
  },
  {
    title: "Tools & Technologies",
    description: "Proficient with essential developer tools & DevOps.",
    skills: ["Git", "GitHub", "Docker", "AWS", "Linux", "CI/CD"],
    icon: "🛠️",
  },
];

const Skills = () => {
  return (
    <section className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <h3 className="skill-name">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
            <div className="skill-tags">
              {skill.skills.map((s, i) => (
                <span key={i} className="skill-tag">{s}</span>
              ))}
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default Skills;
