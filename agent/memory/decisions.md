# Decision Log

| Date       | Decision | Context | Impact |
| ---------- | -------- | ------- | ------ |
| 2025-11-23 | Change footer "Join as Contributor" to "Contact" with mailto link | Simplify contact method, use direct email instead of form | Updated footer link and translations in en/fr |
| 2025-11-23 | Add comprehensive SEO metadata and social sharing tags | Improve search engine visibility and social media sharing | Added OG tags, Twitter Cards, canonical URLs, language alternates |
| 2025-11-23 | Create symlink from `locales/` to `i18n/locales/` | Ensure i18n module can find locale files with `langDir: 'locales'` | Symlink created for module compatibility |
| 2025-11-23 | Apply desktop-only refinements for readability | Improve line length and visual consistency on large screens | Constrained text width, aligned card sections, improved heading spacing |
| 2025-11-23 | Apply mobile-only refinements for usability | Improve readability, spacing, and tap targets on small screens | Enhanced hero spacing, full-width buttons, improved card spacing |
| 2025-11-23 | Integrate Plausible Analytics | Privacy-friendly analytics for tracking site usage | Analytics script added to app head |
| 2025-11-23 | Set locale in UApp for Nuxt UI component translations | Ensure Nuxt UI components display in correct language | Locale prop passed to UApp component |
| 2025-11-10 | Pivot primary domain to civicpress.io (redirect civic-press.org) | Align branding and future releases under civicpress.io while preserving legacy traffic | Update site defaults, CNAME, and documentation; ensure redirects configured at DNS/CDN |
| 2025-11-10 | Temporarily remove @nuxtjs/sitemap & @nuxtjs/robots | Missing `nuxt-site-config` runtime prevents dev server from starting | Reintroduce SEO modules once compatible package versions or configuration are identified |
| 2025-11-10 | Adopt prefix i18n strategy (en default, fr secondary) | Align with bilingual launch requirements while keeping canonical English URLs | Requires translations for navigation/content; informs routing and locale switcher implementation |
| 2025-11-10 | Target GitHub Pages via Nitro `github-pages` preset | CivicPress domain already mapped to GitHub Pages; static output fits requirements | Guides deployment scripts and need for `public/CNAME` | 
| 2025-11-10 | Use Nuxt 4 + Nuxt UI Pro Landing template | Replace static HTML site with maintainable Nuxt stack; aligns with future Nuxt Studio integration | Guides component/layout choices; constrains styling to Nuxt UI ecosystem |
| 2025-11-10 | Defer automated tests initially | Single-page marketing site with limited interactivity | Document behavior manually; revisit testing when dynamic features appear |

_Add new rows with most recent on top._
