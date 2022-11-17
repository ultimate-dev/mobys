/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#F6F6F6",
        default: "#252525",
        primary: "#D83442",
      },
      fontFamily: {
        sans: ["Poppins", "Gilroy"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
      boxShadow: {
        DEFAULT: "0 0 12px 0 rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [],
};
