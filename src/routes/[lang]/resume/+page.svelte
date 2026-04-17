<script lang="ts">
  let { data } = $props();

  const printResume = () => window.print();
</script>

<svelte:head>
  <title>{data.profile.name} | {data.content.metaTitle}</title>
</svelte:head>

<section class="site-grid">
  <article class="glass-panel hero-card">
    <p class="eyebrow">{data.content.heroEyebrow}</p>
    <div class="columns is-variable is-6 is-vcentered mt-1">
      <div class="column is-8">
        <h1 class="hero-title">{data.content.heroTitle}</h1>
        <p class="hero-subtitle mt-4">{data.content.heroSummary}</p>
      </div>
      <div class="column">
        <div class="print-actions is-justify-content-flex-end">
          <button class="button is-primary" type="button" onclick={printResume}>
            {data.content.printLabel}
          </button>
          <a class="button is-light" href={`/${data.locale}/contact`}>
            {data.content.openContactLabel}
          </a>
        </div>
      </div>
    </div>

    <div class="chip-row mt-5">
      {#each data.content.chips as chip}
        <span class="chip">{chip}</span>
      {/each}
    </div>
  </article>

  <article class="glass-panel content-card">
    <div class="resume-summary">
      <div class="print-only">
        <div class="eyebrow">{data.content.heroEyebrow}</div>
      </div>

      <div>
        <h2 class="resume-name">{data.profile.name}</h2>
        <p class="resume-role mt-2">{data.content.summaryRole}</p>
      </div>

      <div class="contact-line">
        <span>{data.profile.email}</span>
        <span>{data.profile.phone}</span>
        <span>{data.profile.location}</span>
      </div>

      <div class="contact-line">
        <span><a href={data.profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/jpireaud</a></span>
        <span><a href={data.profile.github} target="_blank" rel="noreferrer">github.com/julien-njc</a></span>
        <span><a href={data.profile.website} target="_blank" rel="noreferrer">njc-software.com</a></span>
      </div>

      <div>
        <p class="eyebrow">{data.content.summaryTitle}</p>
        <p class="section-copy mt-2">{data.content.summaryBody}</p>
      </div>
    </div>
  </article>

  <div class="resume-grid">
    <div class="resume-stack">
      <article class="glass-panel content-card">
        <p class="eyebrow">{data.content.experienceTitle}</p>
        <h2 class="section-title">{data.content.experienceTitle}</h2>

        <div class="resume-stack">
          {#each data.content.experiences as item}
            <section class="experience-card">
              <div>
              <div class="experience-role">{item.role}</div>
                <div class="experience-meta mt-2">
                  <span>
                    {#if item.companyUrl}
                      <a href={item.companyUrl} target="_blank" rel="noreferrer">{item.company}</a>
                    {:else}
                      {item.company}
                    {/if}
                  </span>
                  <span>{item.location}</span>
                  <span>{item.period}</span>
                </div>
              </div>

              <ul class="bullet-list">
                {#each item.bullets as bullet}
                  <li>{bullet}</li>
                {/each}
              </ul>
            </section>
          {/each}
        </div>
      </article>
    </div>

    <div class="resume-stack">
      <article class="glass-panel content-card">
        <p class="eyebrow">{data.content.skillsTitle}</p>
        <h2 class="section-title">{data.content.skillsTitle}</h2>

        <div class="resume-stack">
          {#each data.content.skills as skillGroup}
            <section class="skill-card">
              <h3 class="title is-5 mb-3">{skillGroup.title}</h3>
              <ul class="skill-list">
                {#each skillGroup.items as item}
                  <li>{item}</li>
                {/each}
              </ul>
            </section>
          {/each}
        </div>
      </article>

      <article class="glass-panel content-card">
        <p class="eyebrow">{data.content.educationTitle}</p>
        <h2 class="section-title">{data.content.educationTitle}</h2>
        <div class="resume-stack">
          {#each data.content.education as item}
            <section class="education-card">{item}</section>
          {/each}
        </div>
      </article>

      <article class="glass-panel content-card no-print">
        <p class="eyebrow">{data.content.linksTitle}</p>
        <h2 class="section-title">{data.content.linksTitle}</h2>
        <div class="resume-stack">
          <section class="skill-card">
            <h3 class="title is-5 mb-3">Profiles</h3>
            <div class="buttons">
              <a class="button is-light" href={data.profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a class="button is-light" href={data.profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a class="button is-light" href={data.profile.website} target="_blank" rel="noreferrer">
                Website
              </a>
            </div>
          </section>

          <section class="skill-card">
            <h3 class="title is-5 mb-3">Selected company and project links</h3>
            <ul class="skill-list">
              {#each data.content.featuredLinks as link}
                <li>
                  <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a>
                  <span class="has-text-grey"> — {link.note}</span>
                </li>
              {/each}
            </ul>
          </section>
        </div>
      </article>
    </div>
  </div>
</section>
