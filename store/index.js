import Vue from "vue"
import Vuex from "vuex"
import loginApi from "@/api/login.js"
Vue.use(Vuex)
let TOKEN = "token"
let INFO = "info"
let PHONE = 'phone'
const store = new Vuex.Store({
	state: {
		token: uni.getStorageSync(TOKEN) || '',
		info: uni.getStorageSync(INFO) || {},
		userInfo: uni.getStorageSync(INFO) || {},
		phone: uni.getStorageSync(PHONE) || null,
		couponList: []
	},
	getters: {
		getToken(state) {
			return !!state.token
		},

	},
	mutations: {
		// 存token  info
		setToken(state, obj) {
			state.userInfo = obj
			console.log(state.userInfo);
			uni.setStorageSync(INFO, obj)
			uni.setStorageSync(TOKEN, obj.token)
		},
		// 存手机号
		setPhone(state, phone) {
			state.phone = phone
			uni.setStorageSync(PHONE, phone)
			uni.setStorageSync(INFO, state.userInfo)
		},
		// 清除本地存储
		// removeAll(state){
		// 	// uni.removeStorageSync(INFO,TOKEN,PHONE)
		// 	uni.clearStorageSync()
		// }
		// 刷新页面
		init(state) {
			state.token = uni.getStorageSync(TOKEN) || ''
		}
	},
	actions: {
		// 退出登录api
		async handleLoginOut() {
			try {
				const res = await loginApi.getLoginOut()
				if (res.data.code != 20000) {
					uni.showToast({
						title: res.data.data,
						icon: "none",
						duration: 1000
					})
				} else {
					uni.showToast({
						title: '退出登录成功',
						icon: "none",
						duration: 2000
					})
					uni.clearStorageSync()
					return true
				}
			} catch (e) {
				//TODO handle the exception
			}
		},
	},
	modules: {},
})
export default store
