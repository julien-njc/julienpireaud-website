import type { Locale } from '$lib/i18n/site';

export const contactCopy = {
  en: {
    metaTitle: 'Contact',
    eyebrow: 'Contact',
    title: 'Use the form for consulting, product work, or a senior engineering conversation.',
    intro:
      'This form is set up for a static-site workflow. It is ready for Web3Forms plus free hCaptcha now, and can be swapped later for a custom Chalice endpoint if you want stronger verification.',
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
    fallbackError: 'The form could not be sent. Please try again in a moment.',
    note:
      'A static form can validate syntax and add CAPTCHA, but it cannot prove the sender controls the email address. For that, use a backend flow with verification or double opt-in.'
  },
  fr: {
    metaTitle: 'Contact',
    eyebrow: 'Contact',
    title: 'Utilisez le formulaire pour du conseil, un produit à construire ou une discussion technique senior.',
    intro:
      "Ce formulaire est prévu pour un site statique. Il est prêt pour Web3Forms avec hCaptcha gratuit maintenant, puis pourra être remplacé plus tard par un endpoint Chalice si vous voulez une vérification plus forte.",
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
    fallbackError: "Le formulaire n'a pas pu être envoyé. Réessayez dans un instant.",
    note:
      "Un formulaire statique peut valider le format et ajouter un CAPTCHA, mais il ne peut pas prouver que l'expéditeur contrôle réellement l'adresse email. Pour cela, il faut un backend avec vérification ou double opt-in."
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
    note: string;
  }
>;
