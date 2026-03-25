<template>
  <div class="min-h-screen bg-sage-light">
    <!-- Back link -->
    <div class="px-8 pt-6">
      <NuxtLink to="/" class="text-white/70 hover:text-white text-sm tracking-wider uppercase transition-colors">
        &larr; Back to Home
      </NuxtLink>
    </div>

    <!-- Banner -->
    <ScrollReveal>
      <div class="mx-8 mt-8 mb-10">
        <div class="bg-brown py-10 px-8">
          <h1 class="text-white text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider uppercase text-center" style="font-family: var(--font-family-heading);">
            Bringing Concepts to Life
          </h1>
        </div>
      </div>
    </ScrollReveal>

    <!-- Carousel -->
    <div class="px-4 md:px-12 pb-16">
      <ProjectCarousel />
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Work — Ayla Gray',
  description: 'Explore the design portfolio of Ayla Gray, featuring branding, editorial design, packaging, and promotional materials.',
  ogTitle: 'Work — Ayla Gray',
  ogDescription: 'Explore the design portfolio of Ayla Gray.',
  ogImage: '/images/yamaha/rollup.jpg',
})
</script>
