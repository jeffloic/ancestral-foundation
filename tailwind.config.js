/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        grayy: {
          gray: "#343434",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [],
}
