/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors : {
       
        primaryBlue : '#0C1F3A',
        toBlue : '#0B1D30',
        secondaryBlue : '#4361EE',
        toSecBlue : '#1D4eD8',
        primaryOrange : '#F76707',
        toOrange : '#D83A21',
        textColor : '#231F20',
      },
      fontSize : {
        '3xl' : '2rem',
        '4xl' : '2.5rem',
      }
    },
  },
  plugins: [],
};
