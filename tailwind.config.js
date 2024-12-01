/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      "2xl": "1400px",
      'xl': "1200px",
      'lg': "992px",
      'md': "768px",
      'sm': "576px",
      'xs': {max: "575px"},
    },
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        tenorSans: ["Tenor Sans", "sans-serif"],
      },
      backgroundImage: {
        'house-in-twilight': "url('../assets/img/house-in-twilight.png')",
      },
      colors: {
        copper: "rgba(183, 151, 110, 1)",
        whitegray: "rgba(197, 198, 199, 1)",
        defaultBackground: "rgba(18, 16, 15, 1)"
      },
      container: {
        center: true,
        screens: {
          'sm': '540px',
          'md': '720px',
          'lg': '1024px',
          'xl': '1140px',
          '2xl': '1320px',
        }
      },
      
    },
  },
  plugins: [],
};