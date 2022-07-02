/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          400: "#D0D6F9",
          900: "#0B0D17",
        },
      },
      fontFamily: {
        sans: ["Barlow", ...defaultTheme.fontFamily.sans],
        "barlow-condensed": [
          "Barlow Condensed",
          ...defaultTheme.fontFamily.sans,
        ],
        bellefair: ["Bellefair", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        home: "url('@/assets/home/background-home-mobile.jpg')",
        "home-sm": "url('@/assets/home/background-home-tablet.jpg')",
        "home-xl": "url('@/assets/home/background-home-desktop.jpg')",
        destination:
          "url('@/assets/destination/background-destination-mobile.jpg')",
        "destination-sm":
          "url('@/assets/destination/background-destination-tablet.jpg')",
        "destination-xl":
          "url('@/assets/destination/background-destination-desktop.jpg')",
        crew: "url('@/assets/crew/background-crew-mobile.jpg')",
        "crew-sm": "url('@/assets/crew/background-crew-tablet.jpg')",
        "crew-xl": "url('@/assets/crew/background-crew-desktop.jpg')",
        technology:
          "url('@/assets/technology/background-technology-mobile.jpg')",
        "technology-sm":
          "url('@/assets/technology/background-technology-tablet.jpg')",
        "technology-xl":
          "url('@/assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
  safelist: ["router-link-active"],
};
