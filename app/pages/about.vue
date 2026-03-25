<template>
  <div class="min-h-screen bg-sage-light">
    <!-- Back link -->
    <div class="px-8 pt-6">
      <NuxtLink to="/" class="text-white/70 hover:text-white text-sm tracking-wider uppercase transition-colors">
        &larr; Back to Home
      </NuxtLink>
    </div>

    <!-- Content card -->
    <ScrollReveal>
      <div class="max-w-5xl mx-auto mt-8 mb-16 mx-6 md:mx-auto">
        <div class="bg-white border-4 border-sage-dark/20 p-8 md:p-12">
          <div class="flex flex-col md:flex-row gap-8 md:gap-12">
            <!-- Text -->
            <div class="flex-1">
              <h1 class="text-4xl md:text-5xl font-bold tracking-wide uppercase mb-2">
                About Me
              </h1>
              <p class="text-sage-dark italic text-lg mb-6">My name is Ayla Gray</p>

              <div class="text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  Hi! I'm a graphic designer with a Bachelor's in Graphic Communications
                  and a strong background in Adobe Creative Suite. I love helping clients
                  bring their ideas to life — whether the goal is to build a visual identity,
                  design compelling visuals, or communicate a clear message. Design is
                  more than just aesthetics to me — it's about listening, understanding, and
                  creating meaningful visual experiences that align with each client's
                  unique identity and needs.
                </p>
              </div>

              <a
                href="/resume.pdf"
                download
                class="inline-block bg-sage-dark text-white text-sm tracking-wider uppercase px-8 py-3 hover:bg-sage transition-colors"
              >
                Resume
              </a>
            </div>

            <!-- Headshot -->
            <div class="md:w-72 lg:w-80 shrink-0">
              <NuxtImg
                src="/images/headshot.jpg"
                alt="Ayla Gray"
                width="400"
                height="500"
                class="w-full h-auto object-cover"
                placeholder
              />
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About — Ayla Gray',
  description: 'Learn about Ayla Gray, a graphic designer with a Bachelor\'s in Graphic Communications and expertise in Adobe Creative Suite.',
  ogTitle: 'About — Ayla Gray',
  ogDescription: 'Learn about Ayla Gray, a graphic designer.',
  ogImage: '/images/headshot.jpg',
})
</script>
