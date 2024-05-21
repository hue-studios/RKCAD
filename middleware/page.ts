import { usePageStore } from '~~/store/PageStore'

export default defineNuxtRouteMiddleware((to, from) => {
	const getDepth = (path: string) => {
		return path.split('/').filter((seg) => seg.length > 0).length
	}

	const routeName = ref('')

	const routeMapping = {
		index: 'page-home',
		'architecture-design-press-awards': 'page-press',
		'architecture-design-press-awards-url': 'page-press-detail',
		'interior-design-architecture-portfolio': 'page-work',
		'interior-design-architecture-portfolio-url': 'page-work-detail',
		'new-york-architecture-design-studio': 'page-about',
		'rosen-kelly-conway-architecture-design-team': 'page-team',
		contact: 'page-contact overflow-hidden h-screen',
	}

	routeName.value = routeMapping[to.name] || (to.name ? to.name : 'page-error h-screen')

	const pageStore = usePageStore()
	pageStore.addClass(routeName.value)

	const toDepth = getDepth(to.path)
	const fromDepth = getDepth(from.path)

	const transitionName = to.query.direction ? 'fade' : toDepth > fromDepth ? 'fade' : 'fade'

	to.meta.pageTransition = { name: transitionName }
	from.meta.pageTransition = { name: transitionName }
})
