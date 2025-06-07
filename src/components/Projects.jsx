import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Event Management System (Full Stack Development)",
    description:
      "Developed a MERN stack-based event management platform for colleges with dashboards for organizers, students, and faculty, including dynamic listings and event creation.",
    link: "https://github.com/aakarsh15/college-event-management-system-repo",
  },
  {
    title: "Cardiovascular Risk Assessor (Machine Learning)",
    description:
      "Built a predictive ML model to assess heart disease risk using Logistic Regression, SVM, Random Forest & more, with an interactive frontend for real-time user input.",
    link: "https://github.com/aakarsh15/Heart-Health-Prediction",
  },
  {
    title: "Homaid (UI/UX Design Project)",
    description:
      "Designed a smart relocation app prototype in Figma offering services like maid subscription, milk & newspaper delivery — focused on usability and clean UI/UX.",
    link: "https://www.figma.com/file/7JbexjLP3nO3EdOC8lct0j/HOMAID?type=design&nodeid=0%3A1&mode=design&t=3TD4vttMQUblDwp9-1",
  },
  {
    title: "Video Dataset Analysis & Mapping (Machine Learning)",
    description:
      "Performed data cleaning, EDA, feature engineering & regression on video datasets using pandas, sklearn, etc. Visualized patterns with decision trees.",
    link: "https://github.com/aakarsh15/Machine-Learning",
  },
];

// Top-to-bottom for section
const sectionVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Stagger-in for each card from top
const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
};

const Projects = ({ darkMode }) => {
  const bgSection = darkMode ? "bg-black" : "bg-[#FFF9F0]";
  const textPrimary = darkMode ? "text-purple-400" : "text-purple-700";
  const cardBg = darkMode
    ? "bg-[rgba(255,255,255,0.05)] backdrop-blur-md"
    : "bg-white border border-purple-300";
  const cardText = darkMode ? "text-gray-100" : "text-gray-800";
  const cardBorder = darkMode ? "border-purple-400" : "border-purple-300";
  const hoverShadow = darkMode
    ? "hover:shadow-[0_0_25px_#D580FF]"
    : "hover:shadow-md";

  return (
    <motion.section
      id="projects"
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-colors duration-500 ${bgSection}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2
        className={`text-4xl sm:text-5xl font-bold mb-14 text-center drop-shadow-lg ${textPrimary}`}
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(({ title, description, link }, index) => (
          <motion.a
            key={title}
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`rounded-2xl p-6 shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer flex flex-col justify-between ${cardBg} ${cardBorder} ${hoverShadow}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            custom={index}
          >
            <h3 className={`text-xl font-semibold mb-3 ${textPrimary}`}>
              {title}
            </h3>
            <p className={`text-sm sm:text-base ${cardText}`}>
              {description}
            </p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
