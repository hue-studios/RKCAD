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
    "@vite-pwa/nuxt",
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
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt Vite PWA',
      short_name: 'NuxtVitePWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
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

  devtools: true,
  // plugins: ['~/plugins/socialShare.ts']
})
