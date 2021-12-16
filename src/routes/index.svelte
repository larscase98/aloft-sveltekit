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

<style lang="postcss">
  section .content {
    & .inner {
      @apply bg-sky-100 rounded-lg shadow-lg;
    }

    & h1 {
      @apply font-medium text-blue-800 px-2 pr-4 border-b-8 border-gray-200 mb-4;
      @apply whitespace-nowrap;
      line-height: 0.4;
    }
  }

  #webdesign {
    @apply bg-gradient-to-b from-sky-300 to-sky-200;

    & h1 {
      @apply text-blue-700 border-orange-200;
    }
  }

  #software {
    @apply bg-gradient-to-b from-sky-200 to-blue-400;

    & h1 {
      @apply text-blue-600 border-purple-300;
    }
  }

  @media (max-width: 768px) {
    section .content h1 {
      @apply -ml-6;
    }
  }
</style>
