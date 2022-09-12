<footer>
  <div class="text">
    <p>
      <a href="https://github.com/larscase98/aloft-sveltekit" target="_blank"
        >made with ☕️ by Lars Case</a
      >
    </p>
    <p>&copy Aloft Software 2021</p>
  </div>
  <!-- <div class="tech-icons">
    <img src="img/svelte.png" alt="SvelteJS" />
    <img src="img/tailwind.png" alt="TailwindCSS" />
  </div> -->
</footer>

<style lang="postcss">
  footer {
    @apply flex flex-col justify-center items-center text-white font-light p-2;
    @apply bg-blue-400 bg-gradient-to-b from-blue-400 to-blue-500;
    font-family: 'Rubik';

    & > div {
      @apply flex flex-col justify-center items-end py-1 px-4;

      &.text {
        @apply flex flex-col justify-center items-center leading-tight;
      }

      &.tech-icons {
        @apply flex flex-row justify-start items-center space-x-0.5 mt-0.5 p-1;

        img {
          @apply w-6 h-auto;
        }
      }
    }
  }
</style>
