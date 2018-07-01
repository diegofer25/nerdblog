export default {
  namespaced: true,
  state: () => import('./state'),
  mutations: () => import('./mutations'),
  getters: () => import('./getters'),
  actions: () => import('./actions')
}
