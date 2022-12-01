import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
let TOKEN = "token"
let INFO = "info"
const store = new Vuex.Store({
	state: {
		token: uni.getStorageSync(TOKEN) || '',
		info: uni.getStorageSync(INFO) || {}
	},
	getters: {
		getToken(state) {
			return !!state.token
		}
	},
	mutations: {},
	actions: {},
	modules: {},
})
export default store
