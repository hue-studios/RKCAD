<template>
  <div v-if="isImageLoaded" class="relative w-full flex items-center justify-center flex-col min-h-screen project">
    <div
      class="w-full flex items-start lg:items-end flex-col lg:flex-row justify-between tracking-wide mt-4 relative project__header">
      <h1 class="uppercase relative">
        {{ removeFirst(project.title) }}
        <span class="hidden">
          <span v-for="(category, index) in project.category" :key="index">{{
            category
          }}</span>
          Project by Rosen Kelly Conway</span>
      </h1>

      <div class="uppercase flex flex-row relative project__header-category">
        <h2 v-if="project.category" :class="{ 'mr-4': project.style }">
          <span class="">Category: </span>
          <span v-for="(category, index) in project.category" :key="index">{{
            category
          }}</span>
        </h2>
        <h2 v-if="project.style" class="ml-4">
          <span class="">Style: </span> {{ project.style }}
        </h2>
      </div>
    </div>
    <div class="w-full relative overflow-hidden project__slideshow">
      <div v-if="project.credits" :class="{ 'open': showCredits }" class="cursor-pointer credits__button"
        @click.prevent="toggleCredits()">
        <span></span><span></span>
      </div>
      <div v-if="project.credits" @click.prevent="toggleCredits()" class="credits__content" :class="{ 'open': showCredits }" v-html="project.credits">
      </div>
      <UtilitiesSlideshowThumbs :slides="project.images" />
      <div class="absolute z-10 w-full flex items-center justify-between flex-row hidden lg:flex project__projects-nav">
        <ProjectsPrevProjectBtn :sort="project.sort" />
        <ProjectsNextProjectBtn :sort="project.sort" />
      </div>
    </div>

    <div class="flex w-full items-center flex-col justify-start tracking-wide my-20 project__content">
      <h1 class="w-full">
        {{ removeFirst(project.title) }}
        <span class="hidden">
          <span v-for="(category, index) in project.category" :key="index">{{
            category
          }}</span>
          Project by Rosen Kelly Conway</span>
      </h1>
      <p v-if="project.intro" class="w-full font-bold mt-4">{{ project.intro }}</p>
      <div class="w-full flex items-center flex-col lg:flex-row mt-12">
        <div v-if="project.challenge">
          <h4 class="uppercase block tracking-wider mb-4">Challenge</h4>
          <p class="text-sm leading-8">{{ project.challenge }}</p>
        </div>
        <div v-if="project.approach" class="py-6 lg:py-0 lg:px-6">
          <h4 class="uppercase block tracking-wider mb-4">Approach</h4>
          <p class="text-sm leading-8">{{ project.approach }}</p>
        </div>
        <div v-if="project.result">
          <h4 class="uppercase block tracking-wider mb-4">Result</h4>
          <p class="text-sm leading-8">{{ project.result }}</p>
        </div>
      </div>
    </div>
    <div class="project__recognition">
      <ProjectsPressSlider :slides="project.press_and_awards" />
    </div>
  </div>
  <LayoutLoader v-else />
</template>

<script setup>
import { removeFirst } from '~~/utils/strings'
const { params, path } = useRoute()
const { getItems } = useDirectusItems()
const { data, pending, error, refresh } = await useAsyncData('posts', () => {
  return getItems({
    collection: 'projects',
    params: {
      filter: {
        url: {
          _eq: params.url,
        },

      },
      fields: [
        'approach, before_after.directus_files_id,category,challenge,credits,id,images.directus_files_id.id,images.directus_files_id.description,images.directus_files_id.tags,intro,result,sort,style,title,url,press_and_awards.press_id.category,press_and_awards.press_id.category,press_and_awards.press_id.title,press_and_awards.press_id.description,press_and_awards.press_id.url,press_and_awards.press_id.link,press_and_awards.press_id.images.directus_files_id.id,press_and_awards.press_id.images.directus_files_id.description,press_and_awards.press_id.images.directus_files_id.tags',
      ],
    },
  })
})

const showCredits = ref(false);
function toggleCredits() {
  console.log("here")
  showCredits.value = !showCredits.value;
}
const project = ref(data.value[0])
const isImageLoaded = ref(false);
onMounted(() => {
  if (project.value.images.length > 0) {
    const image = new Image();
    image.src = 'https://admin.rkcad.com/assets/' +
      project.value.images[0].directus_files_id.id + 'key=xlarge';

    image.onload = () => {
      isImageLoaded.value = true;
    };
  } else {
    isImageLoaded.value = true;
  }

});
</script>
<style>
.project {
  margin-top: 65px;

  &__slideshow {
    transition: all 0.5s var(--curve);
    height: calc(100vh - 167px);

    @apply max-w-7xl;

    @media (min-width: theme('screens.lg')) {
      /* max-height: 800px; */
    }

    .swiper {
      /* padding-bottom: 50px; */
      @apply py-4;
      @media (min-width: theme('screens.lg')) {
        padding: 0;
      }
    }

    .swiper-pagination {
      /* bottom: -25px; */
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 0.2em;
    }
  }

  &__projects-nav {
    bottom: 110px;


    a {
      font-size: 10px;
      @apply uppercase tracking-wide;
    }
  }

  &__header {
    margin-bottom: 5px;
    z-index: 10;
    @apply max-w-7xl mt-12;

    h1 {
      font-size: 30px;
      letter-spacing: 0.1em;
      line-height: 1em;
    }

    /* &-nav {
      bottom: -35px;
      height: 12px;
      @media (min-width: theme('screens.lg')) {
        bottom: -12px;
      }
      a {
        height: 10px;
        font-size: 9px;
        line-height: 10px;
        .nuxt-icon {
          height: 30px;
          transition: 0.4s var(--curve);
          color: var(--white);
          @apply inline-block;
          svg {
            height: 30px;
            display: inline-block !important;
            path {
              stroke-width: 5px;
              stroke: var(--white) !important;
            }
          }
        }
      }
    } */
    &-category {
      height: 10px;
      font-size: 9px;
      line-height: 10px;
      margin-top: 5px;
      z-index: 10;
      @apply font-bold;
      /* @media (min-width: theme('screens.lg')) {
        margin-bottom: -10px;
      } */
    }



  }

  .credits__button {
    z-index: 10;
    width: 55px;
    height: 50px;
    background: rgba(123, 145, 163, 0.75);
    z-index: 5;
    transition: all 0.6s var(--curve);
    @apply absolute top-0 right-0 flex items-center justify-center text-center;

    span {
      height: 1px;
      background: var(--white);
      width: 35px;
      @apply block absolute;
      transition: all 0.4s var(--curve);
    }

    span:nth-of-type(2) {
      width: 30px;
      transform: rotate(-90deg);

    }
  }

  .credits__button.open {
    opacity: 0;
    width: 200px;
    height: 100%;
    /* transition: all 0.4s 0.2s var(--curve); */
    span {
      transform: rotate(-90deg) translate(-5px, -10px);
    }

    span:nth-of-type(2) {
      transform: rotate(-180deg);
    }
  }

  .credits__content {
    @apply absolute top-0 right-0 p-6 flex items-start justify-end flex-col;
    background: rgba(123, 145, 163, 0.9);
    color: var(--white);
    font-size: 12px;
    line-height: 1.2em;
  
    z-index: 10;
    height: calc(100% - 110px);
    transition: all 0.5s 0.1s var(--curve);
    transform: translateX(100%);
    opacity: 0;
    h3 {
      font-size: 8px;
      font-weight: 700;
      @apply uppercase font-bold;
    }
    p {
      @apply mb-4;
    }
  }
  .credits__content.open {
      transform: translateX(0px);
      opacity: 1;
  }
  &__content {
    @apply max-w-7xl;

    h1 {
      font-size: 30px;
      letter-spacing: 0.1em;
      line-height: 1em;
      @apply uppercase;
    }

    p {
      font-size: 14px;
    }
  }
}
/* 
.credits-enter-from {
  opacity: 0;
  transform: translate(50px, 0px);
}

.credits-enter-active,
.credits-leave-active {
  transition: all 0.3s var(--curve);
}

.credits-enter,
.credits-leave-to {
  opacity: 0;
}*/
</style> 