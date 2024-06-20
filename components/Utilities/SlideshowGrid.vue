<script setup>
import { register } from 'swiper/element/bundle'

register()

import { removeFirst } from '~~/utils/strings'

const props = defineProps({
	slides: {
		type: Array,
		default: () => {
			return []
		},
	},
	class: {
		type: String,
		default: '',
	},
})

const imageUrl = 'https://admin.rkcad.com/assets/'

const filteredSlides = computed(() => {
	return props.slides.filter((item) => item.url)
})
</script>
<template>
	<div class="w-full relative">
		<swiper-container
			:observer="true"
			:observe-parents="true"
			:space-between="35"
			:breakpoints="{
				300: { slidesPerView: 1, grid: { rows: 1, fill: 'row' } },
				640: { slidesPerView: 2, grid: { rows: 1, fill: 'row' } },
				768: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					grid: { rows: 2, fill: 'row' },
				},
				1024: {
					slidesPerView: 4,
					slidesPerGroup: 4,
					grid: { rows: 2, fill: 'row' },
				},
			}"
			class="slideshowSwiperGrid"
		>
			<swiper-slide
				v-for="(slide, index) in filteredSlides"
				:key="index"
				class="w-full flex flex-col items-end justify-end overflow-hidden shadow-xl"
			>
				<nuxt-link :to="'/interior-design-architecture-portfolio/' + slide.url" class="work__card">
					<div
						v-if="slide.images.length > 0"
						class="absolute w-full h-full bg-cover bg-center bg-no-repeat work__card-image"
						:style="'background-image: url(' + imageUrl + slide.images[0].directus_files_id.id + '?key=medium)'"
					></div>
					<div v-else class="absolute w-full h-full flex items-center justify-center work__card-image">
						<LayoutRkc class="rkc-icon" />
					</div>
					<h2 class="work__card-title">{{ removeFirst(slide.title) }}</h2>
					<h5 v-if="slide.location" class="hidden">
						{{ slide.location }}
						<span v-if="slide.category.length">
							<span v-for="(category, index) in slide.category" :key="index">{{ category }}</span>
						</span>
						Project
					</h5>
				</nuxt-link>
			</swiper-slide>
		</swiper-container>
	</div>
</template>

<style>
.slideshowSwiperGrid {
	/* height: 360px;*/

	@media (min-width: theme('screens.md')) {
		height: 650px;
	}

	@media (min-width: theme('screens.xl')) {
		height: 740px;
	}

	/* @media (min-width: theme('screens.2xl')) {
		height: 840px;
	} */

	.swiper-slide {
		height: 350px;

		/* @media (min-width: theme('screens.md')) {
      height: 350px;
    } */
		@media (min-width: theme('screens.md')) {
			height: 310px;
		}

		@media (min-width: theme('screens.lg')) {
			/* height: 310px; */
		}

		/* @media (min-width: theme('screens.xl')) {
      height: 350px;
    }

    @media (min-width: theme('screens.2xl')) {
      height: 400px;
    } */
	}
}

.work__card {
	height: 350px;
	width: 100%;

	&-image {
		height: 350px;
		background-color: rgba(167, 169, 172, 0.45);
		transform: scale(1.1);
		transition: all 0.5s var(--curve);

		/* margin: 45px; */
		@media (min-width: theme('screens.md')) {
			/* height: 300px; */
		}

		@media (min-width: theme('screens.lg')) {
			/* height: 325px; */
		}

		/* @media (min-width: theme('screens.xl')) {
      height: 350px;
    }

    @media (min-width: theme('screens.2xl')) {
      height: 400px;
    } */

		svg {
			margin: 0 20px;
			fill: rgba(255, 255, 255, 0.5);
		}
	}

	&-title {
		bottom: 20px;
		left: 0px;
		padding-left: 20px;
		padding-right: 20px;
		color: var(--white);
		line-height: 16px;
		font-size: 14px;
		font-weight: 900 !important;
		opacity: 0;
		transform: translateY(20px);
		transition: all 0.5s var(--curve);
		@apply w-full z-10 absolute uppercase tracking-wider font-body;
	}
}

.work__card:hover > .work__card-image {
	transform: scale(1.2);
	background-color: rgba(167, 169, 172, 1);
}

.work__card:hover > .work__card-title {
	opacity: 1;
	transform: translateY(0px);
}
</style>
