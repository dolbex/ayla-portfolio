<template>
  <section class="min-h-screen bg-sage flex flex-col items-center justify-center px-6 relative">
    <div class="max-w-7xl mx-auto w-full flex items-center justify-center gap-4 md:gap-8 mb-6">
      <!-- Left text -->
      <h1 class="hero-name">
        A Y L A
      </h1>

      <!-- Center slideshow -->
      <div class="w-48 md:w-64 lg:w-72 shrink-0 shadow-2xl relative aspect-[3/4] overflow-hidden">
        <Transition name="hero-slide" mode="out-in">
          <NuxtImg
            :key="currentImage"
            :src="currentImage"
            alt="Portfolio sample"
            width="300"
            height="400"
            class="absolute inset-0 w-full h-full object-cover"
            placeholder
          />
        </Transition>
      </div>

      <!-- Right text -->
      <h1 class="hero-name">
        G R A Y
      </h1>
    </div>

    <p class="text-white/80 text-lg md:text-xl tracking-widest mb-8 italic">
      Graphic Designer
    </p>

    <div class="flex flex-wrap gap-4 justify-center">
      <NuxtLink
        to="/work"
        class="hero-cta"
      >
        VIEW MY WORK
      </NuxtLink>
      <NuxtLink
        to="/about"
        class="hero-cta"
      >
        GET TO KNOW ME
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { projects } = useProjects()

const showcaseImages = projects.map(p => p.heroImage)
const currentIndex = ref(0)
const currentImage = computed(() => showcaseImages[currentIndex.value])

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % showcaseImages.length
  }, 3500)
})

onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
@reference "~/assets/css/main.css";

.hero-name {
  @apply text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.3em] md:tracking-[0.4em] text-center whitespace-nowrap;
  font-family: var(--font-family-heading);
}

.hero-cta {
  @apply text-white text-xs md:text-sm tracking-[0.2em] uppercase border border-white/60 px-6 py-3 hover:bg-white/10 transition-colors;
}

.hero-slide-enter-active,
.hero-slide-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.hero-slide-enter-from {
  opacity: 0;
  transform: scale(1.05);
}

.hero-slide-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
