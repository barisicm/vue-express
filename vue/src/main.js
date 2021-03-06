import Vue from 'vue'
import BoostrapVue from "bootstrap-vue"
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './components/App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import CenteredLoader from './components/global/CenteredLoader'

import './assets/style.scss'

Vue.config.productionTip = false

Vue.use(BoostrapVue);
Vue.use(VueAxios, axios);
Vue.component('centered-loader', CenteredLoader);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')