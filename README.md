# CivicPress Nuxt Site

Static landing site for CivicPress built with Nuxt 4 and Nuxt UI Pro.  
The project evolves the original HTML manifesto into a localized (English/French) experience with strong SEO and GitHub Pages deployment.

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

Generate the static site:

```bash
pnpm generate
```

Artifacts are emitted to `dist/` using the GitHub Pages Nitro preset.  
Use GitHub Actions to run `pnpm install` → `pnpm generate` and publish `dist/`.  
Remember to provide a `static/CNAME` once the civicpress.org domain is mapped.

Preview a production build locally:

```bash
pnpm preview
```

## Additional Notes

- Update `.cursor/rules.md` and `agent/context/priorities.md` whenever the workflow changes.
- Record significant choices in `agent/memory/decisions.md`.
- Keep assets lightweight and honor accessibility best practices outlined in the workspace rules.
