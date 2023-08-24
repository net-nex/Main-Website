const { transform } = require('typescript')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
          'Background': "url('../public/bg.webp')",
      },
    },
    // colors: {
    //   'primary': '#1E1E20',
    //   'secondary': '#D9D9D9',
    //   'accent-1': '#32FFAA',
    //   'accent-2': '#FFE86E',
    // },
    screens: {
      'xxxs': '320px',
      'xxs': '375px',
      'xs': '490px'
    },
    animation: {
      blob1: "blob1 7s infinite",
      blob2: "blob2 7s infinite",
      blob3: "blob3 7s infinite",
      fadeUp: "fadeUp 3.25s ease-in-out",
      fadeDown: "fadeDown 3.25s ease-in-out",
      splashScreen: "splashScreen 3s ease-in-out forwards",
      splashScreenText: "splashScreenText .8s ease-in-out forwards"
    },
    keyframes: {
      blob1: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(100px, -50px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-20px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
        },
      },
      blob2: {
        "0%": {
          transform: "translate(0px, 0px) scale(1)",
        },
        "33%": {
          transform: "translate(-30px, 100px) scale(1.1)",
        },
        "66%": {
          transform: "translate(-60px, 20px) scale(0.9)",
        },
        "100%": {
          transform: "translate(0px, 0px) scale(1)",
        },
      },
      fadeUp: {
        "0%": {
          opacity: 0,
          transform: "translateY(30px) scale(0.9)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0px) scale(1)",
        }
      },
      fadeDown: {
        "0%": {
          opacity: 0,
          transform: "translateY(-30px) scale(0.9)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0px) scale(1)",
        }
      },
      splashScreen: {
        "0%": { top: "0", },
        "33%": { top: "0", },
        "100%": { top: "-150%", }
      },
      splashScreenText: {
        "0%": { top: "2rem", opacity: 0 },
        "80%": { top: "-0.4rem", opacity: 1 },
        "100%": { top: "1" }
      }
    }
  },
  plugins: [],
  
}
