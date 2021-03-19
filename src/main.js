import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import Toast from './tools/Toast'
Vue.prototype.$api = api
Vue.prototype.$toast = Toast;

// Vue.use(function (el) {el.protype.$api = api});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
