import type { Locale } from '$lib/i18n/site';

export const contactCopy = {
  en: {
    metaTitle: 'Contact',
    eyebrow: 'Contact',
    title: "Let's connect.",
    intro:
      'Reach out about a senior iOS role, consulting work, app architecture, performance improvements, product development, or a team that could use extra engineering depth and support.',
    fields: {
      name: 'Your name',
      email: 'Your email',
      company: 'Company or team',
      message: 'What do you need?'
    },
    placeholders: {
      name: 'Name',
      email: 'you@example.com',
      company: 'Optional',
      message:
        'A few lines about the role, product, timeline, or problem you want help with.'
    },
    submit: 'Send message',
    sending: 'Sending...',
    ready:
      'The form becomes active once `PUBLIC_WEB3FORMS_ACCESS_KEY` is configured. hCaptcha support is already wired in.',
    success: 'Message sent successfully.',
    fallbackError: 'The form could not be sent. Please try again in a moment.'
  },
  fr: {
    metaTitle: 'Contact',
    eyebrow: 'Contact',
    title: 'Prenons contact.',
    intro:
      "Vous pouvez m'écrire pour un poste iOS senior, une mission de conseil, de l'architecture applicative, des optimisations de performance, le développement d'un produit ou un besoin de renfort technique au sein d'une équipe.",
    fields: {
      name: 'Votre nom',
      email: 'Votre email',
      company: 'Entreprise ou équipe',
      message: 'De quoi avez-vous besoin ?'
    },
    placeholders: {
      name: 'Nom',
      email: 'vous@example.com',
      company: 'Optionnel',
      message:
        'Quelques lignes sur le rôle, le produit, le timing ou le problème sur lequel vous souhaitez avancer.'
    },
    submit: 'Envoyer le message',
    sending: 'Envoi...',
    ready:
      'Le formulaire devient actif une fois `PUBLIC_WEB3FORMS_ACCESS_KEY` configurée. Le support hCaptcha est déjà câblé.',
    success: 'Message envoyé avec succès.',
    fallbackError: "Le formulaire n'a pas pu être envoyé. Réessayez dans un instant."
  }
} satisfies Record<
  Locale,
  {
    metaTitle: string;
    eyebrow: string;
    title: string;
    intro: string;
    fields: Record<'name' | 'email' | 'company' | 'message', string>;
    placeholders: Record<'name' | 'email' | 'company' | 'message', string>;
    submit: string;
    sending: string;
    ready: string;
    success: string;
    fallbackError: string;
  }
>;
