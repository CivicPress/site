<script setup lang="ts">
const { t, tm } = useI18n()

const heroBadges = computed(() => {
  const raw = tm('landing.hero.badges') as unknown

  if (Array.isArray(raw)) {
    return raw.map((item) => {
      if (typeof item === 'string') {
        return item
      }

      // Nuxt i18n returns message AST objects; extract the static text
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const node = item as any
      return node?.body?.static ?? ''
    })
  }

  return []
})

const showDemoSection = false

// Page-specific SEO meta (overrides global defaults)
useSeoMeta({
  title: 'CivicPress — Open infrastructure for transparent local government',
  ogTitle: 'CivicPress — Open infrastructure for transparent local government',
  description: 'CivicPress is an open-source civic platform that helps municipalities publish records, meetings, and maps in formats people can read, verify, and trust.',
  ogDescription: 'Open-source civic infrastructure that helps municipalities publish records, meetings, and maps in trustworthy, verifiable formats.',
  ogImage: 'https://civicpress.io/og_image.png',
  twitterCard: 'summary_large_image',
  twitterTitle: 'CivicPress — Open infrastructure for transparent local government',
  twitterDescription: 'Open-source civic infrastructure for municipalities of any size.',
  twitterImage: 'https://civicpress.io/og_image.png'
})
</script>

<template>
  <div >
    <!-- ===========================
         HERO
    ============================ -->
    <section class="relative overflow-hidden pt-16 pb-10 md:py-24 dark:bg-slate-950">

      <!-- Blueprint background - Light mode -->
      <svg
        class="pointer-events-none absolute inset-0 h-full w-full dark:hidden"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <!-- Light grid pattern -->
          <pattern
            id="cp-grid-light"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#d7e3f7"
              stroke-width="1.0"
              stroke-opacity="1.0"
            />
          </pattern>

          <!-- Softer radial fade so it's strongest at the edges -->
          <radialGradient id="cp-fade-light" cx="50%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#F4F7FB" stop-opacity="1" />
            <stop offset="100%" stop-color="#F4F7FB" stop-opacity="0.4" />
          </radialGradient>
        </defs>

        <!-- Base background color -->
        <rect width="100%" height="100%" fill="#F4F7FB" />

        <!-- Grid fill -->
        <rect width="100%" height="100%" fill="url(#cp-grid-light)" />

        <!-- Fading mask on top to keep the center clean -->
        <rect width="100%" height="100%" fill="url(#cp-fade-light)" />

        <!-- Subtle "infrastructure" geometry -->
        <!-- Top-left circle -->
        <circle
          cx="140"
          cy="80"
          r="70"
          fill="none"
          stroke="#c7d5f3"
          stroke-width="1.2"
          stroke-opacity="0.85"
        />

        <!-- Bottom-right angled lines -->
        <path
          d="M 1020 620 L 1320 320"
          fill="none"
          stroke="#c7d5f3"
          stroke-width="1.0"
          stroke-opacity="0.3"
        />
        <path
          d="M 1100 660 L 1370 390"
          fill="none"
          stroke="#c7d5f3"
          stroke-width="0.8"
          stroke-opacity="0.25"
        />
      </svg>

      <!-- Blueprint background - Dark mode -->
      <svg
        class="pointer-events-none absolute inset-0 hidden h-full w-full dark:block"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <!-- Light grid pattern for dark mode -->
          <pattern
            id="cp-grid-dark"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#475569"
              stroke-width="0.75"
              stroke-opacity="0.65"
            />
          </pattern>

          <!-- Softer radial fade for dark mode -->
          <radialGradient id="cp-fade-dark" cx="50%" cy="30%" r="75%">
            <stop offset="0%" stop-color="#0F172A" stop-opacity="1" />
            <stop offset="100%" stop-color="#0F172A" stop-opacity="0.5" />
          </radialGradient>
        </defs>

        <!-- Base background color -->
        <rect width="100%" height="100%" fill="#0F172A" />

        <!-- Grid fill -->
        <rect width="100%" height="100%" fill="url(#cp-grid-dark)" />

        <!-- Fading mask on top to keep the center clean -->
        <rect width="100%" height="100%" fill="url(#cp-fade-dark)" />

        <!-- Subtle "infrastructure" geometry -->
        <!-- Top-left circle -->
        <circle
          cx="140"
          cy="80"
          r="70"
          fill="none"
          stroke="#64748B"
          stroke-width="1"
          stroke-opacity="0.6"
        />

        <!-- Bottom-right angled lines -->
        <path
          d="M 1020 620 L 1320 320"
          fill="none"
          stroke="#64748B"
          stroke-width="0.8"
          stroke-opacity="0.18"
        />
        <path
          d="M 1100 660 L 1370 390"
          fill="none"
          stroke="#64748B"
          stroke-width="0.6"
          stroke-opacity="0.15"
        />
      </svg>

      <UContainer class="relative max-w-4xl mx-auto px-4 lg:px-0">
        <div class="w-full rounded-3xl bg-white dark:bg-slate-900/50 shadow-lg dark:shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.3)] border border-[#E1E6F0] dark:border-slate-700/60 px-6 md:px-10 py-10 md:py-12 text-center">
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-center text-[color:var(--cp-text-primary,#0E1729)] dark:text-gray-50 mb-4">
            {{ t('landing.hero.title') }}
          </h1>

          <p class="text-base text-slate-600 dark:text-slate-200 max-w-2xl mx-auto text-center mb-6">
            {{ t('landing.hero.subhead') }}
          </p>

          <div class="mt-8 flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-center lg:gap-3 w-full lg:w-auto hero-buttons">
            <UButton
              to="https://demo.civicpress.io"
              size="lg"
              target="_blank"
              color="primary"
              class="w-full lg:w-auto bg-[color:var(--cp-blue,#4C7FD8)] hover:bg-[color:var(--cp-blue-hover,#3D72C7)] active:bg-[color:var(--cp-blue-hover,#3D72C7)] focus:bg-[color:var(--cp-blue-hover,#3D72C7)] border-transparent"
            >
              {{ t('landing.hero.primaryCta') }}
            </UButton>
            <UButton
              variant="ghost"
              color="primary"
              class="w-full lg:w-auto border border-[color:var(--cp-blue,#4C7FD8)] text-[color:var(--cp-blue,#4C7FD8)] hover:bg-[color:var(--cp-blue,#4C7FD8)] hover:text-white active:bg-[color:var(--cp-blue,#4C7FD8)] active:text-white focus:bg-[color:var(--cp-blue,#4C7FD8)] focus:text-white"
              to="https://tally.so/r/wAYBvN"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ t('landing.hero.secondaryCta') }}
            </UButton>
          </div>

          <div class="mt-9 flex flex-wrap justify-center gap-2">
            <UBadge
              v-for="badge in heroBadges"
              :key="badge"
              variant="outline"
              color="neutral"
              class="inline-flex items-center rounded-full border-[#D3DEEE] bg-[#EEF3FB] text-[color:var(--cp-text-secondary,#3A4656)] px-3 py-1 text-xs md:text-sm font-medium"
            >
              {{ badge }}
            </UBadge>
          </div>

          <p class="mt-8 text-xs md:text-sm text-[color:var(--cp-text-secondary,#3A4656)] dark:text-slate-400 text-center">
            {{ t('landing.hero.reassurance') }}
          </p>
        </div>
      </UContainer>
    </section>

    <!-- ===========================
         DEMO VIDEO PREVIEW
    ============================ -->
    <section
      v-if="showDemoSection"
      id="demo"
      class="py-10 sm:py-12 md:py-20 bg-white dark:bg-slate-950"
    >
      <UContainer class="max-w-4xl mx-auto text-center px-4 lg:px-0">
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {{ t('landing.demoPreview.title') }}
        </h2>

        <p class="mb-8 text-base text-slate-600 dark:text-slate-200 leading-relaxed max-w-2xl mx-auto">
          {{ t('landing.demoPreview.description') }}
        </p>

        <UCard
          class="relative w-full aspect-video rounded-2xl border border-[#E1E6F0] dark:border-slate-800 shadow-sm overflow-hidden bg-slate-900/95"
        >
          <div class="absolute inset-0 flex items-center justify-center text-sm md:text-base text-slate-200 opacity-80">
            <span>
              Demo video coming soon
            </span>
          </div>
        </UCard>
      </UContainer>
    </section>

    <!-- ===========================
         WHY (MANIFESTO INTRO)
    ============================ -->
    <section
      id="why-intro"
      class="py-10 sm:py-12 md:py-24 bg-white dark:bg-slate-950"
    >
      <UContainer class="max-w-full md:max-w-3xl mx-auto px-4 lg:px-0">
        <h2 class="text-2xl sm:text-3xl md:text-3xl md:mt-16 md:mb-6 font-semibold tracking-tight text-gray-900 dark:text-slate-50 mb-4 text-center">
          {{ t('landing.problem.lede') }}
        </h2>

        <div class="space-y-4 text-base text-slate-600 dark:text-slate-200 leading-relaxed text-center md:text-left">
          <p>
            {{ t('landing.problem.body') }}
          </p>
          <p>
            {{ t('landing.problem.body2') }}
          </p>
        </div>
      </UContainer>
    </section>

    <!-- ===========================
         WHY VIDEO
    ============================ -->
    <section
      id="why-video"
      class="py-10 sm:py-12 md:py-20 bg-slate-50 dark:bg-slate-900"
    >
      <UContainer class="max-w-full md:max-w-3xl mx-auto px-4 lg:px-0">
        <h2 class="text-2xl sm:text-3xl md:text-3xl md:mt-16 md:mb-6 font-semibold tracking-tight text-gray-900 dark:text-slate-50 mb-4 text-center">
          {{ t('landing.whyVideo.title') }}
        </h2>

        <div class="space-y-4 text-base text-slate-600 dark:text-slate-200 leading-relaxed text-center md:text-left">
          <p>
            {{ t('landing.whyVideo.body1') }}
          </p>
          <p>
            {{ t('landing.whyVideo.body2') }}
          </p>
          <p>
            {{ t('landing.whyVideo.body3') }}
          </p>
          <p>
            {{ t('landing.whyVideo.body4') }}
          </p>
        </div>
      </UContainer>
    </section>

    <!-- ===========================
         FEATURES
    ============================ -->
    <section
      id="features"
      class="py-10 sm:py-12 md:py-20 bg-white dark:bg-slate-950"
    >
      <UContainer class="max-w-5xl mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl md:text-3xl md:mt-16 md:mb-6 font-semibold tracking-tight text-gray-900 dark:text-slate-50 text-center max-w-3xl mx-auto mb-6">
          {{ t('landing.features.intro') }}
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 max-w-5xl mx-auto text-left">
          <UCard class="w-full rounded-2xl border border-[#D3DEEE] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] bg-white dark:bg-slate-900/50 px-4 py-3 md:p-4">
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {{ t('landing.features.items.0.title') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.features.items.0.body') }}
            </p>
            <div class="border-t border-[#E1E6F0] dark:border-slate-700 pt-3 mt-5">
              <p class="text-xs md:text-sm italic text-gray-500 dark:text-gray-400">
                {{ t('landing.features.items.0.why') }}
              </p>
            </div>
          </UCard>

          <UCard class="w-full rounded-2xl border border-[#D3DEEE] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] bg-white dark:bg-slate-900/50 px-4 py-3 md:p-4">
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
              {{ t('landing.features.items.1.title') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.features.items.1.body') }}
            </p>
            <div class="border-t border-[#E1E6F0] dark:border-slate-700 pt-2 mt-4">
              <p class="text-xs md:text-sm italic text-gray-500 dark:text-gray-400">
                {{ t('landing.features.items.1.why') }}
              </p>
            </div>
          </UCard>

          <UCard class="w-full rounded-2xl border border-[#D3DEEE] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] bg-white dark:bg-slate-900/50 px-4 py-3 md:p-4">
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
              {{ t('landing.features.items.2.title') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.features.items.2.body') }}
            </p>
            <div class="border-t border-[#E1E6F0] dark:border-slate-700 pt-2 mt-4">
              <p class="text-xs md:text-sm italic text-gray-500 dark:text-gray-400">
                {{ t('landing.features.items.2.why') }}
              </p>
            </div>
          </UCard>

          <UCard class="w-full rounded-2xl border border-[#D3DEEE] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] bg-white dark:bg-slate-900/50 px-4 py-3 md:p-4">
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
              {{ t('landing.features.items.3.title') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.features.items.3.body') }}
            </p>
            <div class="border-t border-[#E1E6F0] dark:border-slate-700 pt-2 mt-4">
              <p class="text-xs md:text-sm italic text-gray-500 dark:text-gray-400">
                {{ t('landing.features.items.3.why') }}
              </p>
            </div>
          </UCard>

          <UCard class="w-full rounded-2xl border border-[#D3DEEE] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] bg-white dark:bg-slate-900/50 px-4 py-3 md:p-4">
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
              {{ t('landing.features.items.4.title') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.features.items.4.body') }}
            </p>
            <div class="border-t border-[#E1E6F0] dark:border-slate-700 pt-2 mt-4">
              <p class="text-xs md:text-sm italic text-gray-500 dark:text-gray-400">
                {{ t('landing.features.items.4.why') }}
              </p>
            </div>
          </UCard>

          <UCard class="w-full rounded-2xl border border-[#D3DEEE] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] bg-white dark:bg-slate-900/50 px-4 py-3 md:p-4">
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-1.5">
              {{ t('landing.features.items.5.title') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.features.items.5.body') }}
            </p>
            <div class="border-t border-[#E1E6F0] dark:border-slate-700 pt-2 mt-4">
              <p class="text-xs md:text-sm italic text-gray-500 dark:text-gray-400">
                {{ t('landing.features.items.5.why') }}
              </p>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- ===========================
         HOW IT WORKS
    ============================ -->
    <section
      id="how-it-works"
      class="py-10 sm:py-12 md:py-20 bg-slate-50 dark:bg-slate-900"
    >
      <UContainer class="max-w-full md:max-w-3xl mx-auto px-4 lg:px-0">
        <h2 class="text-2xl sm:text-3xl md:text-3xl md:mt-16 md:mb-6 font-semibold tracking-tight text-gray-900 dark:text-slate-50 mb-4 text-center">
          {{ t('landing.howItWorks.title') }}
        </h2>

        <div class="space-y-4 text-base text-slate-600 dark:text-slate-200 leading-relaxed text-center md:text-left">
          <p>
            {{ t('landing.howItWorks.body1') }}
          </p>
          <p>
            {{ t('landing.howItWorks.body2') }}
          </p>
          <p>
            {{ t('landing.howItWorks.body3') }}
          </p>
          <p>
            {{ t('landing.howItWorks.body4') }}
          </p>
        </div>
      </UContainer>
    </section>

    <!-- ===========================
         VALUES
    ============================ -->
    <section
      id="values"
      class="relative overflow-hidden py-10 sm:py-12 md:py-20 bg-white dark:bg-slate-950"
    >
      <!-- Subtle blueprint motif -->
      <svg
        class="pointer-events-none absolute inset-0 h-full w-full dark:hidden"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="values-grid"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#d7e3f7"
              stroke-width="0.5"
              stroke-opacity="0.08"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#values-grid)" />
        <!-- Subtle horizontal line with dots -->
        <line
          x1="0"
          y1="200"
          x2="1440"
          y2="200"
          stroke="#c7d5f3"
          stroke-width="0.5"
          stroke-opacity="0.06"
          stroke-dasharray="8 4"
        />
        <circle
          cx="200"
          cy="200"
          r="2"
          fill="#c7d5f3"
          opacity="0.05"
        />
        <circle
          cx="1240"
          cy="200"
          r="2"
          fill="#c7d5f3"
          opacity="0.05"
        />
      </svg>
      <svg
        class="pointer-events-none absolute inset-0 hidden h-full w-full dark:block"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="values-grid-dark"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#475569"
              stroke-width="0.5"
              stroke-opacity="0.05"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#values-grid-dark)" />
        <line
          x1="0"
          y1="200"
          x2="1440"
          y2="200"
          stroke="#64748B"
          stroke-width="0.5"
          stroke-opacity="0.04"
          stroke-dasharray="8 4"
        />
        <circle
          cx="200"
          cy="200"
          r="2"
          fill="#64748B"
          opacity="0.03"
        />
        <circle
          cx="1240"
          cy="200"
          r="2"
          fill="#64748B"
          opacity="0.03"
        />
      </svg>

      <UContainer class="relative max-w-5xl mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl md:text-3xl md:mt-16 md:mb-6 font-semibold tracking-tight text-gray-900 dark:text-slate-50 text-center mb-6">
          {{ t('landing.values.title') }}
        </h2>

        <!-- Optional subtitle could go here if a translation key exists -->

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          <div class="w-full rounded-2xl bg-white dark:bg-slate-900/50 border border-[#E1E6F0] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] px-4 py-3 md:p-6 text-left">
            <h3 class="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {{ t('landing.values.items.0.title') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.values.items.0.body') }}
            </p>
          </div>
          <div class="w-full rounded-2xl bg-white dark:bg-slate-900/50 border border-[#E1E6F0] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] px-4 py-3 md:p-6 text-left">
            <h3 class="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {{ t('landing.values.items.1.title') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.values.items.1.body') }}
            </p>
          </div>
          <div class="w-full rounded-2xl bg-white dark:bg-slate-900/50 border border-[#E1E6F0] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] px-4 py-3 md:p-6 text-left">
            <h3 class="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {{ t('landing.values.items.2.title') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.values.items.2.body') }}
            </p>
          </div>
          <div class="w-full rounded-2xl bg-white dark:bg-slate-900/50 border border-[#E1E6F0] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] px-4 py-3 md:p-6 text-left">
            <h3 class="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {{ t('landing.values.items.3.title') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.values.items.3.body') }}
            </p>
          </div>
          <div class="w-full rounded-2xl bg-white dark:bg-slate-900/50 border border-[#E1E6F0] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] px-4 py-3 md:p-6 text-left">
            <h3 class="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {{ t('landing.values.items.4.title') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.values.items.4.body') }}
            </p>
          </div>
          <div class="w-full rounded-2xl bg-white dark:bg-slate-900/50 border border-[#E1E6F0] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] px-4 py-3 md:p-6 text-left">
            <h3 class="text-sm md:text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
              {{ t('landing.values.items.5.title') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
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
      class="relative overflow-hidden py-10 sm:py-12 md:py-20 bg-slate-50 dark:bg-slate-900"
    >
      <!-- Subtle blueprint motif -->
      <svg
        class="pointer-events-none absolute inset-0 h-full w-full dark:hidden"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="roadmap-grid"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#d7e3f7"
              stroke-width="0.4"
              stroke-opacity="0.07"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#roadmap-grid)" />
        <!-- Subtle vertical accent line -->
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="600"
          stroke="#c7d5f3"
          stroke-width="0.5"
          stroke-opacity="0.05"
          stroke-dasharray="4 8"
        />
        <!-- Small corner marker -->
        <path
          d="M 100 100 L 120 100 L 100 120"
          fill="none"
          stroke="#c7d5f3"
          stroke-width="0.5"
          stroke-opacity="0.06"
        />
      </svg>
      <svg
        class="pointer-events-none absolute inset-0 hidden h-full w-full dark:block"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="roadmap-grid-dark"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#475569"
              stroke-width="0.4"
              stroke-opacity="0.04"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#roadmap-grid-dark)" />
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="600"
          stroke="#64748B"
          stroke-width="0.5"
          stroke-opacity="0.03"
          stroke-dasharray="4 8"
        />
        <path
          d="M 100 100 L 120 100 L 100 120"
          fill="none"
          stroke="#64748B"
          stroke-width="0.5"
          stroke-opacity="0.04"
        />
      </svg>

      <UContainer class="relative max-w-full md:max-w-3xl mx-auto px-4 lg:px-0">
        <h2 class="text-2xl sm:text-3xl md:text-3xl md:mt-16 md:mb-6 font-semibold tracking-tight text-gray-900 dark:text-slate-50 mb-4 text-center">
          {{ t('landing.roadmap.title') }}
        </h2>

        <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed max-w-3xl text-center md:text-left mb-8">
          {{ t('landing.roadmap.pilotsBody') }}
        </p>

        <div class="space-y-8 text-center md:text-left">
          <!-- Current milestone block -->
          <div>
            <p class="text-xs font-semibold tracking-wide uppercase text-[#4C7FD8] mb-1">
              {{ t('landing.roadmap.currentMilestoneLabel') }}
            </p>
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-slate-50 mb-2">
              {{ t('landing.roadmap.currentTitle') }}
            </h3>
            <div class="space-y-2 text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              <p>
                {{ t('landing.roadmap.currentBody') }}
              </p>
            </div>
          </div>

          <!-- Next steps / foundation block -->
          <div class="border-t border-[#E1E6F0] dark:border-slate-700/60 pt-6">
            <p class="text-xs font-semibold tracking-wide uppercase text-[#4C7FD8] mb-1">
              {{ t('landing.roadmap.nextStepsLabel') }}
            </p>
            <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-slate-50 mb-2">
              {{ t('landing.roadmap.foundationTitle') }}
            </h3>
            <div class="space-y-2 text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              <p>
                {{ t('landing.roadmap.foundationBody') }}
              </p>
              <p>
                {{ t('landing.roadmap.pilotsBody') }}
              </p>
            </div>
          </div>
        </div>

        <p class="mt-8 text-xs md:text-sm italic text-center text-gray-500 dark:text-gray-400">
          {{ t('landing.roadmap.closing') }}
        </p>
      </UContainer>
    </section>

    <!-- 8. BUILT FOR THE PUBLIC, GOVERNED BY THE PUBLIC -->
    <section
      id="governance"
      class="py-10 sm:py-12 md:py-20 bg-white dark:bg-slate-950"
    >
      <UContainer class="max-w-full md:max-w-3xl mx-auto px-4 lg:px-0">
        <h2 class="text-2xl sm:text-3xl md:text-3xl md:mt-16 md:mb-6 font-semibold tracking-tight text-gray-900 dark:text-slate-50 text-center mb-4">
          {{ t('landing.publicGovernance.title') }}
        </h2>

        <div class="space-y-4 text-base text-slate-600 dark:text-slate-200 leading-relaxed text-center md:text-left">
          <p>
            {{ t('landing.publicGovernance.body1') }}
          </p>
          <p>
            {{ t('landing.publicGovernance.body2') }}
          </p>
          <p>
            {{ t('landing.publicGovernance.body3') }}
          </p>
          <p>
            {{ t('landing.publicGovernance.body4') }}
          </p>
          <p>
            {{ t('landing.publicGovernance.body5') }}
          </p>
        </div>

        <p class="mt-8 text-center text-xs md:text-sm italic text-gray-500 dark:text-gray-400">
          {{ t('landing.publicGovernance.body6') }}
        </p>
      </UContainer>
    </section>

    <!-- 9. FOUNDER / TEAM NOTE -->
    <section class="py-10 sm:py-12 md:py-20 bg-slate-50 dark:bg-slate-900">
      <UContainer class="max-w-full md:max-w-3xl mx-auto px-4 lg:px-0">
        <h2 class="text-2xl sm:text-3xl md:text-3xl md:mt-16 md:mb-6 font-semibold tracking-tight text-gray-900 dark:text-slate-50 mb-4 text-center">
          {{ t('landing.founderNote.title') }}
        </h2>

        <div class="space-y-4 text-base text-slate-600 dark:text-slate-200 leading-relaxed text-center md:text-left">
          <p>
            {{ t('landing.founderNote.body1') }}
          </p>
          <p>
            {{ t('landing.founderNote.body2') }}
          </p>
        </div>
      </UContainer>
    </section>

    <!-- 10. FAQ -->
    <section
      id="faq"
      class="py-10 sm:py-12 md:py-20 bg-white dark:bg-slate-950"
    >
      <UContainer class="max-w-5xl mx-auto px-4">
        <h2 class="text-2xl sm:text-3xl md:text-3xl md:mt-16 md:mb-6 font-semibold tracking-tight mb-6 text-center text-gray-900 dark:text-slate-50">
          {{ t('landing.faq.title') }}
        </h2>

        <div class="space-y-4">
          <div class="w-full rounded-xl bg-white/80 dark:bg-slate-900/50 border border-[#E1E6F0] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] px-4 py-3 md:px-5 md:py-4">
            <h3 class="text-base md:text-lg font-semibold text-gray-900 dark:text-slate-50 mb-1.5">
              {{ t('landing.faq.items.0.question') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.faq.items.0.answer') }}
            </p>
          </div>

          <div class="w-full rounded-xl bg-white/80 dark:bg-slate-900/50 border border-[#E1E6F0] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] px-4 py-3 md:px-5 md:py-4">
            <h3 class="text-base md:text-lg font-semibold text-gray-900 dark:text-slate-50 mb-1.5">
              {{ t('landing.faq.items.1.question') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.faq.items.1.answer') }}
            </p>
          </div>

          <div class="w-full rounded-xl bg-white/80 dark:bg-slate-900/50 border border-[#E1E6F0] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] px-4 py-3 md:px-5 md:py-4">
            <h3 class="text-base md:text-lg font-semibold text-gray-900 dark:text-slate-50 mb-1.5">
              {{ t('landing.faq.items.2.question') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.faq.items.2.answer') }}
            </p>
          </div>

          <div class="w-full rounded-xl bg-white/80 dark:bg-slate-900/50 border border-[#E1E6F0] dark:border-slate-700/60 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] px-4 py-3 md:px-5 md:py-4">
            <h3 class="text-base md:text-lg font-semibold text-gray-900 dark:text-slate-50 mb-1.5">
              {{ t('landing.faq.items.3.question') }}
            </h3>
            <p class="text-base text-slate-600 dark:text-slate-200 leading-relaxed">
              {{ t('landing.faq.items.3.answer') }}
            </p>
          </div>
        </div>

        <p class="mt-10 text-center text-sm text-gray-500 dark:text-slate-400">
          {{ t('landing.faq.closing') }}
        </p>
      </UContainer>
    </section>

    <!-- 11. CTA -->
    <section
      id="cta"
      class="relative overflow-hidden py-10 sm:py-12 md:py-20 bg-slate-50 dark:bg-slate-900"
    >
      <!-- Subtle blueprint background - Light mode -->
      <svg
        class="pointer-events-none absolute inset-0 h-full w-full dark:hidden"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <!-- Very light grid pattern -->
          <pattern
            id="cta-grid-light"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#d7e3f7"
              stroke-width="0.4"
              stroke-opacity="0.05"
            />
          </pattern>
          <!-- Very subtle radial fade -->
          <radialGradient id="cta-fade-light" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stop-color="#F7F9FC" stop-opacity="1" />
            <stop offset="100%" stop-color="#F7F9FC" stop-opacity="0.95" />
          </radialGradient>
        </defs>
        <!-- Grid fill -->
        <rect width="100%" height="100%" fill="url(#cta-grid-light)" />
        <!-- Fading mask -->
        <rect width="100%" height="100%" fill="url(#cta-fade-light)" />
      </svg>
      <!-- Subtle blueprint background - Dark mode -->
      <svg
        class="pointer-events-none absolute inset-0 hidden h-full w-full dark:block"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <!-- Very light grid pattern for dark mode -->
          <pattern
            id="cta-grid-dark"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="#475569"
              stroke-width="0.4"
              stroke-opacity="0.03"
            />
          </pattern>
          <!-- Very subtle radial fade for dark mode -->
          <radialGradient id="cta-fade-dark" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stop-color="#0F172A" stop-opacity="1" />
            <stop offset="100%" stop-color="#0F172A" stop-opacity="0.98" />
          </radialGradient>
        </defs>
        <!-- Grid fill -->
        <rect width="100%" height="100%" fill="url(#cta-grid-dark)" />
        <!-- Fading mask -->
        <rect width="100%" height="100%" fill="url(#cta-fade-dark)" />
      </svg>

      <UContainer class="relative max-w-4xl mx-auto px-4 lg:px-0">
        <UCard class="w-full rounded-2xl border border-[#E1E6F0] dark:border-slate-700/60 bg-white dark:bg-slate-900/50 shadow-sm dark:shadow-[0_1px_3px_0_rgb(0_0_0_/_0.3)] px-6 py-8 md:px-8 md:py-10 text-center">
          <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-slate-50 mb-4">
            {{ t('landing.cta.title') }}
          </h2>

          <p class="text-base text-slate-600 dark:text-slate-200 mb-6 leading-relaxed">
            {{ t('landing.cta.contributeSubtitle') }}
          </p>

          <div class="flex flex-col gap-2 lg:gap-3 lg:flex-row lg:justify-center cta-buttons w-full lg:w-auto">
            <UButton
              size="lg"
              color="primary"
              class="w-full lg:w-auto bg-[color:var(--cp-blue,#4C7FD8)] hover:bg-[color:var(--cp-blue-hover,#3D72C7)] active:bg-[color:var(--cp-blue-hover,#3D72C7)] focus:bg-[color:var(--cp-blue-hover,#3D72C7)] border-transparent"
              to="https://demo.civicpress.io"
              target="_blank"
            >
              {{ t('landing.cta.demo') }}
            </UButton>
            <UButton
              size="lg"
              variant="ghost"
              color="primary"
              class="w-full lg:w-auto border border-[color:var(--cp-blue,#4C7FD8)] text-[color:var(--cp-blue,#4C7FD8)] hover:bg-[color:var(--cp-blue,#4C7FD8)] hover:text-white active:bg-[color:var(--cp-blue,#4C7FD8)] active:text-white focus:bg-[color:var(--cp-blue,#4C7FD8)] focus:text-white"
              to="https://tally.so/r/wAYBvN"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ t('landing.cta.contribute') }}
            </UButton>
          </div>
        </UCard>
      </UContainer>
    </section>
  </div>
</template>

<style scoped>
/* Force center alignment for hero buttons on mobile */
.hero-buttons :deep(button),
.hero-buttons :deep(a) {
  justify-content: center !important;
  text-align: center !important;
}

.hero-buttons :deep(button > span),
.hero-buttons :deep(a > span) {
  text-align: center !important;
  width: 100%;
}

/* Force center alignment for CTA buttons */
.cta-buttons :deep(button),
.cta-buttons :deep(a) {
  justify-content: center !important;
  text-align: center !important;
}

.cta-buttons :deep(button > span),
.cta-buttons :deep(a > span) {
  text-align: center !important;
  width: 100%;
}
</style>
