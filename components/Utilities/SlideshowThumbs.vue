<script setup>
import { register } from 'swiper/element/bundle'

register()

const props = defineProps({
	title: {
		type: String,
		default: '',
	},
	slides: {
		type: Array,
		default: () => {
			return []
		},
	},
})

const images = computed(() => {
	return props.slides.filter((item) => {
		return item.directus_files_id.id
	})
})

const imageUrl = 'https://admin.rkcad.com/assets/'
</script>
<template>
	<swiper-container
		style="
			--swiper-navigation-color: var(--grey);
			--swiper-pagination-color: var(--blue);
			--swiper-pagination-bullet-width: 15px;
			--swiper-pagination-bullet-height: 4px;
			--swiper-pagination-bullet-border-radius: 3px;
			--swiper-pagination-bottom: 4px;
		"
		class="z-50 gallerySwiper"
		thumbs-swiper=".thumbSwiper"
		:loop="true"
		space-between="10"
		:slides-per-view="1"
		:pagination="{
			enabled: true,
			dynamicBullets: true,
			clickable: true,
		}"
		effect="creative"
		:creativeEffect="{
			prev: {
				scale: 0,
				opacity: 0.6,
				translate: ['-20%', 0, -1],
			},
			next: {
				scale: 0.7,
				opacity: 1,
				translate: ['100%', 0, 0],
			},
		}"
	>
		<swiper-slide v-for="(slide, index) in images" :key="index" class="swiper-slide">
			<NuxtImg
				v-if="slide.directus_files_id.id"
				format="webp"
				loading="lazy"
				:title="'RKC Project: ' + title + ' Image ' + (index + 1)"
				:srcset="
					imageUrl +
					slide.directus_files_id.id +
					'?key=small 400w, ' +
					imageUrl +
					slide.directus_files_id.id +
					'?key=medium 1024w, ' +
					imageUrl +
					slide.directus_files_id.id +
					'?key=large 1920w'
				"
				:src="imageUrl + slide.directus_files_id.id + '?key=large'"
				:alt="title + ' Image ' + (index + 1)"
				class="shadow-lg"
			/>
		</swiper-slide>
	</swiper-container>

	<swiper-container
		class="thumbSwiper"
		:loop="false"
		slides-per-view="auto"
		:free-mode="true"
		:watch-slides-progress="true"
		:center-insufficient-slides="true"
		:navigation="{
			enabled: true,
			nextEl: '#slideshowSwiperThumbs__next-btn',
			prevEl: '#slideshowSwiperThumbs__prev-btn',
		}"
	>
		<swiper-slide
			v-for="(slide, index) in images"
			:key="index"
			class="w-auto flex items-center justify-center swiper-slide"
		>
			<NuxtImg
				v-if="slide.directus_files_id.id"
				format="webp"
				loading="lazy"
				:title="title + ' - Rosen Kelly Conway Project'"
				:srcset="
					imageUrl +
					slide.directus_files_id.id +
					'?key=small 400w, ' +
					imageUrl +
					slide.directus_files_id.id +
					'?key=small 1024w, ' +
					imageUrl +
					slide.directus_files_id.id +
					'?key=small 1920w'
				"
				:src="imageUrl + slide.directus_files_id.id + '?key=small'"
				:alt="title + ' Image ' + (index + 1)"
			/>
		</swiper-slide>
	</swiper-container>

	<div
		id="slideshowSwiperThumbs__prev-btn"
		class="flex items-center justify-center flex-row cursor-pointer px-2 md:px-4 py-2 slideshowSwiperThumbs__nav"
	>
		<Icon name="ArrowLeft" class="mr-2 arrow-left-icon" />
	</div>
	<div
		id="slideshowSwiperThumbs__next-btn"
		class="flex items-center justify-center flex-row cursor-pointer px-2 md:px-4 py-2 slideshowSwiperThumbs__nav"
	>
		<Icon name="ArrowRight" class="ml-2 arrow-right-icon" />
	</div>
</template>

<style>
.gallerySwiper {
	height: calc(100% - 110px);
	@media (min-width: theme('screens.lg')) {
		background: none;
	}
	.swiper-slide {
		align-items: center;
		justify-content: center;
		display: flex;
		position: relative;

		img {
			max-height: 100%;
			max-width: 100%;
			width: auto;
		}
	}
}

.thumbSwiper {
	height: 100px;
	margin: 10px 0px;
	.swiper-slide {
		opacity: 0.6;
		width: auto;
		height: 100%;
		@apply px-2 cursor-pointer transition-all duration-300 ease-in-out;
		img {
			height: 100px;
			width: auto;
			@apply transition-all duration-300 ease-in-out;
		}
		&:hover {
			opacity: 1;
			img {
				transform: scale(1.1);
			}
		}
	}

	.swiper-slide-thumb-active {
		opacity: 1;
	}
}

.slideshowSwiperThumbs__nav {
	bottom: 20px;
	z-index: 10;
	height: 100px;
	background: rgba(255, 255, 255, 0.75);
	transition: all 0.4s var(--curve);
	@apply absolute;

	.icon {
		height: 50px;
		fill: black;
		transition: 0.4s var(--curve);

		height: 50px;
		display: inline-block !important;

		path {
			stroke-width: 5px;
			stroke: var(--grey) !important;
		}
	}
}

#slideshowSwiperThumbs__prev-btn {
	left: 0px;
}

#slideshowSwiperThumbs__next-btn {
	right: 0px;
}

.swiper-button-disabled {
	opacity: 0.2;
	cursor: not-allowed;
}
</style>
