<template>
  <div
    class="min-h-screen transition duration-150 bg-white dark:bg-slate-900 overflow-hidden lg:overflow-visible flex items-center justify-start flex-col relative"
  >
    <input id="nav-drawer-toggle" type="checkbox" class="hidden" />
    <div class="w-full flex items-center justify-center flex-col page-content">
      <LayoutHeader />

      <slot />
      <!-- <LayoutFooter /> -->
    </div>
    <transition name="screen">
      <LayoutScreen v-if="screen" />
    </transition>
    <LayoutNavDrawer />
  </div>
</template>
<script>
import { screen } from '~~/composables/useScreen'
</script>

<style scoped>
.page-content {
  transition: all 0.25s var(--curve);
  max-width: 1400px;
  .nuxt-page {
    min-height: calc(90vh - 100px);
    z-index: 5;
    position: relative;
  }
}
.screen-enter-from {
  opacity: 0;
}
.screen-enter-active,
.screen-leave-active {
  transition: all 0.25s var(--curve);
}

.screen-enter,
.screen-leave-to {
  opacity: 0;
}
</style>
