// src/components/TestimonialsAndTimeline.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const testimonials = [
  {
    name: "Madhura Phatak",
    role: "Professor & Capstone Project Guide",
    text: "Akarsh displayed remarkable innovation and dedication throughout the capstone project. His ability to merge technical skills with leadership truly stood out.",
  },
  {
    name: "Sandip Adhav",
    role: "Internship Team Lead",
    text: "Akarsh is a brilliant asset to our team. His ability to grasp concepts quickly, adapt to new tech stacks, and deliver quality work on time is commendable.",
  },
  {
    name: "Rhythm Sethiya",
    role: "Teammate – Capstone Project",
    text: "Akarsh is a natural leader. He managed the team, deadlines, and challenges with grace and confidence. Always dependable and proactive!",
  },
];

const timelineData = [
  {
    date: "2022",
    title: "Started Web Development",
    description: "Dove into HTML, CSS, and JavaScript. Built my first personal website and started learning Git.",
  },
  {
    date: "2023",
    title: "Learned React & Node.js",
    description: "Created several full-stack projects using the MERN stack. Also got hands-on with MySQL and REST APIs.",
  },
  {
    date: "2024",
    title: "Internship + Capstone",
    description: "Worked on real-world client projects, built an Event Management System, and led a capstone team to success.",
  },
];

const TestimonialsAndTimeline = ({ darkMode }) => {
  // Colors & styles based on theme mode
  const bgGradient = darkMode
    ? "bg-gradient-to-b from-black via-gray-900 to-black"
    : "bg-gradient-to-b from-[#FFF9F0] via-[#F5E9DB] to-[#FFF9F0]";

  const textColorPrimary = darkMode ? "text-white" : "text-gray-900";
  const textColorSecondary = darkMode ? "text-gray-300" : "text-gray-700";
  const borderColor = darkMode ? "border-purple-600" : "border-purple-300";
  const iconBgColor = darkMode ? "#8A2BE2" : "#CDA4DE"; // cyber purple dark vs light
  const iconColor = "#fff";

  const cardBg = darkMode ? "bg-[rgba(255,255,255,0.05)] backdrop-blur-md" : "bg-white/70 backdrop-blur-sm";
  const cardShadow = darkMode
    ? "shadow-lg hover:shadow-[0_0_30px_#8A2BE2]"
    : "shadow-md hover:shadow-lg";

  return (
    <section className={`${bgGradient} py-20 px-4 relative z-10`}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-5xl font-bold text-center mb-16 ${darkMode ? "text-purple-400" : "text-purple-700"}`}
        >
          What People Say 💬
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${cardBg} ${borderColor} border rounded-xl p-6 ${cardShadow} transition duration-500`}
            >
              <FaQuoteLeft
                className={`${darkMode ? "text-purple-400" : "text-purple-600"} text-3xl mb-4`}
              />
              <p className={`italic mb-4 ${textColorSecondary}`}>"{t.text}"</p>
              <h4 className={`font-semibold ${textColorPrimary}`}>{t.name}</h4>
              <p className={`text-sm ${darkMode ? "text-purple-300" : "text-purple-700"}`}>{t.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Timeline */}
        <h2
          className={`text-5xl font-bold text-center mb-12 ${darkMode ? "text-purple-400" : "text-purple-700"}`}
        >
          Tech Journey 🚀
        </h2>

        <VerticalTimeline lineColor={iconBgColor}>
          {timelineData.map((item, i) => (
            <VerticalTimelineElement
              key={i}
              date={item.date}
              iconStyle={{ background: iconBgColor, color: iconColor }}
              contentStyle={{
                background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(10px)",
                border: `1px solid ${darkMode ? "#8A2BE2" : "#CDA4DE"}`,
                color: darkMode ? "#fff" : "#111827",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${darkMode ? "#8A2BE2" : "#CDA4DE"}`,
              }}
            >
              <h3 className={`font-bold text-xl ${darkMode ? "text-purple-200" : "text-purple-800"}`}>
                {item.title}
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-700"} mt-2`}>
                {item.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default TestimonialsAndTimeline;
