/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
      backgroundImage: {
        'cover': "url('/public/assets/cover.jpg')",
      },
    },
  },
  plugins: [],
};
