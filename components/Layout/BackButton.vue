<template>
  <a
    class="back-btn"
    @click.prevent="goBack()"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <nuxt-icon name="arrow-left" class="mr-2 arrow-left-icon" />
    <transition name="fade">
      <span class="text" v-if="hover">Back to {{ page }}</span>
    </transition>
  </a>
</template>
<script setup>
const props = defineProps({
  page: {
    type: String,
    default: '',
  },
})
const hover = ref(false)
const router = useRouter()
function goBack() {
  router.push({ path: '/interior-design-architecture-portfolio/' })
}
</script>
<style>
.back-btn {
  height: 65px;
  background: var(--blue);
  color: var(--white);
  font-size: 0.75rem;
  line-height: 1rem;
  padding-left: 20px;
  padding-right: 20px;
  transition: all 0.4s var(--curve);
  @apply w-auto flex items-center justify-center uppercase cursor-pointer;
  @media (min-width: theme('screens.xl')) {
  }
  .arrow-left-icon {
    height: 30px;
    transition: 0.4s var(--curve);
    color: var(--white);
    @apply inline-block;
    svg {
      height: 30px;
      display: inline-block !important;
      path {
        stroke-width: 5px;
        stroke: var(--white) !important;
      }
    }
  }
  .text {
  }
}
</style>
