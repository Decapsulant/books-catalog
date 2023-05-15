/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '30px',
      screens: { xl: '1260px' },
    },
    colors: {
      white: '#fff',
      BGwhite: 'rgb(244,240,237)',
      dark: 'rgb(40,40,40)',
      red: 'rgb(198,63,63)',
    },
  },
  plugins: [],
};
