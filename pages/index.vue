<template>
  <transition name="fade" mode="out-in">
    <div v-if="isImageLoaded" class="relative w-full min-h-screen flex items-center justify-center flex-col home">
      <div class="page__header">
        <swiper :speed="2000" :effect="'fade'" :loop="true" :parallax="true" :modules="modules" :autoplay="true"
          class="h-full flex items-center justify-center flex-col slideshowSwiperHome">

          <swiper-slide class="w-full flex items-center justify-center" v-for="(slide, index) in home.featured_images"
            :key="index">

            <div class="relative w-full h-full flex items-center justify-center">
              <div class="absolute w-full h-full bg-cover bg-center bg-no-repeat" :style="'background-image: url(' +
                imageUrl +
                slide.directus_files_id +
                '?key=large)'
                "></div>

            </div>
          </swiper-slide>
        </swiper>
        <LayoutRkc id="rkc-bg-icon-2" class="rkc-bg-icon" />

      </div>
      <div class="flex flex-wrap flex-row items-center justify-center w-full page__body">
        <div
          class="max-w-8xl w-full px-4 2xl:px-0 mt-20 flex items-center justify-between flex-col lg:flex-row page__body-header">
          <div class="w-full lg:w-1/2">
            <h2 class="uppercase page__body-header-subtitle">Process</h2>
            <h3 class="uppercase page__body-header-title">Great Design Begins<br /> with Collaboration</h3>
            <p v-html="home.about_intro" class="my-12"></p>
            <LayoutLinkBtn link="/new-york-architecture-design-studio/">About</LayoutLinkBtn>
          </div>
          <div class="">
            <LayoutRkcName />
          </div>
        </div>

        <div class="max-w-8xl w-full mt-20 2xl:mt-40 uppercase px-4 2xl:px-0  page__body-header">
          <h2 class="uppercase page__body-header-subtitle">Featured Projects</h2>
          <h3 class="mb-6 page__body-header-title">Architecture <br />Design</h3>
          <LayoutLinkBtn link="/interior-design-architecture-portfolio/">Work</LayoutLinkBtn>
        </div>
        <div class="w-full max-w-8xl px-4 2xl:px-0 mt-3">
          <UtilitiesSlideshowGrid :slides="architecture" />
        </div>
        <div v-if="interior.length" class="max-w-8xl w-full uppercase px-4 2xl:px-0 mt-20 page__body-header">
          <h2 class="uppercase page__body-header-subtitle">Featured Projects</h2>
          <h3 class="mb-6 page__body-header-title">Interior <br />Design</h3>
          <LayoutLinkBtn link="/interior-design-architecture-portfolio/">Work</LayoutLinkBtn>
        </div>
        <div v-if="interior.length" class="w-full max-w-8xl px-4 2xl:px-0 mt-3">
          <UtilitiesSlideshowGrid :slides="interior" />
        </div>
        <div class="max-w-8xl w-full px-4 2xl:px-0 mt-20 xl:mt-40 page__body-header">
          <div
            class="w-full flex items-center justify-between flex-col lg:items-start lg:flex-row flex-wrap home-section">
            <div class="flex items-start flex-col">
              <h2 class="uppercase page__body-header-subtitle">Culture</h2>
              <h3 class="uppercase page__body-header-title">Meet<br /> the Team</h3>
              <p v-html="home.team_intro" style="width: 375px" class="mb-8"></p>
              <LayoutLinkBtn link="/rosen-kelly-conway-architecture-design-team/">Team</LayoutLinkBtn>
            </div>

            <img src="/images/team-header.jpg" alt="RKC Team" class="w-1/2 h-auto mt-4 mb-8" />
            <div class="w-full flex items-start flex-col ">
              <h2 class="uppercase page__body-header-subtitle">{{ home.featured_profile.name }}</h2>
              <h3 class="uppercase page__body-header-title">Designer<br /> Spotlight</h3>
              <div class="w-full mt-4 mb-8 flex items-center justify-between flex-row home-section__images">
                <img :src="'https://admin.rkcad.com/assets/' + home.featured_profile.image + '?key=small'" alt="RKC Team"
                  class="" />
                <div class="mx-4 flex items-end justify-end flex-col home-section__quote">
                  <h5>"{{ home.featured_profile.quote }}"</h5>
                  <p>- {{ home.featured_profile.name }}</p>
                </div>
                <!-- <img class="mr-4" :src="'https://admin.rkcad.com/assets/b042050e-f042-4cd8-bfb5-fc6eac001f17?key=small'"
                alt="RKC Team" />
              <img :src="'https://admin.rkcad.com/assets/2ee652e4-2dff-44b8-9971-17283684fe9b?key=small'" alt="RKC Team"
                class="" /> -->


              </div>
              <p v-html="home.featured_profile.bio" style="width: 375px"></p>
            </div>
          </div>
          <div class="max-w-8xl w-full px-4 2xl:px-0 mt-20 xl:mt-40 page__body-header">
            <div
              class="w-full flex items-center justify-between flex-col lg:items-start lg:flex-row flex-wrap home-section">
              <div class="flex items-start flex-col">
                <h2 class="uppercase page__body-header-subtitle">Featured</h2>
                <h3 class="uppercase page__body-header-title">Georgian
                  <br /> Colonial
                </h3>
                <p style="width: 375px" class="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
                  ex fringilla, congue lorem blandit, porttitor mi. Donec et lacus dapibus, lacinia nisl quis, euismod
                  purus. Nulla est ante, egestas sit amet lacinia quis, pretium et lectus. Fusce ut condimentum leo, a
                  interdum lorem. Cras vehi</p>
                <LayoutLinkBtn link="/">Project</LayoutLinkBtn>
              </div>

              <img src="/images/home-2.png" alt="RKC Team" class="w-1/2 h-auto mt-4 mb-8" />
              <div class="w-full flex items-start flex-col hidden">
                <h2 class="uppercase page__body-header-subtitle">{{ home.featured_profile.name }}</h2>
                <h3 class="uppercase page__body-header-title">Designer<br /> Spotlight</h3>
                <div class="w-full mt-4 mb-8 flex items-center justify-between flex-row home-section__images">
                  <img :src="'https://admin.rkcad.com/assets/' + home.featured_profile.image + '?key=small'"
                    alt="RKC Team" class="" />
                  <div class="mx-4 flex items-end justify-end flex-col home-section__quote">
                    <h5>"{{ home.featured_profile.quote }}"</h5>
                    <p>- {{ home.featured_profile.name }}</p>
                  </div>
                  <img class="mr-4" :src="'https://admin.rkcad.com/assets/b042050e-f042-4cd8-bfb5-fc6eac001f17?key=small'"
                    alt="RKC Team" />
                  <img :src="'https://admin.rkcad.com/assets/2ee652e4-2dff-44b8-9971-17283684fe9b?key=small'"
                    alt="RKC Team" class="" />


                </div>
                <p v-html="home.featured_profile.bio" style="width: 375px"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <LayoutLoader />
    </div>
  </transition>
</template>

<script setup>
const imageUrl = 'https://admin.rkcad.com/assets/'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Parallax, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/effect-fade'
const modules = [Parallax, Autoplay, EffectFade]
const { getItems } = useDirectusItems()
const home = await getItems({
  collection: 'home',
  params: {
    fields: [
      'featured_images.directus_files_id,about_intro,team_intro,featured_project.*,featured_profile.*',
    ],
  },
})
const isImageLoaded = ref(false);
onMounted(() => {
  const image = new Image();
  if (home.featured_images.length > 0) {
    image.src = 'https://admin.rkcad.com/assets/' +
      home.featured_images[0].directus_files_id + 'key=xlarge';

    image.onload = () => {
      isImageLoaded.value = true;
    };
  } else {
    isImageLoaded.value = true;
  }
});
const work = await getItems({
  collection: 'projects',
  params: {
    fields: [
      'status,title,category,style,images.directus_files_id.id,images.directus_files_id.title,images.directus_files_id.tags,images.directus_files_id.width,images.directus_files_id.height,url',
    ],
    filter: {
      status: {
        _eq: 'published',
      },
    },
  },
})

const architecture = computed(() => {
  return work.filter((item) => {
    return item.category.find(
      (el) => el === 'Architecture'
    ) && item.status === 'published'
  })
})
const interior = computed(() => {
  return work.filter((item) => {
    return item.category.find(
      (el) => el === 'Interior Design'
    )
  })
})
</script>
<style scoped>
.home {
  .page__header {
    padding-left: 0px;
    padding-right: 0px;
  }

  .slideshowSwiperHome {
    height: 100vh;
    width: 100vw;
  }

  /* a {
    font-size: 10px;

    @apply uppercase tracking-wider py-4 px-6 font-bold;
  } */

  #rkc-bg-icon-2 {
    z-index: 5;
  }

  .rkc-name {
    max-width: 400px;
    opacity: 0.85;
  }

  &-section {

    /* margin-top: 100px;
    margin-bottom: 100px; */
    /* img {
      width: 55%;
      height: auto;
    } */
    &__images {
      img {
        height: 250px;
        width: auto;
      }
    }

    &__quote {
      background: var(--blue);
      height: 250px;
      width: 250px;
      color: var(--white);
      font-size: 20px;
      @apply p-4 uppercase tracking-wide;

      p {
        font-size: 10px;
        @apply mt-4 font-bold;
      }
    }
  }
}
</style>