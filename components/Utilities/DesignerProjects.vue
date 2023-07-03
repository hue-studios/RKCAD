<template>
    <div class="w-full mt-12 lg:mt-0 lg:w-1/2 lg:ml-2 relative featured-projects">
        <p class="uppercase absolute z-50 -top-[20px] left-0">Some of {{ getFirst(name) }}'s
            favorite projects</p>
        <div class="w-full flex items-start justify-start flex-row gap-2 snap-x snap-mandatory overflow-x-auto">
            <nuxt-link v-for="(project, index) in projects" :key="index"
                class="inline-block relative snap-start scroll-mx-6 shrink-0 shadow featured-projects__project"
                :to="'/interior-design-architecture-portfolio/' + project.project.url">
                <img :src="imageUrl + project.image + '?key=small'" alt="RKC Team"
                    class="h-full w-auto featured-projects__project-image" />
                <h2 v-if="project.project.title" class="w-full featured-projects__project-title">{{
                    removeFirst(project.project.title) }}</h2>
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
import { getFirst, removeFirst } from '~~/utils/strings'
const props = defineProps({
    name: {
        type: String,
        default: '',
    },

    projects: {
        type: Array,
        default: [],
    },
})
const imageUrl = 'https://admin.rkcad.com/assets/'

</script>
<style>
.featured-projects {

    p {
        font-size: 10px;
        @apply uppercase tracking-wider font-bold;
    }


    &__project {
        @apply overflow-hidden;

        &-image {
            transition: all 0.5s var(--curve);
        }

        &-title {
            bottom: 20px;
            left: 0px;
            padding-left: 20px;
            padding-right: 20px;
            color: var(--white);
            line-height: 16px;
            font-size: 14px;
            font-weight: 900 !important;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s var(--curve);
            @apply w-full z-10 absolute uppercase tracking-wider font-body;
        }
    }
}

.featured-projects__project:hover>.featured-projects__project-title {
    opacity: 1;
    transform: translateY(0px);
}

.featured-projects__project:hover>.featured-projects__project-image {
    transform: scale(1.1);
    background-color: rgba(167, 169, 172, 1.0);
}</style>