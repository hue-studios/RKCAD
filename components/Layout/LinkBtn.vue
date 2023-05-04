<template>
    <nuxt-link :to="link" class="uppercase rkc-link">
        <slot></slot> <nuxt-icon name="arrow-right" class="ml-1 arrow-right-icon" />
    </nuxt-link>
</template>

<script setup>
const props = defineProps({
    link: {
        type: String,
        default: '/',
    },
})

</script>
<style>
.rkc-link {
    font-size: 0.75rem;
    line-height: 1rem;
    margin-top: 10px;
    @apply inline-block tracking-wider font-bold;
    .nuxt-icon {
        height: 12px;
        fill: black;
        transition: 0.4s var(--curve);
        svg {
            margin-top: -2px;
            height: 12px;
            display: inline-block !important;
            path {
                stroke-width: 10px;
                stroke: var(--blue) !important;
            }
        }
    }
}
.rkc-link:hover  {
    .nuxt-icon {
        margin-left: 10px;
    }
}
</style>