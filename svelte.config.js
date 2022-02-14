import preprocess from 'svelte-preprocess';

import node from '@sveltejs/adapter-node';

export default {
  kit: {
    target: '#svelte',
    adapter: node({
      out: 'build',
      precompress: true,
      env: {
        port: 4050
      }
    })
  },
  preprocess: [
    preprocess({
      postcss: true
    })
  ]
};

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
process.env.TAILWIND_MODE = dev ? 'watch' : 'build';
