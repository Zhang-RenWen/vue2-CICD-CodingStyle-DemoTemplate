import Vue from 'vue'

import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import moment from 'moment'
import { mock } from 'mockjs'
Vue.prototype.moment = moment
Vue.prototype.mock = mock
Vue.use(VueLodash, { name: 'custom', lodash })
