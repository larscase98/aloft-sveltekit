<script>
  import { page } from '$app/stores';

  import '../app.postcss';

  $: url = $page.path;

  $: subtitle = (u = url) => {
    switch (u) {
      case '/':
        return;
      case '/about':
        return 'about us';
      case '/services':
        return 'services';
      case '/projects':
        return 'projects';
      case '/contact':
        return 'contact us';
    }
  };
</script>

<header class:hero={url === '/'}>
  <h1><a href="/">aloft software</a></h1>
  {#if subtitle && subtitle.length > 0}
    <h2>{subtitle}</h2>{/if}
</header>
<!-- <nav>
  <a href="about" class:active={url === '/about'}>about us</a>
  <a href="services" class:active={url === '/services'}>services</a>
  <a href="projects" class:active={url === '/projects'}>projects</a>
  <a href="contact" class:active={url === '/contact'}>contact us</a>
</nav> -->
<main>
  <slot />
</main>
<footer>
  <p>copyright &copy; 2021 - aloft software</p>
</footer>

<style lang="postcss">
  header {
    @apply text-white w-full p-10 flex flex-col justify-center items-center;
    @apply bg-gradient-to-br from-blue-300 to-blue-400;
    @apply transition-all;

    font-family: 'Zen Loop', 'Fira Sans', sans-serif;

    & h1 {
      @apply font-bold text-6xl text-center no-underline;

      letter-spacing: 0.2rem;

      & > a {
        @apply leading-none px-4 text-white hover:text-blue-100 no-underline border-b-2 border-transparent hover:border-blue-100;
      }
    }

    &.hero {
      @apply p-24;

      & h1 {
        @apply text-7xl;
      }
    }
  }

  nav {
    @apply bg-blue-600 flex flex-row justify-center items-baseline;

    a {
      @apply font-light text-lg text-blue-50 hover:text-white p-2 px-4 pt-3 hover:bg-blue-500 border-b-4 border-transparent;

      &.active {
        @apply bg-blue-500 border-blue-600;
      }
    }
  }

  /* main/section stlyes are in app.postcss */

  footer {
    @apply w-full flex justify-center items-center p-2 bg-blue-100 font-light;
  }
</style>
