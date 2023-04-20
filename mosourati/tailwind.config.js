/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        bgPrimary: "#F3F1F2",
        bgSecondary: "#ffdfd3c3",
        bgThird: "#ffd0b8a8",
        primray: "#1B1B1B",
        hovering: "#A17757",
      },
    },
  },
  plugins: [],
};
