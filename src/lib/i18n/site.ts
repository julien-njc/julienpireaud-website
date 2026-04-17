export const locales = ['en', 'fr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const getPreferredLocale = (languages: readonly string[]): Locale => {
  for (const language of languages) {
    if (language.toLowerCase().startsWith('fr')) {
      return 'fr';
    }
  }

  return defaultLocale;
};

export const ui = {
  en: {
    siteLabel: 'Resume Website',
    siteTitle: 'Julien Pireaud',
    siteDescription: 'Senior iOS engineer, technical product builder, and hands-on founder.',
    nav: {
      resume: 'Resume',
      contact: 'Contact'
    },
    language: {
      en: 'English',
      fr: 'Français'
    },
    footer: 'Built with SvelteKit and Bulma. Static-first, minimal backend surface.'
  },
  fr: {
    siteLabel: 'Site CV',
    siteTitle: 'Julien Pireaud',
    siteDescription:
      'Ingénieur iOS senior, créateur de produits techniques et fondateur très opérationnel.',
    nav: {
      resume: 'CV',
      contact: 'Contact'
    },
    language: {
      en: 'English',
      fr: 'Français'
    },
    footer: 'Construit avec SvelteKit et Bulma. Site statique avec une surface backend minimale.'
  }
} satisfies Record<
  Locale,
  {
    siteLabel: string;
    siteTitle: string;
    siteDescription: string;
    nav: Record<'resume' | 'contact', string>;
    language: Record<Locale, string>;
    footer: string;
  }
>;

export const alternateLocale = (locale: Locale): Locale => (locale === 'en' ? 'fr' : 'en');
