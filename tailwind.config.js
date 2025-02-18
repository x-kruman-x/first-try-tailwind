/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  important: true,
  theme: {
    screens: {
      xs: { max: "575px" },
      sm: "576px",
      md: "768px",
      lg: '992px',
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        tenorSans: ["Tenor Sans", "sans-serif"],
      },
      backgroundImage: {
        "house-in-twilight": "url('../assets/img/house-in-twilight.png')",
        "country-houses": 'url("../assets/img/country-houses.jpg")',
        "city-property": 'url("../assets/img/city-property.jpg")',
        "our-projects": 'url("../assets/img/our-projects.jpg")',
        "legal-services": 'url("../assets/img/legal-services.jpg")',
        "submit-application": 'url("../assets/img/submit-application.jpg")',
        "parallax-background": 'url("../assets/img/parallax-background.jpg")',
        "alabino-gradient-horizontal":
          "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.48) 50%, rgba(0,0,0,0.74) 100%)",
        "alabino-gradient-vertical":
          "linear-gradient(180deg, rgba(18,16,15,0) 0%, rgba(18,16,15,0.5) 100%)",
        "contacts-form": 'url("../assets/img/contacts-form.jpg")',
        "partner-background": 'url("../assets/img/partner-background.jpg")',
        "partner-gradient-horizontal":
          "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.64) 50%, rgba(0,0,0,1) 100%)",
        "partner-gradient-vertical":
          "linear-gradient(180deg, rgba(18,16,15,0) 0%, rgba(18,16,15,1) 100%)",
        
      },
      colors: {
        copper: "rgba(183, 151, 110, 1)",
        whitegray: "rgba(197, 198, 199, 1)",
        defaultBackground: "rgba(18, 16, 15, 1)",
      },
      container: {
        center: true,
        screens: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "1546px",
        },
      },
      gridTemplateRows: {
        'form-items': 'repeat(4, minmax(0, auto))',
      },
      gridTemplateColumns: {
        'accordion-container': 'repeat(2, minmax(0, auto))',
      }
    },
  },
  plugins: [],
};
