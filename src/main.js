import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'

import vueEsign from 'vue-esign'
Vue.use(vueEsign)

Vue.config.productionTip = false
Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
