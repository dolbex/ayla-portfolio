<template>
  <div class="min-h-screen bg-white">
    <div v-if="project" class="flex flex-col md:flex-row">
      <!-- Sidebar -->
      <div class="md:sticky md:top-0 md:self-start pt-6 pl-4 md:pl-6">
        <ProjectSidebar />
      </div>

      <!-- Main content -->
      <div class="flex-1 px-6 md:px-12 py-8">
        <ScrollReveal>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase mb-4">
            {{ project.title }}
          </h1>
          <p class="text-gray-600 leading-relaxed max-w-3xl mb-10">
            {{ project.description }}
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <ProjectGallery
            :images="project.images"
            :title="project.title"
            :gallery-bg="project.galleryBg"
            :gallery-tint="project.galleryTint"
          />
        </ScrollReveal>
      </div>
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
