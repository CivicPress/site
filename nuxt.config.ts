const siteUrl = process.env.NUXT_PUBLIC_SITE_URL ?? 'https://civicpress.io'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Core modules only (UI + i18n)
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],

  // Keep SSR enabled for SEO-friendly static generation
  ssr: true,

  // Global CSS (Nuxt UI + Tailwind entrypoint)
  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      siteUrl
    }
  },

  compatibilityDate: '2025-01-15',

  // // Static output for GitHub Pages
  // nitro: {
  //   preset: 'github-pages',
  //   prerender: {
  //     routes: [
  //       '/',
  //       '/fr'
  //     ]
  //   }
  // },

  // Enable Nuxt DevTools
  devtools: {
    enabled: false
  },
  unhead: {
    legacy: true
  },

  // TypeScript configuration (similar style to your other project)
  typescript: {
    strict: true,
    typeCheck: false
  },

  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français' }
    ],
    vueI18n: './i18n.config.ts'
  }
})
