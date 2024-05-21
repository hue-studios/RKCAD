<script setup>
definePageMeta({
	middleware: ['page'],
})

const { readItem } = useDirectusItems()

const team = await readItem('team', 1, {
	fields: [
		'header_image,title,people.sort,people.name,people.title,people.bio,people.image,people.education,people.status,people.email,people.quote,positions.title,positions.status,positions.description',
	],
})

useSeoMeta({
	title: 'Team | Rosen Kelly Conway Architecture & Design Firm | Summit NJ',
	ogTitle: 'Team | Rosen Kelly Conway Architecture & Design Firm | Summit NJ',
	description:
		'At RKC we seek to work with the most talented, visionary designers from different generations, backgrounds, and points of views. This creates a dynamic, yet relaxed forward-thinking culture.',
	ogDescription:
		'At RKC we seek to work with the most talented, visionary designers from different generations, backgrounds, and points of views. This creates a dynamic, yet relaxed forward-thinking culture.',
	ogImage: 'https://admin.rkcad.com/assets/' + team.header_image + 'key=xlarge',
})

const isImageLoaded = ref(false)

onMounted(() => {
	const image = new Image()

	image.src = 'https://admin.rkcad.com/assets/' + team.header_image + '?key=xlarge'

	image.onload = () => {
		isImageLoaded.value = true
	}
})

const formattedTitle = computed(() => {
	return team.title.replace(/\n/g, '<br>')
})

const positions = computed(() => {
	return team.positions.filter((item) => {
		return item.status === 'published'
	})
})

function showApplication() {
	const element = document.getElementById('application-toggle')
	element.checked = true
}
</script>
<template>
	<div
		v-if="isImageLoaded"
		class="relative w-full min-h-screen flex flex-wrap flex-col justify-center items-center team"
	>
		<div
			class="bg-center bg-cover page__header"
			:style="'background-image: url(https://admin.rkcad.com/assets/' + team.header_image + '?key=xlarge)'"
		>
			<LayoutRkc id="rkc-bg-icon-2" class="rkc-bg-icon" />
			<h1 class="w-full uppercase white tracking-wider" v-html="formattedTitle"></h1>
		</div>
		<div class="z-10 flex flex-wrap flex-row lg:flex-wrap items-center justify-evenly w-full page__body relative">
			<div class="w-full mt-20 uppercase page__body-header">
				<h2 class="page__body-header-subtitle">Culture</h2>
				<h3 class="page__body-header-title">
					Meet
					<br />
					the Team
				</h3>
			</div>
			<div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-9">
				<CardsTeamCard v-for="(person, index) in team.people" :key="index" :person="person" class="" />
			</div>
			<div class="w-full flex items-start justify-center flex-col lg:flex-row flex-wrap mt-20 employment">
				<div class="w-full uppercase page__body-header">
					<h2 class="page__body-header-subtitle">Opportunity</h2>
					<h3 class="page__body-header-title">
						Join
						<br />
						the Team
					</h3>
				</div>
				<div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-9">
					<div v-for="(position, index) in positions" :key="index" class="w-full flex flex-col items-end py-6 lg:pb-12">
						<h4 class="uppercase w-full">{{ position.title }}</h4>
						<p v-if="position.description" class="w-full" v-html="position.description"></p>
						<p v-else class="w-full">Description coming soon.</p>
						<LayoutLinkBtn class="cursor-pointer" @click.prevent="showApplication()">Apply</LayoutLinkBtn>
					</div>
				</div>
			</div>
		</div>
	</div>
	<LayoutLoader v-else />
</template>

<style scoped>
.team {
	&-detail {
		position: fixed;
		right: 0px;
		height: 100vh;
	}
}

.employment {
	h4 {
		font-size: 16px;
		@apply tracking-wider mb-8;
	}

	p {
		@apply mb-8;
	}
}
</style>
