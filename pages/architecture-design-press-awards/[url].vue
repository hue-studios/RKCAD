<template>
  <div v-if="isImageLoaded"
    class="relative w-full flex items-center justify-center flex-col min-h-screen project"
  >
    <div class="w-full project__slideshow">
      <UtilitiesSlideshow :slides="project.images" />
    </div>
    <div
      class="w-full flex items-start lg:items-end flex-col lg:flex-row justify-between uppercase tracking-wide mt-20 px-4 project__header"
    >
      <h1 class="relative">
        {{ project.title }}
        <span class="hidden">
          <span v-for="(category, index) in project.category" :key="index">{{
            category
          }}</span>
          Project by Rosen Kelly Conway</span
        >
        <div
          class="absolute w-full flex items-center justify-between flex-row project__header-nav"
        >
          <ProjectsPrevProjectBtn :sort="project.sort" />
          <ProjectsNextProjectBtn :sort="project.sort" />
        </div>
      </h1>

      <div class="flex flex-row project__header-category">
        <h2 v-if="project.category" class="mr-4">
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
    <div
      class="flex items-center flex-col lg:flex-row justify-start tracking-wide my-20 px-4 project__content"
    >
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
    <div class="project__recognition">
      <ProjectsPressSlider :slides="project.press_and_awards" />
    </div>
  </div>
  <LayoutLoader v-else />
</template>

<script setup>
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
const isImageLoaded = ref(true);
// onMounted(() => {
//   const image = new Image();
//     image.src = 'https://admin.rkcad.com/assets/' +
//     press.header_image + 'key=xlarge';

//     image.onload = () => {
//       isImageLoaded.value = true;
//     };
 
// });
// const { projectReq, pending } = await getItems({
//   collection: 'projects',
//   params: {
//     filter: {
//       url: {
//         _eq: params.url,
//       },
//     },
//     fields: [
//       'approach, before_after.directus_files_id,category,challenge,credits,id,images.directus_files_id.id,images.directus_files_id.description,images.directus_files_id.tags,intro,result,sort,style,title,url,press_and_awards.*',
//     ],
//   },
// })
const project = ref(data.value[0])
</script>
<style>
.project {
  &__slideshow {
    max-height: 600px;
    @apply h-screen;
    @media (min-width: theme('screens.lg')) {
      /* max-height: 800px; */
    }
    .swiper {
      padding-bottom: 50px;
    }
    .swiper-pagination {
      /* bottom: -25px; */
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 0.2em;
    }
  }
  &__header {
    max-width: var(--max-width);
    @apply mt-10 lg:mt-14;
    h1 {
      font-size: 44px;
      line-height: 1em;
    }
    &-nav {
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
          height: 10px;
          fill: black;
          transition: 0.4s var(--curve);
          svg {
            height: 10px;
            display: inline-block !important;
            line {
              stroke-width: 3px;
              stroke: var(--blue) !important;
            }
          }
        }
      }
    }
    &-category {
      height: 10px;
      font-size: 9px;
      line-height: 10px;
      margin-top: 5px;
      @media (min-width: theme('screens.lg')) {
        margin-bottom: -10px;
      }
    }
  }
  &__content {
    max-width: var(--max-width);
  }
}
</style>