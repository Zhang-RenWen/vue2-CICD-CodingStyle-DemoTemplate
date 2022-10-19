import Vue from 'vue'

import { router } from '@/router'
import store from '@/store'
import App from '@/App.vue'
import '@/plugins/axios'
import '@/plugins/sweetalert2'
import 'babel-polyfill'
import '@/library/globalRegister'
import '@/components/globalRegister'
import '@/directives/index'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
