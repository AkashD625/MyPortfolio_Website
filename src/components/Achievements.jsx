import React from "react";
import {
  FaAward,
  FaCode,
  FaTrophy,
  FaStar,
  FaMedal,
  FaGraduationCap,
} from "react-icons/fa";
import "./Achievements.css";

const achievements = [
  {
    icon: <FaCode />,
    text: "Mastered Data Structures & Algorithms by solving 450+ problems on platforms like LeetCode, Codeforces, and GFG.",
  },
  {
    icon: <FaTrophy />,
    text: "Solved 250+ DSA problems on LeetCode, achieving consistent practice milestones.",
  },
  {
    icon: <FaAward />,
    text: "Ideathon (NAIN): Selected for ₹5 Lakh government funding at National Level.",
  },
  {
    icon: <FaStar />,
    text: "Achieved contest rating of 1,397 in weekly and biweekly contests on LeetCode.",
  },
  {
    icon: <FaMedal />,
    text: "Global rank 530,723 on LeetCode.",
  },
  {
    icon: <FaGraduationCap />,
    text: "Secured 9+ SGPA twice during academic terms.",
  },
];

const Achievements = () => {
  return (
    <section className="achievements-section">
      <h2 className="achievements-title">Key Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div key={index} className="achievement-card fade-in">
            <div className="achievement-icon">{item.icon}</div>
            <p className="achievement-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
