import React from "react";
import { motion } from "framer-motion";

const lightModeGradients = [
  {
    bg: "linear-gradient(135deg, #ff7e5f, #feb47b)", // warm orange background
    text: "linear-gradient(90deg, #b14100, #7a2f00)", // darker burnt orange text gradient
    fallbackColor: "#7a2f00",
  },
  {
    bg: "linear-gradient(135deg, #6a11cb, #2575fc)", // purple blue background
    text: "linear-gradient(90deg, #2e1b7e, #162462)", // deep indigo text gradient
    fallbackColor: "#162462",
  },
  {
    bg: "linear-gradient(135deg, #f7971e, #ffd200)", // gold background
    text: "linear-gradient(90deg, #9b6b02, #6c4b00)", // dark golden brown text gradient
    fallbackColor: "#6c4b00",
  },
];

const darkModeGradients = [
  {
    bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // deep dark blue background
    text: "linear-gradient(90deg, #00c6ff, #0072ff)",          // cyan blue text gradient
    fallbackColor: "#0072ff",
  },
  {
    bg: "linear-gradient(135deg, #434343, #000000)",           // charcoal black background
    text: "linear-gradient(90deg, #ff6ec7, #ff00ff)",          // neon pink/purple text gradient
    fallbackColor: "#ff00ff",
  },
  {
    bg: "linear-gradient(135deg, #232526, #1c1c1c)",           // dark gray background
    text: "linear-gradient(90deg, #f43b47, #453a94)",          // red to violet text gradient
    fallbackColor: "#453a94",
  },
];

const FloatingSkill = ({ text, delay, darkMode }) => {
  const left = Math.random() * 95;
  const gradients = darkMode ? darkModeGradients : lightModeGradients;
  const { bg, text: textGradient, fallbackColor } = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <motion.div
      key={Math.random()}
      initial={{ y: -100, opacity: 0.4, rotate: -10, scale: 0.95 }}
      animate={{ y: "120vh", opacity: 0.8, rotate: 10, scale: 1 }}
      transition={{
        delay,
        duration: 14 + Math.random() * 4,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: Math.random() * 3,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.2,
        rotate: [0, 5, -5, 5, 0],
        transition: { duration: 0.6 },
      }}
      className="absolute px-4 py-2 rounded-xl shadow-xl cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
      style={{
        left: `${left}%`,
        top: "-50px",
        zIndex: 1,
        background: bg,
        boxShadow: darkMode
          ? "0 0 10px rgba(255, 255, 255, 0.15), 0 0 20px rgba(255, 255, 255, 0.10)"
          : "0 0 10px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.05)",
        backgroundClip: "border-box",
        WebkitBackgroundClip: "border-box",
      }}
    >
      <span
        style={{
          background: textGradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: fallbackColor,
          fontWeight: "700",
          userSelect: "none",
          display: "inline-block",
        }}
      >
        {text}
      </span>
    </motion.div>
  );
};

export default FloatingSkill;
