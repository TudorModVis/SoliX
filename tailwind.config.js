/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1900px',
      },
    },
  },
  plugins: [],
}

