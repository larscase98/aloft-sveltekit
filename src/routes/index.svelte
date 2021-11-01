<script context="module">
  // distance scrolled from top, edit header padding like this
  let y;

  export const prerender = true;
</script>

<svelte:head>
  <title>aloft software</title>
</svelte:head>
<svelte:window bind:scrollY={y} />

<section class="cta">
  <div class="content">
    <h3>the internet is full of the same old stuff.</h3>
    <h2>want to make something unique?</h2>
  </div>
</section>
<div class="contact-bar">
  <a href="/contact">contact us</a>
</div>
<section id="webdesign">
  <div class="content">
    <h1>web design</h1>
    <div class="inner">
      <p>
        A custom website can set you apart everyone else. In an era where many are satisfied with a
        simple social media prescence, it has never been more important to stake out your own
        internet real estate.
      </p>
      <p>
        The sad truth about the state of web development is that it's chock full of bloated,
        unnecessary crap, slowing down and cluttering things up for you and your visitors.
      </p>
      <p>
        Your custom website can take any form you envision, and we can't wait to find out what that
        looks like. <!-- For more information, check out <a href="/services">our services</a>. -->
      </p>
    </div>
  </div>
</section>
<section id="software">
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

<style lang="postcss">
  section .content {
    & .inner {
      @apply bg-white rounded-lg shadow;
    }

    & h1 {
      @apply text-blue-800 px-2 border-b-2 border-orange-400 mb-4; /* mostly overwritten with ids lower down */
    }
  }

  section.cta {
    @apply bg-gradient-to-b from-blue-500 to-blue-700 my-0;

    .content {
      @apply flex flex-col w-full justify-center items-center p-16 px-2;

      & h3 {
        @apply text-blue-100 text-3xl font-light;
      }

      & h2 {
        @apply text-4xl bg-clip-text text-transparent bg-gradient-to-r from-orange-100 to-orange-200;
        @apply border-b-2 border-blue-200 p-1 px-4;
      }

      & > * {
        @apply text-center;
      }
    }
  }

  .contact-bar {
    @apply w-full flex justify-center p-6 bg-blue-700;

    & > a {
      @apply text-xl text-white font-light no-underline px-1 border-b border-transparent transition-all;

      &:hover {
        @apply text-blue-200 border-blue-200;
      }
    }
  }

  #webdesign {
    @apply bg-blue-100;

    & h1 {
      @apply text-blue-800;
    }
  }

  #software {
    @apply bg-blue-50;

    & h1 {
      @apply text-blue-600 border-orange-300;
    }
  }
</style>
