<template>
  <div class="relative w-full project">
    <div class="project__slideshow">
      <UtilitiesSlideshow :slides="project.images" />
    </div>
    <div
      class="flex items-stretch flex-row justify-between uppercase tracking-wide project__header"
    >
      <div class="">
        <h1>
          {{ project.title }}
          <span class="opacity-0">
            <span v-for="(category, index) in project.category" :key="index">{{
              category
            }}</span>
            Project by Rosen Kelly Conway</span
          >
        </h1>
        <ProjectsPrevProjectBtn :sort="project.sort" />
        <ProjectsNextProjectBtn :sort="project.sort" />
      </div>
      <div class="flex flex-row">
        <h2 v-if="project.category">
          <span class="">Category: </span>
          <span v-for="(category, index) in project.category" :key="index">{{
            category
          }}</span>
        </h2>
        <h2 v-if="project.style">
          <span class="">Style: </span> {{ project.style }}
        </h2>
      </div>
    </div>
    <div
      class="flex items-center flex-col md:flex-row justify-start tracking-wide project__content"
    >
      <div v-if="project.challenge">
        <h4 class="uppercase block">Challenge</h4>
        {{ project.challenge }}
      </div>
      <div v-if="project.approach">
        <h4 class="uppercase block">Approach</h4>
        {{ project.approach }}
      </div>
      <div v-if="project.result">
        <h4 class="uppercase block">Result</h4>
        {{ project.result }}
      </div>
    </div>
  </div>
</template>

<script setup>
const { params, path } = useRoute()
const { getItems } = useDirectusItems()
const projectReq = await getItems({
  collection: 'projects',
  params: {
    filter: {
      url: {
        _eq: params.url,
      },
    },
    fields: [
      'approach, before_after.directus_files_id,category,challenge,credits,id,images.directus_files_id.id,images.directus_files_id.description,images.directus_files_id.tags,intro,result,sort,style,title,url,press_and_awards.*',
    ],
  },
})
const project = ref(projectReq[0])
</script>
<style scoped>
.project {
  &__slideshow {
    max-height: 600px;
    @apply h-screen;
  }
}
</style>