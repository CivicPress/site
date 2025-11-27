# CivicPress Website

_The official marketing website for [CivicPress](https://civicpress.io) — open infrastructure for transparent local government._

**Website:** [civicpress.io](https://civicpress.io) | **Contact:** [hello@civicpress.io](mailto:hello@civicpress.io)

---

## Introduction

This repository contains the source code for the CivicPress marketing website. The site serves as the public-facing entry point for CivicPress, providing information about the platform, its features, and how municipalities can get involved.

The website is built with modern web technologies, emphasizing accessibility, performance, and multilingual support to align with CivicPress's mission of transparent, open civic infrastructure.

---

## Tech Stack

- **Framework:** Nuxt 4 with Nuxt UI Pro
- **Language:** Vue 3 + TypeScript
- **Styling:** Tailwind CSS via Nuxt UI
- **i18n:** Nuxt i18n module (English & French)
- **Package Manager:** pnpm

---

## Features

- 🌍 **Bilingual Support:** English (default) and French with locale routing
- 🎨 **Modern UI:** Built with Nuxt UI Pro components
- 📱 **Responsive Design:** Mobile-first approach with desktop refinements
- 🔍 **SEO Optimized:** Comprehensive meta tags, Open Graph, and Twitter Cards
- 🌙 **Dark Mode:** Full dark mode support
- ♿ **Accessible:** Semantic HTML and ARIA labels

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

- English: `http://localhost:3000`
- French: `http://localhost:3000/fr`

### Building for Production

```bash
# Generate static site
pnpm generate
```

The output will be in the `.output/public` directory, ready for deployment to GitHub Pages.

---

## Project Structure

```
├── app/
│   ├── assets/          # CSS and static assets
│   ├── components/      # Vue components
│   └── pages/           # Route pages
├── i18n/
│   └── locales/         # Translation files (en.json, fr.json)
├── public/              # Static files (favicons, images, etc.)
└── nuxt.config.ts       # Nuxt configuration
```

---

## Internationalization

The site supports English (default) and French. Translation files are located in `i18n/locales/`:

- `en.json` - English translations
- `fr.json` - French translations

The i18n module uses the `prefix_except_default` strategy:
- English: `/` (no prefix)
- French: `/fr` (with prefix)

---

## Deployment

The site is configured for static generation and deployment to GitHub Pages:

1. Build the site: `pnpm generate`
2. Deploy the `.output/public` directory to GitHub Pages
3. Domain is configured to point to `civicpress.io`

---

## SEO & Social Sharing

The site includes comprehensive SEO metadata:

- Standard meta tags (title, description, keywords, robots)
- Open Graph tags for social sharing
- Twitter Card tags
- Dynamic canonical URLs
- Language alternates for i18n

---

## Analytics

Privacy-friendly analytics via Plausible is integrated.

---

## Contributing

We welcome contributions from developers, designers, and anyone who believes public systems should be transparent and accessible.

For contribution guidelines, see the [CivicPress main repository's CONTRIBUTING.md](https://github.com/CivicPress/civicpress/blob/main/CONTRIBUTING.md).

This website repository follows the same contribution principles as the main CivicPress project. Whether you're fixing bugs, improving content, adding translations, or enhancing the design, your contributions help make CivicPress more accessible to municipalities everywhere.

---

## License

CivicPress is open-source and released under the **MIT License** — see [LICENSE](LICENSE) file for details.

---

## Contact

For questions, partnerships, or pilot projects:
[**hello@civicpress.io**](mailto:hello@civicpress.io)
