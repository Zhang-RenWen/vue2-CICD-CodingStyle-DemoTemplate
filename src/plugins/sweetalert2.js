import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueSweetalert2, {
  focusCancel: false,
  confirmButtonColor: '#006600',
  cancelButtonColor: '#9C1003',
  confirmButtonText: '確定',
  cancelButtonText: '取消'
})
