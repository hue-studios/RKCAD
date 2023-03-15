<template>
  <div class="relative w-full home">
    <nuxt-link
      v-for="(project, index) in projects"
      :key="index"
      :to="'/interior-design-architecture-portfolio/' + project.url"
      class="inline-block uppercase tracking-wide text-xs py-4 px-6 m-4"
      >{{ project.title }}</nuxt-link
    >
  </div>
</template>

<script setup>
const { getItems } = useDirectusItems()
const projects = await getItems({
  collection: 'projects',
  params: {
    fields: ['*'],
  },
})
</script>
<style scoped>
</style>