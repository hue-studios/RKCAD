export default defineNuxtRouteMiddleware((to, from) => {
  const getDepth = (path) => {
    console.log(path)
    return path.split('/').filter((seg) => seg.length > 0).length
  }
  console.log(to.query.direction)

  const toDepth = getDepth(to.path)
  const fromDepth = getDepth(from.path)

  if (to.query.direction === 'next') {
    console.log('next')
    // to.meta.pageTransition = { name: 'page-left' }
    // from.meta.pageTransition = { name: 'page-left' }
    to.meta.pageTransition = { name: 'fade' }
    from.meta.pageTransition = { name: 'fade' }
  } else if (to.query.direction === 'prev') {
    console.log('prev')
    // to.meta.pageTransition = { name: 'page-right' }
    // from.meta.pageTransition = { name: 'page-right' }
    to.meta.pageTransition = { name: 'fade' }
    from.meta.pageTransition = { name: 'fade' }
  } else if (toDepth > fromDepth) {
    // to.meta.pageTransition = { name: 'page-up' }
    // from.meta.pageTransition = { name: 'page-up' }
    to.meta.pageTransition = { name: 'fade' }
    from.meta.pageTransition = { name: 'fade' }
  } else {
    to.meta.pageTransition = { name: 'fade' }
    from.meta.pageTransition = { name: 'fade' }
  }
})
