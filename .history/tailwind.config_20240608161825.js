/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   'n1-blue': '#3A4D81', 
    // },
    extend: {
      fontFamily: {
        custom: ['Urbane Rounded', sans-serif],
      },
    },
  },
  plugins: [],
}

