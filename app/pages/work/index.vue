<template>
  <div class="min-h-screen bg-sage-light">
    <div class="max-w-7xl mx-auto">
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

      <!-- Project Stack -->
      <div class="px-4 md:px-12 pb-16 space-y-10">
      <ScrollReveal v-for="(project, index) in projects" :key="project.slug">
        <NuxtLink :to="`/work/${project.slug}`" class="project-card group block">
          <div class="flex flex-col md:flex-row items-center gap-8" :class="{ 'md:flex-row-reverse': index % 2 === 1 }">
            <!-- Image -->
            <div class="w-full md:w-1/2 shrink-0">
              <div class="relative overflow-hidden aspect-[4/3]">
                <NuxtImg
                  :src="project.heroImage"
                  :alt="project.title"
                  width="600"
                  height="450"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder
                />
                <div class="absolute inset-0 bg-mauve/30 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            </div>

            <!-- Info -->
            <div class="text-white md:w-1/2">
              <p class="text-6xl font-bold opacity-60 mb-2">{{ project.number }}</p>
              <h3 class="text-xl font-bold tracking-wide uppercase mb-3">{{ project.title }}</h3>
              <p class="text-sm leading-relaxed opacity-90 mb-6">{{ project.description }}</p>
              <span class="ghost-btn">See Project</span>
            </div>
          </div>
        </NuxtLink>
      </ScrollReveal>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { projects } = useProjects()

useSeoMeta({
  title: 'Work — Ayla Gray',
  description: 'Explore the design portfolio of Ayla Gray, featuring branding, editorial design, packaging, and promotional materials.',
  ogTitle: 'Work — Ayla Gray',
  ogDescription: 'Explore the design portfolio of Ayla Gray.',
  ogImage: '/images/yamaha/rollup.jpg',
})
</script>

<style scoped>
@reference "~/assets/css/main.css";

.project-card {
  @apply p-6 md:p-8 rounded-sm transition-all duration-300;
  background-color: rgba(74, 86, 64, 0.3);
}

.project-card:hover {
  background-color: rgba(74, 86, 64, 0.5);
}

.ghost-btn {
  @apply inline-block text-xs tracking-[0.2em] uppercase border border-white/60 px-6 py-3 text-white/90 transition-colors;
}

.project-card:hover .ghost-btn {
  @apply bg-white/10;
}
</style>
