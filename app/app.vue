<script setup lang="ts">
const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#171717' : 'white')

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/manifest.webmanifest' },
    { rel: 'shortcut icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/landing-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/landing-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp :toaster="{ expand: false }">
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <footer class="border-t border-gray-800 bg-navy-900 text-xs text-gray-400">
      <div class="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-1 py-4 text-center">
        <a
          href="#"
          class="hover:text-white transition-colors"
        >
          GitHub
        </a>
        <span>·</span>
        <a
          href="#"
          class="hover:text-white transition-colors"
        >
          Mastodon
        </a>
        <span>·</span>
        <a
          href="mailto:hello@civicpress.io"
          class="hover:text-white transition-colors"
        >
          Contact (hello@civicpress.io)
        </a>
        <span>·</span>
        <a
          href="#"
          class="hover:text-white transition-colors"
        >
          License (MIT)
        </a>
        <span>·</span>
        <a
          href="#"
          class="hover:text-white transition-colors"
        >
          Manifesto
        </a>
        <span>·</span>
        <a
          href="#"
          class="hover:text-white transition-colors"
        >
          Roadmap
        </a>
      </div>
    </footer>
  </UApp>
</template>

