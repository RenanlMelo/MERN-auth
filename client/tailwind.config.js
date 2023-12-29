/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '5xl': '20px 20px 50px rgba(0, 0, 0, 0.5)',
        'under': '0px 0px 25px rgba(0, 0, 0, 0.5)',
      },

      dropShadow: {
        '4xl': '0 45px 65px rgba(0, 0, 0, 0.15)',
      },
      
      keyframes: {

        pulse: {
         '0%': { transform: 'scale(0.9)', opacity: '.9' },
         '50%': { transform: 'scale(1)', opacity: '.5' },
         '100%': { transform: 'scale(0.9)', opacity: '.9' },
          },

        blob: {
          '0%': {
            transform: 'scale(1)'
          },
          '33%': {
            transform: 'scale(1.2)'
          },
          '66%': {
            transform: 'scale(0.8)'
          },
          '100%': {
            transform: 'scale(1)'
          },
        }

        },

      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
      },
      
    }, //extend
  }, //theme
  plugins: [],
}