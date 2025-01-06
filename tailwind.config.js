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
        nav: "#052c65",
        prim: "#10162a",
        lightprim: "#00468b",
      },
    },
  },
  plugins: [],
}