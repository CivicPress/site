<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('landing.hero.title'),
  ogTitle: t('landing.hero.title'),
  description: t('landing.hero.subhead'),
  ogDescription: t('landing.hero.subhead')
})

const featureItems = computed(() => t('landing.features.items') as Array<{
  title: string
  body: string
  why: string
  tag?: string
}>)

const values = computed(() => t('landing.values.items') as Array<{
  title: string
  body: string
}>)

const faqItems = computed(() => t('landing.faq.items') as Array<{
  question: string
  answer: string
}>)
</script>

<template>
  <div class="relative">
    <div class="hidden lg:block">
      <UColorModeImage
        light="/images/light/line-1.svg"
        dark="/images/dark/line-1.svg"
        class="absolute pointer-events-none pb-10 left-0 top-0 object-cover h-[650px]"
      />
    </div>

    <UPageHero
      :description="t('landing.hero.subhead')"
      :links="[
        {
          label: t('landing.hero.primaryCta'),
          color: 'primary',
          trailing: true
        },
        {
          label: t('landing.hero.secondaryCta'),
          variant: 'outline'
        }
      ]"
      :ui="{
        container: 'md:pt-18 lg:pt-20',
        title: 'max-w-3xl mx-auto'
      }"
    >
      <template #top>
        <HeroBackground />
      </template>

      <template #title>
        <h1 class="text-balance text-4xl sm:text-5xl font-semibold tracking-tight">
          {{ t('landing.hero.title') }}
        </h1>
      </template>

      <template #links>
        <div class="flex flex-wrap items-center gap-3 justify-center">
          <UButton
            color="primary"
            size="lg"
            :label="t('landing.hero.primaryCta')"
          />
          <UButton
            color="neutral"
            variant="outline"
            size="lg"
            :label="t('landing.hero.secondaryCta')"
          />
        </div>

        <p class="mt-4 text-sm text-muted text-center">
          {{ t('landing.hero.reassurance') }}
        </p>

        <div class="mt-6 flex flex-wrap justify-center gap-2 text-xs font-medium text-muted">
          <UBadge
            v-for="badge in t('landing.hero.badges') as string[]"
            :key="badge"
            color="neutral"
            variant="subtle"
          >
            {{ badge }}
          </UBadge>
        </div>
      </template>
    </UPageHero>

    <UPageSection
      :title="t('landing.demoPreview.title')"
      :description="t('landing.demoPreview.description')"
      orientation="horizontal"
      :ui="{
        container: 'lg:px-0 2xl:px-20 mx-0 max-w-none md:mr-10',
        features: 'gap-0'
      }"
      reverse
    >
      <img
        src="/images/macbook.svg"
        :alt="t('landing.demoPreview.videoAlt')"
        class="hidden lg:block 2xl:hidden left-0 w-full max-w-2xl"
      >
      <img
        src="/images/macbook-mobile.svg"
        :alt="t('landing.demoPreview.videoAlt')"
        class="block lg:hidden 2xl:block 2xl:w-full 2xl:max-w-2xl"
      >
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="why"
      :title="t('landing.problem.lede')"
      :description="t('landing.problem.body')"
      :ui="{ title: 'text-left', description: 'text-left max-w-3xl' }"
    >
      <p class="mt-4 text-sm text-muted max-w-3xl">
        {{ t('landing.problem.body2') }}
      </p>
    </UPageSection>

    <UPageSection
      :title="t('landing.whyVideo.title')"
      :description="t('landing.whyVideo.description')"
      :ui="{ title: 'text-left', description: 'text-left max-w-3xl' }"
    >
      <div class="mt-6 aspect-video w-full max-w-3xl rounded-xl border border-dashed border-default bg-accented/10 flex items-center justify-center text-muted text-sm">
        TODO: Embed “Why CivicPress exists” video
      </div>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="features"
      :title="t('landing.features.intro')"
      :ui="{
        title: 'text-left @container relative flex',
        description: 'text-left'
      }"
      class="relative overflow-hidden"
    >
      <div class="absolute rounded-full -left-10 top-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
      <div class="absolute rounded-full -right-10 -bottom-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
      <template #features>
        <UPageColumns class="lg:columns-2">
          <UPageCard
            v-for="feature in featureItems"
            :key="feature.title"
            :title="feature.title"
          >
            <p class="text-sm text-muted mb-2">
              {{ feature.body }}
            </p>
            <p class="text-xs text-muted">
              <span class="font-semibold">Why:</span> {{ feature.why }}
            </p>
          </UPageCard>
        </UPageColumns>
      </template>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="how"
      :title="t('landing.howItWorks.title')"
      :ui="{ title: 'text-left', description: 'text-left max-w-3xl' }"
    >
      <div class="space-y-4 text-sm text-muted max-w-3xl">
        <p>{{ t('landing.howItWorks.body1') }}</p>
        <p>{{ t('landing.howItWorks.body2') }}</p>
        <p>{{ t('landing.howItWorks.body3') }}</p>
        <p>{{ t('landing.howItWorks.body4') }}</p>
        <p class="text-xs italic">
          {{ t('landing.howItWorks.example') }}
        </p>
      </div>
    </UPageSection>

    <UPageSection
      id="values"
      :title="t('landing.values.title')"
      :ui="{ title: 'text-left', description: 'text-left' }"
    >
      <UPageColumns class="lg:columns-3">
        <UPageCard
          v-for="value in values"
          :key="value.title"
          :title="value.title"
        >
          <p class="text-sm text-muted">
            {{ value.body }}
          </p>
        </UPageCard>
      </UPageColumns>
    </UPageSection>

    <UPageSection
      id="roadmap"
      :title="t('landing.roadmap.title')"
      :ui="{ title: 'text-left', description: 'text-left max-w-3xl' }"
    >
      <div class="space-y-4 text-sm text-muted max-w-3xl">
        <div>
          <h3 class="font-semibold">
            {{ t('landing.roadmap.currentTitle') }}
          </h3>
          <p>{{ t('landing.roadmap.currentBody') }}</p>
        </div>
        <div>
          <h3 class="font-semibold">
            {{ t('landing.roadmap.foundationTitle') }}
          </h3>
          <p>{{ t('landing.roadmap.foundationBody') }}</p>
          <p class="mt-2">
            {{ t('landing.roadmap.pilotsBody') }}
          </p>
        </div>
        <p class="text-xs italic">
          {{ t('landing.roadmap.closing') }}
        </p>
      </div>
    </UPageSection>

    <UPageSection
      id="public-governance"
      :title="t('landing.publicGovernance.title')"
      :ui="{ title: 'text-left', description: 'text-left max-w-3xl' }"
    >
      <template #headline>
        <UColorModeImage
          light="/images/light/line-5.svg"
          dark="/images/dark/line-5.svg"
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
        />
      </template>
      <template #title>
        <p class="text-sm text-muted max-w-3xl">
          {{ t('landing.publicGovernance.body1') }}
        </p>
      </template>

      <UContainer>
        <div class="space-y-4 text-sm text-muted max-w-3xl">
          <p>{{ t('landing.publicGovernance.body2') }}</p>
          <p>{{ t('landing.publicGovernance.body3') }}</p>
          <p>{{ t('landing.publicGovernance.body4') }}</p>
          <p>{{ t('landing.publicGovernance.body5') }}</p>
          <p>{{ t('landing.publicGovernance.body6') }}</p>
        </div>
      </UContainer>
    </UPageSection>

    <USeparator />

    <UPageSection
      id="founder-note"
      :title="t('landing.founderNote.title')"
      :ui="{ title: 'text-left', description: 'text-left max-w-3xl' }"
    >
      <div class="space-y-4 text-sm text-muted max-w-3xl">
        <p>{{ t('landing.founderNote.body1') }}</p>
        <p>{{ t('landing.founderNote.body2') }}</p>
      </div>
    </UPageSection>

    <UPageSection
      id="faq"
      :title="t('landing.faq.title')"
      :ui="{ title: 'text-left', description: 'text-left max-w-3xl' }"
    >
      <UAccordion
        color="primary"
        variant="subtle"
        :items="faqItems.map((item) => ({
          label: item.question,
          content: item.answer
        }))"
        class="max-w-3xl"
      />

      <p class="mt-4 text-xs text-muted">
        {{ t('landing.faq.closing') }}
      </p>
    </UPageSection>

    <USeparator />

    <UPageCTA
      :title="t('landing.cta.title')"
      :links="[
        { label: t('landing.cta.demo'), color: 'primary', trailingIcon: 'i-lucide-arrow-right' },
        { label: t('landing.cta.contribute'), variant: 'subtle' }
      ]"
      variant="naked"
      class="overflow-hidden @container"
    >
      <template #title>
        <h2 class="text-2xl sm:text-3xl font-semibold">
          {{ t('landing.cta.title') }}
        </h2>

        <div class="@max-[1280px]:hidden">
          <UColorModeImage
            light="/images/light/line-6.svg"
            dark="/images/dark/line-6.svg"
            class="absolute left-10 -top-10 sm:top-0 h-full"
          />
          <UColorModeImage
            light="/images/light/line-7.svg"
            dark="/images/dark/line-7.svg"
            class="absolute right-0 bottom-0 h-full"
          />
        </div>
      </template>

      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
