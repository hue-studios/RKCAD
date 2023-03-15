<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :speed="600"
    :parallax="true"
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="h-full slideshowSwiper"
  >
    <!-- <div
      slot="container-start"
      class="bg-cover bg-center bg-no-repeat grayscale blur-lg opacity-25 parallax-bg"
      :style="
        'background-image: url(' +
        imageUrl +
        slides[0].directus_files_id.id +
        '?key=small)'
      "
      data-swiper-parallax="-200"
    ></div> -->
    <swiper-slide
      class="w-full flex items-center justify-center"
      v-for="(slide, index) in slides"
      :key="index"
    >
      <!-- <div class="title" data-swiper-parallax="-300" v-if="slide.description">{{ slide.description }}</div>
     
       -->
      <!-- <picture>
        <source
          media="(max-width: 400px)"
          :srcset="imageUrl + slide.directus_files_id.id + '?key=small'"
        />
        <source
          media="(min-width: 401px)"
          :srcset="imageUrl + slide.directus_files_id.id + '?key=large'"
        />
        <img
          :src="imageUrl + slide.directus_files_id.id + '?key=large'"
          alt="Chris standing up holding his daughter Elva"
        />
      </picture> -->
      <div class="relative w-full h-full flex items-center justify-center">
        <!-- <div
          class="absolute w-full h-full bg-cover bg-center bg-no-repeat grayscale blur-2xl opacity-50"
          :style="
            'background-image: url(' +
            imageUrl +
            slide.directus_files_id.id +
            '?key=small)'
          "
        ></div> -->
        <img
          class="absolute shadow-lg"
          data-swiper-parallax="-250"
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
        />
      </div>
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
const imageUrl = 'http://192.241.158.208:8055/assets/'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination, Parallax } from 'swiper'
const modules = [Parallax, Pagination, Navigation]
const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
</script>
<style scoped>
.slideshowSwiper {
  .parallax-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 130%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    background-position: center;
  }
  .swiper-slide {
    img {
      max-height: 100%;
      max-width: 100%;
    }
  }
}
</style>