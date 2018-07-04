import Router from './routes'

Router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/home')
  } else if (to.matched.some(record => record.meta.requiresAuth)) {
    if (JSON.parse(localStorage.getItem('user'))) {
      next()
    } else if (to.path === '/-1') {
      next('/')
    } else {
      next('/error')
    }
  } else if ((to.path === '/poster' || to.path === '/poster/') && JSON.parse(localStorage.getItem('user'))) {
    next('/poster/admin')
  } else if (to.path === '/-1') {
    next('/')
  } else {
    next()
  }
})

export default Router
