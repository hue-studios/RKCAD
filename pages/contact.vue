<template>
  <div v-if="isImageLoaded"
    class="bg-cover bg-center bg-no-repeat relative w-full h-screen flex flex-row items-end justify-center overflow-hidden contact">
    <LayoutRkc id="rkc-bg-icon-2" class="rkc-bg-icon" />
    <div class="w-full max-w-8xl flex flex-row justify-between items-center px-4">
      <div class="text-left contact__info">
        <h1 class="w-full uppercase white tracking-wider">Studio</h1>
        <p>16 Maple St Summit NJ</p>
        <p><a href="tel:(908) 273-6565" target="_blank">908.273.6565</a></p>
        <p>
          <a href="mailto:info@rkcad.com" target="_blank">info@rkcad.com</a>
        </p>
        <div class="flex items-start justify-start flex-row mt-6">
          <a href="https://www.instagram.com/rkcad/" target="_blank" class="mr-6">
            <nuxt-icon name="instagram" class="" />
          </a>
          <a href="https://www.houzz.com/professionals/architects-and-building-designers/rosen-kelly-conway-architecture-and-design-pfvwus-pf~1350653163?"
            target="_blank" class="">
            <nuxt-icon name="houzz" class="" />
          </a>
        </div>
      </div>
      <div class="flex items-end flex-col rkc-name">
        <LayoutRosen id="rosen" />
        <LayoutKelly id="kelly" />
        <LayoutConway id="conway" />
      </div>
    </div>
  </div>
  <LayoutLoader v-else />
</template>

<script setup>
const isImageLoaded = ref(false);
onMounted(() => {
  const image = new Image();
  image.src = 'https://admin.rkcad.com/assets/73046284-e82d-4c2b-84b5-0246b56623bf?key=xlarge'
  image.onload = () => {
    isImageLoaded.value = true;
  };
});
</script>
<style scoped>
.contact {
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
  background-image: url('https://admin.rkcad.com/assets/73046284-e82d-4c2b-84b5-0246b56623bf?key=medium');

  @media (min-width: theme('screens.md')) {
    background-image: url('https://admin.rkcad.com/assets/73046284-e82d-4c2b-84b5-0246b56623bf?key=large');
  }

  @media (min-width: theme('screens.lg')) {
    background-image: url('https://admin.rkcad.com/assets/73046284-e82d-4c2b-84b5-0246b56623bf?key=xlarge');
  }

  #rkc-bg-icon-2 {
    top: 0px;
  }

  &__info {


    color: var(--white);
    transition: all 0.4s var(--curve) 0.1s;
    @apply mb-4;
    @media (min-width: theme('screens.lg')) {}

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 15px;
      margin-bottom: 5px;
    }

    a {
      color: var(--white);
    }
  }

  .rkc-name {
    color: var(--white);
    margin-right: 4px;
    @apply mb-4;
    svg {
      height: 20px;
      fill: var(--white) !important;
      @media (min-width: theme('screens.sm')) {
    }

    @media (min-width: theme('screens.md')) {
      height: 40px;
    }

    @media (min-width: theme('screens.lg')) {
    }
      path {
        fill: var(--white) !important;
      }
    }
    svg:nth-of-type(2) {
      @apply my-4;
    }
  }
}</style>