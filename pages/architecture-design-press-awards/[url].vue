<script setup>
definePageMeta({
	middleware: ['page'],
})

const { params } = useRoute()
const { readItems } = useDirectusItems()

const data = await readItems('articles', {
	filter: {
		url: {
			_eq: params.url,
		},
	},
	fields: [
		'category,title,description,link,url,project.title,project.url,images.directus_files_id.id,images.directus_files_id.description,images.directus_files_id.tags',
	],
})

const article = ref(data[0])
const category = ref('')
const title = ref('')
const description = ref('')
const pageImage = ref('')

title.value = article.value.title + ' ' + category.value + ' | Rosen Kelly Conway Architecture & Design'

description.value =
	article.value.title +
	': ' +
	category.value +
	' for Rosen Kelly Conway Architecture & Design, a full-service architecture and interior design firm based in Summit, NJ.'

if (article.value.images.length) {
	pageImage.value = 'https://admin.rkcad.com/assets/' + article.value.images[0].directus_files_id.id + '?key=large'
} else {
	pageImage.value = 'https://rkcad.com/images/rkcad-logo.png'
}

useHead({
	titleTemplate: title.value,
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: description.value,
		},
		{
			hid: 'og:url',
			property: 'og:url',
			content: 'https://rkcad.com/architecture-design-press-awards/' + params.url,
		},
		{
			hid: 'og:image',
			property: 'og:image',
			content: pageImage.value,
		},
		{
			hid: 'og:title',
			property: 'og:title',
			content: title.value,
		},
		{
			hid: 'og:description',
			property: 'og:description',
			content: description.value,
		},
	],
})

const isImageLoaded = ref(false)

onMounted(() => {
	if (article.value.images.length > 0) {
		const image = new Image()

		image.src = 'https://admin.rkcad.com/assets/' + article.value.images[0].directus_files_id.id + 'key=xlarge'

		image.onload = () => {
			isImageLoaded.value = true
		}
	} else {
		isImageLoaded.value = true
	}
})
</script>
<template>
	<div
		v-if="isImageLoaded"
		class="relative w-full flex items-center justify-center flex-col min-h-screen mx-auto article"
	>
		<div class="w-full relative article__slideshow">
			<UtilitiesSlideshowThumbs
				v-if="article.images.length"
				:slides="article.images"
				:title="'RKC ' + article.category + ': ' + article.title"
			/>
		</div>
		<div
			class="w-full flex items-start flex-col justify-between uppercase tracking-wide mt-20 max-w-7xl article__header mx-w-7xl mt-10 lg:mt-14"
		>
			<h1 class="relative">
				{{ article.title }}
				<span class="hidden">
					<span>{{ article.category }}</span>
					Article for Rosen Kelly Conway
				</span>
			</h1>
			<a v-if="article.link" :href="article.link" target="_blank">
				View Article
				<Icon name="ArrowRight" class="ml-1 arrow-right-icon" />
			</a>
			<nuxt-link v-if="article.project" :to="'/interior-design-architecture-portfolio/' + article.project.url">
				View Project
				<Icon name="ArrowRight" class="ml-1 arrow-right-icon" />
			</nuxt-link>
		</div>
	</div>
	<LayoutLoader v-else />
</template>

<style>
.article {
	margin-top: 65px;
	padding-left: 15px;
	padding-right: 15px;
	@apply max-w-7xl;

	@media (min-width: theme('screens.sm')) {
		padding-left: 35px;
		padding-right: 35px;
	}

	&__slideshow {
		transition: all 0.5s var(--curve);
		height: calc(100vh - 167px);
		@apply max-w-7xl;

		@media (min-width: theme('screens.lg')) {
		}

		.swiper {
			@apply py-4;
		}

		.swiper-pagination {
			font-size: 14px;
			line-height: 14px;
			letter-spacing: 0.2em;
		}
	}

	&__header {
		/* max-width: var(--max-width); */
		@apply max-w-8xl;

		h1 {
			font-size: 30px;
			letter-spacing: 0.1em;
			line-height: 1em;
			@apply mb-4;
		}

		a {
			font-size: 0.75rem;
			line-height: 1rem;
			margin-top: 10px;
			font-weight: 900;
			@apply inline-block tracking-wider my-4;

			.icon {
				height: 12px;
				fill: black;
				transition: 0.4s var(--curve);
				display: inline-block !important;
				transform: translateX(0px);

				margin-top: -2px;
				height: 12px;
				display: inline-block !important;

				path {
					stroke-width: 10px;
					stroke: var(--blue) !important;
				}
			}
		}

		/* &-category {
      height: 10px;
      font-size: 9px;
      line-height: 10px;
      margin-top: 5px;

      @media (min-width: theme('screens.lg')) {
        margin-bottom: -10px;
      }
    } */
	}

	/* &__content {
    @apply max-w-8xl;

  } */
}
</style>
