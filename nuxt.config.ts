export default defineNuxtConfig({
	ssr: true,
	app: {
		pageTransition: {
			name: 'page',
			mode: 'out-in',
		},
		head: {
			link: [
				{
					rel: 'preconnect',
					href: 'https://admin.rkcad.com',
				},
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '57x57',
					href: '/images/icons/apple-icon-57x57.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '60x60',
					href: '/images/icons/apple-icon-60x60.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '72x72',
					href: '/images/icons/apple-icon-72x72.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '76x76',
					href: '/images/icons/apple-icon-76x76.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '114x114',
					href: '/images/icons/apple-icon-114x114.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '120x120',
					href: '/images/icons/apple-icon-120x120.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '144x144',
					href: '/images/icons/apple-icon-144x144.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '152x152',
					href: '/images/icons/apple-icon-152x152.png',
				},
				{
					rel: 'apple-touch-icon',
					sizes: '180x180',
					href: '/images/icons/apple-icon-180x180.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '192x192',
					href: '/images/icons/android-icon-192x192.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/images/icons/favicon-32x32.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '96x96',
					href: '/icons/favicon-96x96.png',
				},
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '16x16',
					href: '/images/icons/favicon-16x16.png',
				},
				{
					rel: 'manifest',
					href: '/manifest.json',
				},
			],
		},
	},

	css: ['~/assets/css/main.css'],

	imports: {
		dirs: ['stores'],
	},

	modules: [
		'@nuxt/devtools',
		'@nuxt/image',
		'@nuxt/ui',
		'@vueuse/nuxt',
		'@nuxtjs/plausible',
		'@nuxtjs/tailwindcss',
		// '@nuxtjs/seo',
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
		'nuxt-directus-next',
		'nuxt-icon',
	],

	devtools: {
		enabled: true,
		vscode: {},
	},

	plausible: {
		domain: 'rkcad.com',
	},

	directus: {
		url: 'https://admin.rkcad.com',
		staticToken: '_TPaidTNn0j4p2GtUCUncNdqW8R8o11n',
	},

	runtimeConfig: {
		public: {
			assetsUrl: process.env.DIRECTUS_ASSETS_URL || 'https://admin.rkcad.com/assets/',
			websocketUrl: process.env.DIRECTUS_WEBSOCKET_URL || 'wss://admin.rkcad.com/websocket',
			staticToken: process.env.DIRECTUS_SERVER_TOKEN || '_TPaidTNn0j4p2GtUCUncNdqW8R8o11n',
			adminUrl: process.env.DIRECTUS_URL || 'https://admin.rkcad.com',
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

	ui: {
		icons: ['heroicons'],
	},

	image: {
		provider: 'directus',
		directus: {
			baseURL: `https://admin.rkcad.com/assets/`,
		},
	},

	build: {
		transpile: ['swiper', 'gsap'],
	},

	vite: {
		optimizeDeps: {
			include: ['vue', 'pinia'],
		},
	},
})
