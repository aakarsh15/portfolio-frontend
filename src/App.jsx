// // src/App.jsx
// import React, { useState, useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import CursorTrail from "./components/CursorTrail";
// import CursorRipple from "./components/CursorRipple";
// import NotFound from "./components/NotFound";

// function PortfolioApp({ darkMode, setDarkMode }) {
//   return (
//     <>
//       <CursorTrail />
//       <CursorRipple />

//       {/* Dark Mode Toggle Button */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         className="fixed top-5 right-5 px-4 py-2 bg-neonPink text-darkNeon rounded shadow hover:shadow-lg transition z-50"
//       >
//         {darkMode ? "Light Mode" : "Neon Mode"}
//       </button>

//       <div className="flex-grow bg-white text-black dark:bg-darkNeon dark:text-electric">
//         <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
//         <main>
//           <Hero darkMode={darkMode} />
//           <About />
//           <Projects />
//           <Contact />
//         </main>
//         <Footer />
//       </div>
//     </>
//   );
// }

// function App() {
//   const [darkMode, setDarkMode] = useState(() => {
//     return localStorage.getItem("darkMode") === "true";
//   });

//   useEffect(() => {
//     localStorage.setItem("darkMode", darkMode);
//   }, [darkMode]);

//   const location = useLocation();

//   return (
//     <div
//       className={`${
//         darkMode ? "dark" : ""
//       } scroll-smooth min-h-screen flex flex-col transition-colors duration-500`}
//     >
//       <AnimatePresence mode="wait">
//         <Routes location={location} key={location.pathname}>
//           <Route
//             path="/"
//             element={
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <PortfolioApp darkMode={darkMode} setDarkMode={setDarkMode} />
//               </motion.div>
//             }
//           />
//           <Route
//             path="*"
//             element={
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <NotFound />
//               </motion.div>
//             }
//           />
//         </Routes>
//       </AnimatePresence>
//     </div>
//   );
// }

// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorTrail from "./components/CursorTrail";
import CursorRipple from "./components/CursorRipple";
import NotFound from "./components/NotFound";
import TestimonialsAndTimeline from "./components/TestimonialsAndTimeline";

function PortfolioApp({ darkMode, setDarkMode }) {
  return (
    <>
      <CursorTrail darkMode={darkMode} />
      <CursorRipple />

      {/* Dark Mode Toggle Button */}
      {/* <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed top-5 right-5 px-4 py-2 rounded shadow hover:shadow-lg transition z-50
          ${darkMode ? "bg-white text-black" : "bg-creamWhite text-black"}`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button> */}

      <div className="flex-grow bg-creamWhite text-black dark:bg-black dark:text-white transition-colors duration-500">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero darkMode={darkMode} />
          <About darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          {/* ✅ Pass darkMode prop here */}
          <TestimonialsAndTimeline darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </main>
        <Footer />
      </div>
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Sync dark mode toggle with localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Apply 'dark' class to <html> for Tailwind dark mode support
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const location = useLocation();

  return (
    <div
      className={`${darkMode ? "dark" : ""
        } scroll-smooth min-h-screen flex flex-col transition-colors duration-500`}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <PortfolioApp darkMode={darkMode} setDarkMode={setDarkMode} />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <NotFound darkMode={darkMode} />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
