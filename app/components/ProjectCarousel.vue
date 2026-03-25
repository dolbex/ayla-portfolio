<template>
  <div class="relative">
    <div class="flex items-center gap-6">
      <!-- Left arrow -->
      <button
        class="carousel-arrow"
        aria-label="Previous project"
        @click="prev"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>

      <!-- Slide content -->
      <div class="flex-1 flex flex-col md:flex-row items-center gap-8 py-6">
        <NuxtLink :to="`/work/${currentProject.slug}`" class="block w-full md:w-1/2 shrink-0">
          <div class="relative overflow-hidden aspect-[4/3]">
            <NuxtImg
              :src="currentProject.heroImage"
              :alt="currentProject.title"
              width="600"
              height="450"
              class="w-full h-full object-cover"
              placeholder
            />
            <div class="absolute inset-0 bg-mauve/30 hover:bg-transparent transition-colors duration-300" />
          </div>
        </NuxtLink>

        <div class="text-white md:w-1/2">
          <p class="text-6xl font-bold opacity-60 mb-2">{{ currentProject.number }}</p>
          <h3 class="text-xl font-bold tracking-wide uppercase mb-3">{{ currentProject.title }}</h3>
          <p class="text-sm leading-relaxed opacity-90">{{ currentProject.description }}</p>
        </div>
      </div>

      <!-- Right arrow -->
      <button
        class="carousel-arrow"
        aria-label="Next project"
        @click="next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { projects } = useProjects()
const currentIndex = ref(0)

const currentProject = computed(() => projects[currentIndex.value])

function prev() {
  currentIndex.value = currentIndex.value === 0
    ? projects.length - 1
    : currentIndex.value - 1
}

function next() {
  currentIndex.value = currentIndex.value === projects.length - 1
    ? 0
    : currentIndex.value + 1
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
@reference "~/assets/css/main.css";

.carousel-arrow {
  @apply text-white/70 hover:text-white p-2 rounded-sm transition-all shrink-0;
  background-color: rgba(74, 86, 64, 0.5);
}

.carousel-arrow:hover {
  background-color: rgba(74, 86, 64, 0.8);
}
</style>
