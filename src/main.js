import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router: () => import('./routes'),
  store: () => import('./store'),
  render: h => h(App)
}).$mount('#app')
