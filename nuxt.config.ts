// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  // app: {
  //   baseURL: '/university_projectNuxt/'
  // },
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['nuxt-swiper'],
})