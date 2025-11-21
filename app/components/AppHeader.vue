<script setup lang="ts">
import { en as enLocale, fr as frLocale } from '@nuxt/ui/locale'

const nuxtApp = useNuxtApp()
const { t, locale, setLocale } = useI18n()
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed(() => [{
  label: t('navigation.features'),
  to: '#features',
  active: activeHeadings.value.includes('features')
}, {
  label: t('navigation.how'),
  to: '#how-it-works',
  active: activeHeadings.value.includes('how-it-works')
}, {
  label: t('navigation.roadmap'),
  to: '#roadmap',
  active: activeHeadings.value.includes('roadmap')
}, {
  label: t('navigation.governance'),
  to: '#governance',
  active: activeHeadings.value.includes('governance')
}, {
  label: t('navigation.faq'),
  to: '#faq',
  active: activeHeadings.value.includes('faq')
}])

// Locales for ULocaleSelect (flags & names)
const uiLocales = [enLocale, frLocale]

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#how-it-works'),
    document.querySelector('#roadmap'),
    document.querySelector('#governance'),
    document.querySelector('#faq')
  ].filter(Boolean) as Element[])
})
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />

      <ULocaleSelect
        v-model="locale"
        :locales="uiLocales"
        class="hidden lg:block"
        size="sm"
        :portal="false"
        :aria-label="t('navigation.languageSwitcherLabel')"
      >
        <!-- Only show flag for trigger -->
        <template #label="{ locale: uiLocale }">
          <span class="text-base">
            {{ uiLocale.flag }}
          </span>
        </template>
      </ULocaleSelect>

      <UButton
        :label="t('navigation.primaryCta')"
        to="https://demo.civicpress.io"
        target="_blank"
        variant="subtle"
        class="hidden lg:block"
      />

      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      <UButton
        class="mt-4"
        :label="t('navigation.primaryCta')"
        to="https://demo.civicpress.io"
        target="_blank"
        variant="subtle"
        block
      />
      <ULocaleSelect
        v-model="locale"
        :locales="uiLocales"
        class="mt-4"
        size="sm"
        :portal="false"
        :aria-label="t('navigation.languageSwitcherLabel')"
      >
        <template #label="{ locale: uiLocale }">
          <span class="text-base">
            {{ uiLocale.flag }}
          </span>
        </template>
      </ULocaleSelect>
    </template>
  </UHeader>
</template>
