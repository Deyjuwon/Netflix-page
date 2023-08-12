/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'net-red': 'rgb(229,9,20)',
      },
      fontFamily: {
        'Epilogue': ['Epilogue', "sans-serif"],
        'bebas': ['Bebas Neue', 'sans- serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url('../images/net-bg.jpg')",
      }
    },
  },
  plugins: [],
}

// linear - gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url("netflix-bg.jpg")

// url('../images/net-bg.jpg')