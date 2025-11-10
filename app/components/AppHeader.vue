<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { t, locale, locales, setLocale } = useI18n()
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed(() => [{
  label: t('navigation.features'),
  to: '#features',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
}, {
  label: t('navigation.pricing'),
  to: '#pricing',
  active: activeHeadings.value.includes('pricing')
}, {
  label: t('navigation.testimonials'),
  to: '#testimonials',
  active: activeHeadings.value.includes('testimonials') && !activeHeadings.value.includes('pricing')
}])

const localeOptions = computed(() => locales.value.map(localeEntry => ({
  label: localeEntry.name,
  value: localeEntry.code
})))

const localeModel = computed({
  get: () => locale.value,
  set: (code: string) => {
    if (code && code !== locale.value) {
      setLocale(code)
    }
  }
})

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials')
  ].filter(Boolean) as Element[])
})
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>

      <TemplateMenu />
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />

      <USelectMenu
        v-model="localeModel"
        class="hidden lg:block w-28"
        size="sm"
        :items="localeOptions"
        label-key="label"
        value-key="value"
        :search-input="false"
        :portal="false"
        :aria-label="t('navigation.languageSwitcherLabel')"
      />

      <UButton
        :label="t('navigation.primaryCta')"
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
        variant="subtle"
        block
      />
      <USelectMenu
        v-model="localeModel"
        class="mt-4"
        size="sm"
        :items="localeOptions"
        label-key="label"
        value-key="value"
        :search-input="false"
        :portal="false"
        :aria-label="t('navigation.languageSwitcherLabel')"
      />
    </template>
  </UHeader>
</template>
