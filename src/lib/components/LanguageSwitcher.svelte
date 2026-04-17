<script lang="ts">
  import type { Locale } from '$lib/i18n/site';

  let { current, labels, hrefs } = $props<{
    current: Locale;
    labels: Record<Locale, string>;
    hrefs: Record<Locale, string>;
  }>();
</script>

<nav class="lang-switcher" aria-label="Language switcher">
  {#each Object.entries(labels) as [locale, label]}
    <a href={hrefs[locale as Locale]} class:is-current={locale === current}>
      {label}
    </a>
  {/each}
</nav>
