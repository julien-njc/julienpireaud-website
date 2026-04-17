# Julien Pireaud Website

Small static SvelteKit site for a bilingual resume/contact website.

## Stack

- SvelteKit
- Bulma
- English and French localized routes
- Static deployment via `@sveltejs/adapter-static`
- Contact form wired for Web3Forms with free hCaptcha support

## Routes

- `/en/resume`
- `/en/contact`
- `/fr/resume`
- `/fr/contact`

The root route redirects to the best language match in the browser when JavaScript is available, and otherwise offers language links.

## Contact Form Setup

1. Create a Web3Forms access key.
2. Copy `.env.example` to `.env`.
3. Set `PUBLIC_WEB3FORMS_ACCESS_KEY`.
4. In Web3Forms, enable free hCaptcha for the form.

The form subject is built client-side as:

`Contact Request From: sender@example.com`

If you later move to a Chalice/AWS endpoint for stronger verification, the contact page logic is isolated in [src/routes/[lang]/contact/+page.svelte](/Users/julien/Documents/Code/julienpireaud/src/routes/[lang]/contact/+page.svelte).
