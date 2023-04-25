<template>
  <div
    class="relative w-full min-h-screen flex items-center justify-center flex-col home"
  >
    <div
      class="relative w-full min-h-screen flex items-center justify-center flex-col"
    >
      <h1 class="tracking-wide">New digital experience coming soon.</h1>
      <div
        class="w-full max-w-7xl flex items-center justify-center mt-40 flex-col sm:flex-row"
      >
        <nuxt-link to="/interior-design-architecture-portfolio/"
          >Work</nuxt-link
        >
        <nuxt-link to="/new-york-architecture-design-studio/">About</nuxt-link>
        <nuxt-link to="/rosen-kelly-conway-architecture-design-team/"
          >Team</nuxt-link
        >
        <nuxt-link to="/architecture-design-press-awards/">Press</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
<style scoped>
.home {
  a {
    font-size: 10px;

    @apply uppercase tracking-wider py-4 px-6 font-bold;
  }
}
</style>