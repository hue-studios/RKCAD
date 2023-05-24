<template>
  <div
    class="min-h-screen w-full transition duration-150 bg-white dark:bg-slate-900 overflow-hidden lg:overflow-visible flex items-center justify-start flex-col relative">
    <LayoutRkc id="rkc-bg-icon" class="rkc-bg-icon" />
    <input id="nav-drawer-toggle" type="checkbox" class="hidden" />
    <div class="w-full flex items-center justify-center flex-col min-h-screen page__content">
      <LayoutHeader />
      <div class="w-full mx-auto min-h-screen relative">
        <slot />
      </div>
      <LayoutFooter />
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

<style>
.page {
  &__content {
    transition: all 0.35s var(--curve);
  }

  /* .nuxt-page {
    min-height: calc(90vh - 100px);
    z-index: 5;
    position: relative;
  } */
  &__header {
    /* padding-top: 65px; */
    height: 500px;
    background-color: rgba(0, 0, 0, 0.35);
    background-blend-mode: darken;
    margin-bottom: 50px;
    overflow: hidden !important;
    @apply bg-cover bg-center bg-no-repeat w-full flex items-center justify-center px-4 overflow-hidden relative;

    @media (min-width: theme('screens.md')) {}

    @media (min-width: theme('screens.lg')) {
      height: calc(100vh);
    }

    #rkc-bg-icon-2 {
      top: 0px;
      height: 96vh;
      width: 96vw;
      transition: all 0.35s var(--curve);
      /* fill: rgba(167, 169, 172, 0.075); */
      fill: rgba(255, 255, 255, 0.075);
      @apply fixed;

      path {
        /* fill: rgba(167, 169, 172, 0.1); */
        fill: rgba(255, 255, 255, 0.075);
      }
    }

    h1 {
      font-size: 36px;
      line-height: 46px;
      color: var(--white);
      margin-bottom: 50px;
      font-family: var(--light-font);
      transition: all 0.4s var(--curve) 0.1s;
      letter-spacing: 0.1em;
      @apply max-w-8xl w-full uppercase;

      @media (min-width: theme('screens.md')) {
        font-size: 66px;
        line-height: 66px;
      }

      @media (min-width: theme('screens.lg')) {
        font-size: 78px;
        line-height: 76px;
      }
    }
  }

  &__body {
    z-index: 10;
    /* background: var(--white); */
    @apply px-4 2xl:px-0 max-w-8xl;

    &-header {
      &-subtitle {
        font-size: 10px;
        line-height: 1.5rem;
        @apply font-bold tracking-wider;
      }

      &-title {
        font-size: 2rem;
        line-height: 2rem;
        font-family: var(--light-font);
        @apply font-light tracking-wide;

        @media (min-width: theme('screens.lg')) {
          font-size: 42px;
          line-height: 46px;
        }

        @media (min-width: theme('screens.xl')) {
          font-size: 50px;
          line-height: 58px;
        }
      }
    }
 
  }
}



.rkc-bg-icon {
  height: 96vh;
  width: 96vw;
  transition: all 0.35s var(--curve);
  /* fill: rgba(167, 169, 172, 0.125);
  fill: rgba(167, 169, 172, 1); */
  @apply fixed;

  path {
    fill: rgba(167, 169, 172, 0.075);
    animation: icon-animation 10s ease-in-out infinite;
  }

  /* path:nth-of-type(1) {
    animation-delay: 0.1s;
  } */
  path:nth-of-type(2) {
    animation-delay: 0.4s;
  }

  path:nth-of-type(3) {
    animation-delay: 0.8s;
  }
}

@keyframes icon-animation {
  0% {
    fill: rgba(167, 169, 172, 0.075);
  }

  50% {
    fill: rgba(167, 169, 172, 0.025);
  }

  100% {
    fill: rgba(167, 169, 172, 0.075);
  }
}

#rkc-bg-icon.colored {
  fill: rgba(98, 121, 132, 0.025);
}

.screen-enter-from {
  opacity: 0;
}

.screen-enter-active,
.screen-leave-active {
  transition: all 0.45s var(--curve);
}

.screen-enter,
.screen-leave-to {
  opacity: 0;
}</style>
