import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
let TOKEN = "token"
let INFO = "info"
let PHONE = 'phone'
const store = new Vuex.Store({
	state: {
		token: uni.getStorageSync(TOKEN) || '',
		info: uni.getStorageSync(INFO) || {},
		userInfo: uni.getStorageSync(INFO) || {},
		phone: uni.getStorageSync(PHONE) || null
	},
	getters: {
		getToken(state) {
			return !!state.token
		},

	},
	mutations: {
		setToken(state, obj) {
			state.userInfo = obj
			console.log(state.userInfo);
			uni.setStorageSync(INFO, obj)
			uni.setStorageSync(TOKEN, obj.token)
		},
		setPhone(state, phone) {
			state.phone = phone
			uni.setStorageSync(PHONE, phone)
			uni.setStorageSync(INFO, state.userInfo)
		}
	},
	actions: {},
	modules: {},
})
export default store
