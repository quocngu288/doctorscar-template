/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
      "max-xl": { max: "1440px" },
      "max-lg": { max: "1200px" },
      "max-md": { max: "767px" },
      "max-sm": { max: "639px" },
      "max-xs": { max: "424px" },
    },
    extend: {
      colors: {
        turquoise: "#1e9c8c", //xanh ngọc
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          lg: "1rem",
          xl: "3.5rem",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
