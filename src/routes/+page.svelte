<script context="module">
  import Footer from '$lib/Footer.svelte';
  import '../app.postcss';

  export const prerender = true;
</script>

<svelte:head>
  <title>aloft software | Bozeman web design and development</title>
  <meta
    name="description"
    content="Aloft Software is a Bozeman-based, one-man web and software development startup, specializing in small business web development and modern programming practices."
  />
</svelte:head>

<header>
  <nav>
    <a href="/about" id="about">about</a>
    <a href="/services" id="services">services</a>
    <a href="/projects" id="projects">projects</a>
  </nav>

  <h1>aloft software</h1>

  <div class="cta">
    <h2>the internet is full <wbr />of the same old stuff.</h2>
    <h3>ready to make <wbr />something new?</h3>
    <a href="/contact">contact us</a>
  </div>
</header>
<main>
  <section id="webdesign">
    <div class="content">
      <h1>web design</h1>
      <div class="inner">
        <p>
          <span class="font-medium">A unique website can set you apart everyone else.</span>
          In a time when many are satisfied with a couple social media accounts, it has never been more
          important to stake out your own internet real estate.
        </p>
        <p>
          The sad truth about the state of web development is that the internet chock full of
          bloated, unnecessary crap, slowing things for you and your visitors.
        </p>
        <p>
          This brings an opportunity to stand out. Your custom website can take any form you
          envision, and we can't wait to find out what that looks like.
        </p>
      </div>
    </div>
  </section>
  <section id="software" class="flex-grow">
    <div class="content">
      <h1 class="text-blue-700">custom software solutions</h1>
      <div class="inner">
        <p>
          Maybe you need more than just a website - we'd love to help with that. Our specialty is
          small business web design, but odds are we're up to your challenge!
        </p>
      </div>
    </div>
  </section>
</main>
<Footer />

<style lang="postcss">
  header {
    @apply w-full flex flex-col justify-center items-center;
    @apply bg-sky-400 bg-no-repeat;
    background-image: url('/img/aloft-waves.svg');
    background-size: cover;
    font-family: 'Rubik';

    nav {
      @apply flex flex-row space-x-4 pt-1;

      a {
        @apply text-white text-lg underline p-2;

        &#about {
          @apply hover:text-fuchsia-200;
        }

        &#services {
          @apply hover:text-orange-200;
        }

        &#projects {
          @apply hover:text-yellow-200;
        }
      }
    }

    h1 {
      @apply text-9xl pt-24 pb-20 font-bold;
      font-family: 'Zen Loop', 'Fira Sans', sans-serif;
      letter-spacing: 0.2rem;

      a {
        @apply p-0 m-0 border-0 cursor-default hover:text-inherit;
      }
    }

    .cta {
      @apply w-full flex flex-col justify-center items-center text-center p-8;

      h2 {
        @apply font-normal text-3xl text-white whitespace-pre-wrap;
      }

      h3 {
        @apply font-medium mb-2 text-blue-700 text-4xl whitespace-pre-wrap;
      }

      a {
        @apply text-xl font-medium no-underline p-2 px-4 mt-8 rounded text-sky-500 bg-white hover:bg-blue-700 hover:text-white hover:shadow-lg;
      }
    }
  }

  main {
    @apply bg-gradient-to-b from-sky-300 via-sky-200 to-blue-400;

    section {
      .content {
        & .inner {
          @apply bg-sky-50 rounded-lg shadow-lg;
        }

        & h1 {
          @apply font-medium text-blue-800 px-2 pr-4 border-b-8 border-gray-200 mb-4;
          @apply whitespace-nowrap;
          line-height: 0.4;
        }
      }
    }
  }

  #webdesign {
    & h1 {
      @apply text-blue-600 border-orange-200;
    }
  }

  #software {
    & h1 {
      @apply text-blue-700 border-purple-300;
    }
  }

  @media (max-width: 768px) {
    section .content h1 {
      @apply -ml-6;
    }
  }
</style>
