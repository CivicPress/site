<script setup lang="ts">
import { en as enLocale, fr as frLocale } from '@nuxt/ui/locale'

const nuxtApp = useNuxtApp()
const { t, locale, locales, setLocale } = useI18n()
const { activeHeadings, updateHeadings } = useScrollspy()

// Locales for ULocaleSelect (flags & names)
const uiLocales = [enLocale, frLocale]

// Load saved locale from localStorage on mount
onMounted(async () => {
  if (process.client) {
    const savedLocale = localStorage.getItem('i18n_locale')
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'fr')) {
      await setLocale(savedLocale as 'en' | 'fr')
    }
  }
})

// Watch for locale changes and persist to localStorage
watch(locale, (newLocale) => {
  if (process.client) {
    localStorage.setItem('i18n_locale', newLocale)
  }
})

// Handle locale update from ULocaleSelect
const handleLocaleUpdate = async (newLocale: string) => {
  await setLocale(newLocale)
}

const isScrolled = ref(false)

const handleScroll = () => {
  if (import.meta.client) {
    isScrolled.value = window.scrollY > 4
  }
}

onMounted(() => {
  if (import.meta.client) {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
  }
})

const items = computed(() => [
  {
    label: t('navigation.features'),
    to: '#features',
    active: activeHeadings.value.includes('features')
  },
  {
    label: t('navigation.how'),
    to: '#how-it-works',
    active: activeHeadings.value.includes('how-it-works')
  },
  {
    label: t('navigation.roadmap'),
    to: '#roadmap',
    active: activeHeadings.value.includes('roadmap')
  },
  {
    label: t('navigation.governance'),
    to: '#governance',
    active: activeHeadings.value.includes('governance')
  },
  {
    label: t('navigation.faq'),
    to: '#faq',
    active: activeHeadings.value.includes('faq')
  }
])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings(
    [
      document.querySelector('#features'),
      document.querySelector('#how-it-works'),
      document.querySelector('#roadmap'),
      document.querySelector('#governance'),
      document.querySelector('#faq')
    ].filter(Boolean) as Element[]
  )
})
</script>

<template>
  <UHeader
    :class="[
      'sticky top-0 z-40 border-b border-gray-100 bg-white/95 dark:bg-slate-950/95 transition-shadow transition-colors duration-200 backdrop-blur',
      isScrolled && 'shadow-sm'
    ]"
  >
    <template #left>
      <NuxtLink to="/" class="flex items-center gap-2">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <template #right>
      <!-- Desktop navigation -->
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block text-sm text-gray-600 dark:text-gray-300 [&_a]:text-inherit [&_a:hover]:text-[#4C7FD8]"
      />

      <NuxtLink
        to="https://github.com/CivicPress/civicpress"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden lg:inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white mx-2"
      >
        {{ t('footerLinks.github') }}
      </NuxtLink>

      <ULocaleSelect
        :model-value="locale"
        :locales="uiLocales"
        @update:model-value="handleLocaleUpdate($event)"
        class="hidden lg:inline-flex items-center h-7"
        size="sm"
        variant="ghost"
        color="gray"
        :portal="false"
        :aria-label="t('navigation.languageSwitcherLabel')"
        :ui="{
          value: 'sr-only',
          itemLabel: 'sr-only',
          leading: 'pt-1'
        }"
      />

      <UColorModeButton class="ml-1 hidden lg:inline-flex" />

      <UButton
        :label="t('navigation.primaryCta')"
        to="https://demo.civicpress.io"
        target="_blank"
        size="sm"
        color="primary"
        class="ml-3 hidden lg:inline-flex items-center bg-[color:var(--cp-blue,_#4C7FD8)] hover:bg-[color:var(--cp-blue-hover,_#3D72C7)] active:bg-[color:var(--cp-blue-hover,_#3D72C7)] focus:bg-[color:var(--cp-blue-hover,_#3D72C7)] text-white border-transparent"
      />
    </template>

    <!-- Mobile slide-over body -->
    <template #body>
      <div class="lg:hidden flex flex-col h-full max-h-[calc(100vh-4rem)] bg-white dark:bg-slate-950">
        <!-- Navigation links -->
        <nav class="flex-1 overflow-y-auto py-2 divide-y divide-gray-200 dark:divide-slate-800">
          <NuxtLink
            v-for="item in items"
            :key="item.to"
            :to="item.to"
            class="flex items-center w-full px-4 py-3 text-base font-medium transition-colors"
            :class="[
              item.active
                ? 'text-[#3D72C7] dark:text-[#AFC7FF] bg-gray-50 dark:bg-slate-800/70'
                : 'text-gray-900 dark:text-slate-50 hover:bg-gray-50 dark:hover:bg-slate-800'
            ]"
          >
            {{ item.label }}
          </NuxtLink>

          <a
            href="https://github.com/CivicPress/civicpress"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center w-full px-4 py-3 text-base font-medium text-gray-900 dark:text-slate-50 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
          >
            {{ t('footerLinks.github') }}
          </a>
        </nav>

        <!-- Bottom section: CTA + language & theme -->
        <div class="border-t border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div class="px-4 pb-4 pt-6">
            <UButton
              :label="t('navigation.primaryCta')"
              to="https://demo.civicpress.io"
              target="_blank"
              color="primary"
              block
              size="lg"
              class="bg-[color:var(--cp-blue,#4C7FD8)] hover:bg-[color:var(--cp-blue-hover,#3D72C7)] active:bg-[color:var(--cp-blue-hover,#3D72C7)] focus:bg-[color:var(--cp-blue-hover,#3D72C7)] text-white border-transparent"
            />
          </div>

          <div class="flex items-center justify-between gap-2 px-4 pb-4">
            <ULocaleSelect
              :model-value="locale"
              :locales="uiLocales"
              @update:model-value="handleLocaleUpdate($event)"
              class="inline-flex items-center h-9"
              size="md"
              variant="ghost"
              color="gray"
              :portal="false"
              :aria-label="t('navigation.languageSwitcherLabel')"
            />
            <UColorModeButton size="sm" />
          </div>
        </div>
      </div>
    </template>
  </UHeader>
</template>