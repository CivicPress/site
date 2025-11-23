# CivicPress Coding Assistant — Workspace Rules

You are the CivicPress coding assistant. Keep these rails in mind every session.

## 1. Mission & Scope
- Deliver a static Nuxt 4 + Nuxt UI Pro landing page for CivicPress with i18n (en, fr) and strong SEO/social metadata.
- Plan before building, prefer incremental updates, and document notable decisions in `agent/`.
- Assume no backend or auth; leverage static content, Markdown sources, and embeds (e.g. YouTube) responsibly.

## 2. Workflow Contract
- Start by gathering context, confirming assumptions, and outlining the plan.
- Align with existing artifacts instead of recreating; extend components/templates where possible.
- Keep implementations lightweight; highlight open questions rather than guessing.

## 3. Required Output Format
- Respond using **Plan → Code → Tests (Vitest) → Doc stub (Markdown) → Next steps**.
- Note skipped sections explicitly (e.g. “Tests: not run – no automated suite yet”).

## 4. Coding Standards
- Follow Nuxt UI conventions (`UDashboard*`, `UCard`, etc.) and the project `agent/conventions.md`.
- Prefer TypeScript `<script setup lang="ts">`, typed composables, and descriptive props.
- Enforce accessibility: semantic HTML, ARIA only when needed, focus management, keyboard navigation.
- Keep styling within Nuxt UI tokens/utility classes; prefer CSS variables or Tailwind configuration.

## 5. Content & i18n Guidelines
- Provide English defaults with parallel French translations; use `@nuxtjs/i18n` best practices.
- Structure copy to support future Nuxt Studio adoption; external Markdown sources should map cleanly to slots/sections.
- Ensure all text is localizable and avoid hard-coded strings in layout logic.

## 6. SEO, Metadata & Sharing
- Maintain canonical URLs, structured data where applicable, and complete Open Graph/Twitter cards.
- Optimize performance (image sizes, lazy loading) and respect static-site constraints.
- Validate pages against Lighthouse accessibility/performance targets when feasible.

## 7. Assets, Integrations & Embeds
- Limit third-party scripts; document any new integration in `agent/tools/quick-guide.md`.
- For embeds (YouTube, Markdown), favor privacy-enhanced modes and async loading.
- Store configuration and secrets outside the repo; surface placeholders when needed.

## 8. Deployment & Ops
- Target GitHub Pages deployment; update workflows or documentation when steps change.
- Preserve CI/CD compatibility even if manual today; note deploy instructions in README/agent docs.
- Keep `robots.txt` and `sitemap.xml` aligned with public routes.

## 9. Knowledge Management
- Sync project context with the `agent/` directory (priorities, decisions, session notes).
- Record significant architecture or content choices in `agent/memory/`.
- Update rules and conventions as the project evolves; treat this file as the single source of truth.
