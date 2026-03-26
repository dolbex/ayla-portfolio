<template>
  <div class="min-h-screen bg-white">
    <div v-if="project">
      <!-- Top section: sidebar + title + description -->
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row">
        <!-- Sidebar -->
        <div class="md:sticky md:top-0 md:self-start pt-8 pl-6">
          <ProjectSidebar />
        </div>

        <!-- Title + description -->
        <div class="flex-1 px-6 md:px-10 pt-8 pb-10">
          <ScrollReveal>
            <h1 class="project-title">
              {{ project.title }}
            </h1>
            <p class="text-gray-600 leading-relaxed max-w-2xl mt-4 text-[15px]">
              {{ project.description }}
            </p>
          </ScrollReveal>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-200" />

      <!-- Gallery section — full width, centered content -->
      <ScrollReveal>
        
            <ProjectGallery
              :images="project.images"
              :title="project.title"
              :gallery-bg="project.galleryBg"
              :gallery-tint="project.galleryTint"
            />
        
      </ScrollReveal>
    </div>

    <div v-else class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h1 class="text-2xl font-bold mb-4">Project not found</h1>
        <NuxtLink to="/work" class="text-sidebar-green hover:underline">
          &larr; Back to projects
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { getProject } = useProjects()

const project = computed(() => getProject(route.params.slug as string))

if (!project.value) {
  throw createError({ statusCode: 404, message: 'Project not found' })
}

useSeoMeta({
  title: () => project.value ? `${project.value.title} — Ayla Gray` : 'Project — Ayla Gray',
  description: () => project.value?.description ?? '',
  ogTitle: () => project.value ? `${project.value.title} — Ayla Gray` : 'Project — Ayla Gray',
  ogDescription: () => project.value?.description ?? '',
  ogImage: () => project.value?.heroImage ?? '/images/headshot.jpg',
})
</script>

<style scoped>
@reference "~/assets/css/main.css";

.project-title {
  @apply text-4xl md:text-5xl lg:text-[120px] font-bold tracking-wider uppercase text-green-900;
  font-family: var(--font-family-heading);
  line-height: 1.1;
}
</style>
