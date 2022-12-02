import http from '@/utils/request.js'
export default {
	registerAccount(data) {
		return http.request({
			url: '/reg',
			method: 'POST',
			data,
			header: {
				token: null
			}
		})
	}
}
