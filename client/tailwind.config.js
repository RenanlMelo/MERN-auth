/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '5xl': '20px 20px 50px rgba(0, 0, 0, 0.5)',
      },
      
      keyframes: {

        pulse: {
         '0%': { transform: 'scale(0.9)', opacity: '.9' },
         '50%': { transform: 'scale(1)', opacity: '.5' },
         '100%': { transform: 'scale(0.9)', opacity: '.9' },
          },

        },

      animation: {
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
    }, //extend
  }, //theme
  plugins: [],
}