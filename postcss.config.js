const mode = process.env.NODE_ENV;
const dev = mode === 'development';

export default {
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
