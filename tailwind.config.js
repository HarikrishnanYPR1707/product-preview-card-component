/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Fraunces: ["Fraunces", "serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        fmLightGreen: "#3c8067",
        fmDarkGreen: "#1a4031",
        fmCream: "#f2ebe3",
        fmDarkBlue: "#1c232b",
        fmTextColor: "#6c7289",
      },
    },
  },
  plugins: [],
};
