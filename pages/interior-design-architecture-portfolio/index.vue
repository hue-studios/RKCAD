<template>
  <div v-if="isImageLoaded" class="relative w-full min-h-screen flex flex-wrap flex-col justify-center items-center work">
    <div class="page__header" :style="'background-image: url(https://admin.rkcad.com/assets/' +
      work.header_image +
      ')'
      ">
      <LayoutRkc id="rkc-bg-icon-2" class="rkc-bg-icon" />
      <h1 class="w-full uppercase white tracking-wider" v-html="formattedTitle"></h1>
    </div>
    <div class="flex flex-wrap flex-row items-center justify-center w-full page__body">
      <div class="w-full uppercase mt-20 page__body-header">

        <h3 class="mb-10 page__body-header-title">Architecture <br />Design</h3>
      </div>
      <div class="w-full">
        <UtilitiesSlideshowGridNav :slides="architecture" class="One"/>
      </div>
      <div v-if="interior.length" class="w-full uppercase mt-20 page__body-header">
        <h3 class="mb-10 page__body-header-title">Interior <br />Design</h3>
      </div>
      <div v-if="interior.length" class="w-full">
        <UtilitiesSlideshowGridNav :slides="interior" class="Two"/>
      </div>
      <div v-if="commercial.length" class="w-full uppercase mt-20 page__body-header">
        <h3 class="mb-10 page__body-header-title">Commercial <br />Design</h3>
      </div>
      <div v-if="commercial.length" class="w-full">
        <UtilitiesSlideshowGridNav :slides="commercial" class="Three"/>
      </div>
    </div>
  </div>
  <LayoutLoader v-else />
</template>

<script setup>
const { getItems } = useDirectusItems()
const work = await getItems({
  collection: 'work',
  params: {
    fields: [
      'header_image,title,projects.status,projects.title,projects.category,projects.style,projects.images.directus_files_id.id,projects.images.directus_files_id.title,projects.images.directus_files_id.tags,projects.images.directus_files_id.width,projects.images.directus_files_id.height,projects.url',
    ],
  },
})

const isImageLoaded = ref(false);
onMounted(() => {
  const image = new Image();
  image.src = 'https://admin.rkcad.com/assets/' +
    work.header_image;
  image.onload = () => {
    isImageLoaded.value = true;
  };
});
const formattedTitle = computed(() => {
  return work.title.replace(/\n/g, '<br>')
})
const architecture = computed(() => {
  return work.projects.filter((item) => {
    return (
      item.category.find((el) => el === 'Architecture')
    )
  })
})
const interior = computed(() => {
  return work.projects.filter((item) => {
    return item.category.find(
      (el) => el === 'Interior Design'
    )
  })
})
const commercial = computed(() => {
  return work.projects.filter((item) => {
    return item.category.find(
      (el) => el === 'Commercial'
    )
  })
})
</script>
<style scoped></style>