<template>
  <div v-if="isImageLoaded"
    class="relative w-full min-h-screen flex flex-wrap flex-col justify-center items-center about"
  >
    <div
      class="page__header"
      :style="
        'background-image: url(https://admin.rkcad.com/assets/' +
        about.header_image +
        ')'
      "
    >
      <LayoutRkc id="rkc-bg-icon-2" class="rkc-bg-icon" />
      <h1 class="" v-html="formattedTitle"></h1>
    </div>
    <div
      class=" flex flex-wrap flex-col lg:flex-row lg:flex-wrap items-start justify-between w-full page__body relative about__body"
    >
      <h2 class="uppercase font-thin about__body-caption">
        Embracing Design Heritage with a Modern Vision
      </h2>
      <div class="about__body-content">
        <h2 class="page__body-header-subtitle">Vision</h2>
        <h3 class="page__body-header-title">Who<br />We Are</h3>
        <p v-html="about.who_we_are"></p>

        <h2 class="page__body-header-subtitle">Process</h2>
        <h3 class="page__body-header-title">Our <br />Approach</h3>
        <p v-html="about.our_approach"></p>

        <h2 class="page__body-header-subtitle">Expertise</h2>
        <h3 class="page__body-header-title">What <br />We Do</h3>
        <p v-html="about.what_we_do"></p>
      </div>
      <div class="flex flex-row items-center justify-center about__body-image">
        <div class="w-5/6 flex flex-row items-center justify-between absolute">
          <h5>
            Architecture<br />
            Design
          </h5>
          <h5 class="-ml-[120px]">
            Interior<br />
            Design
          </h5>
        </div>
        <img
          src="/images/about/about-2.jpg"
          alt="Architecture and Interior Design"
        />
      </div>
    </div>
  </div>
  <div v-else>Loading</div>
</template>

<script setup>
const { getItems } = useDirectusItems()
const about = await getItems({
  collection: 'about',
  params: {
    fields: ['*'],
  },
})
const isImageLoaded = ref(false);
onMounted(() => {
  const image = new Image();
    image.src = 'https://admin.rkcad.com/assets/' +
    about.header_image + 'key=xlarge';

    image.onload = () => {
      isImageLoaded.value = true;
    };
 
});
const formattedTitle = computed(() => {
  return about.title.replace(/\n/g, '<br>')
})
</script>
<style scoped>
.about {
  &__body {
    &-caption {
      font-size: 36px;
      line-height: 46px;
      font-family: var(--light-font);
      font-weight: 100;
      @apply order-1 lg:order-2 w-full lg:w-1/2 text-right opacity-30 tracking-wide pl-8 md:pl-32 lg:pl-2;
      @media (min-width: theme('screens.md')) {
        font-size: 66px;
        line-height: 66px;
      }
      @media (min-width: theme('screens.xl')) {
        margin-top: 100px;
        font-size: 78px;
        line-height: 88px;
      }
      @media (min-width: theme('screens.2xl')) {
        font-size: 96px;
        line-height: 106px;
      }
    }
    &-content {
      max-width: 600px;
      @apply w-full lg:w-1/2 order-2 lg:order-1 lg:pr-2;
      h2 {
        font-size: 9px;
        line-height: 10px;
        margin-top: 50px;
        margin-bottom: 10px;
        @apply tracking-wide uppercase font-bold;
      }
      h3 {
        font-size: 2.5rem;
        line-height: 2.5rem;
        margin-top: 0px;
        margin-bottom: 20px;
        @apply tracking-wide uppercase;
      }
      p {
        padding-bottom: 50px;
        line-height: 30px;
      }
    }
    &-image {
      @apply w-full relative order-3 lg:w-1/2 lg:absolute lg:right-0 flex flex-row items-center lg:px-4;
      @media (min-width: theme('screens.lg')) {
        bottom: 50px;
      }
      h5 {
        color: var(--white);
        font-size: 16px;
        line-height: 22px;
        @apply w-auto uppercase tracking-wide;
        @media (min-width: theme('screens.sm')) {
          font-size: 28px;
          line-height: 32px;
        }
        @media (min-width: theme('screens.md')) {
          font-size: 28px;
          line-height: 32px;
        }
        @media (min-width: theme('screens.lg')) {
          font-size: 28px;
          line-height: 32px;
        }
      }
    }
  }
}
</style>