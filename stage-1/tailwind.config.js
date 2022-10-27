/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "text-xl": ["20px", "30px"],
        "text-lg": ["18px", "28px"],
        "text-md": ["16px", "24px"],
      },
    },
  },
  plugins: [],
};
