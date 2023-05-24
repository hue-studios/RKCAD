<template>
    <div v-if="imageIsLoaded" class="relative w-full flex items-center justify-center flex-col min-h-screen project">
        <div
            class="w-full flex items-start lg:items-end flex-col lg:flex-row justify-between uppercase tracking-wide mt-4 px-4 lg:px-0 project__header">
            <h1 class="relative">
                {{ removeFirst(project.title) }}
                <span class="hidden">
                    <span v-for="(category, index) in project.category" :key="index">{{
                        category
                    }}</span>
                    Project by Rosen Kelly Conway</span>
            </h1>

            <div class="flex flex-row project__header-category">
                <h2 v-if="project.category" class="mr-4">
                    <span class="">Category: </span>
                    <span v-for="(category, index) in project.category" :key="index">{{
                        category
                    }}</span>
                </h2>
                <h2 v-if="project.style" class="ml-4">
                    <span class="">Style: </span> {{ project.style }}
                </h2>
            </div>
        </div>
        <div class="w-full relative project__slideshow">
            <UtilitiesSlideshowThumbs :slides="project.images" />
            <div class="absolute z-10 w-full flex items-center justify-between flex-row project__projects-nav">
                <ProjectsPrevProjectBtn :sort="project.sort" />
                <ProjectsNextProjectBtn :sort="project.sort" />
            </div>
        </div>

        <div class="flex items-center flex-col justify-start tracking-wide my-20 px-4 xl:px-0 project__content">
            <h1 class="w-full">
                {{ project.title }}
                <span class="hidden">
                    <span v-for="(category, index) in project.category" :key="index">{{
                        category
                    }}</span>
                    Project by Rosen Kelly Conway</span>
            </h1>
            <p v-if="project.intro" class="w-full font-bold mt-4">{{ project.intro }}</p>
            <div class="w-full flex items-center flex-col lg:flex-row mt-12">
                <div v-if="project.challenge">
                    <h4 class="uppercase block tracking-wider mb-4">Challenge</h4>
                    <p class="text-sm leading-8">{{ project.challenge }}</p>
                </div>
                <div v-if="project.approach" class="py-6 lg:py-0 lg:px-6">
                    <h4 class="uppercase block tracking-wider mb-4">Approach</h4>
                    <p class="text-sm leading-8">{{ project.approach }}</p>
                </div>
                <div v-if="project.result">
                    <h4 class="uppercase block tracking-wider mb-4">Result</h4>
                    <p class="text-sm leading-8">{{ project.result }}</p>
                </div>
            </div>
        </div>
        <div class="project__recognition">
            <ProjectsPressSlider :slides="project.press_and_awards" />
        </div>
    </div>
    <LayoutLoader v-else />
</template>

<script setup>
import { removeFirst } from '~~/utils/strings'
const { params, path } = useRoute()
const { getItems } = useDirectusItems()
const { data, pending, error, refresh } = await useAsyncData('posts', () => {
    return getItems({
        collection: 'projects',
        params: {
            filter: {
                url: {
                    _eq: params.url,
                },

            },
            fields: [
                'approach, before_after.directus_files_id,category,challenge,credits,id,images.directus_files_id.id,images.directus_files_id.description,images.directus_files_id.tags,intro,result,sort,style,title,url,press_and_awards.press_id.category,press_and_awards.press_id.category,press_and_awards.press_id.title,press_and_awards.press_id.description,press_and_awards.press_id.url,press_and_awards.press_id.link,press_and_awards.press_id.images.directus_files_id.id,press_and_awards.press_id.images.directus_files_id.description,press_and_awards.press_id.images.directus_files_id.tags',
            ],
        },
    })
})
const isImageLoaded = ref(false);
const project = ref(data.value[0])
onMounted(() => {
    const image = new Image();
    if (project.images.length > 0) {
        image.src = 'https://admin.rkcad.com/assets/' +
            project.images[0].directus_files_id + 'key=large';

        image.onload = () => {
            isImageLoaded.value = true;
        };
    } else {
        isImageLoaded.value = true;
    }
});
</script>
<style>
.project {
    margin-top: 65px;

    &__slideshow {
        transition: all 0.5s var(--curve);
        height: calc(100vh - 167px);

        @apply max-w-7xl;

        @media (min-width: theme('screens.lg')) {
            /* max-height: 800px; */
        }

        .swiper {
            /* padding-bottom: 50px; */
        }

        .swiper-pagination {
            /* bottom: -25px; */
            font-size: 14px;
            line-height: 14px;
            letter-spacing: 0.2em;
        }
    }

    &__projects-nav {
        bottom: 200px;

        a {
            font-size: 10px;
            @apply uppercase tracking-wide;
        }
    }

    &__header {
        @apply max-w-7xl mb-4 mt-12;

        h1 {
            font-size: 38px;
            line-height: 1em;
        }

        /* &-nav {
      bottom: -35px;
      height: 12px;
      @media (min-width: theme('screens.lg')) {
        bottom: -12px;
      }
      a {
        height: 10px;
        font-size: 9px;
        line-height: 10px;
        .nuxt-icon {
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
      }
    } */
        &-category {
            height: 10px;
            font-size: 9px;
            line-height: 10px;
            margin-top: 5px;
            @apply font-bold;
            /* @media (min-width: theme('screens.lg')) {
        margin-bottom: -10px;
      } */
        }
    }

    &__content {
        @apply max-w-7xl;

        h1 {
            font-size: 38px;
            line-height: 1em;
            @apply uppercase;
        }

        p {
            font-size: 14px;
        }
    }
}
</style>