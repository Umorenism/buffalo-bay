

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure these paths match your project structure
  theme: {
    extend: {
      colors:{
        blue:"#2997FF"
      }
    },
  },
  plugins: [],
};
