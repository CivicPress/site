# Quick Guide

## Daily Workflow
1. Check `agent/context/priorities.md` and clarify scope with stakeholders if unclear.
2. Draft a **Plan** before coding; align with `.cursor/rules.md`.
3. Implement changes in Nuxt files; prefer extending Nuxt UI components.
4. Localize strings via `locales/{en,fr}.json`; avoid hard-coded copy.
5. Document updates in `agent/memory/project-state.md` and log decisions as needed.
6. Prepare deployment notes when adjustments affect GitHub Pages automation (`pnpm generate` → `dist/`).

## Reference Links
- Nuxt UI Pro Landing template: https://landing-template.nuxt.dev
- Nuxt Studio overview: https://content.nuxt.com/studio
- Deployment target: GitHub Pages (CNAME to civicpress domain, static output at `dist/`)

## When in Doubt
- Record blockers in `agent/context/blockers.md`.
- Ask for missing assets or copy before creating placeholders.
- Keep communication in this folder so future agents maintain continuity.

