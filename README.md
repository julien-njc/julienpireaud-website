# Julien Pireaud Website

Small static SvelteKit site for a bilingual resume/contact website.

## Stack

- SvelteKit
- Bulma
- English and French localized routes
- Static deployment via `@sveltejs/adapter-static`
- Contact form wired for Web3Forms with free hCaptcha support
- Firebase Hosting deployment scripts driven by environment variables
- Husky pre-commit protection against obvious secret commits

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

## Firebase Hosting

Build is the normal SvelteKit static build:

- `npm run build`

Deploy to Firebase Hosting:

- `npm run deploy:firebase`

Expected environment variables:

- `FIREBASE_PROJECT_ID` required
- `FIREBASE_HOSTING_SITE` optional, defaults to `FIREBASE_PROJECT_ID`
- `FIREBASE_SERVICE_ACCOUNT_JSON` optional, useful in CI as a GitHub secret

If `FIREBASE_SERVICE_ACCOUNT_JSON` is not provided, the deploy script falls back to your existing Firebase CLI authentication.

## Secret Protection

After you initialize this directory as a Git repository, run:

- `npm run prepare`

That enables the Husky pre-commit hook in [.husky/pre-commit](/Users/julien/Documents/Code/julienpireaud/.husky/pre-commit), which scans staged changes for obvious API keys and other secrets.
