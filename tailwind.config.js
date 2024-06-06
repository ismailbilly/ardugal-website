/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/carousel/construction.jpg')"
      },
      colors: {
        "primary": "#072D45",
        'secondary': "#F47822"
      }
    },
  },
  plugins: [],
};
