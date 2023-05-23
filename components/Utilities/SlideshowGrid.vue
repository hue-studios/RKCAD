<template>
  <div class="w-full relative">
    <swiper :parallax="true" :navigation="{
      nextEl: '#slideshowSwiperGrid__next-btn',
      prevEl: '#slideshowSwiperGrid__prev-btn',
    }" :spaceBetween="10" :modules="modules"
      :breakpoints="{ 300: { slidesPerView: 1, grid: { rows: 1, fill: 'row' } }, 640: { slidesPerView: 2, grid: { rows: 1, fill: 'row' } }, 786: { slidesPerView: 3, grid: { rows: 2, fill: 'column' } }, 1024: { slidesPerView: 4, grid: { rows: 2, fill: 'column' } } }"
      class="slideshowSwiperGrid">
      <swiper-slide class="w-full flex flex-col items-end justify-end overflow-hidden" v-for="(slide, index) in slides"
        :key="index">
        <nuxt-link :to="'/interior-design-architecture-portfolio/' + slide.url" class="work__card">
          <div v-if="slide.images.length > 0"
            class="absolute w-full h-full bg-cover bg-center bg-no-repeat work__card-image" :style="'background-image: url(' +
              imageUrl +
              slide.images[0].directus_files_id.id +
              '?key=medium)'
              "></div>
          <div v-else class="absolute w-full h-full flex items-center justify-center work__card-image">
            <LayoutRkc class="rkc-icon" />
          </div>
          <h2 class="work__card-title">{{ removeOrder(slide.title) }}</h2>
        </nuxt-link>
      </swiper-slide>

    </swiper>
    <div class="w-full flex items-center justify-between flex-row relative my-4 slideshowSwiperGrid__nav">
      <h5 id="slideshowSwiperGrid__prev-btn"
        class="flex items-center justify-center flex-row cursor-pointer px-2 md:px-4 lg:pl-0 lg:pr-4  py-2">
        <nuxt-icon name="arrow-left" class="mr-4 arrow-left-icon" />
      </h5>
      <h5 id="slideshowSwiperGrid__next-btn"
        class="flex items-center justify-center flex-row cursor-pointer px-2 lg:pr-0 lg:pl-4 py-2">
        <nuxt-icon name="arrow-right" class="ml-4 arrow-right-icon" />
      </h5>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  slides: {
    type: Array,
    default: [],
  },
})
const imageUrl = 'https://admin.rkcad.com/assets/'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/grid'
import { Grid, Parallax, Navigation } from 'swiper'
const modules = [Parallax, Grid, Navigation]
function removeOrder(str) {
  const arr = str.split(". ")
  // if(arr.length > 1) {
  //   return arr[1]
  // }
  return str
}
</script>
<style>
.slideshowSwiperGrid {
  height: 360px;

  @media (min-width: theme('screens.lg')) {
    height: 810px;
  }

  @media (min-width: theme('screens.xl')) {
    height: 810px;
  }

  /* @media (min-width: theme('screens.2xl')) {
    height: 810px;
  } */

  .swiper-slide {
    height: 350px;
    @media (min-width: theme('screens.md')) {
      height: 350px;
    }

    @media (min-width: theme('screens.lg')) {
      height: 325px;
    }

    @media (min-width: theme('screens.xl')) {
      height: 350px;
    }

    /* @media (min-width: theme('screens.2xl')) {
      height: 400px;
    } */


  }

}

.slideshowSwiperGrid__nav {
  .nuxt-icon {
    height: 50px;
    fill: black;
    transition: 0.4s var(--curve);

    svg {
      height: 50px;
      display: inline-block !important;

      path {
        stroke-width: 5px;
        stroke: var(--grey) !important;
      }
    }
  }
}

.work__card {

  &-image {
    height: 350px;
    background-color: var(--grey);
    transform: scale(1.1);
    transition: all 0.5s var(--curve);
    @media (min-width: theme('screens.md')) {
      height: 350px;
    }

    @media (min-width: theme('screens.lg')) {
      height: 325px;
    }

    @media (min-width: theme('screens.xl')) {
      height: 350px;
    }

    @media (min-width: theme('screens.2xl')) {
      height: 400px;
    }

    svg {
      fill: var(--white);
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
  transform: scale(1);
}
.work__card:hover > .work__card-title {
  opacity: 1;
  transform: translateY(0px);
}


</style>