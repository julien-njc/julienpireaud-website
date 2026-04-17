<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { defaultLocale, getPreferredLocale } from '$lib/i18n/site';

  const paths = {
    en: '/en/resume',
    fr: '/fr/resume'
  } as const;

  onMount(() => {
    const locale = getPreferredLocale(navigator.languages);
    void goto(paths[locale], { replaceState: true });
  });
</script>

<svelte:head>
  <title>Julien Pireaud</title>
  <meta
    name="description"
    content="Senior iOS engineer resume website in English and French."
  />
</svelte:head>

<section class="site-shell">
  <div class="site-frame">
    <div class="glass-panel content-card">
      <p class="eyebrow">Language</p>
      <h1 class="section-title">Choose a language</h1>
      <p class="section-copy mb-5">
        JavaScript should redirect you automatically. If not, choose a version below.
      </p>
      <div class="buttons">
        <a class="button is-primary" href={paths.en}>English</a>
        <a class="button is-light" href={paths.fr}>Français</a>
      </div>
    </div>
  </div>
</section>
