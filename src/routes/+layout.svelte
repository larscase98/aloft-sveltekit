<script>
  import { page } from '$app/stores';

  import '../app.postcss';

  $: url = $page.url.pathname;

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

<svelte:head>
  <meta
    name="description"
    content="Aloft Software is a Bozeman-based, one-man web and software development startup, specializing in small business web development and modern programming practices."
  />
</svelte:head>

<header class:hero={url === '/'}>
  <h1><a href="/">aloft software</a></h1>
  {#if subtitle && subtitle.length > 0}
    <h2>{subtitle}</h2>
  {/if}

  {#if url === '/'}
    <div class="cta">
      <h2>the internet is full <wbr />of the same old stuff.</h2>
      <h3>ready to make <wbr />something new?</h3>
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
  <div class="text">
    <p>made with ☕️ by Aloft Software</p>
    <p>&copy Lars Case 2021</p>
  </div>
  <!-- <div class="tech-icons">
    <img src="img/svelte.png" alt="SvelteJS" />
    <img src="img/tailwind.png" alt="TailwindCSS" />
  </div> -->
</footer>

<style lang="postcss">
  header {
    @apply text-white w-full flex flex-col justify-center items-center;
    @apply bg-gradient-to-br from-sky-500 to-sky-200;
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
      @apply bg-sky-400 bg-no-repeat;
      background-image: url('/img/aloft-waves.svg');
      background-size: cover;
      font-family: 'Rubik';

      h1 {
        @apply text-8xl pt-16 pb-32;

        a {
          @apply p-0 m-0 border-0 cursor-default hover:text-inherit;
        }
      }
    }

    & .cta {
      @apply w-full flex flex-col justify-center items-center text-center p-8;

      h2 {
        @apply font-normal text-3xl text-white whitespace-pre-wrap;
      }

      h3 {
        @apply font-medium mb-2 text-blue-700 text-4xl whitespace-pre-wrap;
      }

      a {
        @apply text-lg p-2 px-4 mt-8 rounded text-sky-500 bg-white hover:bg-blue-700 hover:text-white hover:shadow-lg;
      }
    }
  }

  /* nav {
    @apply bg-sky-600 flex flex-row justify-center items-baseline;

    a {
      @apply font-light text-lg text-sky-50 hover:text-white p-2 px-4 pt-3 hover:bg-sky-500 border-b-4 border-transparent;

      &.active {
        @apply bg-sky-500 border-sky-600;
      }
    }
  } */
</style>
