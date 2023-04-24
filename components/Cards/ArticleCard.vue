<template>
  <div class="article-card-wrapper">
    <div class="flex flex-col items-start article-card">
      <div class="flex flex-col items-start justify-start article-card__header">
        <div
          v-if="article.images.length > 0"
          :style="
            'background-image: url(https://admin.rkcad.com/assets/' +
            article.images[0].directus_files_id +
            'key=small)'
          "
          class="bg-repeat-none bg-center bg-contain article-card__header-image"
        />
        <div
          v-else
          class="flex items-center justify-center article-card__header-image"
        >
          <LayoutRkc class="rkc-icon" />
        </div>
        <h3 class="w-full uppercase">{{ article.title }}</h3>
        <!-- <h5 class="w-full uppercase">{{ article.category }}</h5>
        <a @click.prevent class="w-full uppercase"
          >Bio <nuxt-icon name="arrow-right" class="ml-1 arrow-right-icon"
        /></a> -->
      </div>
    </div>
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

<style >
.article-card-wrapper {
  margin-bottom: 20px;
}
.article-card {
  margin-bottom: 1rem;
  position: relative;
  width: 225px;
  height: 300px;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  transform-origin: center center;
  transition: all 0.35s var(--curve);
  @apply overflow-hidden;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    pointer-events: none;
    @apply tracking-wide;
    &-image {
      width: 225px;
      height: 300px;
      background-color: var(--grey);
      margin-bottom: 0.1rem;
      svg {
        fill: var(--white);
      }
    }
    h3 {
      font-size: 2rem;
      line-height: 1.5rem;
      margin-top: 10px;
      margin-bottom: 10px;
      overflow-wrap: break-word;
      @apply font-light break-words;
    }
    h5 {
      font-size: 0.75rem;
      line-height: 1rem;
      overflow-wrap: break-word;
      @apply font-light break-words;
    }
    a {
      font-size: 0.75rem;
      line-height: 1rem;
      margin-top: 10px;
      @apply inline-block;
      .nuxt-icon {
        height: 12px;
        fill: black;
        transition: 0.4s var(--curve);

        svg {
          margin-top: -2px;
          height: 12px;
          display: inline-block !important;
          line {
            stroke-width: 3px;
            stroke: var(--blue) !important;
          }
        }
      }
    }
  }
  &__body {
    pointer-events: none;
    width: 100%;
    max-width: 500px;
    p {
      font-size: 0.875rem;
      line-height: 1.5rem;
    }
  }
}

.expanded {
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  color: var(--white);
  background-color: var(--blue2);
  @apply flex-row;
}
</style>
