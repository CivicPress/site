# CivicPress Conventions

## Tech Stack
- **Framework:** Nuxt 4 (beta-compatible) with Nuxt UI Pro Landing template.
- **Language:** Vue 3 + TypeScript using `<script setup lang="ts">`.
- **Styling:** Tailwind via Nuxt UI tokens; avoid bespoke CSS whenever a utility/token exists.
- **Content:** Static Markdown/JSON with optional future Nuxt Studio integration.

## Component Guidelines
- Leverage Nuxt UI Pro components before creating custom ones; wrap when customization is unavoidable.
- Keep props minimal, typed, and documented via JSDoc or TypeScript interfaces.
- Co-locate composables in `composables/` and name them `useSomething`.
- Write localized strings under `locales/en.json` and `locales/fr.json`; avoid inline literals.

## Layout & Routing
- Maintain a single landing route (`/`) initially; plan sections via layout components (`LandingHero`, etc.).
- Configure `app.config.ts` for site-wide branding, theme colors, and meta defaults.
- Use route rules/site config to ensure static generation compatibility.

## Accessibility & Performance
- Prefer semantic HTML elements (`<section>`, `<nav>`, `<header>`) with descriptive headings.
- Provide alt text, captions, and keyboard-accessible controls for embeds.
- Lazy-load media, compress images, and rely on Nuxt Image where beneficial.

## Documentation
- Summarize feature changes in `agent/memory/project-state.md`.
- Log architectural decisions in `agent/memory/decisions.md` using the decision template.
- Capture reusable patterns in `agent/context/references.md` (create if needed).

