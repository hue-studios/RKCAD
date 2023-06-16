<template>
  <div :class="pageStore.page">
    <NuxtLayout>
      <NuxtLoadingIndicator color="var(--blue)" :height="8" />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
import { usePageStore } from '~~/store/PageStore'
const pageStore = usePageStore()
// useHead({
//   link: [
//     {
//       rel: 'preconnect',
//       href: 'https://admin.rkcad.com'
//     },
//   ]
// })
</script>