<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        @click.self="close"
        @keydown.escape="close"
        @keydown.left="prev"
        @keydown.right="next"
        tabindex="0"
        ref="lightboxEl"
      >
        <!-- Close button -->
        <button
          class="absolute top-4 right-4 text-white/70 hover:text-white z-10"
          aria-label="Close lightbox"
          @click="close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Previous -->
        <button
          v-if="images.length > 1"
          class="absolute left-4 text-white/70 hover:text-white z-10"
          aria-label="Previous image"
          @click="prev"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        <!-- Image -->
        <img
          :src="images[currentIndex]"
          :alt="`Image ${currentIndex + 1}`"
          class="max-w-[90vw] max-h-[85vh] object-contain"
        />

        <!-- Next -->
        <button
          v-if="images.length > 1"
          class="absolute right-4 text-white/70 hover:text-white z-10"
          aria-label="Next image"
          @click="next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-10">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <!-- Counter -->
        <div class="absolute bottom-4 text-white/60 text-sm">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[]
  isOpen: boolean
  startIndex?: number
}>()

const emit = defineEmits<{
  close: []
}>()

const lightboxEl = ref<HTMLElement>()
const currentIndex = ref(0)

watch(() => props.isOpen, (open) => {
  if (open) {
    currentIndex.value = props.startIndex ?? 0
    nextTick(() => lightboxEl.value?.focus())
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

function close() {
  emit('close')
}

function prev() {
  currentIndex.value = currentIndex.value === 0
    ? props.images.length - 1
    : currentIndex.value - 1
}

function next() {
  currentIndex.value = currentIndex.value === props.images.length - 1
    ? 0
    : currentIndex.value + 1
}
</script>

<style scoped>
@reference "~/assets/css/main.css";

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.25s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
