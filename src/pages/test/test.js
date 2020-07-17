import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Test from './test.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	devtools: true,
	state: {
		count: 20,
	},
	mutations: {
		increment(state) {
			state.count++
		},
	},
})

new Vue({
	render: (h) => h(Test),
	store,
}).$mount('#app')
