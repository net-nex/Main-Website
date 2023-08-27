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
    },
  },
  plugins: [],
}

