const colors = require('tailwindcss/colors');

const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        blue: colors.sky,
        green: colors.emerald,
        orange: colors.orange,
        gray: colors.coolGray
      }
    }
  },
  plugins: []
};

module.exports = config;
