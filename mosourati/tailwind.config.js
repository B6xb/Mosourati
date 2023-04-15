/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#fff8ede3",
        bgSecondary: "#ffdfd3c3",
        bgThird: "#ffd0b8a8",
        primray: "#481d0e",
      },
    },
  },
  plugins: [],
};
