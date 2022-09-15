import Vue from 'vue'

import { router } from '@/router'
import store from '@/store'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import '@/plugins/axios'
import '@/plugins/sweetalert2'
import 'babel-polyfill'
import '@/library/globalRegister'
import '@/components/globalRegister'
import '@/directives/index'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
