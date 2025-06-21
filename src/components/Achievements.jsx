// src/components/Achievements.jsx

import React from "react";
import "./Achievements.css";

const achievements = [
  "Mastered Data Structure and algorithm by solving 450+ problems on platforms like Leetcode, CodeForces and GFG.",
  "Solved 250+ DSA problems on platform Leetcode.",
  "Ideathon (NAIN): Selected for ₹5 Lakh government funding (National Level).",
  "Achieved contest rating of 1,397 in weekly and biweekly contests on LeetCode.",
  "Global rank 530,723 on LeetCode.",
  "Secured 9+ SGPA twice.",
];

const Achievements = () => {
  return (
    <section className="achievements-section">
      <h2 className="achievements-title">Key Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((item, index) => (
          <li key={index} className="achievement-item">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
