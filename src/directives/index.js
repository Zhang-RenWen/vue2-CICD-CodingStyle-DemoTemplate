import Vue from 'vue'
import StickyDirective from './sticky'
import getElements from './highlight.js'
Vue.directive('sticky', StickyDirective)
Vue.directive('highlightjs', getElements)
