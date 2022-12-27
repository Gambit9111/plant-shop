/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#082E21",
        secondaryLightGreen: "#E4EEE6",
        thirdWhite: "#EFF4F0",
        fourthBlack: "#202020",
        fifthGray: "#778082",
      },
      fontFamily: {
        "Lora": ["Lora", ...defaultTheme.fontFamily.sans],
        "Livvic": ["Livvic", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwind-scrollbar"),],
}