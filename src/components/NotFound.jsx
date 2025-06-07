import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = ({ darkMode }) => {
  // Refined theme colors
  const bgColor = darkMode ? "bg-darkNeon" : "bg-[#F7EDE0]";
  const textPrimary = darkMode ? "text-white" : "text-purple-900"; // better contrast in dark
  const neonPink = darkMode ? "text-neonPink" : "text-pink-600";
  const cyberPurple = darkMode ? "text-cyberPurple" : "text-purple-700";
  const buttonBg = "bg-electric";
  const buttonText = "text-darkNeon";
  const buttonShadow = darkMode
    ? "shadow-[0_0_30px_#00FFFF] hover:shadow-[0_0_50px_#FF6EC7]"
    : "shadow-[0_0_30px_#D580FF] hover:shadow-[0_0_50px_#FF6EC7]";

  return (
    <section
      className={`flex flex-col justify-center items-center min-h-screen px-6 text-center transition-colors duration-500 ${bgColor} ${textPrimary}`}
      role="main"
    >
      <main className="max-w-3xl">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`text-9xl font-extrabold animate-pulseNeon ${neonPink}`}
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold mt-6"
        >
          Whoops! Page not found.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className={`mt-4 mb-8 text-lg ${cyberPurple}`}
        >
          Maybe you typed something wrong or the page has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Link
            to="/"
            aria-label="Go back to homepage"
            className={`inline-block mt-8 px-8 py-4 ${buttonBg} ${buttonText} font-bold rounded-full ${buttonShadow} transition-all duration-700`}
          >
            Back to Home
          </Link>
        </motion.div>
      </main>
    </section>
  );
};

export default NotFound;
