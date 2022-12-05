import store from "@/store/index.js"
class http {
	static appid = 'bd9d01ecc75dbbaaefce'
	static baseUrl = 'http://demonuxtapi.dishait.cn/mobile'
	static request(options = {}) {
		console.log(options);
		return new Promise((resolve, reject) => {
			uni.request({
				url: http.baseUrl + options.url,
				data: options.data || {},
				header: {
					appid: http.appid,
					token: store.state.token,
					...options.header
				},
				method: options.method || 'GET',
				success: (res) => {
					console.log(res);
					resolve(res)
				},
				fail: (err) => {
					console.log(err);
					reject(err)
				}
			})
		})
	}
}

export default http
