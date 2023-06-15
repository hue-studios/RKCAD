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

  imports: {
    dirs: ['stores'],
  },

  buildModules: ['@vueuse/nuxt'],

  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    [
      '@vee-validate/nuxt',
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: 'VeeForm',
          Field: 'VeeField',
          ErrorMessage: 'VeeErrorMessage',
        },
      },
    ],
    
    'nuxt-directus',
    'nuxt-icons',
  ],
  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {
      
    },
    // ...other options
  },
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

  devtools: true
})
