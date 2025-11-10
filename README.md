# CivicPress Nuxt Site

Static landing site for CivicPress built with Nuxt 4 and Nuxt UI Pro.  
The project evolves the original HTML manifesto into a localized (English/French) experience with strong SEO and GitHub Pages deployment on `civicpress.io`. The legacy domain `civic-press.org` will redirect to the new site.

## Requirements

- Node.js 20+
- pnpm 10 (project-managed via `packageManager` field)

## Setup

Install dependencies:

```bash
pnpm install
```

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

_Note:_ The maintainer will start/stop the dev server. Nuxt's hot-reload handles code changes automatically—no need to restart.

Type-check, lint, or format on demand:

```bash
pnpm typecheck
pnpm lint
pnpm lint:fix
```

## Localization

Nuxt i18n powers a prefix strategy (`/` for English, `/fr` for French).  
Strings live in `locales/en.json` and `locales/fr.json`.  
When adding copy, wire components through `useI18n` instead of hard-coding literals.

## Content & Theming

- Page sections are defined under `content/index.yml` (subject to i18n refactor).  
- Global UI tokens live in `app/app.config.ts`.  
- Reusable guidance and context for contributors sits under `agent/`.

## Production

Static generation (`pnpm generate`) and sitemap automation are temporarily disabled while we revisit SEO tooling. Deployment instructions will return once the sitemap/robots integration is restored.

## Additional Notes

- Update `.cursor/rules.md` and `agent/context/priorities.md` whenever the workflow changes.
- Record significant choices in `agent/memory/decisions.md`.
- Keep assets lightweight and honor accessibility best practices outlined in the workspace rules.
