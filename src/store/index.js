import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user: () => import('./user'),
    post: () => import('./post')
  }
})

export default store
