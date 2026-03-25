<template>
  <nav class="sidebar">
    <NuxtLink to="/" class="sidebar-link">Start Home</NuxtLink>
    <NuxtLink to="/work" class="sidebar-link">Project Home</NuxtLink>
    <NuxtLink to="/about" class="sidebar-link">BIO</NuxtLink>
    <NuxtLink to="/contact" class="sidebar-link">Contact</NuxtLink>
  </nav>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.sidebar {
  @apply flex flex-col gap-1 shrink-0;
}

.sidebar-link {
  @apply block bg-sidebar-green text-white text-sm font-semibold tracking-wide px-5 py-2.5 hover:brightness-110 transition-all;
}
</style>
