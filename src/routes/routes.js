const routes = [
  {
    path: '/home',
    component: () => import('./../components/templates/Home')
  },
  {
    path: '/poster',
    component: () => import('./../components/templates/Poster')
  }
]

export default {
  routes: routes
}
