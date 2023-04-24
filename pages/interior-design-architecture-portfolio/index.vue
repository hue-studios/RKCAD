<template>
  <div
    class="relative w-full min-h-screen flex flex-wrap flex-col justify-center items-center work"
  >
    <div
      class="page__header"
      :style="
        'background-image: url(https://admin.rkcad.com/assets/' +
        work.header_image +
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
      class="flex flex-wrap flex-row items-center justify-center w-full page__body"
    >
      <div class="max-w-7xl w-full uppercase px-4 page__body-header">
        <h2>Featured Projects</h2>
        <h3>Architecture</h3>
      </div>
      <div class="w-full">
        <UtilitiesSlideshowGrid :slides="architecture" />
      </div>
      <div
        v-if="interior.length"
        class="max-w-7xl w-full uppercase page__body-header px-4"
      >
        <h2>Featured Projects</h2>
        <h3>Interior <br />Design</h3>
      </div>
      <div v-if="interior.length" class="w-full">
        <UtilitiesSlideshowGrid :slides="interior" />
      </div>
      <LayoutNewsletter />
    </div>
  </div>
</template>

<script setup>
const { getItems } = useDirectusItems()
const work = await getItems({
  collection: 'work',
  params: {
    fields: [
      'header_image,title,projects.title,projects.category,projects.style,projects.images.directus_files_id.id,projects.images.directus_files_id.title,projects.images.directus_files_id.tags,projects.images.directus_files_id.width,projects.images.directus_files_id.height,projects.url',
    ],
  },
})

const formattedTitle = computed(() => {
  return work.title.replace(/\n/g, '<br>')
})
const architecture = computed(() => {
  return work.projects.filter((item) => {
    return (
      item.category.find((el) => el === 'Architecture') &&
      item.images.length > 0
    )
  })
})
const interior = computed(() => {
  return work.projects.filter((item) => {
    return item.category.find(
      (el) => el === 'Interior Design' && item.images.length > 0
    )
  })
})
</script>
<style scoped>
.work {
  .page__body {
    @apply px-0;
  }
}
</style>