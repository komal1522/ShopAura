// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Update with your paths
  darkMode: 'class', // or 'media' if you are using the media-query based dark mode
  theme: {
    extend: {
      colors:{
        primary:" #E57373",
        secondary:"#EF9A9A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
