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
  value: localeEntry.code,
  label: localeEntry.name
})))

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
        class="hidden lg:block w-28"
        size="sm"
        :model-value="locale.value"
        :options="localeOptions"
        option-attribute="label"
        value-attribute="value"
        :aria-label="t('navigation.languageSwitcherLabel')"
        @update:model-value="code => setLocale(code)"
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
        class="mt-4"
        size="sm"
        :model-value="locale.value"
        :options="localeOptions"
        option-attribute="label"
        value-attribute="value"
        :aria-label="t('navigation.languageSwitcherLabel')"
        @update:model-value="code => setLocale(code)"
      />
    </template>
  </UHeader>
</template>
