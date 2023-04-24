<template>
  <swiper
    :parallax="true"
    :spaceBetween="5"
    :slidesPerView="3"
    :grid="{
      rows: 2,
      fill: 'rows',
    }"
    :modules="modules"
    class="slideshowSwiperGrid"
  >
    <swiper-slide
      class="w-full flex flex-col items-end justify-end overflow-hidden"
      v-for="(slide, index) in slides"
      :key="index"
    >
      <div
        v-if="slide.images.length > 0"
        class="absolute w-full h-full bg-cover bg-center bg-no-repeat"
        :style="
          'background-image: url(' +
          imageUrl +
          slide.images[0].directus_files_id.id +
          '?key=medium)'
        "
      ></div>
      <h2>{{ slide.title }}</h2>
    </swiper-slide>
  </swiper>
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
import { Grid, Parallax } from 'swiper'
const modules = [Parallax, Grid]
</script>
<style>
.slideshowSwiperGrid {
  height: 800px;
  .swiper-slide {
    height: 400px;

    img {
      max-height: 100%;
      max-width: 100%;
    }
    h2 {
      color: var(--white);
      bottom: 20px;
      left: 0px;
      padding-left: 20px;
      padding-right: 20px;
      line-height: 16px;
      font-size: 14px;
      font-weight: 900 !important;
      @apply w-full uppercase z-10 absolute tracking-wider font-body;
    }
  }
}
</style>