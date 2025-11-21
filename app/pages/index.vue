<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('landing.hero.title'),
  ogTitle: t('landing.hero.title'),
  description: t('landing.hero.subhead'),
  ogDescription: t('landing.hero.subhead')
})
</script>

<template>
  <div>
    <!-- ===========================
         HERO
    ============================ -->
    <section class="py-24 bg-primary-50 dark:bg-gray-900">
      <UContainer class="text-center max-w-3xl mx-auto">
        <div class="inline-block px-4 py-3 mb-8 bg-white/90 dark:bg-gray-900/80 rounded-xl shadow-sm">
          <h1 class="text-4xl font-bold">
            {{ t('landing.hero.title') }}
          </h1>
        </div>

        <p class="text-lg opacity-90 mb-6">
          {{ t('landing.hero.subhead') }}
        </p>

        <div class="flex justify-center gap-3 mt-6">
          <UButton
            to="https://demo.civicpress.io"
            size="lg"
            target="_blank"
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
        <h2 class="text-3xl font-semibold mb-4">
          {{ t('landing.demoPreview.title') }}
        </h2>

        <p class="mb-8 text-lg opacity-90">
          {{ t('landing.demoPreview.description') }}
        </p>

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
        <h2 class="text-xl md:text-2xl font-semibold mb-4">
          {{ t('landing.problem.lede') }}
        </h2>

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
        <h2 class="text-3xl font-semibold mb-4">
          {{ t('landing.whyVideo.title') }}
        </h2>

        <p class="mb-8 text-lg opacity-90">
          {{ t('landing.whyVideo.description') }}
        </p>

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
    <section
      id="features"
      class="py-28 bg-primary-50/30 dark:bg-gray-900"
    >
      <UContainer>
        <h2 class="text-3xl text-center font-semibold mb-14">
          {{ t('landing.features.intro') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <UCard class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              {{ t('landing.features.items.0.title') }}
            </h3>
            <p class="opacity-80 mb-2">
              {{ t('landing.features.items.0.body') }}
            </p>
            <p class="text-xs opacity-75">
              <span class="font-semibold">Why:</span>
              {{ t('landing.features.items.0.why') }}
            </p>
          </UCard>

          <UCard class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              {{ t('landing.features.items.1.title') }}
            </h3>
            <p class="opacity-80 mb-2">
              {{ t('landing.features.items.1.body') }}
            </p>
            <p class="text-xs opacity-75">
              <span class="font-semibold">Why:</span>
              {{ t('landing.features.items.1.why') }}
            </p>
          </UCard>

          <UCard class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              {{ t('landing.features.items.2.title') }}
            </h3>
            <p class="opacity-80 mb-2">
              {{ t('landing.features.items.2.body') }}
            </p>
            <p class="text-xs opacity-75">
              <span class="font-semibold">Why:</span>
              {{ t('landing.features.items.2.why') }}
            </p>
          </UCard>

          <UCard class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              {{ t('landing.features.items.3.title') }}
            </h3>
            <p class="opacity-80 mb-2">
              {{ t('landing.features.items.3.body') }}
            </p>
            <p class="text-xs opacity-75">
              <span class="font-semibold">Why:</span>
              {{ t('landing.features.items.3.why') }}
            </p>
          </UCard>

          <UCard class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              {{ t('landing.features.items.4.title') }}
            </h3>
            <p class="opacity-80 mb-2">
              {{ t('landing.features.items.4.body') }}
            </p>
            <p class="text-xs opacity-75">
              <span class="font-semibold">Why:</span>
              {{ t('landing.features.items.4.why') }}
            </p>
          </UCard>

          <UCard class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              {{ t('landing.features.items.5.title') }}
            </h3>
            <p class="opacity-80 mb-2">
              {{ t('landing.features.items.5.body') }}
            </p>
            <p class="text-xs opacity-75">
              <span class="font-semibold">Why:</span>
              {{ t('landing.features.items.5.why') }}
            </p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- ===========================
         HOW IT WORKS
    ============================ -->
    <section
      id="how-it-works"
      class="py-24"
    >
      <UContainer class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-semibold mb-6">
          {{ t('landing.howItWorks.title') }}
        </h2>

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
        <h2 class="text-3xl font-semibold mb-10 text-center">
          {{ t('landing.values.title') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 class="font-semibold mb-2">
              {{ t('landing.values.items.0.title') }}
            </h3>
            <p class="opacity-80">
              {{ t('landing.values.items.0.body') }}
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">
              {{ t('landing.values.items.1.title') }}
            </h3>
            <p class="opacity-80">
              {{ t('landing.values.items.1.body') }}
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">
              {{ t('landing.values.items.2.title') }}
            </h3>
            <p class="opacity-80">
              {{ t('landing.values.items.2.body') }}
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">
              {{ t('landing.values.items.3.title') }}
            </h3>
            <p class="opacity-80">
              {{ t('landing.values.items.3.body') }}
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">
              {{ t('landing.values.items.4.title') }}
            </h3>
            <p class="opacity-80">
              {{ t('landing.values.items.4.body') }}
            </p>
          </div>
          <div>
            <h3 class="font-semibold mb-2">
              {{ t('landing.values.items.5.title') }}
            </h3>
            <p class="opacity-80">
              {{ t('landing.values.items.5.body') }}
            </p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- ===========================
         ROADMAP
    ============================ -->
    <section
      id="roadmap"
      class="py-24"
    >
      <UContainer class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-semibold mb-6">
          {{ t('landing.roadmap.title') }}
        </h2>

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

    <!-- 8. BUILT FOR THE PUBLIC, GOVERNED BY THE PUBLIC -->
    <section
      id="governance"
      class="py-24 bg-gray-50 dark:bg-gray-950"
    >
      <UContainer class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-semibold mb-6">
          {{ t('landing.publicGovernance.title') }}
        </h2>

        <p class="prose dark:prose-invert opacity-95 leading-relaxed text-lg">
          {{ t('landing.publicGovernance.body1') }}
        </p>
        <p class="prose dark:prose-invert opacity-95 leading-relaxed text-lg mt-4">
          {{ t('landing.publicGovernance.body2') }}
        </p>
        <p class="prose dark:prose-invert opacity-95 leading-relaxed text-lg mt-4">
          {{ t('landing.publicGovernance.body3') }}
        </p>
        <p class="prose dark:prose-invert opacity-95 leading-relaxed text-lg mt-4">
          {{ t('landing.publicGovernance.body4') }}
        </p>
        <p class="prose dark:prose-invert opacity-95 leading-relaxed text-lg mt-4">
          {{ t('landing.publicGovernance.body5') }}
        </p>
        <p class="prose dark:prose-invert opacity-95 leading-relaxed text-lg mt-4">
          {{ t('landing.publicGovernance.body6') }}
        </p>
      </UContainer>
    </section>

    <!-- 9. FOUNDER / TEAM NOTE -->
    <section class="py-24">
      <UContainer class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-semibold mb-6">
          {{ t('landing.founderNote.title') }}
        </h2>

        <p class="prose dark:prose-invert opacity-95 leading-relaxed text-lg">
          {{ t('landing.founderNote.body1') }}
        </p>
        <p class="prose dark:prose-invert opacity-95 leading-relaxed text-lg mt-4">
          {{ t('landing.founderNote.body2') }}
        </p>
      </UContainer>
    </section>

    <!-- 10. FAQ -->
    <section
      id="faq"
      class="py-24 bg-gray-50 dark:bg-gray-950"
    >
      <UContainer class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-semibold mb-10 text-center">
          {{ t('landing.faq.title') }}
        </h2>

        <div class="space-y-8">
          <div>
            <h3 class="font-semibold mb-2">
              {{ t('landing.faq.items.0.question') }}
            </h3>
            <p class="opacity-85">
              {{ t('landing.faq.items.0.answer') }}
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">
              {{ t('landing.faq.items.1.question') }}
            </h3>
            <p class="opacity-85">
              {{ t('landing.faq.items.1.answer') }}
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">
              {{ t('landing.faq.items.2.question') }}
            </h3>
            <p class="opacity-85">
              {{ t('landing.faq.items.2.answer') }}
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-2">
              {{ t('landing.faq.items.3.question') }}
            </h3>
            <p class="opacity-85">
              {{ t('landing.faq.items.3.answer') }}
            </p>
          </div>
        </div>

        <p class="mt-10 text-center opacity-80">
          {{ t('landing.faq.closing') }}
        </p>
      </UContainer>
    </section>

    <!-- 7. CTA -->
    <section class="py-24 bg-primary-600 text-white text-center">
      <UContainer class="max-w-xl mx-auto">
        <h2 class="text-3xl font-bold mb-6">
          {{ t('landing.cta.title') }}
        </h2>

        <p class="opacity-90 mb-8">
          {{ t('landing.cta.contributeSubtitle') }}
        </p>

        <div class="flex justify-center gap-4">
          <UButton
            size="lg"
            color="white"
            to="https://demo.civicpress.io"
            target="_blank"
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
