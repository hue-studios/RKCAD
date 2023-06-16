<template>
  <transition name="fade" mode="out-in">
    <div v-if="isImageLoaded" class="relative w-full min-h-screen flex items-center justify-center flex-col home">
      <transition name="fade" mode="out-in">
        <div v-if="showIntroAnimation && isImageLoaded" id="animation"
          class="w-full flex items-center justify-center flex-col">
          <IntroAnimation />
        </div>
        <div v-else class="flex items-center justify-center flex-col page__header">
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
      </transition>

      <div class="flex flex-wrap flex-row items-center justify-center w-full page__body">
        <div class="w-full flex items-center justify-between flex-col lg:flex-row relative page__body-header">
          <div class="w-full lg:w-1/2">
            <h2 class="uppercase page__body-header-subtitle">Process</h2>
            <h3 class="uppercase page__body-header-title">Great Design Begins<br /> with Collaboration</h3>
            <p v-html="home.about_intro" class="mt-6 mb-3"></p>
            <LayoutLinkBtn link="/new-york-architecture-design-studio/">Learn About Our Process</LayoutLinkBtn>
          </div>

          <LayoutRkcName />

        </div>

        <div class="w-full uppercase page__body-header">
          <h2 class="uppercase page__body-header-subtitle">Featured Projects</h2>
          <h3 class="page__body-header-title">Architecture <br />Design</h3>
          
        </div>
        <div class="w-full">
          <UtilitiesSlideshowGrid :slides="architecture"/>
          <LayoutLinkBtn class="mt-8" link="/interior-design-architecture-portfolio/">More Architectural Work</LayoutLinkBtn>
        </div>
        <div v-if="interior.length" class="w-full uppercase page__body-header">
          <h2 class="uppercase page__body-header-subtitle">Featured Projects</h2>
          <h3 class="page__body-header-title">Interior <br />Design</h3>
          
        </div>
        <div v-if="interior.length" class="w-full">
          <UtilitiesSlideshowGrid :slides="interior"/>
          <LayoutLinkBtn class="mt-8" link="/interior-design-architecture-portfolio/">More Interior Design Work</LayoutLinkBtn>
        </div>
        <div class="w-full page__body-header">
          <div
            class="w-full flex items-center justify-between flex-row flex-wrap lg:items-start lg:flex-row home-section">
            <div class="w-full md:w-1/2 flex items-start flex-col">
              <h2 class="uppercase page__body-header-subtitle">Culture</h2>
              <h3 class="uppercase page__body-header-title">Meet<br /> the Team</h3>
              <p v-html="home.team_intro" style="width: 375px" class="mb-4"></p>
              <LayoutLinkBtn link="/rosen-kelly-conway-architecture-design-team/">More About the Team</LayoutLinkBtn>
            </div>

            <img v-if="home.team_image" alt="RKC Team" class="w-full md:w-1/2 h-auto mt-4 mb-8" :srcset="imageUrl +
              home.team_image +
              '?key=small 400w, ' +
              imageUrl +
              home.team_image +
              '?key=medium 1024w, ' +
              imageUrl +
              home.team_image +
              '?key=large 1920w'
              " :src="imageUrl + home.team_image + '?key=large'" />

            <div class="w-full flex items-start flex-col mt-12 xl:-mt-2 2xl:-mt-10">
              <h2 class="uppercase page__body-header-subtitle">{{ home.featured_profile.name }}</h2>
              <h3 class="uppercase page__body-header-title">Designer<br /> Spotlight</h3>
              <div
                class="w-full mt-4 mb-8 flex items-start md:items-center justify-between flex-col xl:flex-row home-section__images">
                <div class="flex items-start justify-start flex-col md:flex-row relative w-full "
                  :class="{ 'xl:w-1/2': home.featured_profile.featured_projects.length }">
                  <img :src="'https://admin.rkcad.com/assets/' + home.featured_profile.image + '?key=small'"
                    alt="RKC Team" class="profile-pic" />

                  <div class="mt-4 md:mt-0 md:ml-2 flex items-end justify-end flex-col home-section__quote"
                    v-html="home.featured_profile.quote"> </div>
                </div>
                <div v-if="home.featured_profile.featured_projects.length"
                  class="flex items-start justify-start flex-row relative w-full mt-12 xl:mt-0 xl:w-1/2 xl:ml-2 featured-projects">
                  <p class="uppercase absolute left-0 -top-[20px] ">Some of {{ getFirst(home.featured_profile.name) }}'s
                    favorite projects</p>
                  <nuxt-link v-for="(project, index) in home.featured_profile.featured_projects" :key="index"
                    class="inline-block " :to="'/interior-design-architecture-portfolio/' + project.project.url"
                    :class="{ 'mr-2': (index + 1) < home.featured_profile.featured_projects.length }">
                    <img :src="'https://admin.rkcad.com/assets/' + project.image + '?key=small'" alt="RKC Team"
                      class="h-full w-auto " />
                  </nuxt-link>
                </div>



              </div>
              <p v-html="home.featured_profile.bio" class="home-section____intro"></p>
            </div>
          </div>
          <div v-if="home.featured_project" class="w-full page__body-header">
            <div class="w-full flex items-start justify-between lg:items-start flex-row flex-wrap home-section project-spotlight">
              <div class="w-full md:w-1/2 flex items-start flex-col">
                <h2 class="uppercase page__body-header-subtitle">Project Spotlight</h2>
                <h3 class="uppercase page__body-header-title">{{ removeFirst(home.featured_project.title) }}
                </h3>
                <p v-if="home.featured_project.intro" class="mb-4 md:pr-4 home-section____intro">{{ home.featured_project.intro }}
                </p>
                <p v-else class="mb-4 home-section____intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  posuere, odio a mattis dapibus, nisi elit tempus urna, rutrum egestas ipsum quam vel erat. Nulla id
                  ligula id nisl bibendum malesuada. Quisque volutpat a odio id dictum. Donec vehicula dolor mauris, sed
                  condimentum enim auctor at.</p>
                <LayoutLinkBtn :link="'/interior-design-architecture-portfolio/' + home.featured_project.url">{{ removeFirst(home.featured_project.title) }} Details
                </LayoutLinkBtn>
              </div>

              <img v-if="home.featured_project.images.length" :alt="removeFirst(home.featured_project.title) + ' by RKC'"
                class="w-full md:w-1/2 h-auto mt-8 md:mt-4 mb-8" :srcset="imageUrl +
                  home.featured_project.images[0].directus_files_id +
                  '?key=small 400w, ' +
                  imageUrl +
                  home.featured_project.images[0].directus_files_id +
                  '?key=medium 1024w, ' +
                  imageUrl +
                  home.featured_project.images[0].directus_files_id +
                  '?key=large 1920w'
                  " :src="imageUrl + home.featured_project.images[0].directus_files_id + '?key=large'" />

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

import { getFirst } from '~~/utils/strings'
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
      'featured_images.directus_files_id,about_intro,team_intro,team_image,featured_profile.*,featured_project.title,featured_project.intro,featured_project.url,featured_project.category,featured_project.images.directus_files_id,featured_profile.featured_projects.project.title,featured_profile.featured_projects.project.url,featured_profile.featured_projects.image',
    ],
  },
})

import { usePageStore } from '~~/store/PageStore'
const pageStore = usePageStore()
console.log(pageStore.internal)
const isImageLoaded = ref(false);
const showIntroAnimation = ref(true);
const hideIntroAnimation = () => {
  showIntroAnimation.value = false;
  pageStore.setInternal(true)
};
useSeoMeta({
  ogImage: 'https://admin.rkcad.com/assets/' + home.featured_images[0].directus_files_id + 'key=xlarge'
})
onMounted(() => {
  const image = new Image();
  if (home.featured_images.length > 0) {
    image.src = 'https://admin.rkcad.com/assets/' +
      home.featured_images[0].directus_files_id + 'key=xlarge';

    image.onload = () => {
      isImageLoaded.value = true;
      if(!pageStore.internal) {
      setTimeout(hideIntroAnimation, 6000);
      } else {
        showIntroAnimation.value = false;
      }
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
<style>
.home {
  .page__header {
    padding-left: 0px;
    padding-right: 0px;

  }

  #animation {
    position: absolute;
    z-index: 10;
    height: 550px;
    margin-bottom: 50px;
    overflow: hidden !important;
    @apply bg-cover bg-center bg-no-repeat w-full flex items-center justify-center px-4 overflow-hidden relative;

    @media (min-width: theme('screens.sm')) {
      height: 550px;
    }

    @media (min-width: theme('screens.md')) {
      height: 600px;
    }

    @media (min-width: theme('screens.lg')) {
      height: calc(100vh);
    }

    img {
      width: 100%;
      height: auto;
      max-width: 400px;
    }
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
    position: absolute;
    height: 80px;
    bottom: -60px;
    right: -120px;
    display: none;
    @media (min-width: theme('screens.sm')) {
      bottom: -100px;
      height: 100px;
      display: flex;
    }
    @media (min-width: theme('screens.lg')) {
      position: relative;
      max-width: 400px;
      height: auto;
      right: auto;
      bottom: auto;
    }
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

      img.profile-pic {
        height: auto;
        width: 100%;

        @media (min-width: theme('screens.sm')) {
          height: 250px;
          width: auto;
        }
      }
    }

    &__quote {
      background: var(--blue);
      height: 250px;
      color: var(--white);
      font-size: 14px;
      font-weight: 400;

      @apply p-4 uppercase tracking-wide flex-grow;

      p {

        @apply mt-4;
      }

    }


  }

}

.featured-projects {
  p {
    font-size: 10px;
    @apply uppercase tracking-wider font-bold;
  }
}


.home-section__quote {
  p:last-of-type {
    font-size: 7px;
    @apply italic;
  }
}

.home-section____intro {
  width: 100%;
  @media (min-width: theme('screens.md')) {
    max-width: 450px;
  }
}
</style>