/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c020ffc4',
        secondary: {
          100: '#E2E2D5',
          200: '#cfcfce',
        }
      },
    },
  },
  plugins: [],
}

