/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'n1-blue': '#3A4D81', 
      'n1-black': '#0A0A0A',
      'n1-blue-mid': '#717B97',
      'n1-blue-light': '#F1F3F9',
      'n1-orange': '#EA7317',
      'n1-gray-light': '#EFEFEF',
      'n1-gray-dark': '#939598',
      'n1-white': '#fff',
      'n1-green': '#78A352',
      'n1-red': '#CC0000', 
    },
    extend: {
      fontFamily: {
        custom: ['Urbane Rounded', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

