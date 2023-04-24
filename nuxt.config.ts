export default defineNuxtConfig({
  ssr: true,
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
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
