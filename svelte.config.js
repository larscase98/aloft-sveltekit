import preprocess from 'svelte-preprocess';

import node from '@sveltejs/adapter-node';

export default {
  kit: {
    adapter: node({
      out: 'build',
      precompress: true,
      envPrefix: {
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
