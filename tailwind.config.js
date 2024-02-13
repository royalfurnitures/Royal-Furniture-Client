/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
    },
    fontFamily: {
     
    },
    colors: {
      'r-gold': '#F7AE45',
      'r-brown': '#6C3E2E',
      'white': "#ffffff",
      'r-gray': "#ACACAC",
      'r-voi': "#6C3E2E",
      'r-voi2': "#49354A",
      'r-tvoi': "#452C49",
      'r-grad': "#808080",
      'r-bggray': "#F5F4F5"
    },
    screens: {
      'xs': '300px'  
    }
    
  },
  plugins: [],
});