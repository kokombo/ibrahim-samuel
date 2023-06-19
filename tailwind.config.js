/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    "text-js-color",
    "text-react-color",
    "text-node-color",
    "text-tailwind-color",
    "text-html-color",
    "text-firebase-color",
    "text-redux-color",
    "py-6",
    "px-8",
    "md:flex-row",
    "md:flex-row-reverse",
  ],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        "main-bg": "#233554",
        navy: "#0a192f",
        slate: "#889260",
        "lightest-navy": "#233554",
        "light-navy": "#112240",
      },
      colors: {
        primary: "#64ffda",
        secondary: "#e6f1ff",
        "lightest-slate": "#ccd6f6",
        "js-color": "#F0DB4F",
        "react-color": "#61DBFB",
        "node-color": "#215732",
        "tailwind-color": "#4dc0b5",
        "html-color": "#e34c26",
        "firebase-color": "#FFCB2B",
        "redux-color": "#764abc",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },

      Lineheight: {
        50: "50px",
        100: "100px",
        12: "3rem",
      },
    },
  },

  plugins: [],
};
