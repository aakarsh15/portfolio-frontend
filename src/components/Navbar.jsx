import React, { useState } from "react";
import { FaBolt } from "react-icons/fa"; // You can use any icon from react-icons

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [active, setActive] = useState("#hero");

  const navBg = darkMode ? "bg-darkNeon" : "bg-[#F7EDE0]";
  const navText = darkMode ? "text-electric" : "text-purple-900";
  const activeText = darkMode
    ? "text-neonPink drop-shadow-[0_0_10px_#FF6EC7]"
    : "text-pink-600 underline underline-offset-4";
  const hoverText = darkMode ? "hover:text-neonPink" : "hover:text-purple-700";
  const buttonStyles = darkMode
    ? "bg-transparent text-[#0ff] border border-[#0ff]"
    : "bg-white text-black border border-[#D580FF]";

  const buttonShadow = darkMode
    ? "shadow-[0_0_12px_#0ff] hover:shadow-[0_0_20px_#0ff]"
    : "shadow-[0_0_10px_#D580FF] hover:shadow-[0_0_18px_#D580FF]";

  const iconColor = darkMode ? "text-[#0ff]" : "text-black"; // Updated for crystal moon in light mode

  return (
    <nav
      className={`fixed w-full ${navBg} bg-opacity-90 backdrop-blur-md z-50 shadow-xl py-4 px-6 md:px-10 flex justify-between items-center transition-colors duration-500`}
    >
      <div className={`flex items-center gap-2 ${navText} font-extrabold text-2xl tracking-wide`}>
        <FaBolt className="text-neonPink animate-spin-slow" />
        <span className="hidden sm:inline-block font-mono">DevMode</span>
      </div>

      <ul className={`hidden md:flex space-x-8 font-semibold ${navText}`}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={() => setActive(href)}
              className={`transition-colors duration-300 ${hoverText} ${
                active === href ? activeText : ""
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`ml-4 px-4 py-2 rounded ${buttonStyles} ${buttonShadow} transition flex items-center`}
        aria-label="Toggle dark mode"
        title={darkMode ? "Switch to Light Mode" : "Switch to Neon Mode"}
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 mr-2 ${iconColor}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m8.66-10h-1M4.34 12h-1m15.07 6.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 mr-2 ${iconColor}`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
        )}
        {darkMode ? "Light" : "Dark"}
      </button>
    </nav>
  );
};

export default Navbar;
