<template>
  <div class="team-card-wrapper">
    <!-- @click="handleView($event)" -->
    <div
      class="flex flex-col items-start team-card"
      :class="{ expanded: showBody }"
      :style="styleObject"
    >
      <div class="flex flex-col items-start justify-start team-card__header">
        <div
          v-if="person.image"
          :style="
            'background-image: url(https://admin.rkcad.com/assets/' +
            person.image +
            'key=small)'
          "
          class="bg-repeat-none bg-center bg-cover team-card__header-image"
        />
        <div
          v-else
          class="flex items-center justify-center team-card__header-image"
        >
          <LayoutRkc class="rkc-icon" />
        </div>
        <h3 class="w-full uppercase">{{ person.name }}</h3>
        <h5 class="w-full uppercase">{{ person.title }} {{ person.status }}</h5>
        <a @click.prevent class="w-full uppercase rkc-link"
          >Bio <nuxt-icon name="arrow-right" class="ml-1 arrow-right-icon"
        /></a>
      </div>
      <div class="hidden team-card__body">
        <p>
          {{ person.bio }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  person: {
    type: Object,
    default: {},
  },
})
const styleObject = ref({
  transform: 'translate(0px, 0px)',
})
const showBody = ref(false)
function handleView(el) {
  showBody.value = !showBody.value
  let viewportOffset = el.target.getBoundingClientRect()
  const icon = document.getElementById('rkc-bg-icon')
  if (showBody.value) {
    document.body.style.top = '-' + window.scrollY + 'px'
    document.body.style.position = 'fixed'
    styleObject.value.transform =
      'translate(' +
      viewportOffset.left * -1 +
      'px, ' +
      viewportOffset.top * -1 +
      'px)'
    console.log(icon)
    icon.classList.add('colored')
  } else {
    styleObject.value = { transform: 'translate(0px, 0px)' }
    let scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    icon.classList.remove('colored')
  }
}
</script>

<style >
.team-card-wrapper {
  margin-bottom: 20px;
}
.team-card {
  margin-bottom: 1rem;
  position: relative;
  width: 375px;
  height: 480px;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;
  transform-origin: center center;
  transition: all 0.35s var(--curve);
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    pointer-events: none;
    @apply tracking-wide;
    &-image {
      width: 375px;
      height: 375px;
      background-color: var(--grey);
      margin-bottom: 0.1rem;
      svg {
        fill: var(--white);
      }
    }
    h3 {
      font-size: 2rem;
      line-height: 1.5rem;
      margin-top: 10px;
      margin-bottom: 10px;
      @apply font-light;
    }
    h5 {
      font-size: 0.75rem;
      line-height: 1rem;
      @apply font-light;
    }
    /* a {
      font-size: 0.75rem;
      line-height: 1rem;
      margin-top: 10px;
      @apply inline-block;
      .nuxt-icon {
        height: 12px;
        fill: black;
        transition: 0.4s var(--curve);

        svg {
          margin-top: -2px;
          height: 12px;
          display: inline-block !important;
          
          path {
            stroke-width: 10px;
            stroke: var(--blue) !important;
          }
        }
      }
    } */
  }
  &__body {
    pointer-events: none;
    width: 100%;
    max-width: 500px;
    p {
      font-size: 0.875rem;
      line-height: 1.5rem;
    }
  }
}

.expanded {
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  color: var(--white);
  background-color: var(--blue2);
  @apply flex-row;
}
</style>
