/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '5xl': '0 0 50px rgba(0, 0, 0, .7)',
        'under': '0px 0px 25px rgba(0, 0, 0, 0.5)',
        'bright': '0px 5px 5px rgba(255, 255, 255, 1), 0px 5px 15px rgba(255, 255, 255, 1), 0px 5px 120px rgba(255, 255, 255, 1)' ,
        'inset': 'inset 0 0 10px 0 rgba(0, 0, 0, 0.75)',
      },
      
      dropShadow: {
        'light': '0 0 2px rgba(255, 255, 255, 1)',
        '4xl': '0 0 15px rgba(255, 255, 255, 1)',
      },

      maxHeight: {
        'form': '500px',
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