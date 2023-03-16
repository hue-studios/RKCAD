<template>
  <nuxt-link
    v-if="!pending && prevProject.data.length"
    :to="prevProject.data[0].url"
    >Prev Project</nuxt-link
  >
</template>

<script setup>
const props = defineProps({
  sort: {
    type: [String, Number],
    default: '',
  },
})
const { data: prevProject, pending } = await useLazyFetch(
  `https://admin.rkcad.com/items/projects?filter[sort][_lt]=${props.sort}&filter[status][_eq]=published&fields=url,sort,id&meta=*`
)
</script>
