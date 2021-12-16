<script context="module">
  // distance scrolled from top, edit header padding like this
  let y;

  export const prerender = true;
</script>

<svelte:head>
  <title>aloft software | Bozeman web design and development</title>
</svelte:head>
<svelte:window bind:scrollY={y} />

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
      @apply bg-sky-50 rounded-lg shadow;
    }

    & h1 {
      @apply text-blue-800 px-2 pb-1 border-b-2 border-gray-300 mb-4;
    }
  }

  #webdesign {
    @apply bg-gradient-to-b from-sky-300 to-sky-200;

    & h1 {
      @apply text-blue-600 border-blue-400;
    }
  }

  #software {
    @apply bg-gradient-to-b from-sky-200 to-sky-100;

    & h1 {
      @apply text-blue-500 border-blue-300;
    }
  }
</style>
