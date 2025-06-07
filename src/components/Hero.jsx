import React from "react";
import { motion } from "framer-motion";
import CursorTrail from "./CursorTrail";
import FloatingSkill from "./FloatingSkill";
import SocialIcons from "./SocialIcons";

const skills = [
  "React.js",
  "Node.js",
  "Tailwind CSS",
  "MySQL",
  "Team Player",
  "UI/UX",
  "Problem Solver",
  "Leadership",
  "Javascript",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind",
  "MongoDB",
  "Visioner",
  "PHP",
];

const Hero = ({ darkMode }) => {
  const repeatedSkills = Array(3).fill(skills).flat();

  // Creamy white background for light mode
  const bgSection = darkMode ? "bg-black" : "bg-[#FFF9F0]";
  const textPrimary = darkMode ? "text-purple-400" : "text-purple-700";
  const neonPink = darkMode ? "text-neonPink" : "text-pink-600";
  const electricText = darkMode ? "text-electric" : "text-purple-900";
  const cyberPurple = darkMode ? "text-cyberPurple" : "text-purple-700";
  const shadowGlow = darkMode
    ? "shadow-[0_0_30px_#D580FF]"
    : "shadow-md";

  return (
    <section
      id="hero"
      className={`relative flex flex-col justify-center items-center h-screen text-center px-6 overflow-hidden transition-colors duration-500 ${bgSection}`}
    >
      <CursorTrail />
      <SocialIcons />

      {repeatedSkills.map((skill, index) => (
        <FloatingSkill
          key={`${skill}-${index}-${Math.random()}`}
          text={skill}
          delay={(index % 9) * 1.5 + Math.random()}
          darkMode={darkMode}
        />
      ))}

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`text-6xl md:text-8xl font-extrabold mb-6 ${electricText} relative z-10`}
        style={{ textShadow: darkMode ? "0 0 10px #D580FF" : "none" }}
      >
        Hey, I’m <span className={`${neonPink}`}>Akarsh</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className={`text-2xl md:text-4xl mb-8 tracking-wide font-semibold ${cyberPurple} drop-shadow-lg relative z-10`}
      >
        Web Developer | Code Crafter | Problem Solver
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className={`inline-block bg-electric text-darkNeon font-bold px-10 py-5 rounded-full ${shadowGlow} hover:shadow-[0_0_50px_#FF6EC7] transition-all duration-700 relative z-10`}
      >
        Check My Work
      </motion.a>
    </section>
  );
};

export default Hero;
