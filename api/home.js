import http from "@/utils/request.js"
export default {
	// 获取首页数据
	getHomeList(data) {
		return http.request({
			url: '/index',
			method: 'GET',
			data
		})
	}
}
