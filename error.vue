<template>
	<div
		:class="pageStore.page"
		class="min-h-screen w-full transition duration-150 overflow-hidden bg-white flex items-center justify-start flex-col relative error"
	>
		<LayoutRkc id="rkc-bg-icon" class="rkc-bg-icon" />
		<input id="nav-drawer-toggle" type="checkbox" class="hidden" />
		<div class="w-full flex items-center justify-center flex-col min-h-screen page__content">
			<LayoutHeader />
			<div class="w-full mx-auto min-h-screen flex items-center justify-center flex-col relative px-6 max-w-3xl">
				<h2 class="uppercase tracking-wide font-bold mb-12">Oops...looks like there was an error.</h2>

				<p v-if="error.statusCode === 404" class="uppercase font-bold">
					Error code: {{ error.statusCode }}
					<br />
					<br />
					Page not found
				</p>
				<p v-else class="uppercase font-bold">Error code: {{ error.statusCode }}</p>

				<nuxt-link to="/" class="uppercase font-bold tracking-wide mt-12">
					<span class="underline">Click here</span>
					to return to the home page.
				</nuxt-link>
			</div>
			<LayoutFooter />
		</div>

		<LayoutNavDrawer />
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	middleware: ['page'],
})

import { usePageStore } from '~~/store/PageStore'
import { useError } from '#app'

const error = useError()
const pageStore = usePageStore()
</script>

<style>
.error {
	/* background: rgba(123, 145, 163, 0.65); */
	h2,
	a {
		font-size: 10px;
	}
}
</style>
