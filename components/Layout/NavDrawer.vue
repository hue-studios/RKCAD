<template>
  <div
    @click="closeNavDrawer"
    id="nav-drawer"
    class="flex items-center justify-center flex-col nav-drawer"
    ref="navDrawerRef"
  >
    <div class="w-full nav-drawer__menu-box p-4 relative">
      <!-- <XIcon class="cursor-pointer h-8 heroicon-sw-1.2 close-btn" /> -->
      <ul tabindex="0" class="w-full nav-drawer__menu text-center">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li>
          <nuxt-link to="/interior-design-architecture-portfolio/"
            >Work</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/rosen-kelly-conway-architecture-design/"
            >About</nuxt-link
          >
        </li>
        <li>
          <nuxt-link to="/new-york-architecture-design-studio/">Team</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/architecture-design-press-awards/">Press</nuxt-link>
        </li>

        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { onClickOutside } from '@vueuse/core'
import { closeScreen, toggleScreen } from '~~/composables/useScreen'
const navDrawerRef = ref(null)
function closeNavDrawer() {
  const element = document.getElementById('nav-drawer-toggle')
  element.checked = false
  const navBtn = document.getElementById('nav-btn')
  navBtn.classList.remove('open')
  closeScreen()
}
function toggleNavDrawer() {
  const element = document.getElementById('nav-drawer-toggle')
  if (element.checked) {
    element.checked = false
  } else {
    element.checked = true
  }
  toggleScreen()
}
onClickOutside(navDrawerRef, (event) => {
  console.log('outside')
  closeNavDrawer()
})
</script>
<style scoped>
.nav-drawer {
  min-height: 100vh;
  max-height: 100vh;
  width: 300px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 30;
  background: rgba(123, 145, 163, 0.75);
  transform: translateX(100%);
  transition: 0.25s var(--curve);
  @apply shadow-lg;
  .close-btn {
    /* right: 0px;
    top: 0px;
    @apply absolute; */
  }
  &__menu-box {
  }
  &__menu {
    li {
      transform: translateX(50px);
      opacity: 0;
      transition: 0.35s var(--curve);
      @apply my-1;
      a {
        color: var(--white);
        font-size: 13px;
        letter-spacing: 0.3em;
        @apply block uppercase  py-1;
      }
    }
    li:nth-of-type(2) {
      transition-delay: 0.05s;
    }
    li:nth-of-type(3) {
      transition-delay: 0.1s;
    }
    li:nth-of-type(4) {
      transition-delay: 0.15s;
    }
    li:nth-of-type(5) {
      transition-delay: 0.2s;
    }
    li:nth-of-type(6) {
      transition-delay: 0.25s;
    }
  }
}
#nav-drawer-toggle:checked ~ .nav-drawer {
  transform: translateX(0%);
  .nav-drawer__menu {
    li {
      transform: translateX(0px);
      opacity: 1;
      @apply my-1;
    }
  }
}
#nav-drawer-toggle:checked ~ .page-content {
  /* transform: matrix(1, 0, 0, 1, 8, 0); */
  transform: translateX(8px);
  filter: blur(2px);
}

/* #nav-drawer-toggle:checked ~ .nav-drawer > .nav-drawer-overlay {
  background: rgba(48, 54, 64, 0.4);
  opacity: 0.999999;
  visibility: visible;
} */
</style>
