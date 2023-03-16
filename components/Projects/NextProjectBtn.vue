<template>
  <nuxt-link
    v-if="!pending && nextProject.data.length"
    :to="nextProject.data[0].url"
    >Next Project</nuxt-link
  >
</template>

<script setup>
const props = defineProps({
  sort: {
    type: [String, Number],
    default: '',
  },
})
const { data: nextProject, pending } = await useLazyFetch(
  `https://admin.rkcad.com/items/projects?filter[sort][_gt]=${props.sort}&filter[status][_eq]=published&fields=title,url,sort,id&meta=*`
)
</script>
