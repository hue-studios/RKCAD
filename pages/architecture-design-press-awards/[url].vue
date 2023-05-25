<template>
  <div v-if="isImageLoaded"
    class="relative w-full flex items-center justify-center flex-col min-h-screen project"
  >
  <div class="w-full relative project__slideshow">
      <UtilitiesSlideshowThumbs v-if="article.images.length" :slides="article.images" />
     
    </div>
    <div
      class="w-full flex items-start lg:items-end flex-col lg:flex-row justify-between uppercase tracking-wide mt-20 px-4 project__header"
    >
      <h1 class="relative">
        {{ article.title }}
        <span class="hidden">
          <span>{{
            article.category
          }}</span>
          Article for Rosen Kelly Conway</span
        >
       
      </h1>

     </div>
   
  </div>
  <LayoutLoader v-else />
</template>

<script setup>
const { params, path } = useRoute()
const { getItems } = useDirectusItems()
const { data, pending, error, refresh } = await useAsyncData('articles', () => {
  return getItems({
    collection: 'articles',
    params: {
      filter: {
        url: {
          _eq: params.url,
        },
      },
      fields: [
        'category,title,description,link,url,images.directus_files_id.id,images.directus_files_id.description,images.directus_files_id.tags',
      ],
    },
  })
})
const article = ref(data.value[0])
const isImageLoaded = ref(false);
onMounted(() => {
  if(article.value.images.length > 0) {
  const image = new Image();
    image.src = 'https://admin.rkcad.com/assets/' +
    article.value.images[0].directus_files_id.id  + 'key=xlarge';
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