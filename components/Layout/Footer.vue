<template>
  <div
    class="w-full pt-0 pb-24 px-6 xl:px-0 flex flex-col items-center justify-center mx-auto max-w-7xl footer"
  >
    <div
      class="w-full flex flex-col items-center justify-center lg:flex-row lg:items-end lg:justify-between"
    >
      <div
        class="flex items-center justify-center text-center lg:text-left flex-col shrink-0 mb-8 lg:mb-0 footer__col footer__nav"
      >
        <div
          class="w-full flex items-center md:items-start justify-center flex-row mb-6"
        >
          <nuxt-link to="/" class="p-1 w-1/3">Home</nuxt-link>
          <nuxt-link
            to="/interior-design-architecture-portfolio/"
            class="p-1 w-1/3"
            >Work</nuxt-link
          >
          <nuxt-link
            to="/new-york-architecture-design-studio/"
            class="p-1 w-1/3"
            >About</nuxt-link
          >
        </div>
        <div class="w-full flex items-start justify-center flex-row">
          <nuxt-link
            to="/rosen-kelly-conway-architecture-design-team/"
            class="p-1 w-1/3"
            >Team</nuxt-link
          >
          <nuxt-link to="/architecture-design-press-awards/" class="p-1 w-1/3"
            >Press</nuxt-link
          >
          <nuxt-link to="/contact" class="p-1 w-1/3">Contact</nuxt-link>
        </div>
      </div>
      <div
        class="flex items-center justify-center text-center flex-col lg:flex-row footer__col"
      >
        <p class="mr-5">Phone: <a href="tel:(908) 273-6565">908.273.6565</a></p>
        <p class="mr-5">Studio: 16 Maple St Summit NJ</p>
        <p class="mr-5">
          Email: <a href="mailto:info@rkcad.com">Info@rkcad.com</a>
        </p>
        <div class="flex flex-row lg:flex-row mt-8 lg:mt-0">
          <a
            href="https://www.instagram.com/rkcad/"
            target="_blank"
            class="ml-5"
          >
            <nuxt-icon name="instagram" class="" />
          </a>
          <a
            href="https://www.houzz.com/professionals/architects-and-building-designers/rosen-kelly-conway-architecture-and-design-pfvwus-pf~1350653163?"
            target="_blank"
            class="ml-5"
          >
            <nuxt-icon name="houzz" class="" />
          </a>
        </div>
      </div>
    </div>
    <div
      class="flex w-full flex-col lg:flex-row items-center justify-center lg:items-end lg:justify-end mt-6 font-bold tracking-wide"
    >
      <h5 class="tracking-widest uppercase body-font copyright">
        &#169; {{ new Date().getFullYear() }} Rosen Kelly Conway
      </h5>
      <h5 class="lg:ml-12 web-designer">
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
<style lang="postcss">
.footer {
  position: relative;

  margin-top: 100px;
  transition: all 0.4s var(--curve);
  &__col {
    a,
    p {
      font-size: 9px;
      @apply uppercase tracking-widest font-bold;
    }
    a.router-link-exact-active {
      color: var(--green);
    }
  }
  &__nav {
    width: 300px;
    a {
      width: 100px;
    }
  }
  .nuxt-icon {
    font-size: 20px;
    margin-top: -5px;
    @apply inline-block;
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
  margin-bottom: -2px;
  a {
    font-size: 9px;
    color: var(--blue);
    display: inline-block;
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
  letter-spacing: 0.2em;
}
.page-contact {
  .footer {
    opacity: 0;
  }
}
</style>
