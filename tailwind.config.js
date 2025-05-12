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
          xl: "1120px",
          "2xl": "1280px",
        },
      },
      fontFamily: {
        tektur: ["Tektur", "cursive"],
        involve: ["Involve", "cursive"],
      },
      colors: {
        goldenYellow: "#FFE000",
      },
    },
  },
  plugins: [],
};
