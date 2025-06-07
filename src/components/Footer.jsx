import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`bg-darkNeon py-2 text-center text-[11px] sm:text-xs tracking-wide font-bold uppercase select-none leading-tight sm:py-3 ${
        darkMode ? "text-gray-300" : "text-gray-700"
      }`}
    >
      <div className={darkMode ? "text-white" : "opacity-70"}>
        This ain’t your grandma’s portfolio — welcome to the code jungle.
      </div>
      <div
        className={`normal-case ${
          darkMode ? "text-gray-400" : "text-gray-600 opacity-50"
        } text-[10px] sm:text-sm font-normal`}
      >
        © {new Date().getFullYear()} Akarsh. Fueled by midnight oil, caffeine, and pure chaos ☕🔥
      </div>
      <div
        className={`normal-case ${
          darkMode ? "text-gray-400" : "text-gray-600 opacity-50"
        } text-[10px] sm:text-sm font-normal`}
      >
        Code hard, hustle harder. No bugs, no mercy.
      </div>
    </footer>







  );
};



export default Footer;



{/* <footer
  className="bg-darkNeon text-gray-300 py-6 text-center text-sm tracking-wide"
  style={{ WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }}
>
  Building the future, one line of code at a time. © {new Date().getFullYear()} Akarsh.
  <span
    role="img"
    aria-label="rocket"
    title="Forward thinking"
    className="inline-block transition-transform duration-300 hover:scale-125"
    style={{ cursor: "default" }}
  >
    🚀
  </span>
</footer> */}
