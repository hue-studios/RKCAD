<template>
  <nuxt-link
    v-if="!pending && prevProject.data.length"
    :to="prevProject.data[0].url"
    ><nuxt-icon name="arrow-left" class="mr-2 arrow-left-icon" /> Prev
    Project</nuxt-link
  >
  <a v-else class="opacity-40" href="#" @click.prevent
    ><nuxt-icon name="arrow-left" class="mr-2 arrow-left-icon" /> Prev
    Project</a
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
