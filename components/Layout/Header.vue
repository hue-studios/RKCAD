<template>
  <div class="w-full px-4 xl:px-0 mx-auto max-w-7xl relative header">
    <LayoutBackButton
      page="Work"
      :class="{ on: pageStore.page === 'page-work-detail' }"
    />
    <nuxt-link
      to="/"
      class="inline-block rkc-logo"
      :class="{ on: pageStore.page === 'page-work-detail' }"
    >
      <nuxt-icon name="rkc" class="rkc-icon" />
    </nuxt-link>
    <LayoutNavButton class="lg:pr-6" />
  </div>
</template>

<script setup>
import { usePageStore } from '~~/store/PageStore'
const pageStore = usePageStore()
</script>
<style>
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
  }
  .back-btn {
    left: -200px;
    transition: all 0.4s var(--curve);

    @apply absolute z-20;
  }
  .back-btn.on {
    left: 0px !important;
  }

  .rkc-icon {
    font-size: 64px;
    line-height: 65px;
    color: var(--white);
    margin-top: -20px;
    margin-bottom: -20px;
    transition: all 0.4s var(--curve);
    svg {
      mix-blend-mode: difference;
      @apply inline-block;
      path {
        mix-blend-mode: difference;
      }
    }
  }
  .rkc-logo {
    margin-left: 0px;
    @apply lg:ml-6;
  }
  .rkc-logo.on {
    margin-left: 80px;
  }
}
.page-work-detail,
.page-home {
  .rkc-icon {
    color: var(--blue);
  }
  #nav-btn {
    #nav-icon {
      span {
        background: var(--blue);
      }
    }
  }
}
</style>
