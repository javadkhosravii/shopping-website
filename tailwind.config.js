/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: ["./src/**/*.{html,js}"],
  },
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "big-screen": "1800px",
      "3xl": "2000px",
      sxl: { max: "1279px" },
      slg: { max: "1023px" },
      smd: { max: "767px" },
      ssm: { max: "639px" },
      sxs: { max: "474px" },
    },
  },
  plugins: [require("daisyui")],
};
