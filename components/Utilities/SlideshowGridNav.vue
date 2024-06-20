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
const nextBtn = `slideshowSwiperGrid__next-btn${props.class}`
const prevBtn = `slideshowSwiperGrid__prev-btn${props.class}`
const imageUrl = 'https://admin.rkcad.com/assets/'
</script>
<template>
	<div class="w-full relative">
		<swiper-container
			style="--swiper-navigation-color: var(--grey); --swiper-navigation-top-offset: 600px"
			:observer="true"
			:observe-parents="true"
			:modules="modules"
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
			:navigation="{ enabled: true, nextEl: '.' + nextBtn, prevEl: '.' + prevBtn }"
			class="slideshowSwiperGridwithNav"
		>
			<swiper-slide
				v-for="(slide, index) in slides"
				:key="index"
				class="flex flex-col items-end justify-end overflow-hidden w-fit shadow-xl"
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
		<div
			:id="prevBtn"
			class="flex items-center justify-start flex-row cursor-pointer left-0 slideshowSwiperGrid__nav"
			:class="prevBtn"
		>
			<Icon name="ArrowLeft" class="arrow-left-icon" />
		</div>
		<div
			:id="nextBtn"
			class="flex items-center justify-end flex-row cursor-pointer right-0 slideshowSwiperGrid__nav"
			:class="nextBtn"
		>
			<Icon name="ArrowRight" class="arrow-right-icon" />
		</div>
	</div>
</template>

<style>
.slideshowSwiperGridwithNav {
	padding-bottom: 85px !important;
	margin-bottom: 0px;

	@media (min-width: theme('screens.md')) {
		height: 650px;
	}

	@media (min-width: theme('screens.xl')) {
		height: 740px;
	}

	.swiper-slide {
		height: 350px;
		@media (min-width: theme('screens.md')) {
			height: 310px;
		}
	}
}

.slideshowSwiperGrid__nav {
	bottom: 6px;
	z-index: 10;
	height: 50px;

	transition: all 0.4s var(--curve);
	@apply absolute px-1;
	.icon {
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

.work__card {
	height: 350px;
	width: 100%;

	&-image {
		height: 350px;
		background-color: rgba(167, 169, 172, 0.45);
		transform: scale(1.1);
		transition: all 0.5s var(--curve);

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
