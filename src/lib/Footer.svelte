<footer>
  <div class="text">
    <p>
      <a href="https://github.com/larscase98/aloft-sveltekit" target="_blank" rel="noreferrer"
        >made with ☕️ by Lars Case</a
      >
    </p>
    <p>&copy Aloft Software 2021</p>
  </div>
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
    }
  }
</style>
