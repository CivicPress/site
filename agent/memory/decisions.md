# Decision Log

| Date       | Decision | Context | Impact |
| ---------- | -------- | ------- | ------ |
| 2025-11-10 | Pivot primary domain to civicpress.io (redirect civic-press.org) | Align branding and future releases under civicpress.io while preserving legacy traffic | Update site defaults, CNAME, and documentation; ensure redirects configured at DNS/CDN |
| 2025-11-10 | Adopt prefix i18n strategy (en default, fr secondary) | Align with bilingual launch requirements while keeping canonical English URLs | Requires translations for navigation/content; informs routing and locale switcher implementation |
| 2025-11-10 | Target GitHub Pages via Nitro `github-pages` preset | CivicPress domain already mapped to GitHub Pages; static output fits requirements | Guides deployment scripts and need for `public/CNAME` | 
| 2025-11-10 | Use Nuxt 4 + Nuxt UI Pro Landing template | Replace static HTML site with maintainable Nuxt stack; aligns with future Nuxt Studio integration | Guides component/layout choices; constrains styling to Nuxt UI ecosystem |
| 2025-11-10 | Defer automated tests initially | Single-page marketing site with limited interactivity | Document behavior manually; revisit testing when dynamic features appear |

_Add new rows with most recent on top._

