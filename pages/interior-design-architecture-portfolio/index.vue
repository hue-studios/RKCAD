<script setup>
definePageMeta({
	middleware: ['page'],
})

const { readItem, readItems } = useDirectusItems()

const work = await readItem('work', 1, {
	fields: ['header_image,title'],
})

const projectsReq = await readItems('projects', {
	filter: {
		status: {
			_eq: 'published',
		},
	},
	fields: [
		'status,title,category,style,location,images.directus_files_id.id,images.directus_files_id.title,images.directus_files_id.tags,images.directus_files_id.width,images.directus_files_id.height,url',
	],
})
console.log(projectsReq)
useHead({
	titleTemplate: 'Architecture & Interior Design Portfolio | Rosen Kelly Conway of Summit NJ',
	meta: [
		{
			hid: 'description',
			name: 'description',
			content: 'Rosen Kelly Conway Architecture & Design Portfolio: Embracing design heritage with a modern vision.',
		},
		{
			hid: 'og:url',
			property: 'og:url',
			content: 'https://rkcad.com/interior-design-archtecture-portfolio',
		},
		{
			hid: 'og:image',
			property: 'og:image',
			content: 'https://admin.rkcad.com/assets/' + work.header_image + '?key=xlarge',
		},
		{
			hid: 'og:title',
			property: 'og:title',
			content: 'Architecture & Interior Design Portfolio | Rosen Kelly Conway of Summit NJ',
		},
		{
			hid: 'og:description',
			property: 'og:description',
			content: 'Rosen Kelly Conway Architecture & Design Portfolio: Embracing design heritage with a modern vision.',
		},
	],
})

const isImageLoaded = ref(false)

onMounted(() => {
	const image = new Image()

	image.src = 'https://admin.rkcad.com/assets/' + work.header_image + '?key=xlarge'

	image.onload = () => {
		isImageLoaded.value = true
	}
})

const formattedTitle = computed(() => {
	return work.title.replace(/\n/g, '<br>')
})

const projects = [...projectsReq]

const architecture = computed(() => {
	return projects.filter((item) => {
		return item.category.find((el) => el === 'Architecture') && item.status === 'published'
	})
})

const interior = computed(() => {
	return projects.filter((item) => {
		return item.category.find((el) => el === 'Interior Design') && item.status === 'published'
	})
})

const commercial = computed(() => {
	return projects.filter((item) => {
		return item.category.find((el) => el === 'Commercial') && item.status === 'published'
	})
})
</script>
<template>
	<div
		v-if="isImageLoaded"
		class="relative w-full min-h-screen flex flex-wrap flex-col justify-center items-center work"
	>
		<div
			class="page__header"
			:style="'background-image: url(https://admin.rkcad.com/assets/' + work.header_image + ')'"
		>
			<LayoutRkc id="rkc-bg-icon-2" class="rkc-bg-icon" />
			<h1 class="w-full uppercase white tracking-wider" v-html="formattedTitle"></h1>
		</div>
		<div class="flex flex-wrap flex-row items-center justify-center w-full page__body">
			<div class="w-full uppercase mt-20 page__body-header">
				<h3 class="mb-10 page__body-header-title">
					Architecture
					<br />
					Design
				</h3>
			</div>
			<div class="w-full">
				<UtilitiesSlideshowGridNav :slides="architecture" class="One" />
			</div>
			<div v-if="interior.length" class="w-full uppercase mt-20 page__body-header">
				<h3 class="mb-10 page__body-header-title">
					Interior
					<br />
					Design
				</h3>
			</div>
			<div v-if="interior.length" class="w-full">
				<UtilitiesSlideshowGridNav :slides="interior" class="Two" />
			</div>
			<div v-if="commercial.length" class="w-full uppercase mt-20 page__body-header">
				<h3 class="mb-10 page__body-header-title">
					Commercial / Institutional
					<br />
					Design
				</h3>
			</div>
			<div v-if="commercial.length" class="w-full">
				<UtilitiesSlideshowGridNav :slides="commercial" class="Three" />
			</div>
		</div>
	</div>
	<LayoutLoader v-else />
</template>

<style scoped></style>
