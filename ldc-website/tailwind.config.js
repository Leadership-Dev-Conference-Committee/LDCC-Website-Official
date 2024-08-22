/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Edu': ["Edu VIC WA NT Beginner", 'cursive'], 
      'Coming' : ["Coming Soon", 'cursive'],
      'Poppins' : ["Poppins", 'sans-serif'],  
      'Mode' : ["Moderustic", 'sans-serif'], 
    },
    extend: {},
  },
  plugins: [],
}