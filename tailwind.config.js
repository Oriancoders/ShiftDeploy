/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors : {
       
        primaryBlue : '#0C1F3A',
        secondaryBlue : '#4361EE',
        primaryOrange : '#F76707'
      }
    },
  },
  plugins: [],
};
