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

Analytics is intentionally disabled for now to avoid consent and cookie complexity.

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

Deploy to a Firebase preview channel from your local machine:

- `npm run deploy:firebase`

This local deploy script is preview-only. It uses `firebase hosting:channel:deploy`, never the live channel.

Preview channel behavior:

- defaults to the current Git branch name, sanitized into a valid channel id
- falls back to `local-preview` if no branch can be resolved
- can be overridden with `FIREBASE_PREVIEW_CHANNEL`
- preview expiry defaults to `7d` and can be overridden with `FIREBASE_PREVIEW_EXPIRES`

Live deploys are intentionally reserved for GitHub Actions only.

Deploys use the checked-in `firebase.json` directly. There is no generated Firebase config layer.

Expected environment variables:

- `FIREBASE_PROJECT_ID` required
- `FIREBASE_PREVIEW_CHANNEL` optional for local preview deploys
- `FIREBASE_PREVIEW_EXPIRES` optional for local preview deploys, defaults to `7d`
- `FIREBASE_SERVICE_ACCOUNT_JSON` optional, useful in CI as a GitHub secret or as a local file path

If `FIREBASE_SERVICE_ACCOUNT_JSON` is not provided, the deploy script falls back to your existing Firebase CLI authentication.

## GitHub Workflows

Two workflows are included:

- [.github/workflows/firebase-preview-dev-branches.yml](/Users/julien/Documents/Code/julienpireaud/.github/workflows/firebase-preview-dev-branches.yml)
  deploys a Firebase preview channel on every push to `dev/*`
- [.github/workflows/firebase-live-main.yml](/Users/julien/Documents/Code/julienpireaud/.github/workflows/firebase-live-main.yml)
  deploys the live Hosting site on pushes to `main`

Recommended GitHub secrets:

- `PUBLIC_WEB3FORMS_ACCESS_KEY`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_SERVICE_ACCOUNT_JSON`

Reserved only for future analytics reactivation, not currently required:

- `PUBLIC_FIREBASE_API_KEY`
- `PUBLIC_FIREBASE_AUTH_DOMAIN`
- `PUBLIC_FIREBASE_PROJECT_ID`
- `PUBLIC_FIREBASE_STORAGE_BUCKET`
- `PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `PUBLIC_FIREBASE_APP_ID`
- `PUBLIC_FIREBASE_MEASUREMENT_ID`

## Secret Protection

After you initialize this directory as a Git repository, run:

- `npm run prepare`

That enables the Husky pre-commit hook in [.husky/pre-commit](/Users/julien/Documents/Code/julienpireaud/.husky/pre-commit), which scans staged changes for obvious API keys and other secrets.
