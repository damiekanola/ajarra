// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["var(--font-merriweather)", "serif"],
        mulish: ["var(--font-mulish)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
