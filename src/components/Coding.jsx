import React from "react";
import { SiLeetcode, SiCodechef, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";
import "./Coding.css";

const codingProfiles = [
  {
    name: "LeetCode",
    link: "https://leetcode.com/akashdivate",
    icon: <SiLeetcode className="leetcode-icon" />,
  },
  {
    name: "Codeforces",
    link: "https://codeforces.com/profile/akashdivate",
    icon: <SiCodeforces className="codeforces-icon" />,
  },
  {
    name: "CodeChef",
    link: "https://www.codechef.com/users/akashdivate",
    icon: <SiCodechef className="codechef-icon" />,
  },
  {
    name: "GeeksforGeeks",
    link: "https://auth.geeksforgeeks.org/user/akashdivate",
    icon: <SiGeeksforgeeks className="gfg-icon" />,
  },
];

const Coding = () => {
  return (
    <section className="coding-container">
      <h2 className="section-title">Coding Profiles</h2>
      <p className="coding-description">
        I actively solve problems and participate in competitive programming contests to improve my{" "}
        <span className="highlight">Data Structures & Algorithms</span> skills across multiple platforms.
      </p>
      <div className="coding-grid">
        {codingProfiles.map((profile, index) => (
          <a key={index} href={profile.link} target="_blank" rel="noopener noreferrer" className="coding-card">
            <div className="icon-container">{profile.icon}</div>
            <h3 className="profile-name">{profile.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Coding;
