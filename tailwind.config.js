module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Poppins", "serif"],
    },
    extend: {
      colors: {
        "wpp-green": "#25D366",
        "wpp-dark-green": "#00af9c",
        "wpp-dark-green-light": "#26beae",
        "wpp-app-bg": "#090e11",
        "wpp-bg": "#131c21",
        "wpp-bg-active": "#323739",
        "wpp-bg-hover": "#2d3134",
        "wpp-border": "#242d32",
        "wpp-border-panel": "#30373b",
      },
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
    }),
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/3": "33.33333333333333%",
      "1/2": "50%",
      "2/3": "66.66666666666667%",
      "3/4": "75%",
      full: "100%",
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      cursor: ["disabled"],
    },
  },
}
