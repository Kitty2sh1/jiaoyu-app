import http from '@/utils/request.js'
export default {
	// 注册账号api
	registerAccount(data) {
		return http.request({
			url: '/reg',
			method: 'POST',
			data,
			header: {
				token: null
			}
		})
	},
	// 登录api
	getLogin(data) {
		return http.request({
			url: '/login',
			method: 'POST',
			data,
			header: {
				token: null
			}
		})
	},
	// 获取验证码api
	getCaptcha(data) {
		return http.request({
			url: '/get_captcha',
			method: 'POST',
			data
		})
	},
	// 绑定手机号api
	getPhone(data) {
		return http.request({
			url: '/bind_mobile',
			method: 'POST',
			data
		})
	}
}
