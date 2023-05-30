<template>
  <div v-if="isImageLoaded"
    class="relative w-full min-h-screen flex flex-wrap flex-col justify-center items-center press"
  >
    <div
      class="page__header"
      :style="
        'background-image: url(https://admin.rkcad.com/assets/' +
        press.header_image +
        ')'
      "
    >
      <LayoutRkc id="rkc-bg-icon-2" class="rkc-bg-icon" />
      <h1
        class="w-full uppercase white tracking-wider"
        v-html="formattedTitle"
      ></h1>
    </div>
    <div
      class="flex flex-wrap flex-row items-center justify-stretch w-full page__body"
    >
      <div class="w-full uppercase mb-10 px-4 md:px-6 page__body-header">
        <h2 class="page__body-header-subtitle">Recognition</h2>
        <h3 class="page__body-header-title">Published/ <br />Press</h3>
        <p class="normal-case mb-6 page__body-header-intro">{{ press.introduction }}</p>
      </div>
      <CardsArticleCard
        v-for="(article, index) in pressArticles"
        :key="index"
        :article="article"
      />
      <div class="w-full uppercase mb-6 px-4 md:px-6 page__body-header">
        <h2 class="page__body-header-subtitle">Recognition</h2>
        <h3 class="page__body-header-title">Published/ <br />Awards</h3>
      </div>
      <CardsArticleCard
        v-for="(article, index) in awardArticles"
        :key="index"
        :article="article"
      />
    </div>
  </div>
  <LayoutLoader v-else />
</template>

<script setup>
const { getItems } = useDirectusItems()
const press = await getItems({
  collection: 'press',
  params: {
    fields: [
      'header_image,title,introduction,articles.category,articles.title,articles.link,articles.description,articles.images.directus_files_id,articles.url,articles.sort',
    ],
  },
})
const isImageLoaded = ref(false);
onMounted(() => {
  const image = new Image();
    image.src = 'https://admin.rkcad.com/assets/' +
    press.header_image + 'key=xlarge';

    image.onload = () => {
      isImageLoaded.value = true;
    };
 
});
const formattedTitle = computed(() => {
  return press.title.replace(/\n/g, '<br>')
})
const pressArticles = computed(() => {
  return press.articles.filter((article) => {
    return article.category === 'Press'
  })
})
const awardArticles = computed(() => {
  return press.articles.filter((article) => {
    return article.category === 'Award'
  })
})
</script>
<style >
.press {
  .page__body {

    @apply max-w-8xl px-0;
    &-header {
     
    }
  }
}
</style>