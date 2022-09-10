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
        "wpp-green": "var(--color-wpp-green)",
        "wpp-dark-green": "var(--color-wpp-dark-green)",
        "wpp-dark-green-light": "var(--color-wpp-dark-green-light)",
        "wpp-app-bg": "var(--color-wpp-app-bg)",
        "wpp-bg": "var(--color-wpp-bg)",
        "wpp-bg-active": "var(--color-wpp-bg-active)",
        "wpp-bg-hover": "var(--color-wpp-bg-hover)",
        "wpp-border": "var(--color-wpp-border)",
        "wpp-border-panel": "var(--color-wpp-border-panel)",
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
