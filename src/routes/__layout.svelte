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
  <p>copyright &copy; 2021 - aloft software (= Lars Case)</p>
</footer>

<style lang="postcss">
  header {
    @apply text-white w-full flex flex-col justify-center items-center;
    @apply bg-gradient-to-br from-sky-300 to-sky-600;
    @apply transition-all;

    & h1 {
      @apply font-bold text-7xl text-center no-underline py-10;

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
        @apply text-8xl py-20;
      }
    }

    & .cta {
      @apply w-full flex flex-col justify-center items-center text-center py-8 pt-16 px-8;

      h2 {
        @apply font-normal text-3xl text-white;
      }

      h3 {
        @apply font-medium mb-2 text-pink-400 text-4xl;
      }

      a {
        @apply text-lg p-2 px-4 my-4 rounded text-sky-500 bg-white hover:bg-sky-600 hover:text-white hover:shadow-lg;
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
