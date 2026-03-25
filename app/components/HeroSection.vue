<template>
  <section class="min-h-screen bg-sage flex flex-col items-center justify-center px-6 relative">
    <div class="flex items-center justify-center gap-4 md:gap-8 mb-6 w-full max-w-5xl">
      <!-- Left text -->
      <h1 class="hero-name">
        A Y L A
      </h1>

      <!-- Center image -->
      <div class="w-48 md:w-64 lg:w-72 shrink-0 shadow-2xl">
        <NuxtImg
          src="/images/yamaha/rollup.jpg"
          alt="Portfolio sample"
          width="300"
          height="400"
          class="w-full h-auto"
          placeholder
        />
      </div>

      <!-- Right text -->
      <h1 class="hero-name">
        G R A Y
      </h1>
    </div>

    <p class="text-white/80 text-lg md:text-xl tracking-widest mb-8 italic font-serif">
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

<style scoped>
@reference "~/assets/css/main.css";

.hero-name {
  @apply text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-[0.3em] md:tracking-[0.4em] text-center whitespace-nowrap;
  font-family: var(--font-family-heading);
}

.hero-cta {
  @apply text-white text-xs md:text-sm tracking-[0.2em] uppercase border border-white/60 px-6 py-3 hover:bg-white/10 transition-colors;
}
</style>
