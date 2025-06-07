module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class", // toggling dark mode via `class="dark"`
  theme: {
    extend: {
      colors: {
        // New color scheme
        creamWhite: "#FFF9F0",   // Soft cream white for light mode background
        black: "#000000",        // Pure black for dark mode background
        white: "#FFFFFF",        // Standard white for text/buttons as needed

        // Text colors for themes
        lightText: "#111827",    // dark gray (like gray-900) for light mode text
        darkText: "#FFFFFF",     // white for dark mode text

        // Optional accent colors (tweak or keep old ones for accents)
        electric: "#00FFFF",     // Cyan accent if you want
        cyberPurple: "#8A2BE2", // Accent purple
      },
      animation: {
        flicker: "flicker 3s infinite",
        pulseNeon: "pulseNeon 2s infinite",
        floatUp: "floatUp 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        blob: "blob 20s infinite",
      },
      keyframes: {
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: 1 },
          "20%, 22%, 24%, 55%": { opacity: 0.4 },
        },
        pulseNeon: {
          "0%, 100%": {
            textShadow: "0 0 8px #00FFFF, 0 0 20px #00FFFF",
          },
          "50%": {
            textShadow: "0 0 20px #FF6EC7, 0 0 30px #FF6EC7",
          },
        },
        floatUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
