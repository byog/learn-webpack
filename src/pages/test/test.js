import Vue from 'vue'
import VueRouter from 'vue-router'

import Test from './test.vue'

Vue.use(VueRouter)
new Vue({
	render: (h) => h(Test),
}).$mount('#app')
