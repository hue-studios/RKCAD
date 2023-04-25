<template>
  <!-- Main Swiper -> pass thumbs swiper instance -->
  <swiper
    :modules="[Thumbs, Pagination, Parallax, Navigation]"
    :parallax="true"
    :thumbs="{ swiper: thumbsSwiper }"
    :centeredSlides="true"
    :centeredInsuficientSlides="true"
    class="flex items-center justify-center flex-row gallery-swiper"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index"
      ><img
        v-if="slide.directus_files_id.id"
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
    /></swiper-slide>
  </swiper>

  <swiper
    :modules="[Thumbs]"
    watch-slides-progress
    @swiper="setThumbsSwiper"
    class="thumb-swiper"
    :slidesPerView="auto"
    :centeredSlides="true"
    :centeredInsuficientSlides="true"
  >
    <swiper-slide
      class="w-auto flex items-center justify-center"
      v-for="(slide, index) in slides"
      :key="index"
      ><img
        v-if="slide.directus_files_id.id"
        :src="imageUrl + slide.directus_files_id.id + '?key=small'"
    /></swiper-slide>
  </swiper>
</template>
<script setup>
const props = defineProps({
  slides: {
    type: Array,
    default: [],
  },
})
const images = computed(() => {
  return props.slides.filter((item) => {
    return item.directus_files_id.id
  })
})
const imageUrl = 'https://admin.rkcad.com/assets/'
import { Navigation, Pagination, Parallax, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
const modules = [Parallax, Pagination, Navigation, Thumbs]
const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
</script>
<style >
.gallery-swiper {
  height: calc(100vh - 205px);
  /* -webkit-backdrop-filter: blur(4px) invert(0.015);
  backdrop-filter: blur(4px) invert(0.015); */
  .swiper-slide {
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    img {
      max-height: 100%;
      max-width: 100%;
      height: 100%;
    }
  }
}
.thumb-swiper {
  height: 100px;
  margin: 10px 0;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  .swiper-wrapper {
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
  }
  .swiper-slide {
    width: auto !important;
    @apply px-2;
    img {
      height: 100px;
      width: auto;
    }
  }
}
</style>