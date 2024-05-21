export const usePageStore = defineStore('PageStore', {
	state: () => ({
		page: 'test',
		internal: false,
	}),
	actions: {
		addClass(route: any) {
			this.page = route
		},
		setInternal(bool: any) {
			this.internal = bool
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
