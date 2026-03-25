<template>
  <div class="min-h-screen bg-sage flex flex-col">
    <!-- Back link -->
    <div class="px-8 pt-6">
      <NuxtLink to="/" class="text-white/70 hover:text-white text-sm tracking-wider uppercase transition-colors">
        &larr; Back to Home
      </NuxtLink>
    </div>

    <div class="flex-1 flex items-center justify-center px-6">
      <div class="text-center mb-8">
        <h1 class="text-white text-4xl md:text-5xl font-bold tracking-wider uppercase mb-4" style="font-family: var(--font-family-heading);">
          Get in Touch
        </h1>
        <p class="text-white/70 max-w-md mx-auto">
          Interested in working together? Reach out through any of the channels below.
        </p>
      </div>
    </div>

    <ContactFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact — Ayla Gray',
  description: 'Get in touch with Ayla Gray for graphic design inquiries.',
  ogTitle: 'Contact — Ayla Gray',
  ogDescription: 'Get in touch with Ayla Gray for graphic design inquiries.',
})
</script>
