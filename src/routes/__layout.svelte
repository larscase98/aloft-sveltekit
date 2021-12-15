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
    <h2>{subtitle}</h2>
  {/if}

  {#if url === '/'}
    <div class="cta">
      <h2>the internet is full of the same old stuff.</h2>
      <h3>ready to make something new?</h3>
      <a href="/contact">contact us</a>
    </div>
  {/if}
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
    @apply text-white w-full flex flex-col justify-center items-center;
    @apply bg-gradient-to-br from-sky-300 to-sky-600;
    @apply transition-all;

    & h1 {
      @apply font-bold text-6xl text-center no-underline py-10;

      font-family: 'Zen Loop', 'Fira Sans', sans-serif;
      letter-spacing: 0.2rem;

      & > a {
        @apply leading-none px-4 text-white hover:text-sky-100 no-underline border-b-2 border-transparent hover:border-sky-100;
      }
    }

    &.hero {
      @apply bg-no-repeat;
      background-image: url('/img/aloft-waves.svg');
      background-size: cover;

      & h1 {
        @apply text-7xl py-20;
      }
    }

    & .cta {
      @apply w-full flex flex-col justify-center items-center py-8;

      & > h2 {
        @apply font-light text-2xl;
      }

      & > h3 {
        @apply font-normal mb-2 text-blue-700 text-3xl;
      }

      & > a {
        @apply text-lg p-2 px-4 my-4 rounded bg-sky-100 hover:bg-blue-800 hover:text-blue-100;
      }
    }
  }

  nav {
    @apply bg-sky-600 flex flex-row justify-center items-baseline;

    a {
      @apply font-light text-lg text-sky-50 hover:text-white p-2 px-4 pt-3 hover:bg-sky-500 border-b-4 border-transparent;

      &.active {
        @apply bg-sky-500 border-sky-600;
      }
    }
  }
</style>
