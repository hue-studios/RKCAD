<script setup>
const props = defineProps({
	sort: {
		type: [String, Number],
		default: '',
	},
})

const { data: nextProject, pending } = await useLazyFetch(
	`https://admin.rkcad.com/items/projects?filter[sort][_gt]=${props.sort}&filter[status][_eq]=published&fields=title,url,sort,id&meta=*`,
)
</script>
<template>
	<nuxt-link
		v-if="!pending && nextProject.data.length"
		class="next-project-btn"
		:to="nextProject.data[0].url + '?direction=next'"
	>
		Next Project
		<Icon name="ArrowRight" class="ml-2 arrow-right-icon" />
	</nuxt-link>
	<a v-else class="opacity-40 next-project-btn" href="#" @click.prevent>
		Next Project
		<Icon name="ArrowRight" class="ml-2 arrow-right-icon" />
	</a>
</template>

<style>
.next-project-btn,
.prev-project-btn {
	.icon {
		height: 12px;
		fill: black;
		transition: 0.4s var(--curve);
		display: inline-block !important;
		transform: translateX(0px);
		margin-top: -2px;
		height: 12px;
		display: inline-block !important;

		path {
			stroke-width: 10px;
			stroke: var(--blue) !important;
		}
	}
}
</style>
