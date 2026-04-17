<script lang="ts">
  import { env } from '$env/dynamic/public';

  let { data } = $props();

  let formElement: HTMLFormElement | undefined;
  let status = $state('');
  let statusKind = $state<'idle' | 'success' | 'error'>('idle');
  let isSubmitting = $state(false);

  const accessKey = env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? '';
  const isConfigured = Boolean(accessKey);

  const submit = async (event: SubmitEvent) => {
    event.preventDefault();

    if (!formElement || !isConfigured || isSubmitting) {
      return;
    }

    isSubmitting = true;
    statusKind = 'idle';
    status = data.copy.sending;

    const formData = new FormData(formElement);
    const email = String(formData.get('email') ?? '').trim();
    const name = String(formData.get('name') ?? '').trim();

    formData.set('access_key', accessKey);
    formData.set('subject', `Contact Request From: ${email}`);
    formData.set('replyto', email);
    formData.set('from_name', name);
    formData.set('to_name', data.profile.name);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      const payload = await response.json();

      if (!response.ok || payload.success === false) {
        throw new Error(payload.message ?? data.copy.fallbackError);
      }

      statusKind = 'success';
      status = payload.message ?? data.copy.success;
      formElement.reset();
      window.hcaptcha?.reset?.();
    } catch (error) {
      statusKind = 'error';
      status = error instanceof Error ? error.message : data.copy.fallbackError;
    } finally {
      isSubmitting = false;
    }
  };
</script>

<svelte:head>
  <title>{data.profile.name} | {data.copy.metaTitle}</title>
  {#if isConfigured}
    <script src="https://web3forms.com/client/script.js" async defer></script>
  {/if}
</svelte:head>

<section class="site-grid">
  <article class="glass-panel hero-card">
    <p class="eyebrow">{data.copy.eyebrow}</p>
    <h1 class="hero-title">{data.copy.title}</h1>
    <p class="hero-subtitle mt-4">{data.copy.intro}</p>
  </article>

  <article class="glass-panel content-card">
    <div class="columns is-variable is-6">
        <div class="column is-7">
        <div class="contact-card">
          <form bind:this={formElement} onsubmit={submit}>
            <input type="hidden" name="botcheck" style="display: none;" />

            <div class="field">
              <label class="label field-label" for="name">{data.copy.fields.name}</label>
              <div class="control">
                <input
                  class="input is-medium"
                  id="name"
                  name="name"
                  type="text"
                  placeholder={data.copy.placeholders.name}
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label field-label" for="email">{data.copy.fields.email}</label>
              <div class="control">
                <input
                  class="input is-medium"
                  id="email"
                  name="email"
                  type="email"
                  placeholder={data.copy.placeholders.email}
                  required
                />
              </div>
            </div>

            <div class="field">
              <label class="label field-label" for="company">{data.copy.fields.company}</label>
              <div class="control">
                <input
                  class="input is-medium"
                  id="company"
                  name="company"
                  type="text"
                  placeholder={data.copy.placeholders.company}
                />
              </div>
            </div>

            <div class="field">
              <label class="label field-label" for="message">{data.copy.fields.message}</label>
              <div class="control">
                <textarea
                  class="textarea is-medium"
                  id="message"
                  name="message"
                  rows="6"
                  placeholder={data.copy.placeholders.message}
                  required
                ></textarea>
              </div>
            </div>

            {#if isConfigured}
              <div
                class="h-captcha mb-5"
                data-captcha="true"
                data-theme="light"
                data-lang={data.locale}
              ></div>
            {/if}

            <div class="is-flex is-flex-wrap-wrap is-align-items-center is-gap-4">
              <button class="button is-primary is-medium" type="submit" disabled={!isConfigured || isSubmitting}>
                {isSubmitting ? data.copy.sending : data.copy.submit}
              </button>
              <div
                class:contact-status={true}
                class:is-success={statusKind === 'success'}
                class:is-error={statusKind === 'error'}
                aria-live="polite"
              >
                {status}
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="column">
        <div class="contact-card">
          <h2 class="title is-4 mb-4">{data.profile.name}</h2>
          <div class="content">
            <p><strong>Email:</strong> <a href={`mailto:${data.profile.email}`}>{data.profile.email}</a></p>
            <p><strong>Location:</strong> {data.profile.location}</p>
            <p><strong>LinkedIn:</strong> <a href={data.profile.linkedin} target="_blank" rel="noreferrer">jpireaud</a></p>
            <p><strong>GitHub:</strong> <a href={data.profile.github} target="_blank" rel="noreferrer">julien-njc</a></p>
            <p class="submit-note">{data.copy.ready}</p>
            <p class="submit-note">{data.copy.note}</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</section>
