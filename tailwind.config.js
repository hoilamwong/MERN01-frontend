/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.5xl') },
        'h2': { fontSize: theme('fontSize.4xl') },
        'h3': { fontSize: theme('fontSize.2xl') },
      })
    })
  ],
}

