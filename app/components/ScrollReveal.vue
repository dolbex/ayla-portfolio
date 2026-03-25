<template>
  <div ref="el" :class="revealed ? 'scroll-reveal revealed' : 'scroll-reveal'">
    <slot />
  </div>
</template>

<script setup lang="ts">
const el = ref<HTMLElement>()
const revealed = ref(false)

onMounted(() => {
  if (!el.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        revealed.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.15 },
  )

  observer.observe(el.value)

  onUnmounted(() => observer.disconnect())
})
</script>

<style scoped>
@reference "~/assets/css/main.css";

.scroll-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
</style>
