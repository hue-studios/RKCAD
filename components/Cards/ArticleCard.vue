<template>
  <div class="article-card__wrapper">
  <nuxt-link :to="'/architecture-design-press-awards/' + article.url"
    class="relative flex flex-col items-start article-card">
    <div v-if="article.images.length > 0" :style="'background-image: url(https://admin.rkcad.com/assets/' +
      article.images[0].directus_files_id +
      'key=small)'
      " class="bg-no-repeat bg-center bg-cover article-card__image" />
    <div v-else class="flex items-center justify-center article-card__image">
      <LayoutRkc class="rkc-icon" />
    </div>
    <h3 class="w-full uppercase article-card__title">{{ article.title }}</h3>
  </nuxt-link>
</div>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
    default: {},
  },
})
</script>

<style>
.article-card__wrapper {

  @apply mb-6 md:mb-12 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-5 md:px-6;


  /* @media (min-width: 840px) {
    width: 25%;
  }
  @media (min-width: theme('screens.lg')) {
 
  } */
}
.article-card {
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  height: 220px;
  cursor: pointer;
  z-index: 1;
  transition: all 0.35s var(--curve);

  @media (min-width: theme('screens.sm')) {
    height: 225px;
  }

  @media (min-width: theme('screens.md')) {
    height: 250px;
  }

  @media (min-width: theme('screens.lg')) {
    /* height: 300px; */
    height: 250px;
  }

  @media (min-width: theme('screens.xl')) {
    
  }

  @media (min-width: theme('screens.2xl')) {
   
  }
  &__image {
    width: 100%;
    height: 100%;
    background-color: rgba(167, 169, 172, 0.45);
    transform: scale(1.1);
    transition: all 0.5s var(--curve);
  
    svg {
      
      padding: 0 20px;
      fill: rgba(255, 255, 255, 0.5);
    }
  }


  &__title {
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

.article-card:hover>.article-card__image {
  transform: scale(1);
  background-color: rgba(167, 169, 172, 1.0);
}

.article-card:hover>.article-card__title {
  opacity: 1;
  transform: translateY(0px);
}
</style>
