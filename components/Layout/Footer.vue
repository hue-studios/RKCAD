<template>
  <div
    class="w-full  footer"
  >
  <div class="w-full pt-0 pb-24 px-6 xl:px-0 flex flex-col items-center justify-center mx-auto max-w-7xl">
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
          >designed by <LayoutHue />
         </a>
      </h5>
    </div>
  </div>
  </div>
</template>
  


<style>
.footer {
  position: relative;
  /* background: var(--white); */
  padding-top: 100px;
  transition: all 0.4s var(--curve);
  z-index: 1;
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
