<script lang="ts">
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
  import { page } from '$app/state';

  let { data, children } = $props();

  const isActive = (path: string) =>
    page.url.pathname === path || page.url.pathname.startsWith(`${path}/`);
</script>

<svelte:head>
  <meta name="description" content={data.ui.siteDescription} />
</svelte:head>

<div class="site-shell">
  <div class="site-frame">
    <header class="glass-panel site-header">
      <div class="site-toolbar">
        <div class="brand-mark">
          <img class="brand-mark__icon" src="/favicon.png" alt={data.ui.siteTitle} width="48" height="48" />
          <div>
            <div class="brand-mark__eyebrow">{data.ui.siteLabel}</div>
            <div class="brand-mark__title">{data.ui.siteTitle}</div>
          </div>
        </div>

        <LanguageSwitcher
          current={data.locale}
          labels={data.ui.language}
          hrefs={data.switcherHref}
        />
      </div>

      <div class="site-tabs mt-4">
        <div class="tabs">
          <ul>
            <li class:is-active={isActive(`/${data.locale}/resume`)}>
              <a href={`/${data.locale}/resume`}>{data.ui.nav.resume}</a>
            </li>
            <li class:is-active={isActive(`/${data.locale}/contact`)}>
              <a href={`/${data.locale}/contact`}>{data.ui.nav.contact}</a>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <main class="site-main">
      {@render children?.()}
    </main>

    <footer class="glass-panel footer-card">
      <div class="footer-copy">
        <div class="footer-note">{data.ui.footer}</div>
        <div class="footer-note">© Julien Pireaud</div>
      </div>
      <div class="buttons are-small mb-0">
        <a class="button is-light" href="https://www.linkedin.com/in/jpireaud/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a class="button is-light" href="https://github.com/julien-njc" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  </div>
</div>
