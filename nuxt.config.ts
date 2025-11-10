const siteUrl = process.env.NUXT_PUBLIC_SITE_URL ?? 'https://civicpress.io'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/i18n'
  ],

  css: ['~/assets/css/main.css'],

  site: {
    url: siteUrl,
    name: 'CivicPress',
    description: 'Transparent civic technology platform supporting communities.'
  },

  mdc: {
    highlight: {
      noApiRoute: false
    }
  },

  runtimeConfig: {
    public: {
      siteUrl
    }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: [
        '/',
        '/fr'
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    detectBrowserLanguage: {
      alwaysRedirect: false,
      redirectOn: 'root',
      cookieKey: 'i18n_redirected'
    },
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français' }
    ],
    vueI18n: './i18n.config.ts'
  }
})
