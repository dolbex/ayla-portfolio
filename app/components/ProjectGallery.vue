<template>
 <div :style="{ backgroundColor: galleryBg }"> 
  <div class="max-w-7xl mx-auto px-6">
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-5 p-5"
      
    >
      <div
        v-for="(image, index) in images"
        :key="image"
        class="relative overflow-hidden cursor-pointer group"
        @click="openLightbox(index)"
      >
        <NuxtImg
          :src="image"
          :alt="`${title} - Image ${index + 1}`"
          width="600"
          height="450"
          class="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          placeholder
        />
        <div
          class="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
          :style="{ backgroundColor: galleryTint }"
        />
      </div>
    </div>

    <ImageLightbox
      :images="images"
      :is-open="lightboxOpen"
      :start-index="lightboxIndex"
      @close="lightboxOpen = false"
    />
  </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  images: string[]
  title: string
  galleryBg: string
  galleryTint: string
}>()

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

function openLightbox(index: number) {
  lightboxIndex.value = index
  lightboxOpen.value = true
}
</script>
