import Vue from 'vue'
import input from '@/components/inputs/input.vue'
import icon from '@/components/svg/svg.vue'
import vueResizable from 'vue-resizable'
import vueHotkey from 'v-hotkey'

Vue.use(vueHotkey)
Vue.component('Icon', icon)
Vue.component('Input', input)
Vue.component('VueResizable', vueResizable)
