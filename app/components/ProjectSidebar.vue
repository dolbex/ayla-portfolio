<template>
  <nav class="sidebar">
    <NuxtLink to="/" class="sidebar-link">Home</NuxtLink>
    <NuxtLink to="/work" class="sidebar-link">Projects</NuxtLink>
    <NuxtLink to="/about" class="sidebar-link">BIO</NuxtLink>
    <NuxtLink to="/contact" class="sidebar-link">Contact</NuxtLink>
  </nav>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.sidebar {
  @apply flex flex-col gap-0 shrink-0;
  width: 160px;
}

.sidebar-link {
  @apply block bg-sidebar-green text-white text-base font-semibold tracking-wide px-5 py-4 hover:brightness-110 transition-all border-b border-white/10;
}
</style>
