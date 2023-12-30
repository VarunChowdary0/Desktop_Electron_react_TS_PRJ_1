/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        dark_Match_600 : "#aeaddf",
        dark_Match_500 : "#9a9ad7",
        dark_Match_400 : "#8587ce",
        dark_Match_300 : "#7074c6",
        dark_Match_200 : "#5962be",
        dark_Match_100 : "#3f51b5",

        dark_dark_600 : "#8b8b8b",
        dark_dark_500 : "#717171",
        dark_dark_400 : "#575757",
        dark_dark_300 : "#3f3f3f",
        dark_dark_200 : "#282828",
        dark_dark_100 : "#121212",

        dark_surface_600 : "#8f8f93",
        dark_surface_500 : "#75747a",
        dark_surface_400 : "#5c5b62",
        dark_surface_300 : "#44444b",
        dark_surface_200 : "#2d2d35",
        dark_surface_100 : "#181820",

      },
      boxShadow : {
        'light' : "6px 6px 12px #8d8d8d, -6px -6px 12px #ffffff00",
        'dark': "6px 6px 12px rgb(30, 30, 30), -6px -6px 12px #ffffff00"
      }
    },
  },
  plugins: [],
  darkMode:'class'
}