/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'open': ['Open Sans', 'sans-serif']
    },
    extend: {
      height: {
        'md': '90vh'
      },
      inset: {
        '1300px': '1300px'
      }
    },
  },
  plugins: [],
}
