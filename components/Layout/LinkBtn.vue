<template>
	<nuxt-link v-if="link" :to="link" class="uppercase rkc-link">
		<slot></slot>
		<Icon name="ArrowRight" class="ml-1 arrow-right-icon" />
	</nuxt-link>
	<a v-else href="#" class="uppercase rkc-link">
		<slot></slot>
		<Icon name="ArrowRight" class="ml-1 arrow-right-icon" />
	</a>
</template>

<script setup>
const props = defineProps({
	link: {
		type: String,
		default: null,
	},
})
</script>
<style>
.rkc-link {
	font-size: 0.75rem;
	line-height: 1rem;
	font-weight: 900;
	@apply inline-block tracking-wider;

	.icon {
		height: 12px;
		fill: black;
		transition: 0.4s var(--curve);
		display: inline-block !important;
		margin-top: -2px;
		transform: translateX(0px);

		path {
			stroke-width: 10px;
			stroke: var(--blue) !important;
		}
	}
}

.rkc-link:hover {
	.icon {
		transform: translateX(10px);
	}
}
</style>
