/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'see-me': {
          '0%': {
            backgroundColor: 'rgba(253, 186, 116, 0.5)',
           },
          '100%': {
            backgroundColor: 'transparent'
          },
        }
      },
      animation: {
        'see-me': 'see-me 1s ease-in-out',
      }
    },
  },
  plugins: [],
}

