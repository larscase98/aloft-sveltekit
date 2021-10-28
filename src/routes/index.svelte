<script>
  // distance scrolled from top, edit header padding like this
  let y;
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
<section class="bg-blue-100">
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
        unnecessary crap, worsening your and your users' experience.
      </p>
      <p>
        This is can take any form you envision, and we can't wait to find out what that looks like.
        For more information, check out the <a href="services">services page</a>.
      </p>
    </div>
  </div>
</section>
<section>
  <div class="content">
    <h1>custom software solutions</h1>
    <div class="inner">
      <p>
        Maybe you need more than just a website - we'd love to help with that. Our specialty is
        small business web design, but odds are we're up to your challenge!
      </p>
    </div>
  </div>
</section>

<style lang="postcss">
  section .content h1 {
    @apply text-blue-800 px-4 border-b-2 border-green-400 mb-4;
  }

  section.cta {
    @apply bg-gradient-to-b from-blue-600 to-blue-800 my-0;

    .content {
      @apply flex flex-col w-full justify-center items-center p-16 px-2;

      & h3 {
        @apply text-green-200 text-3xl font-light;
      }

      & h2 {
        @apply text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-100 to-blue-100;
      }

      & > * {
        @apply text-center;
      }
    }
  }
</style>
