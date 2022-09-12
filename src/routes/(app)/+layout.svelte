<script>
  import '../../app.postcss';

  import { page } from '$app/stores';

  import Footer from '$lib/Footer.svelte';

  $: url = $page.url.pathname;

  export const prerender = true;
</script>

<svelte:head>
  <meta
    name="description"
    content="Aloft Software is a Bozeman-based, one-man web and software development startup, specializing in small business web development and modern programming practices."
  />
</svelte:head>

<nav>
  <a href="/" class:active={url === '/'}>home</a>
  <a href="/about" class:active={url === '/about'}>about</a>
  <a href="/services" class:active={url === '/services'}>services</a>
  <a href="/projects" class:active={url === '/projects'}>projects</a>
  <a href="/contact" class:active={url === '/contact'}>contact</a>
</nav>
<header>
  <h1><a href="/">aloft software</a></h1>
</header>
<main>
  <slot />
</main>
<Footer />

<style lang="postcss">
  header {
    @apply text-white w-full flex flex-col justify-center items-center py-16;
    @apply bg-gradient-to-b from-sky-500 to-sky-300;
    @apply transition-all;

    & h1 {
      @apply font-bold text-7xl text-center no-underline;

      font-family: 'Zen Loop', 'Fira Sans', sans-serif;
      letter-spacing: 0.2rem;

      & > a {
        @apply cursor-pointer leading-none px-4 text-sky-50 hover:text-white no-underline border-b-2 border-transparent hover:border-sky-100;
      }
    }
  }

  nav {
    @apply bg-sky-700 flex flex-row justify-center items-baseline;

    a {
      @apply font-light text-lg no-underline text-sky-50 hover:text-white p-3 px-4 hover:bg-sky-500;

      &.active {
        @apply bg-sky-500 font-medium;
      }
    }
  }

  main {
    @apply w-full flex flex-col px-4;
  }
</style>
