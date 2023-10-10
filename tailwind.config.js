/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      //남색
      primary: {
        100: "#F2F4F7",
        200: "#D5E1F2",
        300: "#A6B1C0",
        400: "#3F5D7D",
      },
      etc: {
        blue: "#006cb7",
        red: "ff0000",
      },
      //white to black
      secondary: {
        100: "#FFFFFF",
        200: "#D4D4D4",
        300: "#A8A8A8",
        400: "#2D2D2D",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [require("@tailwindcss/typography")],
};
