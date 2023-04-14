/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif']
      },
      colors: {
        'primary' : '#5b21b6',
        'subtitle' : '#64748b',
        'dark' : '#1e293b',
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

