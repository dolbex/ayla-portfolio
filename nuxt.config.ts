import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/image'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    quality: 80,
  },

  ssr: true,

  nitro: {
    preset: 'vercel-static',
    prerender: {
      routes: [
        '/work/yamaha',
        '/work/beer-branding',
        '/work/magazine',
        '/work/seltzer-poster',
        '/work/travel-booklet',
        '/work/voix-branding',
      ],
    },
  },

  routeRules: {
    '/**': { prerender: true },
  },
})
