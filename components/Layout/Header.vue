<template>
  <div class="w-full px-4 xl:px-0 mx-auto relative max-w-7xl header">
    <nuxt-link to="/" class="inline-block ml-4">
      <nuxt-icon name="rkc" class="rkc-icon" />
    </nuxt-link>
    <LayoutNavButton />
  </div>
</template>

<script setup>
</script>
<style >
.header {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 65px;
  z-index: 10;
  /* border-bottom: thin solid rgba(123, 145, 163, 0.01); */
  /* max-width: var(--max-width); */

  @media (min-width: 1280px) {
    left: calc(50% - 640px);
    /* border-bottom: none; */
  }

  .rkc-icon {
    font-size: 64px;
    line-height: 65px;
    color: var(--white);
    margin-top: -20px;
    margin-bottom: -20px;

    svg {
      mix-blend-mode: difference;
      @apply inline-block;
      path {
        mix-blend-mode: difference;
      }
    }
  }
}
</style>
