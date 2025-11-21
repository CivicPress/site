<script setup lang="ts">
const { t, tm } = useI18n()

useSeoMeta({
  title: t('landing.hero.title'),
  ogTitle: t('landing.hero.title'),
  description: t('landing.hero.subhead'),
  ogDescription: t('landing.hero.subhead')
})

const featureItems = computed(() => tm('landing.features.items') as Array<{
  title: string
  body: string
  why: string
  tag?: string
}>)

const values = computed(() => tm('landing.values.items') as Array<{
  title: string
  body: string
}>)
</script>

<template>
  <div>
    <!-- ===========================
         HERO
    ============================ -->
    <section class="py-24 bg-primary-50 dark:bg-gray-900">
      <UContainer class="text-center max-w-3xl mx-auto">
        <UH1 class="text-4xl font-bold mb-6">
          {{ t('landing.hero.title') }}
        </UH1>

        <ULead class="text-lg opacity-90 mb-6">
          {{ t('landing.hero.subhead') }}
        </ULead>

        <div class="flex justify-center gap-3 mt-6">
          <UButton
            to="/demo"
            size="lg"
          >
            {{ t('landing.hero.primaryCta') }}
          </UButton>
          <UButton
            color="gray"
            variant="ghost"
            to="https://github.com/CivicPress"
          >
            {{ t('landing.hero.secondaryCta') }}
          </UButton>
        </div>

        <div class="flex justify-center gap-3 mt-8">
          <UBadge
            v-for="badge in (t('landing.hero.badges') as string[])"
            :key="badge"
            color="primary"
          >
            {{ badge }}
          </UBadge>
        </div>

        <p class="mt-6 text-sm opacity-70">
          {{ t('landing.hero.reassurance') }}
        </p>
      </UContainer>
    </section>

    <!-- ===========================
         DEMO VIDEO PREVIEW
    ============================ -->
    <section class="py-24">
      <UContainer class="max-w-4xl mx-auto text-center">
        <UH2 class="text-3xl font-semibold mb-4">
          {{ t('landing.demoPreview.title') }}
        </UH2>

        <ULead class="mb-8">
          {{ t('landing.demoPreview.description') }}
        </ULead>

        <div class="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
          <video
            controls
            autoplay
            muted
            class="w-full"
          >
            <source
              src="/videos/demo-video.mp4"
              type="video/mp4"
            >
          </video>
        </div>
      </UContainer>
    </section>

    <!-- ===========================
         WHY — MANIFESTO INTRO
    ============================ -->
    <section class="py-24 bg-gray-50 dark:bg-gray-950">
      <UContainer class="max-w-3xl mx-auto">
        <UH2 class="text-3xl font-semibold mb-6">
          {{ t('landing.problem.lede') }}
        </UH2>

        <p class="prose dark:prose-invert opacity-95 leading-relaxed text-lg">
          {{ t('landing.problem.body') }}
          <br><br>
          {{ t('landing.problem.body2') }}
        </p>
      </UContainer>
    </section>

    <!-- ===========================
         WHY VIDEO
    ============================ -->
    <section class="py-24">
      <UContainer class="max-w-4xl mx-auto text-center">
        <UH2 class="text-3xl font-semibold mb-4">
          {{ t('landing.whyVideo.title') }}
        </UH2>

        <ULead class="mb-8">
          {{ t('landing.whyVideo.description') }}
        </ULead>

        <div class="rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-800">
          <video
            controls
            class="w-full"
          >
            <source
              src="/videos/why-video.mp4"
              type="video/mp4"
            >
          </video>
        </div>
      </UContainer>
    </section>

    <!-- ===========================
         FEATURES
    ============================ -->
    <section class="py-28 bg-primary-50/30 dark:bg-gray-900">
      <UContainer>
        <UH2 class="text-3xl text-center font-semibold mb-14">
          {{ t('landing.features.intro') }}
        </UH2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UCard
            v-for="feature in featureItems"
            :key="feature.title"
            class="p-6 text-left"
          >
            <h3 class="text-xl font-semibold mb-2">
              {{ feature.title }}
            </h3>
            <p class="opacity-80 mb-2">
              {{ feature.body }}
            </p>
            <p class="text-xs opacity-75">
              <span class="font-semibold">Why:</span> {{ feature.why }}
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- ===========================
         HOW IT WORKS
    ============================ -->
    <section class="py-24">
      <UContainer class="max-w-3xl mx-auto">
        <UH2 class="text-3xl font-semibold mb-6">
          {{ t('landing.howItWorks.title') }}
        </UH2>

        <p class="prose dark:prose-invert opacity-95 leading-relaxed text-lg">
          {{ t('landing.howItWorks.body1') }}
          <br><br>
          {{ t('landing.howItWorks.body2') }}
          <br><br>
          {{ t('landing.howItWorks.body3') }}
          <br><br>
          {{ t('landing.howItWorks.body4') }}
        </p>
      </UContainer>
    </section>

    <!-- ===========================
         VALUES
    ============================ -->
    <section class="py-24 bg-gray-50 dark:bg-gray-950">
      <UContainer>
        <UH2 class="text-3xl font-semibold mb-10 text-center">
          {{ t('landing.values.title') }}
        </UH2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div
            v-for="value in values"
            :key="value.title"
          >
            <h3 class="font-semibold mb-2">
              {{ value.title }}
            </h3>
            <p class="opacity-80">
              {{ value.body }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ===========================
         ROADMAP
    ============================ -->
    <section class="py-24">
      <UContainer class="max-w-3xl mx-auto">
        <UH2 class="text-3xl font-semibold mb-6">
          {{ t('landing.roadmap.title') }}
        </UH2>

        <p class="prose dark:prose-invert opacity-90 leading-relaxed">
          <strong>{{ t('landing.roadmap.currentTitle') }}</strong>
          <br>
          {{ t('landing.roadmap.currentBody') }}
          <br><br>
          <strong>{{ t('landing.roadmap.foundationTitle') }}</strong>
          <br>
          {{ t('landing.roadmap.foundationBody') }}
          <br><br>
          {{ t('landing.roadmap.pilotsBody') }}
          <br><br>
          <span class="italic text-sm">
            {{ t('landing.roadmap.closing') }}
          </span>
        </p>
      </UContainer>
    </section>

    <!-- ===========================
         CTA
    ============================ -->
    <section class="py-24 bg-primary-600 text-white text-center">
      <UContainer class="max-w-xl mx-auto">
        <UH2 class="text-3xl font-bold mb-6">
          {{ t('landing.cta.title') }}
        </UH2>

        <p class="opacity-90 mb-8">
          {{ t('landing.cta.contributeSubtitle') }}
        </p>

        <div class="flex justify-center gap-4">
          <UButton
            size="lg"
            color="white"
            to="/demo"
          >
            {{ t('landing.cta.demo') }}
          </UButton>
          <UButton
            size="lg"
            variant="ghost"
            color="white"
            to="https://github.com/CivicPress"
          >
            {{ t('landing.cta.contribute') }}
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>
