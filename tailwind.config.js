/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Lexend', 'sans-serif'],
      },
      colors: {
        nav: "#2f4f3f",
        prim: "#28322c",
        lightprim: "#60786b",
      },
    },
  },
  plugins: [],
}