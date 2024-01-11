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
        'lightBright': '0px 0px 10px rgba(250, 250, 250, 0.75)',
        'edit': '0px 0px 15px rgba(37, 99, 235, 0.75)',
        'singOut': '0px 0px 15px rgba(239, 68, 68, 0.75)',
      },
      
      dropShadow: {
        'light': '0 0 2px rgba(255, 255, 255, 1)',
        '4xl': '0 0 15px rgba(255, 255, 255, 1)',
      },

      maxHeight: {
        'form': '500px',
      },
      
     borderWidth: {
      'thin': '0.5px',
     },

     keyframes: {
      slideIn: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' },
      },

      slideOut: {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(100%)' },
      },
     },
     
     animation: {
      slideIn: 'slideIn ease-in-out .35s',
      slideOut: 'slideOut ease-in-out .35s',
     },
      
    }, //extend
  }, //theme
  plugins: [],
}