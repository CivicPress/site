// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  modules: ['@nuxt/ui', '@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      civicApiUrl: process.env.API_BASE_URL || 'http://localhost:3000',
      appName: 'CivicPress',
      appVersion: '0.1.2'
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'canonical', href: 'https://civicpress.io' }
      ],
      meta: [
        { name: 'theme-color', content: '#4C7FD8' }
      ]
    }
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'fr', name: 'Français', file: 'fr.json' }
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    },
    compilation: {
      strictMessage: false
    }
  }
})