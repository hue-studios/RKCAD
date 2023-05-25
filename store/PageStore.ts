export const usePageStore = defineStore('PageStore', {
  state: () => ({
    page: 'test',
  }),
  actions: {
    addClass(route) {
      console.log(route)
      this.page = route
    },
  },
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot))
}
