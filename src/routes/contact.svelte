<script>
  let submissionRes;

  let contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const handleSubmit = () => {
    fetch('/api/contact', { method: 'POST', body: JSON.stringify(contactData) }).then(res => {
      submissionRes = res;
      if (res.ok) for (const prop in contactData) contactData[prop] = '';
    });
  };
</script>

<section class="px-8">
  <div class="content">
    <div class="inner">
      <h1>contact us</h1>
      <p><a href="mailto:lars@aloft.software">send us an email</a>, or fill out this form.</p>
      <form on:submit|preventDefault={handleSubmit}>
        <div class="set">
          <label for="name">your name <span class="required">*</span>:</label>
          <input type="text" id="name" required bind:value={contactData.name} />
        </div>

        <div class="set">
          <label for="email">your email <span class="required">*</span>:</label>
          <input type="email" id="email" required bind:value={contactData.email} />
        </div>
        <div class="set">
          <label for="subject">subject:</label>
          <input type="text" id="subject" bind:value={contactData.subject} />
        </div>
        <div class="set">
          <label for="message">message <span class="required">*</span>:</label>
          <textarea
            id="message"
            placeholder="what's on your mind?"
            required
            bind:value={contactData.message}
          />
        </div>

        <button type="submit">send!</button>
      </form>
      {#if submissionRes}
        <div class="res" class:success={submissionRes.ok} class:error={!submissionRes.ok}>
          <p>
            {submissionRes.ok
              ? 'Success! Thanks for your message, we will get back to you soon.'
              : 'Sorry, there was an error, please try again later.'}
          </p>
        </div>
      {/if}
    </div>
  </div>
</section>

<style lang="postcss">
  .inner {
    @apply bg-white;
  }

  .required {
    @apply text-red-400 mx-0.5;
  }

  .content {
    @apply w-full;
    @apply lg:w-3/4;
  }

  form {
    @apply text-base w-full flex flex-col justify-start items-start bg-blue-50 p-4 rounded-lg space-y-4;

    .set {
      @apply w-full flex flex-col justify-start items-start;
      @apply md:flex-row md:justify-between md:items-center;

      label {
        @apply flex flex-row flex-nowrap whitespace-nowrap;
      }

      input,
      textarea {
        @apply w-full flex-grow ml-0 p-2 text-base text-gray-800 rounded border-2 border-blue-100;
        @apply focus:border-blue-200;

        @apply md:ml-8;
      }
    }

    button[type='submit'] {
      @apply p-2 border-2 border-blue-400 text-blue-500 bg-white self-center rounded;
      @apply hover:border-blue-600 hover:bg-blue-50 hover:text-blue-700 hover:shadow;
    }
  }

  .res {
    @apply w-full bg-white rounded text-center text-lg mt-6 text-gray-800;

    &.success {
      @apply text-green-800;
    }

    &.error {
      @apply text-red-600;
    }
  }
</style>
