<template>
  <div class="flex items-center justify-center flex-col team-profile" @click="closeProfile">
    <div class="flex items-center justify-center flex-col md:flex-row team-profile__content">
      <transition name="fade" mode="out-in">
        <div v-if="profileStore.profile.image" class="team-profile__content-image" :style="'background-image: url(https://admin.rkcad.com/assets/' +
          profileStore.profile.image + '?key=medium'">

        </div>
        <div v-else class="flex items-center justify-center team-profile__content-image">
          <LayoutRkc class="rkc-icon" />
        </div>
      </transition>

      <div class="team-profile__content-body">
        <h1>{{ profileStore.profile.name }}</h1>
        <h5>{{ profileStore.profile.title }}</h5>
        <p v-if="profileStore.profile.bio" v-html="replaceNewlinesWithBreaks(profileStore.profile.bio)"></p>
        <div v-if="profileStore.profile.quote" v-html="profileStore.profile.quote"></div>
        <h5 v-if="profileStore.profile.education">Education</h5>
        <p v-html="replaceNewlinesWithBreaks(profileStore.profile.education)"></p>
      </div>

    </div>

  </div>
</template>

<script setup>
import { replaceNewlinesWithBreaks } from '~~/utils/strings'
import { useProfileStore } from '~~/store/ProfileStore'
const profileStore = useProfileStore()
function closeProfile() {
  const element = document.getElementById('profile-toggle')
  element.checked = false
  // setTimeout(profileStore.clearProfile(), 3000);
}

</script>

<style >
.team-profile {
  height: 100vh;
  position: fixed;
  right: 0px;
  top: 0px;
  background: var(--blue);
  color: var(--white);
  width: 100%;
  z-index: 50;
  transform: translateX(100%);
  transition: 0.65s var(--curve);

  &__content {
    &-image {
      width: 100%;
      height: 350px;
      transition: 0.65s var(--curve);
      transform: translateX(200px);
      z-index: 10;
      @apply bg-center bg-cover bg-no-repeat;

      @media (min-width: theme('screens.md')) {}

      @media (min-width: theme('screens.lg')) {
        width: 500px;
        height: 500px;
      }

      svg {
        width: 300px;

        path {
          opacity: 0.4;
          fill: var(--grey);
          animation-duration: 6s;
          animation-timing-function: var(--curve);
          animation-iteration-count: infinite;
          animation-name: example;
        }

        path:nth-of-type(2) {
          animation-delay: 0.1s;

        }

        path:nth-of-type(1) {
          animation-delay: 0.4s;
        }

        path:nth-of-type(3) {
          animation-delay: 0.8s;
        }

        @keyframes example {
          0% {
            opacity: 0.4;
            fill: var(--grey);

          }

          50% {
            opacity: 1;
            fill: var(--white);
          }

          100% {
            opacity: 0.4;
            fill: var(--grey);
          }
        }
      }
    }

    &-body {
      width: 100%;
      padding: 1rem;

      @media (min-width: theme('screens.lg')) {
        width: 500px;

      }

      h1 {
        font-size: 2rem;
        line-height: 1.5rem;
        margin-top: 10px;
        margin-bottom: 10px;

        transition: 0.65s var(--curve) 0.05s;
        transform: translateX(100px);
        opacity: 0;
        @apply uppercase tracking-wider font-light;
      }

      h5 {
        transition: 0.65s var(--curve) 0.1s;
        transform: translateX(100px);
        opacity: 0;
        font-size: 0.75rem;
        line-height: 1rem;
        @apply tracking-wider my-4 uppercase font-bold;
      }

      p {
        margin-bottom: 0.5rem;
        transition: 0.65s var(--curve) 0.13s;
        transform: translateX(100px);
        opacity: 0;

      }

      p:nth-of-type(2) {
        transition-delay: 0.15s;
      }

      h5:nth-of-type(2) {
        transition-delay: 0.16s;
      }

      p:nth-of-type(3) {
        transition-delay: 0.17s;
      }
    }
  }
}

#profile-toggle:checked~.team-profile {
  transform: translateX(0%);

  .team-profile__content-image {
    transform: translateX(0px);
  }

  .team-profile__content-body {
    h1 {
      transform: translateX(0px);
      opacity: 1;
    }

    h5 {
      transform: translateX(0px);
      opacity: 1;
    }

    p {
      transform: translateX(0px);
      opacity: 1;
    }
  }

}</style>
