/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
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
      },
      animation: {
        'text-gradient': 'textGradient 5s linear infinite',
        'gradient-xy': 'gradient-xy 5s ease infinite',
        'subtle-float': 'subtle-float 4s ease-in-out infinite',
      },
      keyframes: {
        textGradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'gradient-xy': {
          '0%, 100%': {
             'background-size': '400% 400%',
             'background-position': 'left center'
          },
          '50%': {
             'background-size': '200% 200%',
             'background-position': 'right center'
          }
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundSize: {
        '300%': '300%',
      }
    },
  },
  plugins: [],
};
