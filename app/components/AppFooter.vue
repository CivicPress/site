<script setup lang="ts">
const { t } = useI18n()

const columns = computed(() => [{
  label: t('footer.resources.title'),
  children: [{
    label: t('footer.resources.links.helpCenter')
  }, {
    label: t('footer.resources.links.docs')
  }, {
    label: t('footer.resources.links.roadmap')
  }, {
    label: t('footer.resources.links.changelog')
  }]
}, {
  label: t('footer.features.title'),
  children: [{
    label: t('footer.features.links.affiliates')
  }, {
    label: t('footer.features.links.portal')
  }, {
    label: t('footer.features.links.jobs')
  }, {
    label: t('footer.features.links.sponsors')
  }]
}, {
  label: t('footer.company.title'),
  children: [{
    label: t('footer.company.links.about')
  }, {
    label: t('footer.company.links.pricing')
  }, {
    label: t('footer.company.links.careers')
  }, {
    label: t('footer.company.links.blog')
  }]
}])

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  toast.add({
    title: t('footer.newsletter.successTitle'),
    description: t('footer.newsletter.successDescription')
  })
}
</script>

<template>
  <USeparator
    icon="i-simple-icons-nuxtdotjs"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <form @submit.prevent="onSubmit">
              <UFormField
                name="email"
                :label="t('footer.newsletter.title')"
                size="lg"
              >
                <UInput
                  v-model="email"
                  type="email"
                  class="w-full"
                  :placeholder="t('footer.newsletter.placeholder')"
                >
                  <template #trailing>
                    <UButton
                      type="submit"
                      size="xs"
                      :label="t('footer.newsletter.cta')"
                    />
                  </template>
                </UInput>
              </UFormField>
            </form>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-muted">
        {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
      </p>
    </template>

    <template #right>
      <UButton
        to="https://go.nuxt.com/discord"
        target="_blank"
        icon="i-simple-icons-discord"
        aria-label="Nuxt on Discord"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://go.nuxt.com/x"
        target="_blank"
        icon="i-simple-icons-x"
        aria-label="Nuxt on X"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://github.com/nuxt-ui-templates/landing"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="Nuxt UI on GitHub"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
