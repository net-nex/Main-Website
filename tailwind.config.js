const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Background': "url('../src/utils/bg.webp')",
    },
      fontFamily : {
        'kanit' : ['Kanit', 'sans-serif'],
        'Lexend' : ['Lexend Deca', 'sans-serif'],
        'Paytone' : ['Paytone One', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

