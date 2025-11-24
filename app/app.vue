<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { t, locale } = useI18n()
const colorMode = useColorMode()
const route = useRoute()

const color = computed(() => colorMode.value === 'dark' ? '#171717' : 'white')

// Dynamic canonical URL based on current route
const canonicalUrl = computed(() => {
  const baseUrl = 'https://civicpress.io'
  // Get the current path, handling i18n routing
  const currentPath = route.path
  // Remove trailing slash except for root
  const cleanPath = currentPath === '/' ? '' : currentPath.replace(/\/$/, '')
  return `${baseUrl}${cleanPath}`
})

// Dynamic language alternates
const languageAlternates = computed(() => {
  const baseUrl = 'https://civicpress.io'
  const currentPath = route.path === '/' ? '' : route.path.replace(/\/$/, '')
  return [
    { rel: 'alternate', href: `${baseUrl}${currentPath}`, hreflang: 'en' },
    { rel: 'alternate', href: `${baseUrl}/fr${currentPath}`, hreflang: 'fr' },
    { rel: 'alternate', href: `${baseUrl}${currentPath}`, hreflang: 'x-default' }
  ]
})

useHead({
  title: 'CivicPress — Open infrastructure for transparent local government',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color },
    { name: 'description', content: 'CivicPress is an open-source civic platform that helps municipalities publish records, meetings, and maps in formats people can read, verify, and trust.' },
    { name: 'keywords', content: 'civic tech, open government, transparency, municipal records, open data, public infrastructure, open-source government, digital democracy' },
    { name: 'robots', content: 'index,follow' },
    // Open Graph tags
    { property: 'og:title', content: 'CivicPress — Open infrastructure for transparent local government' },
    { property: 'og:description', content: 'Open-source civic infrastructure that helps municipalities publish records, meetings, and maps in trustworthy, verifiable formats.' },
    { property: 'og:type', content: 'website' },
    { key: 'og:url', property: 'og:url', content: canonicalUrl },
    { property: 'og:image', content: 'https://civicpress.io/og_image.png' },
    { property: 'og:site_name', content: 'CivicPress' },
    // Twitter Card tags
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'CivicPress — Open infrastructure for transparent local government' },
    { name: 'twitter:description', content: 'Open-source civic infrastructure for municipalities of any size.' },
    { name: 'twitter:image', content: 'https://civicpress.io/og_image.png' }
  ],
  link: computed(() => [
    { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/manifest.webmanifest' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: "mask-icon", color: "#4C7FD8", href: "/favicon.svg" },
    { key: 'canonical', rel: 'canonical', href: canonicalUrl.value },
    ...languageAlternates.value
  ]),
  script: [
    {
      async: true,
      src: 'https://plausible.io/js/pa-zs7x73uxMoecSqndZ5-HZ.js'
    },
    {
      innerHTML: `
        window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)};
        plausible.init=plausible.init||function(i){plausible.o=i||{}};
        plausible.init();
      `
    }
  ],
  htmlAttrs: computed(() => ({
    lang: locale.value || 'en'
  }))
})

// Watch locale changes to update html lang attribute
watch(locale, (newLocale) => {
  useHead({
    htmlAttrs: {
      lang: newLocale || 'en'
    }
  })
})
</script>

<template>
  <UApp :toaster="{ expand: false }" :locale="locales[locale]">
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <footer
      id="footer"
      class="border-t border-[#E1E6F0] dark:border-slate-800 bg-white dark:bg-slate-950"
    >
      <UContainer class="py-6 px-4">
        <div class="flex flex-col items-center gap-3">
          <div class="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 gap-y-1.5">
            <a
              href="https://github.com/CivicPress/civicpress"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors py-1.5"
            >
              {{ t('footerLinks.github') }}
            </a>
            <span class="text-gray-300 dark:text-slate-600 hidden sm:inline">·</span>
            <a
              href="https://mastodon.social/@civicpress"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors py-1.5"
            >
              {{ t('footerLinks.mastodon') }}
            </a>
            <span class="text-gray-300 dark:text-slate-600 hidden sm:inline">·</span>
            <a
              href="mailto:hello@civicpress.io"
              class="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors py-1.5"
            >
              {{ t('footerLinks.contributor') }}
            </a>
            <span class="text-gray-300 dark:text-slate-600 hidden sm:inline">·</span>
            <a
              href="https://github.com/CivicPress/civicpress/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors py-1.5"
            >
              {{ t('footerLinks.license') }}
            </a>
            <span class="text-gray-300 dark:text-slate-600 hidden sm:inline">·</span>
            <a
              href="https://github.com/CivicPress/manifesto/blob/main/manifesto.md"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors py-1.5"
            >
              {{ t('footerLinks.manifesto') }}
            </a>
            <span class="text-gray-300 dark:text-slate-600 hidden sm:inline">·</span>
            <a
              href="https://github.com/CivicPress/civicpress/blob/main/docs/roadmap.md"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors py-1.5"
            >
              {{ t('footerLinks.roadmap') }}
            </a>
          </div>
          <div class="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">
            Built with 💙 in Québec, Canada
          </div>
        </div>
      </UContainer>
    </footer>
  </UApp>
</template>

