// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaUserAlt, FaLightbulb, FaGraduationCap, FaMedal, FaUniversity, FaLaptopCode, FaProjectDiagram } from "react-icons/fa";

// const tabs = [
//   { label: "Overview", icon: <FaUserAlt /> },
//   { label: "Interests", icon: <FaLightbulb /> },
//   { label: "Schooling", icon: <FaGraduationCap /> },
//   { label: "Achievements", icon: <FaMedal /> },
//   { label: "College", icon: <FaUniversity /> },
//   { label: "Internship", icon: <FaLaptopCode /> },
//   // { label: "Projects", icon: <FaProjectDiagram /> },
// ];

// const tabContent = {
//   Overview: (
//     <p>
//       👋 I’m Akarsh, a web developer passionate about crafting blazing-fast, responsive UIs.
//       I specialize in React, Tailwind CSS, Node.js, and MySQL. I'm also a synthwave music fan 🚀🎧.
//     </p>
//   ),
//   Interests: (
//     <p>
//       🧠 I solve real-world problems with code, dive into AI/ML, and love open-source.
//       When I’m not coding, I’m either working on my makhana startup or mentoring juniors.
//     </p>
//   ),
//   Schooling: (
//     <p>
//       🎓 Completed 10th & 12th from <strong>St. Michael’s High School, Patna</strong> — a place that shaped my discipline and drive.
//     </p>
//   ),
//   Achievements: (
//     <ul className="list-disc list-inside text-left mx-auto max-w-xl">
//       <li>⚽ National-level footballer – Represented Bihar in 2018.</li>
//       <li>🏊‍♂️ District-level swimmer & TT player.</li>
//       <li>🏏 Cricket enthusiast with district-level experience.</li>
//     </ul>
//   ),
//   College: (
//     <p>
//       🏫 Currently pursuing B.Tech in Computer Science at <strong>MIT-WPU</strong>, Pune (Graduating 2025). 
//       From late-night debugging to building full-stack systems — it’s been a wild ride!
//     </p>
//   ),
//   Internship: (
//     <p>
//       💼 Interned at <strong>SRV Media</strong> where I built responsive UIs, optimized websites,
//       and dived deep into WordPress & Bootstrap development. Learned production workflows.
//     </p>
//   ),
//   // Projects: (
//   //   <ul className="list-disc list-inside text-left mx-auto max-w-xl">
//   //     <li>
//   //       📅 <strong>Event Management System:</strong> A full-stack app with admin roles, email alerts, and login/session logic.
//   //     </li>
//   //     <li>
//   //       ❤️ <strong>Cardiovascular Risk Assessor:</strong> Predictive health model using AIML.
//   //     </li>
//   //     <li>
//   //       🌐 <strong>WordPress Portfolio:</strong> SEO-friendly university landing pages with Bootstrap and plugin tweaks.
//   //     </li>
//   //   </ul>
//   // ),
// };

// const About = () => {
//   const [activeTab, setActiveTab] = useState("Overview");

//   return (
//     <section id="about" className="max-w-5xl mx-auto py-20 px-6 text-center">
//       <h2 className="text-5xl font-bold mb-12 text-neonPink drop-shadow-lg">
//         👨‍💻 About Me
//       </h2>

//       {/* Tab Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 mb-12">
//         {tabs.map(({ label, icon }) => (
//           <button
//             key={label}
//             onClick={() => setActiveTab(label)}
//             className={`flex items-center gap-2 px-5 py-2 rounded-full border-2 font-medium transition-all duration-300 ${
//               activeTab === label
//                 ? "bg-neonPink text-black border-neonPink scale-105"
//                 : "border-neonPink text-neonPink hover:bg-neonPink hover:text-black"
//             }`}
//           >
//             {icon} {label}
//           </button>
//         ))}
//       </div>

//       {/* Animated Tab Content */}
//       <div className="bg-dark text-electric shadow-lg rounded-2xl p-8 max-w-3xl mx-auto text-lg leading-relaxed min-h-[180px]">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//           >
//             {tabContent[activeTab]}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Call to Action */}
//       <motion.div
//         className="mt-16"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.3, duration: 0.6 }}
//         viewport={{ once: true }}
//       >
//         <p className="text-2xl text-neonPink font-semibold animate-pulse">
//           🚀 Let’s build something awesome together!
//         </p>
//       </motion.div>
//     </section>
//   );
// };
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserAlt,
  FaLightbulb,
  FaGraduationCap,
  FaMedal,
  FaUniversity,
  FaLaptopCode,
} from "react-icons/fa";

const tabs = [
  { label: "Overview", icon: <FaUserAlt /> },
  { label: "Interests", icon: <FaLightbulb /> },
  { label: "Schooling", icon: <FaGraduationCap /> },
  { label: "Achievements", icon: <FaMedal /> },
  { label: "College", icon: <FaUniversity /> },
  { label: "Internship", icon: <FaLaptopCode /> },
];

const tabContent = {
  Overview: (
    <p>
      👋 I’m Akarsh, a web developer passionate about crafting blazing-fast, responsive UIs.
      I specialize in React, Tailwind CSS, Node.js, and MySQL. I'm also a synthwave music fan 🚀🎧.
    </p>
  ),
  Interests: (
    <p>
      🧠 I solve real-world problems with code, dive into AI/ML, and love open-source.
      When I’m not coding, I’m either working on my makhana startup or mentoring juniors.
    </p>
  ),
  Schooling: (
    <p>
      🎓 Completed 10th & 12th from <strong>St. Michael’s High School, Patna</strong> — a place that shaped my discipline and drive.
    </p>
  ),
  Achievements: (
    <ul className="list-disc list-inside text-left mx-auto max-w-xl">
      <li>⚽ National-level footballer – Represented Bihar in 2018.</li>
      <li>🏊‍♂️ District-level swimmer & TT player.</li>
      <li>🏏 Cricket enthusiast with district-level experience.</li>
    </ul>
  ),
  College: (
    <p>
      🏫 Currently pursuing B.Tech in Computer Science at <strong>MIT-WPU</strong>, Pune (Graduating 2025). 
      From late-night debugging to building full-stack systems — it’s been a wild ride!
    </p>
  ),
  Internship: (
    <p>
      💼 Interned at <strong>SRV Media</strong> where I built responsive UIs, optimized websites,
      and dived deep into WordPress & Bootstrap development. Learned production workflows.
    </p>
  ),
};

const dynamicWords = ["awesome", "amazing", "magical", "wild", "unreal", "epic"];
const colorsLight = [
  "text-pink-700",
  "text-blue-700",
  "text-green-700",
  "text-yellow-600",
  "text-purple-700",
  "text-red-700",
];
const colorsDark = [
  "text-pink-400",
  "text-blue-400",
  "text-green-400",
  "text-yellow-400",
  "text-purple-400",
  "text-red-400",
];

const About = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = dynamicWords[wordIndex];
  const currentColor = darkMode ? colorsDark[wordIndex] : colorsLight[wordIndex];

  useEffect(() => {
    let timeout;

    if (!isDeleting && charIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting((prev) => !prev);
        if (!isDeleting) {
          // Pause before deleting
          timeout = setTimeout(() => setIsDeleting(true), 800);
        } else {
          // Move to next word after deleting
          setWordIndex((prev) => (prev + 1) % dynamicWords.length);
        }
      }, 600);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  // Color & bg variables matching your Projects section style
  const bgSection = darkMode ? "bg-black" : "bg-[#FFF9F0]";
  const textPrimary = darkMode ? "text-purple-400" : "text-purple-700";
  const contentBg = darkMode
    ? "bg-[rgba(255,255,255,0.05)] backdrop-blur-md"
    : "bg-white border border-purple-300";
  const contentText = darkMode ? "text-gray-100" : "text-gray-800";
  const contentBorder = darkMode ? "border-purple-400" : "border-purple-300";
  const tabBorder = darkMode ? "border-purple-400" : "border-purple-300";
  const tabText = darkMode ? "text-purple-400" : "text-purple-700";
  const tabHoverBg = darkMode ? "hover:bg-[rgba(213,128,255,0.15)]" : "hover:bg-purple-100";
  const tabHoverText = darkMode ? "hover:text-purple-200" : "hover:text-purple-800";
  const tabActiveBg = darkMode ? "bg-[rgba(213,128,255,0.3)]" : "bg-purple-200";
  const tabActiveText = darkMode ? "text-purple-300" : "text-purple-900";
  const tabHoverShadow = darkMode
    ? "hover:shadow-[0_0_20px_#D580FF]"
    : "hover:shadow-md";

  return (
    <section
      id="about"
      className={`${bgSection} max-w-5xl mx-auto py-20 px-6 text-center transition-colors duration-500`}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <h2
        className={`text-5xl font-bold mb-12 drop-shadow-lg ${textPrimary} text-center`}
      >
        👨‍💻 About Me
      </h2>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map(({ label, icon }) => {
          const isActive = activeTab === label;
          return (
            <button
              key={label}
              onClick={() => setActiveTab(label)}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg border font-medium transition-all duration-300 focus:outline-none ${
                isActive
                  ? `${tabActiveBg} ${tabActiveText} ${tabBorder} scale-105 shadow-md`
                  : `${tabBorder} ${tabText} ${tabHoverBg} ${tabHoverText} ${tabHoverShadow}`
              }`}
              aria-pressed={isActive}
            >
              {icon} {label}
            </button>
          );
        })}
      </div>

      {/* Animated Tab Content */}
      <div
        className={`${contentBg} ${contentBorder} ${contentText} shadow-lg rounded-2xl p-8 max-w-3xl mx-auto text-lg leading-relaxed min-h-[180px] transition-colors duration-500`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dynamic Typing CTA */}
     <motion.div
  className="mt-16 text-2xl font-semibold font-mono transition-colors duration-500"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  viewport={{ once: true }}
>
  🚀 Let’s build something{" "}
  <span className={`${currentColor}`}>{displayedText}</span> together!
</motion.div>

    </section>
  );
};

export default About;
