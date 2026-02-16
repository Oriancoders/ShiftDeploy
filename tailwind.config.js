/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // This tells Tailwind: "When I use 'font-sans' (default), look for Inter first."
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
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
        'md' : '16px',
        '3xl' : '2rem',
        '4xl' : '2.5rem',
        '5xl' : '3.5rem',
      }
    },
  },
  plugins: [],
};
