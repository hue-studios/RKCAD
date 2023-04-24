<template>
  <div
    class="w-full pt-0 pb-24 flex flex-col items-center justify-center mx-auto footer"
  >
    <div
      class="flex items-center justify-cetner text-center flex-col sm:flex-row footer__col"
    >
      <nuxt-link to="/" class="mx-4 p-2">Home</nuxt-link>
      <nuxt-link to="/interior-design-architecture-portfolio/" class="mx-4 p-1"
        >Work</nuxt-link
      >
      <nuxt-link to="/new-york-architecture-design-studio/" class="mx-4 p-1"
        >About</nuxt-link
      >
      <nuxt-link
        to="/rosen-kelly-conway-architecture-design-team/"
        class="mx-4 p-1"
        >Team</nuxt-link
      >
      <nuxt-link to="/architecture-design-press-awards/" class="mx-4 p-1"
        >Press</nuxt-link
      >
      <nuxt-link to="/contact" class="mx-4 p-1">Contact</nuxt-link>
    </div>
    <div class="flex items-center justify-center flex-row mt-6">
      <a
        href="https://www.instagram.com/rkcad/"
        target="_blank"
        class="mx-4 p-2"
      >
        <nuxt-icon name="instagram" class="" />
      </a>
      <a
        href="https://www.houzz.com/professionals/architects-and-building-designers/rosen-kelly-conway-architecture-and-design-pfvwus-pf~1350653163?"
        target="_blank"
        class="mx-4 p-2"
      >
        <nuxt-icon name="houzz" class="" />
      </a>
    </div>
    <div
      class="flex items-center justify-center text-center flex-col md:flex-row mt-6 footer__col"
    >
      <p class="mx-4 p-2">
        Phone: <a href="tel:(908) 273-6565">908.273.6565</a>
      </p>
      <p>Studio: 16 Maple St Summit NJ</p>
      <p class="mx-4 p-2">
        Email: <a href="mailto:info@rkcad.com">Info@rkcad.com</a>
      </p>
    </div>
    <div class="flex w-full flex-col items-center justify-center mt-6">
      <h5 class="tracking-widest uppercase body-font copyright">
        &#169; {{ new Date().getFullYear() }} Rosen Kelly Conway
      </h5>
      <h5 class="web-designer">
        <a
          href="https://huestudios.com"
          target="_blank"
          rel="noopener"
          class="columns shrink body-font uppercase"
          >designed by
          <svg
            id="hue-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 98.44 48.62"
          >
            <title>hue Creative Marketing - New York | Miami</title>
            <path
              class="h"
              d="M347.41,282.12h6.28v19.35c2-3.5,6.14-5.48,10.77-5.48,3.5,0,8.52,1.25,10.44,5.28.66,1.32,1.12,2.91,1.12,7.73v20.74h-3.56c-5.61,0-2.78-19.62-2.78-19.62,0-3,0-9.38-7.13-9.38a8.57,8.57,0,0,0-7.79,4.43c-1.06,1.85-1.06,5-1.06,7v17.57h-6.28Z"
              transform="translate(-347.41 -282.12)"
            />
            <path
              class="h"
              d="M388.17,296.59v21.34c0,3.24.73,7.33,7.07,7.33,3.1,0,6-1.06,7.79-3.7,1.39-2,1.39-4.56,1.39-6.21,0,0-1.87-18.76,2.07-18.76h4.33v27c0,.66.13,4.36.2,6.21h-6.47l-.13-5.68c-1.19,2.31-3.44,6-10.57,6-8.19,0-12-4.69-12-11.23V296.59Z"
              transform="translate(-347.41 -282.12)"
            />
            <path
              class="h"
              d="M422,314.29c-.13,6.87,2.71,12,9.51,12,5.93,0,6.3-6.87,9.67-6.87h4.33a11.26,11.26,0,0,1-2.84,6.94c-1.45,1.65-4.76,4.43-11.43,4.43-10.44,0-15.39-6.47-15.39-17,0-6.54,1.32-12,6.54-15.59,3.17-2.25,7.13-2.44,9.05-2.44,14.86,0,14.53,13.15,14.4,18.56Zm17.51-4.36c.07-3.17-.53-9.78-8.19-9.78-4,0-8.92,2.44-9,9.78Z"
              transform="translate(-347.41 -282.12)"
            /></svg
        ></a>
      </h5>
    </div>
  </div>
</template>
<script setup>
</script>
<style scoped>
.footer {
  position: relative;
  max-width: var(--max-width);
  margin-top: 100px;
  &__col {
    a,
    p {
      font-size: 10px;
      @apply uppercase tracking-widest;
    }
  }
  .nuxt-icon {
    font-size: 24px;
    svg {
    }
  }
  .nuxt-icon:hover {
    svg path {
      fill: rgb(255, 0, 92) !important;
    }
  }
}
h5.web-designer {
  margin-top: 0px;
  margin-bottom: 0px;
  letter-spacing: 0.1em;
  a {
    font-size: 7px;
    color: var(--blue);

    svg {
      width: 35px;
      height: auto;
      display: inline;
      fill: rgba(123, 145, 163, 0.75);
      stroke: none;
      margin-top: -11px;
      margin-left: 3px;
      path {
        transition: all 0.3s linear;
      }
      path:nth-of-type(1) {
        transition-delay: 0.1s;
      }
      path:nth-of-type(2) {
        transition-delay: 0.2s;
      }
      path:nth-of-type(3) {
        transition-delay: 0.3s;
      }
    }
  }
  a:hover {
    svg path {
      fill: rgb(255, 0, 92);
    }
  }
}
h5.copyright {
  font-size: 9px;
  color: var(--blue);
  margin-top: 10px;
  margin-bottom: 10px;
  letter-spacing: 0.2em;
}
</style>
