export default defineNuxtConfig({
  // https://v3.nuxtjs.org/guide/directory-structure/nuxt.config/

  // As of RC12 Nuxt 3 supports Hybrid rendering mode
  // https://v3.nuxtjs.org/guide/concepts/rendering#route-rules
  //   routeRules: {
  //     '/pages/**': { swr: true },
  //     '/posts/**': { static: true },
  //   },
  ssr: true,
  css: [
    {
      src: '~/assets/css/main.css',
      lang: 'postcss',
    },
  ],

  buildModules: [
    // https://pinia.esm.dev
    '@pinia/nuxt',
    // https://vueuse.org/
    '@vueuse/nuxt',
  ],

  modules: [
    '@formkit/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@tailvue/nuxt',
    'nuxt-directus',
    'nuxt-icons',
  ],
  plausible: {
    domain: 'rkcad.com',
  },
  directus: {
    url: 'https://admin.rkcad.com',
  },
  runtimeConfig: {
    public: {
      directusUrl: 'https://admin.rkcad.com',
      plausible: {
        domain: 'rkcad.com',
      },
    },
  },

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['swiper', '@sendgrid/mail'],
  },

  vite: {
    optimizeDeps: {
      include: ['vue', 'pinia'],
    },
  },
})
