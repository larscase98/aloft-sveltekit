const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(dev
      ? {
          cssnano: {}
        }
      : {})
  }
};

module.exports = config;
