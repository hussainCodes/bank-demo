/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-button": "url('./assets//media/homebutton.jpg')",
      },
    },
  },
  plugins: [],
};
