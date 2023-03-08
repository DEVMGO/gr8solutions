/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray80: "#808080",
        grayC0: "#BCBEC0",
        grayD9: "#D9D9D9",
        blueCF: "#0805CF",
        lightblue: "#CAD3F9",
      },
      backgroundImage: {
        'home': `url("/public/assets/images/home/top.png")`,
      },
      screens: {
        "3xl": "1600px",
      },
      gridTemplateColumns: {
        16: "repeat(auto-fit, minmax(150px, 1fr))",
        17: "repeat(auto-fit, minmax(160px, 1fr))",
        18: "repeat(auto-fit, minmax(200px, 1fr))",
        19: "repeat(auto-fit, minmax(250px, 1fr))",
        20: "repeat(auto-fill, minmax(270px, 1fr))",
        21: "repeat(auto-fit, minmax(280px, 1fr))",
        22: "repeat(auto-fit, minmax(100px, 1fr))",
      },
    },
  },
  plugins: [],
};
