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
        'md': '90vh',
        'desk': '650px'
      },
      inset: {
        '1300px': '1300px'
      },
      screens: {
        'medium': '400px'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],
}
