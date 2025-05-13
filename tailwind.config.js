/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        sm: "430px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      container: {
        center: true,
        screens: {
          xs: "370px",
          sm: "400px",
          md: "740px",
          lg: "980px",
          xl: "1100px",
          "2xl": "1280px",
        },
      },
      fontFamily: {
        tektur: ["Tektur", "cursive"],
        involve: ["Involve", "cursive"],
      },
      colors: {
        goldenYellow: "#FFDE00",
        darkTone: "#121212",
        lightBlack: "#00000066",
        safron: "#f0d625",
        dhuserGray: "#ABABAB",
        lightWhite: "#FFFFFF1A",
      },
      boxShadow: {
        "yellow-glow": `
          rgb(240, 214, 37) 0px 0px 10px 0px, rgb(240, 214, 37) 0px 0px 15px 0px, rgb(240, 214, 37) 0px 0px 20px 0px
        `
          .trim()
          .replace(/\s+/g, " "),
        "yellow-lr": "-10px 0 10px -3px #FFE000, 10px 0 10px -3px #FFE000",
        "yellow-robo": "0 0 60px 0 rgba(240, 214, 37, 1)",
        "yellow-review": "0 0 20px 0 rgba(240, 214, 37, 1)",
      },
    },
  },
  plugins: [],
};
