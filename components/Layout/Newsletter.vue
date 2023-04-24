<template>
  <div
    class="w-full flex items-center justify-center flex-col md:flex-row max-w-7xl z-10 my-40 px-4 newsletter"
  >
    <div class="w-full md:w-1/2 max-w-2xl">
      <h3 class="w-full uppercase">Stay <br />Inspired</h3>
      <p class="">
        Sign up for our digital newsletter featuring our latest projects, design
        details, and more.
      </p>
      <a @click.prevent class="w-full uppercase"
        >Sign Up <nuxt-icon name="arrow-right" class="ml-1 arrow-right-icon"
      /></a>
    </div>
    <img
      src="/images/newsletter.jpg"
      alt="RKC Newsletter"
      class="w-full md:w-1/2 max-w-2xl md:max-w-none"
    />
  </div>
</template>

<script setup>
</script>
<style>
.newsletter {
  h3 {
    font-size: 36px;
    line-height: 46px;

    margin-bottom: 20px;
    font-family: var(--light-font);
    transition: all 0.4s var(--curve) 0.1s;

    @apply max-w-7xl w-full uppercase tracking-wide md:tracking-wider;
    @media (min-width: theme('screens.md')) {
      font-size: 66px;
      line-height: 66px;
    }
    @media (min-width: theme('screens.lg')) {
      font-size: 78px;
      line-height: 76px;
    }
  }
  p {
    margin-bottom: 20px;
  }
  a {
    font-size: 0.75rem;
    line-height: 1rem;

    @apply inline-block;
    .nuxt-icon {
      height: 12px;
      fill: black;
      transition: 0.4s var(--curve);

      svg {
        margin-top: -2px;
        height: 12px;
        display: inline-block !important;
        line {
          stroke-width: 3px;
          stroke: var(--blue) !important;
        }
      }
    }
  }
  img {
  }
}
</style>