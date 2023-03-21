<template>
  <div class="w-full px-4 xl:px-0 relative header">
    <nuxt-link to="/">
      <nuxt-icon name="rkc" class="rkc-icon" />
    </nuxt-link>
    <LayoutNavButton />
  </div>
</template>

<script setup>
</script>
<style scoped>
.header {
  height: 65px;
  /* border-bottom: thin solid rgba(123, 145, 163, 0.01); */
  max-width: 1400px;
  @media (min-width: theme('screens.lg')) {
    /* border-bottom: none; */
  }
}
.rkc-icon {
  font-size: 64px;
  line-height: 65px;
  color: var(--blue);
  margin-top: -20px;
  margin-bottom: -20px;
  svg {
    @apply inline-block;
  }
}
</style>
