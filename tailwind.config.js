/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html", "./RO/**/*.{html,js}", "./RU/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '2lg':'1200px',
        '3xl': '1900px',
      },
    },
  },
  plugins: [],
}

